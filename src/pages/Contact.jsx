import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { BRAND } from "@/lib/data";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      toast.success(res.data.message || "Message sent!");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.detail || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow="Contact"
        title="Let's craft something premium."
        sub="Drop us a note. Our team responds within one business day with material recommendations and an indicative quote."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-5">
            <SectionLabel>Reach us</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-4 leading-tight">Multiple ways<br/>to start a conversation.</h2>

            <div className="mt-10 space-y-5">
              <a href={`https://wa.me/${BRAND.phones[0].replace(/[^0-9]/g, "")}`} data-testid="contact-whatsapp" target="_blank" rel="noreferrer" className="neo-card rounded-2xl p-5 flex items-center gap-4 group hover:border-brand/30 transition">
                <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center"><MessageCircle className="w-5 h-5" /></div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">WhatsApp</p>
                  <p className="font-display text-lg mt-1">Chat with our team →</p>
                </div>
              </a>

              <div className="neo-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ink-900 border border-white/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-brand" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Phone</p>
                  <p className="font-display text-lg mt-1">{BRAND.phones.join(" / ")}</p>
                </div>
              </div>

              <div className="neo-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ink-900 border border-white/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-brand" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Email</p>
                  <p className="font-display text-lg mt-1">{BRAND.email}</p>
                </div>
              </div>

              <div className="neo-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ink-900 border border-white/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-brand" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Plant address</p>
                  <p className="text-sm text-white/85 mt-1 leading-relaxed">{BRAND.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl overflow-hidden neo-card h-[260px]">
              <iframe
                title="Pacfully Location"
                src="https://maps.google.com/maps?q=Vanagaram%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0, filter: "grayscale(70%) invert(92%) hue-rotate(180deg)" }}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.1}>
            <form onSubmit={submit} data-testid="contact-form" className="neo-card rounded-3xl p-8 md:p-10 space-y-5">
              <SectionLabel>Send us a brief</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-tight">Tell us about your project.</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full name" value={form.name} onChange={update("name")} required testid="contact-name" />
                <Input label="Email" type="email" value={form.email} onChange={update("email")} required testid="contact-email" />
                <Input label="Phone" value={form.phone} onChange={update("phone")} testid="contact-phone" />
                <Input label="Company" value={form.company} onChange={update("company")} testid="contact-company" />
              </div>
              <Input label="Subject" value={form.subject} onChange={update("subject")} testid="contact-subject" />
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  data-testid="contact-message"
                  className="w-full bg-ink-900/60 border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-brand transition resize-none"
                />
              </div>
              <button type="submit" disabled={loading} data-testid="contact-submit"
                className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-brand-600 transition disabled:opacity-60">
                {loading ? "Sending..." : "Send message"} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Input({ label, type = "text", value, onChange, required, testid }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2 block">{label}{required ? " *" : ""}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        data-testid={testid}
        className="w-full bg-ink-900/60 border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-brand transition"
      />
    </div>
  );
}
