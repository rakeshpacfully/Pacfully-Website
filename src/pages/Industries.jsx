import { Link } from "react-router-dom";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { INDUSTRIES_DETAIL } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";

export default function Industries() {
  return (
    <div data-testid="industries-page">
      <PageHero
        eyebrow="Industries"
        title="Built around your category."
        sub="Vertical-specific knowledge from heritage jewelry to ecommerce-scale logistics. We've shipped for them all."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-20">
          {INDUSTRIES_DETAIL.map((ind, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={ind.name}>
                <div className={`grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7 relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden neo-card group">
                    <img src={ind.img} alt={ind.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                  </div>
                  <div className="lg:col-span-5">
                    <SectionLabel>0{i + 1} · Industry</SectionLabel>
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-4 leading-tight">{ind.name}</h2>
                    <p className="mt-5 text-white/65 leading-relaxed">{ind.desc}</p>
                    <ul className="mt-8 space-y-2">
                      {ind.uses.map((u) => (
                        <li key={u} className="text-sm text-white/80 flex items-center gap-3"><Check className="w-4 h-4 text-brand" />{u}</li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link to="/get-quote" data-testid={`industry-quote-${i}`} className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-brand-600 transition shadow-[0_8px_24px_rgba(244,90,42,0.3)]">
                        Get vertical-specific quote <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link to={`/industries/${ind.slug}`} data-testid={`industry-explore-${ind.slug}`} className="inline-flex items-center gap-2 border border-white/15 rounded-full px-6 py-3 text-sm hover:bg-white/5 hover:border-brand/40 transition">
                        Explore Products <ArrowRight className="w-4 h-4" />
                      </Link>
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
