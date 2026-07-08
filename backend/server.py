from fastapi import FastAPI, APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import os
import logging
from pathlib import Path
import uuid
from datetime import datetime, timezone
import io
import base64
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

SUPABASE_URL = os.environ['SUPABASE_URL'].rstrip('/')
SUPABASE_KEY = os.environ['SUPABASE_ANON_KEY']
HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
}

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
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{SUPABASE_URL}/rest/v1/contacts",
            headers={**HEADERS, "Content-Type": "application/json", "Prefer": "return=representation"},
            json={
                "name": payload.name, "email": payload.email, "phone": payload.phone or "",
                "company": payload.company or "", "subject": payload.subject or "",
                "message": payload.message,
            },
        )
    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    data = resp.json()
    record_id = str(data[0]["id"]) if data else None
    return {"success": True, "id": record_id,
            "message": "Thank you. Our team will contact you within 24 hours."}


@api_router.get("/contacts", response_model=List[ContactRecord])
async def list_contacts():
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{SUPABASE_URL}/rest/v1/contacts?order=created_at.desc&limit=500",
            headers=HEADERS,
        )
    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    docs = resp.json()
    return [ContactRecord(**{**d, "id": str(d["id"]),
                            "created_at": d["created_at"]}) for d in docs]


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
    async with httpx.AsyncClient() as client:
        if artwork is not None and artwork.filename:
            content = await artwork.read()
            if len(content) > 25 * 1024 * 1024:
                raise HTTPException(status_code=413, detail="File too large (max 25MB)")
            b64 = base64.b64encode(content).decode("ascii")
            resp = await client.post(
                f"{SUPABASE_URL}/rest/v1/artwork_files",
                headers={**HEADERS, "Content-Type": "application/json", "Prefer": "return=representation"},
                json={
                    "filename": artwork.filename,
                    "content_type": artwork.content_type or "application/octet-stream",
                    "data": b64,
                },
            )
            if resp.status_code >= 400:
                raise HTTPException(status_code=resp.status_code, detail=resp.text)
            row = resp.json()
            artwork_file_id = str(row[0]["id"]) if row else None
            artwork_filename = artwork.filename

        resp = await client.post(
            f"{SUPABASE_URL}/rest/v1/quotes",
            headers={**HEADERS, "Content-Type": "application/json", "Prefer": "return=representation"},
            json={
                "name": name, "email": email, "phone": phone, "company": company,
                "product_type": product_type, "quantity": quantity, "size": size,
                "material": material, "printing_type": printing_type, "finishing": finishing,
                "timeline": timeline, "notes": notes,
                "artwork_file_id": artwork_file_id, "artwork_filename": artwork_filename,
            },
        )
    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    data = resp.json()
    record_id = str(data[0]["id"]) if data else None
    return {"success": True, "id": record_id,
            "message": "Quote request received. We'll respond within 24 hours."}


@api_router.get("/quotes", response_model=List[QuoteRecord])
async def list_quotes():
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{SUPABASE_URL}/rest/v1/quotes?order=created_at.desc&limit=500",
            headers=HEADERS,
        )
    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    docs = resp.json()
    return [QuoteRecord(**{**d, "id": str(d["id"]),
                           "artwork_file_id": str(d["artwork_file_id"]) if d.get("artwork_file_id") else None,
                           "created_at": d["created_at"]}) for d in docs]


@api_router.get("/artwork/{file_id}")
async def download_artwork(file_id: str):
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{SUPABASE_URL}/rest/v1/artwork_files?id=eq.{file_id}&select=filename,content_type,data",
            headers=HEADERS,
        )
    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    rows = resp.json()
    if not rows:
        raise HTTPException(status_code=404, detail="File not found")
    row = rows[0]
    data = base64.b64decode(row["data"])
    return StreamingResponse(
        io.BytesIO(data),
        media_type=row["content_type"],
        headers={"Content-Disposition": f'attachment; filename="{row["filename"]}"'},
    )


@api_router.post("/newsletter")
async def newsletter_subscribe(payload: NewsletterCreate):
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{SUPABASE_URL}/rest/v1/newsletter?email=eq.{payload.email}&select=id",
            headers=HEADERS,
        )
        if resp.status_code >= 400:
            raise HTTPException(status_code=resp.status_code, detail=resp.text)
        if resp.json():
            return {"success": True, "message": "You're already subscribed."}
        resp = await client.post(
            f"{SUPABASE_URL}/rest/v1/newsletter",
            headers={**HEADERS, "Content-Type": "application/json"},
            json={"email": payload.email},
        )
        if resp.status_code >= 400:
            raise HTTPException(status_code=resp.status_code, detail=resp.text)
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
