"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "5,000+", label: "Projects Completed" },
  { value: "20 Yrs", label: "Of Excellence" },
  { value: "4.9★", label: "Client Rating" },
];

const inputClass =
  "w-full px-3.5 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-[#0f172a] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#3d9e41]/50 focus:bg-white focus:ring-2 focus:ring-[#3d9e41]/10 transition-all duration-200";

const labelClass =
  "block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1.5";

const Hero = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-white min-h-screen flex flex-col">

      {/* ── Top notice bar ── */}
      <div className="bg-[#3d9e41] text-white py-2 text-center text-[10px] font-bold tracking-[0.25em] uppercase">
        ✦ &nbsp;Free In-Home Measurement &amp; Design Consultation — No Obligation&nbsp; ✦
      </div>

      {/* ── Hero body: constrained to max-w-7xl, centered ── */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-16 lg:py-0 lg:min-h-[calc(100vh-40px)] lg:flex lg:items-center">

          {/* Two-column grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

            {/* ══ LEFT — Brand copy ══ */}
            <div className="flex flex-col">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-7"
              >
                <div className="w-7 h-px bg-[#3d9e41]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#3d9e41]">
                  Premium Window Treatments
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.07 }}
                className="font-display font-bold text-[#0f172a] text-5xl md:text-6xl xl:text-[4.25rem] leading-[1.02] tracking-tight mb-5"
              >
                Curtains &amp; Blinds,<br />
                Made{' '}
                <span className="relative inline-block">
                  <span className="text-[#3d9e41]">for You.</span>
                  {/* Green underline accent */}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3d9e41]/30 rounded-full" />
                </span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-slate-500 text-base md:text-[1.05rem] font-light leading-relaxed max-w-[480px] mb-9"
              >
                Bespoke curtains, motorized blinds, and shutters — precision-crafted for your exact windows.
                Trusted by <strong className="text-[#0f172a] font-semibold">5,000+ homes</strong> across the region.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link href="/gallery">
                  <button className="bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-7 py-3.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2 shadow-sm shadow-green-200/80">
                    View Our Work
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white border border-slate-200 hover:border-[#3d9e41]/50 text-slate-700 hover:text-[#3d9e41] px-7 py-3.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp Us
                  </button>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="flex items-center gap-8 pt-7 border-t border-slate-100"
              >
                {stats.map((s, i) => (
                  <div key={i} className={i < stats.length - 1 ? 'pr-8 border-r border-slate-100' : ''}>
                    <div className="font-display font-bold text-[#0f172a] text-2xl tracking-tight leading-none">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ══ RIGHT — Lead-gen form card ══ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/* Green top accent line */}
              <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#3d9e41] to-[#5cb85c]" />

              {/* Card body */}
              <div className="bg-white rounded-b-2xl border border-t-0 border-slate-100 shadow-[0_8px_48px_-12px_rgba(61,158,65,0.15),0_2px_16px_-4px_rgba(0,0,0,0.04)] p-7">

                {/* Card header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#3d9e41]">
                      Free Consultation
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#3d9e41] bg-[#3d9e41]/8 border border-[#3d9e41]/20 px-3 py-1 rounded-full">
                      No Obligation
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-[#0f172a] text-2xl leading-tight tracking-tight">
                    Book Your Free In-Home Visit
                  </h2>
                  <p className="text-slate-400 text-sm mt-1.5 font-light">
                    We measure, advise &amp; quote — at no cost to you.
                  </p>
                </div>

                {/* Form or Success */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 rounded-xl border border-[#3d9e41]/15 bg-[#f0faf0]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#3d9e41]/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-[#3d9e41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-display font-bold text-[#0f172a] text-lg mb-1.5">Thank You, {form.name}!</p>
                    <p className="text-slate-500 text-sm font-light">We'll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">

                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input name="name" required value={form.name} onChange={handleChange}
                        placeholder="e.g. Sarah Johnson" className={inputClass} />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Email</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="you@email.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
                          placeholder="+91 99999 99999" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Property Address</label>
                      <input name="address" value={form.address} onChange={handleChange}
                        placeholder="Street, City, Postcode" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass}>I'm Interested In</label>
                      <div className="relative">
                        <select name="interest" value={form.interest} onChange={handleChange}
                          className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                          <option value="">Select product type…</option>
                          <option>Curtains</option>
                          <option>Roller Blinds</option>
                          <option>Motorized Blinds</option>
                          <option>Shutters</option>
                          <option>Venetian Blinds</option>
                          <option>Not Sure — Need Advice</option>
                        </select>
                        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="pt-0.5">
                      <button type="submit" disabled={loading}
                        className="w-full bg-[#3d9e41] hover:bg-[#2e7d31] active:bg-[#276628] text-white py-3.5 rounded-xl font-bold text-[11px] tracking-[0.22em] uppercase transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2.5 shadow-sm shadow-green-200"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting…
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      {/* Trust micro-copy */}
                      <div className="flex items-center justify-center gap-4 mt-3.5">
                        {['100% Free', 'No Spam', 'We Come to You'].map((t, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-[#3d9e41]" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Below-card contact links */}
              <div className="mt-4 flex justify-center gap-6">
                <a href="tel:+917397223388" className="flex items-center gap-2 text-slate-400 hover:text-[#3d9e41] transition-colors group text-xs font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#3d9e41] group-hover:border-[#3d9e41] transition-colors shadow-sm">
                    <svg className="w-3 h-3 text-[#3d9e41] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  +91 73972 23388
                </a>
                <a href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-[#3d9e41] transition-colors group text-xs font-semibold">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#3d9e41] group-hover:border-[#3d9e41] transition-colors shadow-sm">
                    <svg className="w-3 h-3 fill-[#3d9e41] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  WhatsApp Us
                </a>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
