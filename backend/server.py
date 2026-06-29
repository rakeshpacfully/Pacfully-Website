from fastapi import FastAPI, APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from bson import ObjectId
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import io

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
fs_bucket = AsyncIOMotorGridFSBucket(db, bucket_name="artworks")

app = FastAPI(title="Pacfully API")
api_router = APIRouter(prefix="/api")


# ----- Models -----
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    company: Optional[str] = ""
    subject: Optional[str] = ""
    message: str


class ContactRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    company: str = ""
    subject: str = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class QuoteRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    company: str = ""
    product_type: str
    quantity: str
    size: str = ""
    material: str = ""
    printing_type: str = ""
    finishing: str = ""
    timeline: str = ""
    notes: str = ""
    artwork_file_id: Optional[str] = None
    artwork_filename: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class NewsletterRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class NewsletterCreate(BaseModel):
    email: EmailStr


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Pacfully API", "status": "ok"}


@api_router.post("/contact")
async def create_contact(payload: ContactCreate):
    record = ContactRecord(**payload.model_dump())
    await db.contacts.insert_one(record.model_dump())
    return {"success": True, "id": record.id, "message": "Thank you. Our team will contact you within 24 hours."}


@api_router.get("/contacts", response_model=List[ContactRecord])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.post("/quote")
async def create_quote(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    company: str = Form(""),
    product_type: str = Form(...),
    quantity: str = Form(...),
    size: str = Form(""),
    material: str = Form(""),
    printing_type: str = Form(""),
    finishing: str = Form(""),
    timeline: str = Form(""),
    notes: str = Form(""),
    artwork: Optional[UploadFile] = File(None),
):
    artwork_file_id = None
    artwork_filename = None
    if artwork is not None and artwork.filename:
        content = await artwork.read()
        if len(content) > 25 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="File too large (max 25MB)")
        grid_in = fs_bucket.open_upload_stream(
            artwork.filename,
            metadata={"content_type": artwork.content_type or "application/octet-stream"},
        )
        await grid_in.write(content)
        await grid_in.close()
        artwork_file_id = str(grid_in._id)
        artwork_filename = artwork.filename

    record = QuoteRecord(
        name=name, email=email, phone=phone, company=company,
        product_type=product_type, quantity=quantity, size=size, material=material,
        printing_type=printing_type, finishing=finishing, timeline=timeline, notes=notes,
        artwork_file_id=artwork_file_id, artwork_filename=artwork_filename,
    )
    await db.quotes.insert_one(record.model_dump())
    return {"success": True, "id": record.id, "message": "Quote request received. We'll respond within 24 hours."}


@api_router.get("/quotes", response_model=List[QuoteRecord])
async def list_quotes():
    docs = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.get("/artwork/{file_id}")
async def download_artwork(file_id: str):
    try:
        oid = ObjectId(file_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid file id")
    try:
        grid_out = await fs_bucket.open_download_stream(oid)
    except Exception:
        raise HTTPException(status_code=404, detail="File not found")
    data = await grid_out.read()
    return StreamingResponse(
        io.BytesIO(data),
        media_type=grid_out.metadata.get("content_type", "application/octet-stream") if grid_out.metadata else "application/octet-stream",
        headers={"Content-Disposition": f'attachment; filename="{grid_out.filename}"'},
    )


@api_router.post("/newsletter")
async def newsletter_subscribe(payload: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return {"success": True, "message": "You're already subscribed."}
    record = NewsletterRecord(email=payload.email)
    await db.newsletter.insert_one(record.model_dump())
    return {"success": True, "message": "Subscribed! Welcome to Pacfully."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
