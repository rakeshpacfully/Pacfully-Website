import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  const cats = useMemo(() => ["All", ...new Set(BLOG_POSTS.map((p) => p.category))], []);
  const [active, setActive] = useState("All");
  const posts = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div data-testid="blog-page">
      <PageHero
        eyebrow="Journal"
        title="Stories from the press floor."
        sub="Industry trends, structural deep-dives, and behind-the-scenes of premium packaging — written by the team that prints it."
      />

      <section className="pb-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              data-testid={`blog-filter-${c.toLowerCase()}`}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm transition border ${
                active === c ? "bg-brand text-white border-brand" : "border-white/15 text-white/70 hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {featured && (
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <FadeIn>
              <Link to={`/blog/${featured.slug}`} data-testid={`blog-featured-${featured.slug}`} className="group grid lg:grid-cols-12 gap-8 neo-card rounded-3xl overflow-hidden">
                <div className="lg:col-span-7 relative h-[320px] lg:h-[460px]">
                  <img src={featured.cover} alt={featured.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand">{featured.category} · Featured</p>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-4 leading-tight">{featured.title}</h2>
                  <p className="text-white/60 mt-5 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-8 flex items-center justify-between text-xs text-white/40">
                    <span>{featured.date} · {featured.read}</span>
                    <ArrowUpRight className="w-5 h-5 text-brand transition group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <Link to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block h-full">
                <div className="neo-card rounded-3xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand">{p.category}</p>
                    <h3 className="font-display text-xl font-medium mt-3 leading-tight">{p.title}</h3>
                    <p className="text-sm text-white/55 mt-3 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                      <span>{p.date}</span>
                      <span>{p.read}</span>
                    </div>
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
