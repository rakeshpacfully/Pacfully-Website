import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "@/lib/data";
import { FadeIn } from "@/components/Shared";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="font-display text-4xl">Article not found</h1>
        <Link to="/blog" className="text-brand mt-6 inline-block">Back to blog</Link>
      </div>
    );
  }

  return (
    <div data-testid="blog-post-page">
      <section className="pt-32 md:pt-40 pb-12">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <FadeIn>
            <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-brand inline-flex items-center gap-2"><ArrowLeft className="w-3 h-3" /> Back</Link>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-8">{post.category} · {post.date} · {post.read}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mt-5 leading-[1]">{post.title}</h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="relative h-[300px] md:h-[520px] rounded-3xl overflow-hidden neo-card">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[760px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="prose prose-invert max-w-none">
              {post.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-white/75 text-base md:text-lg leading-[1.8] mb-6">{para}</p>
              ))}
            </div>
            <div className="mt-16 pt-10 border-t border-white/10 flex items-center justify-between">
              <Link to="/blog" className="text-brand text-sm inline-flex items-center gap-2"><ArrowLeft className="w-3 h-3" /> All articles</Link>
              <Link to="/get-quote" className="bg-brand rounded-full px-6 py-3 text-sm hover:bg-brand-600 transition">Get a Quote</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
