import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { PLANT_CAPABILITIES } from "@/lib/data";

export default function PlantCapacity() {
  return (
    <div data-testid="plant-capacity-page">
      <PageHero
        eyebrow="Our plant"
        title="85,000 sq.ft of precision."
        sub="A climate-controlled facility in Chennai housing the print, finishing and assembly lines behind every Pacfully order."
        image="https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Capacity at a glance</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-3xl leading-[1.05]">In-house from press to pallet.</h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANT_CAPABILITIES.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.04}>
                <div className="neo-card rounded-3xl p-7 h-full">
                  <p className="font-display text-5xl md:text-6xl font-medium text-brand">{c.value}</p>
                  <h3 className="font-display text-lg font-medium mt-4">{c.title}</h3>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionLabel>Quality & compliance</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">Certified, audited, repeated.</h2>
            <p className="mt-6 text-white/65 leading-relaxed">
              Pacfully holds ISO 9001:2015 certification, follows GMP food-safety protocols for FMCG cartons, and sources from FSC-certified mills. Every job ships with a quality dossier — print densities, dieline tolerances and batch traceability.
            </p>
            <ul className="mt-8 space-y-3">
              {["ISO 9001:2015 Quality Management","GMP-compliant food packaging","FSC-certified board sourcing","Food-grade soy & vegetable inks","Multi-shift production capability"].map((p) => (
                <li key={p} className="text-sm text-white/80">— {p}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative h-[480px] rounded-3xl overflow-hidden neo-card">
              <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600" alt="press" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
