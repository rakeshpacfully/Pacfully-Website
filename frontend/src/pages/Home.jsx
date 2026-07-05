import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight, Box, PackageOpen, Tag, Sticker, Printer, Gift, Layers, Palette, Award, Workflow, Zap, Sprout, Sparkles, Cog, Pen, Truck, Sparkle, Gem, Cookie, Candy, Shirt, Package, Cpu, ShoppingBag, SprayCan, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { INDUSTRIES, SERVICES, WHY, STATS, SHOWCASE, PROCESS, TESTIMONIALS, FAQS } from "@/lib/data";
import { FadeIn, SectionLabel } from "@/components/Shared";

const ICONS = { Box, PackageOpen, Tag, Sticker, Printer, Gift, Layers, Palette, Award, Workflow, Zap, Sprout, Sparkles, Cog, Pen, Truck, Sparkle, Gem, Cookie, Candy, Shirt, Package, Cpu, ShoppingBag, SprayCan, Smartphone };

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-brand/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[180px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Premium packaging & print</SectionLabel>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter mt-5 leading-[0.9]"
            >
              Packaging that<br /><span className="text-gradient-orange">elevates</span> your brand.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-lg text-white/65 max-w-xl leading-relaxed">
              Premium custom packaging, rigid boxes, printing, labels and branding solutions crafted for modern businesses — designed in-house, engineered for shelf impact.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4">
              <Link to="/get-quote" data-testid="hero-get-quote" className="group inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition shadow-[0_10px_40px_rgba(244,90,42,0.4)]">
                Get Quote <ArrowUpRight className="w-4 h-4 transition group-hover:rotate-45" />
              </Link>
              <Link to="/products" data-testid="hero-explore-products" className="inline-flex items-center gap-2 border border-white/15 text-white rounded-full px-7 py-4 text-sm hover:bg-white/5 transition backdrop-blur-sm">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {STATS.map((s, i) => (
                <FadeIn key={s.label} delay={0.1 * i}>
                  <div>
                    <p className="font-display text-3xl md:text-4xl font-medium text-brand">{s.value}{s.suffix}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] lg:h-[640px]">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[78%] h-[60%] rounded-3xl overflow-hidden neo-card animate-float">
              <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200" alt="rigid box" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-3xl overflow-hidden neo-card animate-float-rev">
              <img src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=900" alt="cosmetic box" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ y: y1 }} className="absolute bottom-16 right-6 w-32 h-32 rounded-2xl bg-brand text-white flex flex-col items-center justify-center text-center p-3 glow-orange-strong">
              <Sparkles className="w-6 h-6 mb-1" />
              <p className="text-[10px] uppercase tracking-widest font-medium">Luxury<br/>Finishes</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES MARQUEE */}
      <section className="py-16 md:py-20 overflow-hidden" data-testid="industries-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <SectionLabel>Trusted across industries</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-3 max-w-2xl leading-[1.05]">
              Packaging engineered for every category.
            </h2>
          </div>
          <p className="text-sm text-white/45 max-w-xs">From luxury cosmetics and fragrance flacons to mobile devices and festive hampers — we build for every shelf.</p>
        </div>

        <div className="relative" data-testid="industries-marquee">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => {
              const Icon = ICONS[ind.icon] || Box;
              return (
                <div
                  key={i}
                  data-testid={`industry-card-${i}`}
                  className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-2xl neo-card hover:border-brand/40 transition group"
                >
                  <Icon className="w-5 h-5 text-brand/70 group-hover:text-brand transition" />
                  <span className="font-display text-xl md:text-2xl tracking-tight text-white/85 group-hover:text-white transition">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES CARDS GRID */}
      <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5" data-testid="industries-grid-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Industries we serve</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">
                Ten categories.<br />One packaging house.
              </h2>
            </div>
            <Link to="/industries" className="link-underline text-sm text-white/70 inline-flex items-center gap-2 self-start" data-testid="industries-grid-view-all">
              Explore all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind.icon] || Box;
              return (
                <FadeIn key={ind.name} delay={(i % 5) * 0.05}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    data-testid={`home-industry-card-${ind.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative rounded-3xl overflow-hidden neo-card h-[280px] md:h-[320px] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_60px_rgba(244,90,42,0.45)] group-hover:border-brand/40">
                      <img
                        src={ind.img}
                        alt={ind.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition duration-[900ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-brand/50 via-brand/10 to-transparent mix-blend-overlay" />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-1">Explore</p>
                          <h3 className="font-display text-xl md:text-2xl font-medium leading-tight text-white">{ind.name}</h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:rotate-45 transition" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32" data-testid="services-preview-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What we craft</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Eight signature services. One uncompromising standard.</h2>
            </div>
            <Link to="/services" className="link-underline text-sm text-white/70 inline-flex items-center gap-2 self-start">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] || Box;
              return (
                <FadeIn key={s.slug} delay={i * 0.05}>
                  <Link to={`/services#service-${s.slug}`} data-testid={`service-card-${s.slug}`} className="group block h-full">
                    <div className="relative h-full neo-card rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_0_40px_rgba(244,90,42,0.15)]">
                      <div className="w-12 h-12 rounded-2xl bg-brand/15 border border-brand/30 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition">
                        <Icon className="w-5 h-5 text-brand group-hover:text-white" />
                      </div>
                      <h3 className="font-display text-xl font-medium mb-2 leading-tight">{s.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                      <ArrowUpRight className="w-5 h-5 mt-6 text-white/40 group-hover:text-brand transition" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY BENTO */}
      <section className="py-24 md:py-32 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Why Pacfully</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">Engineering the experience<br/>your brand deserves.</h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => {
              const Icon = ICONS[w.icon] || Award;
              const big = i === 0 || i === 5;
              return (
                <FadeIn key={w.title} delay={i * 0.04} className={big ? "md:col-span-2 lg:col-span-2" : ""}>
                  <div className="h-full neo-card rounded-3xl p-7 group transition-all duration-500 hover:border-brand/30">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-ink-900 border border-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <span className="text-xs text-white/30 font-mono">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">{w.title}</h3>
                    <p className="text-sm text-white/55 mt-3 leading-relaxed">{w.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SHOWCASE MASONRY */}
      <section className="py-24 md:py-32" data-testid="showcase-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Recent work</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Crafted for shelves. Built for unboxing.</h2>
            </div>
            <Link to="/products" className="link-underline text-sm text-white/70 inline-flex items-center gap-2 self-start">
              Full catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">
            {SHOWCASE.map((p, i) => {
              const hClass = p.h === "tall" ? "h-[420px]" : p.h === "med" ? "h-[320px]" : "h-[240px]";
              return (
                <FadeIn key={i} delay={i * 0.04}>
                  <div className="relative group overflow-hidden rounded-3xl break-inside-avoid bg-ink-800">
                    <img src={p.img} alt={p.title} className={`w-full ${hClass} object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-brand">{p.category}</p>
                      <h3 className="font-display text-xl md:text-2xl mt-1 font-medium">{p.title}</h3>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>How we work</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">From idea to dispatch<br/>in four moves.</h2>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            {PROCESS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-ink-900 border border-brand/40 flex items-center justify-center font-display text-2xl text-brand mb-6 relative z-10">
                    {s.n}
                  </div>
                  <h3 className="font-display text-2xl font-medium">{s.t}</h3>
                  <p className="text-sm text-white/55 mt-3 leading-relaxed">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Brands we craft for</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">Repeat orders are<br/>the only review that matters.</h2>
          </FadeIn>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div className="h-full neo-card rounded-3xl p-8 md:p-10">
                  <p className="font-display text-xl md:text-2xl leading-relaxed text-white/85">"{t.quote}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center font-display text-brand">{t.name[0]}</div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-white/50">{t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 leading-[1.05]">Questions, answered.</h2>
          </FadeIn>

          <Accordion type="single" collapsible className="mt-12" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger data-testid={`faq-trigger-${i}`} className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-brand py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/65 text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative neo-card rounded-[2.5rem] p-10 md:p-20 overflow-hidden">
            <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-brand/20 blur-[120px]" />
            <FadeIn>
              <SectionLabel>Ready when you are</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mt-5 max-w-3xl leading-[0.95]">
                Ready to build<br />premium packaging?
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/get-quote" data-testid="cta-request-quote" className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition">
                  Request Quote <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" data-testid="cta-talk-expert" className="inline-flex items-center gap-2 border border-white/15 rounded-full px-7 py-4 text-sm hover:bg-white/5 transition">
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
