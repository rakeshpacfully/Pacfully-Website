import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { STATS } from "@/lib/data";
import { Eye, Target, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  const pillars = [
    { i: Eye, t: "Vision", d: "To be India's most trusted premium packaging house — where every box becomes a brand statement." },
    { i: Target, t: "Mission", d: "Deliver world-class packaging with industrial precision, design intelligence and uncompromising material honesty." },
    { i: Heart, t: "Why we exist", d: "Because most brands settle for packaging that arrives. We craft packaging that's remembered." },
    { i: ShieldCheck, t: "Commitment", d: "ISO 9001 quality, FSC-certified materials, food-grade inks and on-time delivery as our default." },
  ];

  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="About Pacfully"
        title="Quiet craft. Loud results."
        sub="A premium packaging house engineered for modern brands — from D2C launches to global retail. We turn structural ideas into shelf-ready experiences."
        image="https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionLabel>The Pacfully story</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">Packaging is the<br/>last 30 seconds of marketing.</h2>
            <p className="mt-6 text-white/65 leading-relaxed">
              We started Pacfully because brands deserved a partner who treated packaging as design, not procurement. Today we engineer rigid boxes, cartons, labels and shipping solutions for 850+ ambitious brands across India and abroad — from heritage jewelry houses to fast-growing D2C startups.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              Our 85,000 sq.ft. facility in Chennai houses German offset presses, Bobst die-cutting lines and a craft team that has been folding luxury boxes for over a decade. Every job — whether 100 units or 1 million — moves through the same quality protocol.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative h-[480px] rounded-3xl overflow-hidden neo-card">
              <img src="https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="factory" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>What guides us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">Four pillars. Zero compromise.</h2>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.t} delay={i * 0.06}>
                <div className="neo-card rounded-3xl p-8 md:p-10">
                  <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center">
                    <p.i className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mt-6">{p.t}</h3>
                  <p className="text-white/60 mt-3 leading-relaxed">{p.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel>By the numbers</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-4 max-w-2xl leading-[1.05]">A decade of measurable craft.</h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.05}>
                <div className="neo-card rounded-3xl p-8">
                  <p className="font-display text-5xl md:text-6xl font-medium text-brand">{s.value}{s.suffix}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40 mt-3">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
