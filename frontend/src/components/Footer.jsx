import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { BRAND, NAV } from "@/lib/data";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await axios.post(`${API}/newsletter`, { email });
      toast.success(res.data.message || "Subscribed!");
      setEmail("");
    } catch (err) {
      toast.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="relative bg-ink-900 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-10">
        {/* Top CTA */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Let's talk</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mt-4 leading-[0.95]">
            Build packaging<br />
            <span className="text-brand">your customers brag about.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/get-quote" data-testid="footer-cta-quote" className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" data-testid="footer-cta-contact" className="inline-flex items-center gap-2 border border-white/15 rounded-full px-7 py-4 text-sm hover:bg-white/5 transition">
              Talk to Expert
            </Link>
          </div>
        </div>

        <div className="divider-line mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <img src={BRAND.logo} alt="Pacfully" className="h-10 mb-6" />
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Premium custom packaging, rigid boxes, printing and branding solutions for modern brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { i: Instagram, url: BRAND.socials.instagram, k: "ig" },
                { i: Linkedin, url: BRAND.socials.linkedin, k: "li" },
                { i: Facebook, url: BRAND.socials.facebook, k: "fb" },
                { i: Youtube, url: BRAND.socials.youtube, k: "yt" },
              ].map(({ i: Icon, url, k }) => (
                <a key={k} href={url} target="_blank" rel="noreferrer" data-testid={`footer-social-${k}`} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand hover:text-brand transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">Explore</p>
            <ul className="space-y-2">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.path}><Link to={n.path} className="text-sm text-white/70 hover:text-brand transition">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">Company</p>
            <ul className="space-y-2">
              {NAV.slice(5).map((n) => (
                <li key={n.path}><Link to={n.path} className="text-sm text-white/70 hover:text-brand transition">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">Newsletter</p>
            <form onSubmit={subscribe} data-testid="footer-newsletter-form" className="flex items-stretch bg-ink-800 border border-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                data-testid="footer-newsletter-input"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-white/30"
              />
              <button data-testid="footer-newsletter-submit" disabled={loading} className="bg-brand px-5 hover:bg-brand-600 transition flex items-center justify-center disabled:opacity-50">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand shrink-0" /><span>{BRAND.address}</span></div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand" />{BRAND.phones.join(" / ")}</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand" />{BRAND.email}</div>
            </div>
          </div>
        </div>

        <div className="divider-line my-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pacfully. All rights reserved.</p>
          <p>Crafted with precision in Chennai, India.</p>
        </div>
      </div>
    </footer>
  );
}
