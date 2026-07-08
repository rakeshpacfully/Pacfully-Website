import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { SERVICES } from "@/lib/data";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

const DETAILS = {
  "rigid-box": { materials: ["1200gsm greyboard", "Art paper wrap", "Specialty linen", "Velvet flock"], methods: ["Hand-wrap", "Auto wrap-around", "Magnetic insert"], finishes: ["Hot foil", "Embossing", "Spot UV", "Soft-touch"], apps: ["Luxury cosmetics", "Premium gifting", "Jewelry"] },
  "corrugated": { materials: ["3-ply kraft", "5-ply double wall", "7-ply heavy duty"], methods: ["Flexo printing", "Digital", "Offset-laminated"], finishes: ["Plain kraft", "Matte lam", "Spot UV"], apps: ["Ecommerce", "Industrial", "FMCG"] },
  "labels": { materials: ["Paper PSA", "Polypropylene", "PE shrink", "Foil"], methods: ["Rotary digital", "Flexo", "Hot foil + emboss"], finishes: ["Gloss UV", "Matte", "Tactile varnish"], apps: ["Beverages", "Pharma", "Personal care"] },
  "stickers": { materials: ["Vinyl", "Holographic film", "Clear PET", "Kraft paper"], methods: ["Digital UV", "Die-cut", "Kiss-cut roll"], finishes: ["Matte", "Holographic", "Domed"], apps: ["Branding", "Promo", "Product seals"] },
  "paper-bags": { materials: ["Kraft 120–180gsm", "Art paper 170gsm", "Recycled brown"], methods: ["Automatic SOS gluing", "Hand-finished luxury", "Die-cut handle"], finishes: ["Twisted/rope/ribbon handles", "Matte/gloss lam", "Foil + emboss"], apps: ["Retail carry", "Luxury gifting", "Apparel"] },
  "ecommerce": { materials: ["3-ply / 5-ply corrugated", "E-flute mailer board", "Honeycomb inserts"], methods: ["Die-cut mailer", "Roll-end self-locking", "Book wrap"], finishes: ["Inside print", "Tear strip", "Branded tape"], apps: ["D2C shipping", "Subscription", "Returns"] },
  "offset": { materials: ["Art card 200–400gsm", "SBS board", "FBB"], methods: ["5-color UV offset", "Hybrid digital-offset"], finishes: ["Full bleed", "Pantone match", "Edge bleed"], apps: ["Cartons", "Inserts", "Display"] },
  "luxury-gift": { materials: ["1500gsm board", "Velvet inserts", "Satin ribbon"], methods: ["Hand-finished", "Magnetic flap", "Drawer rail"], finishes: ["Foil + emboss combo", "Spot UV + matte", "Custom inserts"], apps: ["Festive hampers", "Corporate gifting", "Wedding"] },
  "monocartons": { materials: ["FBB 250–400gsm", "Recycled SBS"], methods: ["Crash-lock bottom", "Auto-lock", "Tuck-end"], finishes: ["Gloss BOPP", "Soft-touch", "Aqueous"], apps: ["FMCG", "Beauty", "Food"] },
  "design": { materials: ["Concept dielines", "3D mockups", "Material samples"], methods: ["Structural CAD", "Print-ready artwork"], finishes: ["Color guide", "Brand toolkit"], apps: ["Brand identity", "Launches", "Refresh"] },
};

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for layout/animations to mount, then scroll
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 400);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow="Services"
        title="Every surface. Every finish. One workshop."
        sub="Ten specialised production lines. One quality protocol. From dieline to dispatch — under our roof."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-24">
          {SERVICES.map((s, i) => {
            const d = DETAILS[s.slug] || {};
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={s.slug}>
                <div id={`service-${s.slug}`} className={`scroll-mt-28 grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-6 relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden neo-card group">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
                    <span className="absolute top-6 left-6 text-xs uppercase tracking-[0.3em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="lg:col-span-6">
                    <SectionLabel>Service {String(i + 1).padStart(2, "0")}</SectionLabel>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 leading-tight">{s.title}</h2>
                    <p className="mt-5 text-white/65 leading-relaxed">{s.desc}</p>

                    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                      {[
                        { l: "Materials", v: d.materials },
                        { l: "Methods", v: d.methods },
                        { l: "Finishes", v: d.finishes },
                        { l: "Applications", v: d.apps },
                      ].map((b) => (
                        <div key={b.l}>
                          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">{b.l}</p>
                          <ul className="space-y-1.5">
                            {(b.v || []).map((it) => (
                              <li key={it} className="text-sm text-white/75 flex items-start gap-2"><Check className="w-3.5 h-3.5 text-brand mt-1 shrink-0" />{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      <Link to="/get-quote" data-testid={`service-quote-${s.slug}`} className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-brand-600 transition">
                        Quote this service <ArrowRight className="w-4 h-4" />
                      </Link>
                      {s.productSlug && (
                        <Link
                          to={`/products/${s.productSlug}`}
                          data-testid={`service-explore-${s.slug}`}
                          className="inline-flex items-center gap-2 border border-white/15 rounded-full px-6 py-3 text-sm hover:bg-white/5 hover:border-brand/40 transition"
                        >
                          Explore More <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
