// Static data for Pacfully website

export const BRAND = {
  name: "Pacfully",
  logo: "https://customer-assets.emergentagent.com/job_a9a319fe-e081-4040-9d40-183dd5119e74/artifacts/66ckgxy9_Pacfully%20%20Name%20lOGO.pdf%20%283%29%281%29%20New.png",
  phones: ["+91 88381 94157", "+91 89255 15393"],
  email: "hello@pacfully.com",
  address:
    "PACFULLY PRODUCTION UNIT 2, #327, Mettukuppam Rd, Anna Industrial Estate, Odamanagar, Vanagaram, Near Captain TV Office, Chennai-600095",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Custom", path: "/custom-packaging" },
  { label: "Industries", path: "/industries" },
  { label: "Plant", path: "/plant-capacity" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const INDUSTRIES = [
  { name: "Cosmetics", icon: "Sparkles", img: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=1200" },
  { name: "Jewelry", icon: "Gem", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200" },
  { name: "Food & Sweets", icon: "Cookie", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200" },
  { name: "Chocolate", icon: "Candy", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200" },
  { name: "Apparel", icon: "Shirt", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200" },
  { name: "Ecommerce", icon: "Package", img: "https://images.unsplash.com/photo-1575176647987-4c1a2e598950?w=1200" },
  { name: "Electronics", icon: "Cpu", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200" },
  { name: "Corporate Gifting", icon: "Gift", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200" },
];

export const SERVICES = [
  { slug: "rigid-box", title: "Rigid Box Packaging", icon: "Box", desc: "Premium magnetic, drawer, lift-off, and bespoke rigid boxes engineered for luxury unboxing.", img: "https://images.pexels.com/photos/4271698/pexels-photo-4271698.jpeg" },
  { slug: "corrugated", title: "Corrugated Boxes", icon: "PackageOpen", desc: "Durable shipping and mailer cartons in single, double and triple wall constructions.", img: "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?w=1400" },
  { slug: "labels", title: "Product Labels", icon: "Tag", desc: "Pressure-sensitive, shrink-sleeve, foil and security labels with variable data printing.", img: "https://images.unsplash.com/photo-1605718317361-f9326fd262ca?w=1400" },
  { slug: "stickers", title: "Sticker Printing", icon: "Sticker", desc: "Vinyl, transparent, holographic, kiss-cut and die-cut stickers in any shape or size.", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1400" },
  { slug: "offset", title: "Offset Printing", icon: "Printer", desc: "High-volume 5-color UV and conventional offset printing with razor-sharp registration.", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400" },
  { slug: "luxury-gift", title: "Luxury Gift Boxes", icon: "Gift", desc: "Bespoke gifting boxes with foiling, embossing, ribbon pulls and velvet inserts.", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1400" },
  { slug: "monocartons", title: "Mono Cartons", icon: "Layers", desc: "Tuck-end, auto-lock, and seal-end folding cartons for FMCG and retail.", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400" },
  { slug: "design", title: "Packaging Design", icon: "Palette", desc: "Structural & graphic design, dielines, mockups, and material consultancy.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400" },
];

export const WHY = [
  { title: "Premium Quality Finish", icon: "Award", desc: "ISO-grade material sourcing, micron-level dieline accuracy and human QC at every stage." },
  { title: "End-to-End Solutions", icon: "Workflow", desc: "From concept to delivery — design, structural engineering, printing, finishing & dispatch." },
  { title: "Fast Production", icon: "Zap", desc: "On-site multi-shift operations deliver typical orders within 10–15 working days." },
  { title: "Low MOQ", icon: "Sprout", desc: "Pilot runs from 100 units. Scale to millions without changing vendors." },
  { title: "Luxury Finishing", icon: "Sparkles", desc: "Hot foil, soft-touch, spot UV, embossing, debossing and bespoke laminations." },
  { title: "Industrial Precision", icon: "Cog", desc: "German-engineered offset, die-cutting and gluing lines for unmatched repeatability." },
  { title: "Custom Branding", icon: "Pen", desc: "In-house design studio for dieline development and shelf-ready mockups." },
  { title: "Reliable Delivery", icon: "Truck", desc: "Pan-India logistics and bonded warehouse access for export orders." },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years of Craft" },
  { value: 850, suffix: "+", label: "Brands Served" },
  { value: 45, suffix: "M+", label: "Units / Year" },
  { value: 99, suffix: "%", label: "On-time Delivery" },
];

export const SHOWCASE = [
  { title: "Magnetic Rigid Box", category: "Luxury Boxes", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900", h: "tall" },
  { title: "Cosmetic Sleeve Carton", category: "Cosmetic Packaging", img: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=900", h: "short" },
  { title: "Ecommerce Mailer", category: "Ecommerce", img: "https://images.unsplash.com/photo-1575176647987-4c1a2e598950?w=900", h: "med" },
  { title: "Drawer Gift Box", category: "Gift Boxes", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=900", h: "med" },
  { title: "Apparel Box", category: "Apparel Packaging", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900", h: "tall" },
  { title: "Food Carton", category: "Food Packaging", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900", h: "short" },
  { title: "Jewelry Case", category: "Luxury Boxes", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900", h: "med" },
  { title: "Chocolate Sleeve", category: "Food Packaging", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=900", h: "tall" },
];

export const PROCESS = [
  { n: "01", t: "Requirement Discussion", d: "We listen, audit your brand and recommend material, finish and structural style." },
  { n: "02", t: "Design & Sampling", d: "Our in-house team builds dielines, 3D mockups, and a physical sample for sign-off." },
  { n: "03", t: "Production", d: "Offset/digital printing, foiling, lamination, die-cutting, gluing — all under one roof." },
  { n: "04", t: "Delivery", d: "Packed, palletised and shipped pan-India with tracked logistics and QC reports." },
];

export const TESTIMONIALS = [
  { name: "Aarav Sharma", company: "Bloom & Co. Cosmetics", quote: "Pacfully transformed our unboxing — the magnetic rigid box feels Apple-grade. Repeat orders since day one." },
  { name: "Priya Iyer", company: "Auric Jewels", quote: "The foil-embossed gift boxes lifted our shelf appeal instantly. Production was on time, every time." },
  { name: "Rohit Menon", company: "Crave Chocolates", quote: "From dieline to delivery in 14 days. Honest pricing and craftsmanship you can feel." },
  { name: "Tanya Kapoor", company: "Verda Apparel", quote: "Their structural design team caught issues our agency missed. Saved us a full reprint." },
];

export const FAQS = [
  { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ starts at 100 units for rigid boxes and 500 units for monocartons. Labels and stickers start from 250 pieces." },
  { q: "What's the typical delivery timeline?", a: "Standard orders ship in 10–15 working days post sample approval. Rush production is possible based on capacity." },
  { q: "Can I customise material, size and finish?", a: "Yes — everything is bespoke. We offer 30+ board options, 15+ laminations and unlimited print colours including Pantone matching." },
  { q: "What printing finishes do you offer?", a: "Hot foil (gold/silver/holographic), embossing, debossing, spot UV, soft-touch, matte, gloss, soft-touch + spot UV combos and more." },
  { q: "Do you provide design support?", a: "Yes — our in-house studio handles dieline creation, structural engineering, 3D mockups and print-ready artwork at no charge for confirmed orders." },
  { q: "Do you handle bulk and recurring orders?", a: "Absolutely. We service brands shipping 1M+ units annually with dedicated account managers and bonded inventory." },
];

export const PRODUCT_CATEGORIES = [
  {
    slug: "rigid-boxes",
    name: "Rigid Boxes",
    short: "Luxury structural boxes",
    hero: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1600",
    items: [
      "Magnetic Closure Rigid Boxes","Lift-off Lid Rigid Boxes","Drawer / Slide Rigid Boxes",
      "Shoulder Neck Rigid Boxes","Book Style Rigid Boxes","Hinged Lid Rigid Boxes",
      "Collapsible Rigid Boxes","Matchbox Style Rigid Boxes","Telescope Rigid Boxes",
      "Clamshell Rigid Boxes","Slipcase Rigid Boxes","Tray & Sleeve Rigid Boxes",
      "One Piece Rigid Boxes","Custom Shape Rigid Boxes","Custom Printed Rigid Boxes",
    ],
  },
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    short: "Shipping & mailer cartons",
    hero: "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?w=1600",
    items: [
      "Regular Slotted Cartons (RSC)","Half Slotted Containers (HSC)","Full Overlap Slotted (FOL)",
      "Die-Cut Corrugated Boxes","Folder Type Boxes","Five Panel Folder Boxes",
      "Telescope Corrugated Boxes","Mailer Boxes","Self-Locking Boxes",
      "Roll End Tuck Top (RETT)","Roll End Lock Front (RELF)","Corrugated Trays",
      "Partition Boxes","Custom Corrugated Boxes",
    ],
  },
  {
    slug: "fmcg-monocartons",
    name: "FMCG Monocartons",
    short: "Folding cartons for retail",
    hero: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600",
    items: [
      "Straight Tuck End (STE)","Reverse Tuck End (RTE)","Auto Lock Bottom","Crash Lock Bottom",
      "Seal End Cartons","Snap Lock Bottom","Tuck Top Auto Bottom","Sleeve Cartons",
      "Four Corner Cartons","Six Corner Cartons","Window Cartons","Display Cartons",
      "Hang Tab Cartons","Pillow Boxes","Gable Boxes","Double Wall Tray Boxes",
      "Folding Cartons","Custom Monocartons",
    ],
  },
  {
    slug: "labels",
    name: "Labels",
    short: "Adhesive & specialty labels",
    hero: "https://images.unsplash.com/photo-1605718317361-f9326fd262ca?w=1600",
    items: [
      "Pressure Sensitive Labels","Self Adhesive Labels","Roll Form Labels","Sheet Labels",
      "Wrap Around Labels","Shrink Sleeve Labels","In-Mould Labels (IML)","Tamper Evident",
      "Security Labels","Barcode Labels","QR Code Labels","Variable Data Labels",
      "Foil Labels","Transparent Labels","Waterproof Labels","Custom Printed Labels",
    ],
  },
  {
    slug: "stickers",
    name: "Stickers",
    short: "Decals & branding stickers",
    hero: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1600",
    items: [
      "Die Cut Stickers","Kiss Cut Stickers","Vinyl Stickers","Paper Stickers",
      "Transparent Stickers","Hologram Stickers","Foil Stickers","Domed Stickers",
      "Window Stickers","Roll Stickers","Sheet Stickers","Transfer Stickers",
      "Static Cling Stickers","Custom Printed Stickers",
    ],
  },
  {
    slug: "paper-bags",
    name: "Paper Bags",
    short: "Retail & luxury carriers",
    hero: "https://images.unsplash.com/photo-1591455661123-8de4587b4b9d?w=1600",
    items: [
      "Flat Paper Bags","SOS Paper Bags","Twisted Handle Bags","Rope Handle Bags",
      "Ribbon Handle Bags","Die Cut Handle Bags","D-Cut Paper Bags","V-Bottom Bags",
      "Square Bottom Bags","Luxury Paper Bags","Laminated Paper Bags","Kraft Paper Bags",
      "Art Paper Bags","Custom Printed Bags",
    ],
  },
  {
    slug: "ecommerce-packaging",
    name: "Ecommerce Packaging",
    short: "Shipping-ready solutions",
    hero: "https://images.unsplash.com/photo-1575176647987-4c1a2e598950?w=1600",
    items: [
      "Corrugated Mailer Boxes","Roll End Mailer Boxes","Book Wrap Mailers","Shipping Cartons",
      "Postal Boxes","Self Locking Mailers","Return Mailer Boxes","Subscription Boxes",
      "Corrugated Wrap Packs","Protective Inserts","Honeycomb Paper Packaging",
      "Paper Mailer Bags","Custom Ecommerce Packaging",
    ],
  },
  {
    slug: "luxury-gift-boxes",
    name: "Luxury Gift Boxes",
    short: "Premium gifting structures",
    hero: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600",
    items: [
      "Magnetic Gift Boxes","Drawer Gift Boxes","Book Style Gift Boxes","Lift-off Lid Gift Boxes",
      "Shoulder Neck Gift Boxes","Foldable Gift Boxes","Hinged Lid Gift Boxes","Hamper Gift Boxes",
      "Tray & Sleeve Gift Boxes","Custom Shape Gift Boxes","Premium Gift Box Sets","Custom Luxury Gift Boxes",
    ],
  },
];

// Image library for subcategory cards (rotating)
export const SUB_IMAGES = [
  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
  "https://images.unsplash.com/photo-1605718317361-f9326fd262ca?w=800",
  "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=800",
  "https://images.unsplash.com/photo-1575176647987-4c1a2e598950?w=800",
  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
  "https://images.unsplash.com/photo-1591455661123-8de4587b4b9d?w=800",
];

export const FINISHES = [
  { name: "Hot Foil Stamping", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900", desc: "Metallic gold, silver, copper and holographic foils for premium accents." },
  { name: "Embossing", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900", desc: "Raised relief for logos and patterns — tactile luxury." },
  { name: "Debossing", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900", desc: "Recessed impressions for a refined, minimal aesthetic." },
  { name: "Spot UV", img: "https://images.unsplash.com/photo-1605718317361-f9326fd262ca?w=900", desc: "High-gloss varnish over matte for dramatic contrast." },
  { name: "Soft-Touch Matte", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900", desc: "Velvet-like finish that elevates every fingerprint." },
  { name: "High Gloss", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=900", desc: "Mirror-grade lamination for vibrant colour pop." },
  { name: "Magnetic Closure", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=900", desc: "Concealed neodymium magnets — silent, satisfying close." },
  { name: "Ribbon Pulls", img: "https://images.unsplash.com/photo-1591455661123-8de4587b4b9d?w=900", desc: "Satin or grosgrain pulls for drawer-style unboxing." },
];

export const MATERIALS = [
  { name: "Greyboard 1200gsm", swatch: "#5a5a5a" },
  { name: "Art Card 350gsm", swatch: "#f5f1ea" },
  { name: "Kraft Brown", swatch: "#9b6b3e" },
  { name: "Black Specialty", swatch: "#0d0d0d" },
  { name: "Pearl White", swatch: "#f0ece2" },
  { name: "Metallic Silver", swatch: "#c7c7c7" },
  { name: "Linen Texture", swatch: "#d8cdb0" },
  { name: "Velvet Touch", swatch: "#1f1f1f" },
];

export const INDUSTRIES_DETAIL = [
  { name: "Cosmetics & Beauty", img: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=1600", uses: ["Skincare cartons","Perfume rigid boxes","Lipstick sleeves","Subscription kits"], desc: "Shelf-ready cartons and luxe rigid boxes engineered for cosmetic retail." },
  { name: "Jewelry", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600", uses: ["Magnetic ring boxes","Velvet insert trays","Drawer necklace cases","Brand sleeves"], desc: "Heirloom-grade boxes with felt and velvet inserts." },
  { name: "Food & Sweets", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600", uses: ["Mithai boxes","Bakery cartons","Hamper boxes","Window cartons"], desc: "Food-safe inks and barrier coatings for FSSAI compliance." },
  { name: "Chocolate", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1600", uses: ["Bar sleeves","Truffle rigid boxes","Pralines tray boxes","Gifting hampers"], desc: "Premium foiling, embossing and tray-sleeve constructions." },
  { name: "Electronics", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600", uses: ["Device rigid boxes","Accessory cartons","Protective inserts","Tech subscription"], desc: "Apple-grade tolerances with EVA and pulp inserts." },
  { name: "Ecommerce", img: "https://images.unsplash.com/photo-1575176647987-4c1a2e598950?w=1600", uses: ["Mailer boxes","Book wraps","Subscription boxes","Return packaging"], desc: "Tear-strip, double-glue and self-locking constructions for last-mile." },
  { name: "Fashion & Apparel", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1600", uses: ["Garment boxes","Shoe boxes","Tissue & ribbon","Carry bags"], desc: "Premium garment boxes with custom tissue and ribbon." },
  { name: "Corporate Gifting", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600", uses: ["Hamper boxes","Diwali sets","Welcome kits","Joining hampers"], desc: "End-to-end hamper design, sourcing and kitting." },
];

export const BLOG_POSTS = [
  {
    slug: "luxury-packaging-trends-2026",
    title: "Luxury Packaging Trends Shaping 2026",
    category: "Trends",
    excerpt: "From mono-material rigid boxes to AI-assisted dieline engineering — where premium packaging is heading next.",
    cover: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1600",
    date: "Dec 12, 2025",
    read: "8 min",
    body: `Luxury packaging in 2026 is no longer about excess — it's about restraint, material honesty and engineered elegance. We're seeing global brands move toward mono-material rigid boxes (eliminating mixed laminations to support circular recycling), micro-textured surfaces that whisper craft, and a new generation of tactile finishes that double as brand signatures.\n\nThe rise of "calm packaging" — boxes that feel meditative to open — is replacing the loud, foil-saturated era. Embossed monograms with no print, debossed serial numbers, and edge-gilding are taking over from gold-bar foiling.\n\nProduction is changing too. AI-assisted dieline engineering shortens prototyping cycles from 7 days to 4 hours. Brands now demand digital twins of their packaging for shelf-impact simulation. At Pacfully, we've built our 2026 roadmap around these three pillars: material honesty, tactile restraint, and digital pre-production.\n\nIf your 2026 packaging refresh is on the horizon, plan for: (1) tested mono-material structures, (2) at least one signature tactile finish, (3) reduced colour count for a calmer shelf, and (4) a digital sampling workflow that compresses approvals.`,
  },
  {
    slug: "rigid-vs-corrugated",
    title: "Rigid Box vs Corrugated Box — Which Should You Choose?",
    category: "Guides",
    excerpt: "A deep dive into structural, cost and brand-perception trade-offs between rigid and corrugated packaging.",
    cover: "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?w=1600",
    date: "Dec 04, 2025",
    read: "6 min",
    body: `Rigid boxes are engineered from 1000–1500 gsm greyboard wrapped in art paper, fabric or specialty stock. They communicate premium permanence — think iPhone box, fine jewelry, single-malt whisky. Corrugated boxes use fluted paper sandwiched between liner sheets, offering structural strength at a fraction of the weight and cost.\n\nChoose rigid when: unboxing is part of the brand story, your AOV exceeds ₹2,000, or shelf-presence matters. Choose corrugated when: shipping protection is primary, MOQs are above 5,000, or you need rapid turnarounds.\n\nA growing hybrid pattern: rigid boxes inside corrugated mailers for ecommerce luxury. This protects the brand experience while keeping logistics affordable. At Pacfully, we routinely deliver this dual-layer pattern at sub-15-day timelines.`,
  },
  {
    slug: "best-packaging-for-cosmetics",
    title: "Best Packaging Structures for Cosmetic Brands",
    category: "Industry",
    excerpt: "Cartons, sleeves and rigid boxes — matching structure to product type, MOQ and shelf strategy.",
    cover: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=1600",
    date: "Nov 28, 2025",
    read: "7 min",
    body: `Cosmetic packaging lives or dies on three axes: shelf appeal, structural integrity and unboxing emotion. For mass beauty (under ₹500 SKU), straight-tuck-end or reverse-tuck-end folding cartons in 300–350 gsm art card with soft-touch lamination strike the right balance.\n\nFor prestige beauty (₹1,500+), rigid lift-off-lid boxes or magnetic closures justify the AOV. Pair with embossed brand monogram, foil edge accents and EVA inserts that cradle the product. Subscription cosmetics benefit from drawer-style or book-style rigid boxes with branded interior printing.\n\nDon't overlook material safety — choose food-grade inks for lip and oral care, and ensure barrier coatings for anything containing oils or alcohol.`,
  },
  {
    slug: "packaging-finishing-guide",
    title: "The Complete Packaging Finishing Guide",
    category: "Guides",
    excerpt: "Hot foil, spot UV, embossing, soft-touch — when to use each finish and what they actually cost.",
    cover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600",
    date: "Nov 20, 2025",
    read: "9 min",
    body: `Finishes transform flat print into tactile experiences. Here's a working hierarchy.\n\n**Hot Foil** — Highest premium signal. Use sparingly for logos. Gold, silver, copper and holographic. Adds ~15-20% to per-unit cost.\n\n**Embossing/Debossing** — Tactile texture without ink. Pairs beautifully with foil (combo-emboss) or stands alone for minimalist luxury. ~10-15% premium.\n\n**Spot UV** — Glossy varnish over matte base. High contrast, photogenic, affordable (~5-8% premium).\n\n**Soft-Touch Matte** — Velvet-like surface. Modern tech aesthetic. ~8% premium.\n\n**Edge Painting/Gilding** — Coloured or foiled edges of the box wall. Niche but unforgettable. ~12% premium.\n\nMix no more than two premium finishes per box — restraint is the new luxury.`,
  },
  {
    slug: "sustainable-packaging",
    title: "Sustainable Packaging — Beyond Greenwashing",
    category: "Sustainability",
    excerpt: "Real measurable steps Indian brands can take to reduce packaging footprint without sacrificing appeal.",
    cover: "https://images.unsplash.com/photo-1591455661123-8de4587b4b9d?w=1600",
    date: "Nov 12, 2025",
    read: "10 min",
    body: `Sustainable packaging in India often stops at "we use kraft paper." Real impact requires deeper engineering.\n\n**Mono-material design** — Eliminate plastic windows, replace laminations with aqueous coatings, use water-based inks.\n\n**Right-sizing** — A 10% reduction in box dimensions can save 15% in board, ink and shipping volume. Our DFM engineers audit every dieline for waste.\n\n**FSC-certified board** — Forestry-stewardship-certified greyboard and kraft. Verifiable supply chain.\n\n**Soy/vegetable inks** — Lower VOCs and easier to deink during recycling.\n\nWe believe sustainability and luxury aren't opposed. Mono-material rigid boxes with vegetable-ink printing and aqueous lamination feel just as premium — sometimes more so, because honesty is the new luxury.`,
  },
  {
    slug: "packaging-builds-brand",
    title: "How Packaging Builds Brand Value",
    category: "Brand",
    excerpt: "Three case studies showing measurable lift in repeat-purchase, social shares and customer LTV from packaging upgrades.",
    cover: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600",
    date: "Nov 02, 2025",
    read: "7 min",
    body: `Packaging is the only marketing surface customers hold for minutes before reaching the product. A measurable case study: a D2C skincare brand we partnered with replaced their generic shipping carton with a custom mailer + branded tissue. Result: 38% lift in unboxing video shares and 22% increase in repeat-purchase rate within 90 days.\n\nA second example — a chocolate brand moved from a single-layer carton to a tray-and-sleeve rigid construction. Average gift-purchase value rose 41%.\n\nThe pattern is consistent: better packaging compresses the gap between product and experience. It justifies higher pricing, increases shareability, and turns first-time buyers into evangelists.`,
  },
];

export const PLANT_CAPABILITIES = [
  { title: "Printing Lines", value: "6", desc: "5-color offset with inline UV, 2 digital HP Indigo presses." },
  { title: "Die-cutting", value: "4", desc: "Bobst flatbed die-cutters with automatic stripping & blanking." },
  { title: "Gluing & Folding", value: "3", desc: "Crash-lock, straight-line and 6-corner specialty gluers." },
  { title: "Foiling", value: "2", desc: "Hot foil stamping presses up to 720x1020mm format." },
  { title: "Lamination", value: "2", desc: "BOPP, PET soft-touch and aqueous coating units." },
  { title: "Rigid Box Lines", value: "3", desc: "Semi-automatic rigid box wrap and case-making lines." },
  { title: "Annual Capacity", value: "45M+", desc: "Units per year across rigid, carton, label and corrugated." },
  { title: "Plant Area", value: "85K sq.ft", desc: "Climate-controlled, ISO 9001 & GMP compliant facility." },
];
