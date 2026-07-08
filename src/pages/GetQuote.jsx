import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, FadeIn, SectionLabel } from "@/components/Shared";
import { ArrowRight, ArrowLeft, Upload, Check } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const STEPS = ["Project", "Specs", "Finishing", "Contact"];

const PRODUCT_TYPES = ["Rigid Box", "Corrugated Box", "Monocarton", "Label / Sticker", "Paper Bag", "Luxury Gift Box", "Ecommerce Mailer", "Other"];
const PRINTING = ["Offset", "Digital", "Flexo", "Screen", "Hybrid", "Not sure"];
const FINISHING = ["Hot Foil", "Embossing", "Debossing", "Spot UV", "Soft-Touch Matte", "Gloss Lamination", "Magnetic Closure", "Ribbon Pulls"];
const TIMELINES = ["Within 7 days", "2–3 weeks", "1 month", "Flexible"];

export default function GetQuote() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    product_type: "", quantity: "", size: "", material: "",
    printing_type: "", finishing: [], timeline: "",
    name: "", email: "", phone: "", company: "", notes: "",
  });

  const update = (k, v) => setData({ ...data, [k]: v });
  const toggleFinish = (f) => {
    const cur = data.finishing;
    update("finishing", cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]);
  };

  const next = () => setStep(Math.min(step + 1, STEPS.length - 1));
  const back = () => setStep(Math.max(step - 1, 0));

  const submit = async () => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (Array.isArray(v)) fd.append(k, v.join(", "));
        else fd.append(k, v || "");
      });
      if (file) fd.append("artwork", file);
      const res = await axios.post(`${API}/quote`, fd, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success(res.data.message);
      setDone(true);
    } catch (err) {
      toast.error(err.response?.data?.detail || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center px-6">
        <div className="max-w-xl text-center neo-card rounded-3xl p-12">
          <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-6"><Check className="w-7 h-7" /></div>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">Quote request received.</h2>
          <p className="text-white/65 mt-4 leading-relaxed">A Pacfully account manager will reach out within 24 hours with material recommendations and a structured proposal.</p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="quote-page">
      <PageHero
        eyebrow="Get a Quote"
        title="Four steps. One bespoke proposal."
        sub="Tell us about your project. We'll respond with sample options, indicative pricing and a production timeline within 24 hours."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          {/* Stepper */}
          <div className="flex items-center justify-between gap-2 mb-10" data-testid="quote-stepper">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition ${
                  i < step ? "bg-brand text-white" : i === step ? "bg-brand text-white ring-4 ring-brand/20" : "bg-ink-800 text-white/50 border border-white/10"
                }`}>{i < step ? <Check className="w-4 h-4" /> : i + 1}</div>
                <span className={`hidden md:inline text-xs uppercase tracking-[0.25em] ${i === step ? "text-white" : "text-white/40"}`}>{s}</span>
                {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-brand" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          <FadeIn>
            <div className="neo-card rounded-3xl p-8 md:p-10 min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 0 && (
                    <div className="space-y-6">
                      <SectionLabel>Step 1 · Project</SectionLabel>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">What are we packaging?</h3>
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 block">Product type *</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {PRODUCT_TYPES.map((p) => (
                            <button key={p} type="button" data-testid={`product-type-${p}`} onClick={() => update("product_type", p)}
                              className={`text-left px-5 py-3 rounded-2xl border transition text-sm ${data.product_type === p ? "border-brand bg-brand/10 text-white" : "border-white/10 hover:border-white/30 text-white/75"}`}>
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Field label="Quantity (units) *" required testid="quote-quantity" value={data.quantity} onChange={(v) => update("quantity", v)} placeholder="e.g. 1000" />
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <SectionLabel>Step 2 · Specs</SectionLabel>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Size, material & printing.</h3>
                      <Field label="Size (LxWxH cm)" value={data.size} onChange={(v) => update("size", v)} testid="quote-size" placeholder="e.g. 20 x 15 x 8" />
                      <Field label="Material preference" value={data.material} onChange={(v) => update("material", v)} testid="quote-material" placeholder="e.g. 1200gsm greyboard, kraft, art card" />
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 block">Printing type</label>
                        <div className="grid sm:grid-cols-3 gap-2">
                          {PRINTING.map((p) => (
                            <button key={p} type="button" data-testid={`printing-${p}`} onClick={() => update("printing_type", p)}
                              className={`px-4 py-3 rounded-2xl border transition text-sm ${data.printing_type === p ? "border-brand bg-brand/10" : "border-white/10 hover:border-white/30 text-white/75"}`}>
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <SectionLabel>Step 3 · Finishing</SectionLabel>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Premium finishes & timeline.</h3>
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 block">Finishing options (multi-select)</label>
                        <div className="flex flex-wrap gap-2">
                          {FINISHING.map((f) => (
                            <button key={f} type="button" data-testid={`finish-${f}`} onClick={() => toggleFinish(f)}
                              className={`px-4 py-2 rounded-full border text-sm transition ${data.finishing.includes(f) ? "border-brand bg-brand/15 text-white" : "border-white/10 text-white/70 hover:border-white/30"}`}>
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 block">Timeline</label>
                        <div className="grid sm:grid-cols-4 gap-2">
                          {TIMELINES.map((t) => (
                            <button key={t} type="button" data-testid={`timeline-${t}`} onClick={() => update("timeline", t)}
                              className={`px-4 py-3 rounded-2xl border transition text-sm ${data.timeline === t ? "border-brand bg-brand/10" : "border-white/10 hover:border-white/30 text-white/75"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 block">Upload artwork (optional)</label>
                        <label className="block cursor-pointer">
                          <input type="file" data-testid="quote-artwork" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.svg,.zip" />
                          <div className="border-2 border-dashed border-white/15 rounded-2xl p-8 text-center hover:border-brand/50 transition">
                            <Upload className="w-6 h-6 text-brand mx-auto mb-3" />
                            <p className="text-sm text-white/75">{file ? file.name : "Drop artwork or click to upload"}</p>
                            <p className="text-xs text-white/40 mt-1">PDF, AI, EPS, PSD, PNG, JPG, ZIP up to 25MB</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <SectionLabel>Step 4 · Contact</SectionLabel>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Where do we send the quote?</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full name *" required value={data.name} onChange={(v) => update("name", v)} testid="quote-name" />
                        <Field label="Email *" required type="email" value={data.email} onChange={(v) => update("email", v)} testid="quote-email" />
                        <Field label="Phone" value={data.phone} onChange={(v) => update("phone", v)} testid="quote-phone" />
                        <Field label="Company" value={data.company} onChange={(v) => update("company", v)} testid="quote-company" />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2 block">Additional notes</label>
                        <textarea rows={4} value={data.notes} onChange={(e) => update("notes", e.target.value)} data-testid="quote-notes"
                          className="w-full bg-ink-900/60 border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-brand transition resize-none" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={back} disabled={step === 0} data-testid="quote-back" className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-full text-sm disabled:opacity-30 hover:bg-white/5 transition">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < STEPS.length - 1 ? (
                <button onClick={next} data-testid="quote-next"
                  disabled={(step === 0 && (!data.product_type || !data.quantity))}
                  className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-brand-600 transition disabled:opacity-40">
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={submit} disabled={loading || !data.name || !data.email} data-testid="quote-submit"
                  className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-brand-600 transition disabled:opacity-40">
                  {loading ? "Submitting..." : "Submit Quote Request"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required, testid, placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2 block">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full bg-ink-900/60 border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-brand transition placeholder:text-white/25"
      />
    </div>
  );
}
