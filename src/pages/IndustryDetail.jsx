import { useParams, Link } from "react-router-dom";
import { INDUSTRIES_DETAIL, INDUSTRY_FINISHES, INDUSTRY_WHY, PRODUCT_CATEGORIES } from "@/lib/data";
import { FadeIn, SectionLabel } from "@/components/Shared";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Award, Workflow, Zap, Sprout, Cog } from "lucide-react";

const WHY_ICONS = [Award, Sparkles, Cog, Sprout, Zap, Workflow];

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = INDUSTRIES_DETAIL.find((x) => x.slug === slug);

  if (!ind) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="font-display text-4xl">Industry not found</h1>
        <Link to="/industries" className="text-brand mt-6 inline-block">Back to industries</Link>
      </div>
    );
  }

  const solutionCats = (ind.solutions || [])
    .map((s) => PRODUCT_CATEGORIES.find((c) => c.slug === s))
    .filter(Boolean);

  return (
    <div data-testid={`industry-detail-${ind.slug}`}>
      {/* 1. HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand/10 blur-[140px] -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-6">
            <Link to="/industries" className="text-xs uppercase tracking-[0.3em] text-brand inline-flex items-center gap-2 mb-6">
              ← All industries
            </Link>
            <SectionLabel>Industry · {ind.name}</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter mt-5 leading-[0.95]">{ind.name}</h1>
            <p className="mt-7 text-base md:text-lg text-white/70 leading-[1.85] max-w-xl">{ind.overview}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/get-quote" data-testid={`industry-hero-quote-${ind.slug}`} className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition shadow-[0_10px_40px_rgba(244,90,42,0.4)]">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/15 rounded-full px-7 py-4 text-sm hover:bg-white/5 transition">
                Talk to Expert
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-6">
            <div className="relative h-[460px] md:h-[560px] rounded-[2rem] overflow-hidden neo-card glow-orange">
              <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. PACKAGING SOLUTIONS */}
      {solutionCats.length > 0 && (
        <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <FadeIn>
              <SectionLabel>For {ind.name}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">Packaging Solutions</h2>
              <p className="mt-5 text-white/60 max-w-2xl leading-relaxed">Curated product categories proven for {ind.name.toLowerCase()} brands.</p>
            </FadeIn>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {solutionCats.map((c, i) => (
                <FadeIn key={c.slug} delay={i * 0.05}>
                  <Link to={`/products/${c.slug}`} data-testid={`industry-solution-${c.slug}`} className="group block h-full">
                    <div className="neo-card rounded-3xl overflow-hidden h-full flex flex-col">
                      <div className="relative h-52 overflow-hidden">
                        <img src={c.hero} alt={c.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-display text-xl font-medium leading-tight">{c.name}</h3>
                        <p className="text-sm text-white/55 mt-2 leading-relaxed flex-1">{c.short}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-brand text-sm group-hover:gap-3 transition-all">
                          View Details <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. POPULAR PACKAGING STYLES */}
      {ind.popularStyles?.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <FadeIn>
              <SectionLabel>Most ordered</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Popular Packaging Styles</h2>
            </FadeIn>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ind.popularStyles.map((g, i) => (
                <FadeIn key={g.group} delay={i * 0.05}>
                  <div className="neo-card rounded-3xl p-7 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand font-display text-sm">{String(i + 1).padStart(2, "0")}</div>
                      <h3 className="font-display text-xl font-medium">{g.group}</h3>
                    </div>
                    <ul className="space-y-3">
                      {g.items.map((it) => (
                        <li key={it} className="text-sm text-white/75 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand" />{it}</li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PREMIUM FINISHING OPTIONS */}
      <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Finishing</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Premium Finishing Options</h2>
            <p className="mt-5 text-white/60 max-w-2xl leading-relaxed">Mix and match finishes to define your brand's tactile signature.</p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRY_FINISHES.map((f, i) => (
              <FadeIn key={f.name} delay={(i % 5) * 0.04}>
                <div className="group neo-card rounded-2xl overflow-hidden h-full">
                  <div className="relative h-32 overflow-hidden">
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-medium leading-tight">{f.name}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY PACFULLY */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Why Pacfully</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">Engineered for {ind.name.toLowerCase()} brands.</h2>
          </FadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_WHY.map((w, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <FadeIn key={w.title} delay={i * 0.04}>
                  <div className="neo-card rounded-3xl p-7 h-full hover:border-brand/30 transition">
                    <div className="w-11 h-11 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="font-display text-xl font-medium">{w.title}</h3>
                    <p className="text-sm text-white/55 mt-3 leading-relaxed">{w.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. GALLERY */}
      {ind.gallery?.length > 0 && (
        <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <FadeIn>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Pacfully × {ind.name}.</h2>
            </FadeIn>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {ind.gallery.map((id, i) => {
                const tall = i === 1 || i === 4;
                return (
                  <FadeIn key={i} delay={(i % 6) * 0.04}>
                    <div className={`relative rounded-3xl overflow-hidden neo-card ${tall ? "row-span-2 h-[460px] md:h-[600px]" : "h-[220px] md:h-[290px]"} group`}>
                      <img src={`https://images.unsplash.com/photo-${id}?w=1000`} alt={`${ind.name} gallery ${i + 1}`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQ */}
      {ind.faqs?.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <FadeIn>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">Questions specific to {ind.name.toLowerCase()}.</h2>
            </FadeIn>

            <Accordion type="single" collapsible className="mt-12" data-testid={`industry-faq-${ind.slug}`}>
              {ind.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-brand py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-white/65 text-base leading-relaxed pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* 8. CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative neo-card rounded-[2.5rem] p-10 md:p-20 overflow-hidden">
            <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-brand/20 blur-[120px]" />
            <FadeIn>
              <SectionLabel>Ready when you are</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mt-5 max-w-3xl leading-[0.95]">
                Let's build premium packaging<br />for your {ind.name.toLowerCase()} brand.
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/get-quote" data-testid={`industry-cta-${ind.slug}`} className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition">
                  Get Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-white/15 rounded-full px-7 py-4 text-sm hover:bg-white/5 transition">
                  Talk to Expert
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
