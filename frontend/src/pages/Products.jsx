import { Link } from "react-router-dom";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  return (
    <div data-testid="products-page">
      <PageHero
        eyebrow="Products & Portfolio"
        title="The complete Pacfully catalog."
        sub="Eight categories. 120+ structural variants. Every box built to spec, sampled before scale and shipped on time."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.05}>
              <Link to={`/products/${c.slug}`} data-testid={`product-category-${c.slug}`} className="group block h-full">
                <div className="relative h-[420px] rounded-3xl overflow-hidden neo-card">
                  <img src={c.hero} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-7">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">{c.short}</p>
                    <div className="flex items-end justify-between">
                      <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">{c.name}</h3>
                      <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-brand transition" />
                    </div>
                    <p className="text-xs text-white/40 mt-3">{c.items.length} structural variants</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
