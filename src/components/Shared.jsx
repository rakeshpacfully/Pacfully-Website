import { motion } from "framer-motion";

export function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.35em] text-brand">{children}</p>
  );
}

export function FadeIn({ children, delay = 0, y = 30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, sub, image }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/70 to-ink-900" />
        </div>
      )}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[140px] -z-10" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn>
          <SectionLabel>{eyebrow}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter mt-5 max-w-5xl leading-[0.95]">
            {title}
          </h1>
        </FadeIn>
        {sub && (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">{sub}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
