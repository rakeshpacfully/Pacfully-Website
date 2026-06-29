import { Link } from "react-router-dom";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { FINISHES, MATERIALS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CustomPackaging() {
  return (
    <div data-testid="custom-packaging-page">
      <PageHero
        eyebrow="Custom Packaging"
        title="Engineered around your brand."
        sub="Every Pacfully project is bespoke. Choose your material, structure, finish and brand cues — we build the rest."
        image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=2000"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Premium finishes</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">Eight signature finishes.<br/>Endless combinations.</h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FINISHES.map((f, i) => (
              <FadeIn key={f.name} delay={i * 0.04}>
                <div className="group neo-card rounded-3xl overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium">{f.name}</h3>
                    <p className="text-sm text-white/55 mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Material swatches</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Touch matters. Choose your stock.</h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {MATERIALS.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.04}>
                <div className="neo-card rounded-3xl p-6 group hover:border-brand/30 transition-all">
                  <div className="w-full aspect-square rounded-2xl mb-4 ring-1 ring-white/10 grain relative overflow-hidden" style={{ background: m.swatch }} />
                  <h3 className="font-display text-base font-medium">{m.name}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <SectionLabel>Customization journey</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">Five inputs.<br/>One signature box.</h2>
              <ol className="mt-10 space-y-5">
                {["Choose structure (rigid, carton, mailer, label)", "Select material & gsm", "Pick print process & colours", "Add finishes (foil, emboss, spot UV)", "Approve sample → ship to scale"].map((s, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center font-display text-brand text-sm shrink-0">{i + 1}</span>
                    <p className="text-white/80 text-base leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
              <Link to="/get-quote" data-testid="custom-cta-quote" className="mt-10 inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition">
                Start your custom build <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative h-[560px] rounded-3xl overflow-hidden neo-card">
                <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1600" alt="custom packaging" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
