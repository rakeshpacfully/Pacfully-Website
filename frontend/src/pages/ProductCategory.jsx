import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { PRODUCT_CATEGORIES, SUB_IMAGES } from "@/lib/data";
import { PageHero, FadeIn } from "@/components/Shared";
import { ArrowRight, Search } from "lucide-react";

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
      <PageHero eyebrow={cat.short} title={cat.name} sub={`Explore ${cat.items.length} structural variants — sampled in-house, ready to scale.`} image={cat.hero} />

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
                      Quote <ArrowRight className="w-3 h-3" />
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
