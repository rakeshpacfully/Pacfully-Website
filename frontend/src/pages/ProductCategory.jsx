import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, SUB_IMAGES } from "@/lib/data";
import { FadeIn, SectionLabel } from "@/components/Shared";
import { ArrowRight, Search, ArrowUpRight } from "lucide-react";

export default function ProductCategory() {
  const { slug } = useParams();
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    if (!cat) return [];
    if (!q) return cat.items;
    return cat.items.filter((it) => it.toLowerCase().includes(q.toLowerCase()));
  }, [cat, q]);

  if (!cat) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="font-display text-4xl">Category not found</h1>
        <Link to="/products" className="text-brand mt-6 inline-block">Back to products</Link>
      </div>
    );
  }

  return (
    <div data-testid="product-category-page">
      {/* INTRO — text left, collage right */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand/10 blur-[140px] -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-6">
            <Link to="/products" className="text-xs uppercase tracking-[0.3em] text-brand inline-flex items-center gap-2 mb-6">
              ← All categories
            </Link>
            <SectionLabel>{cat.short}</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter mt-5 leading-[0.95]">{cat.name}</h1>
            <p className="mt-7 text-base md:text-lg text-white/70 leading-[1.8] max-w-xl">
              {cat.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/get-quote" data-testid={`category-quote-${cat.slug}`} className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-brand-600 transition shadow-[0_8px_24px_rgba(244,90,42,0.3)]">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/15 rounded-full px-6 py-3 text-sm hover:bg-white/5 hover:border-brand/40 transition">
                Talk to Expert
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-6">
            <div className="relative h-[460px] md:h-[540px]">
              {(cat.introImages || [cat.hero]).slice(0, 4).map((src, i) => {
                const positions = [
                  "absolute top-0 left-[6%] w-[58%] h-[58%]",
                  "absolute top-[8%] right-0 w-[42%] h-[44%]",
                  "absolute bottom-0 left-0 w-[44%] h-[44%]",
                  "absolute bottom-[6%] right-[4%] w-[52%] h-[48%]",
                ];
                const floats = ["animate-float", "animate-float-rev", "animate-float-rev", "animate-float"];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                    className={`${positions[i]} rounded-3xl overflow-hidden neo-card ${floats[i]}`}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    <img src={src} alt={`${cat.name} variant ${i + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                );
              })}
              <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-brand text-white text-[10px] uppercase tracking-[0.25em] font-medium shadow-[0_8px_24px_rgba(244,90,42,0.45)]">
                {cat.items.length} variants
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              data-testid="category-search-input"
              placeholder="Search variants..."
              className="w-full bg-ink-800 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:border-brand transition"
            />
          </div>
          <p className="text-sm text-white/40">{items.length} of {cat.items.length}</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <FadeIn key={it} delay={(i % 8) * 0.04}>
              <div className="group neo-card rounded-2xl overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={SUB_IMAGES[i % SUB_IMAGES.length]} alt={it} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium leading-tight">{it}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">Material on request</span>
                    <Link to="/get-quote" data-testid={`quote-${slug}-${i}`} className="text-brand inline-flex items-center gap-1 text-xs hover:gap-2 transition-all">
                      Quote <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
