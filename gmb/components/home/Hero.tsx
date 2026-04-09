'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stats } from '@/lib/data/stats';
import { company } from '@/lib/data/company';
import Container from '../ui/Container';
import Link from 'next/link';

const INTERESTS = [
  { value: '', label: 'What are you looking for?' },
  { value: 'Curtains', label: 'Curtains' },
  { value: 'Roller Blinds', label: 'Roller Blinds' },
  { value: 'Motorized Blinds', label: 'Motorized Blinds' },
  { value: 'Shutters', label: 'Shutters' },
  { value: 'Venetian Blinds', label: 'Venetian Blinds' },
  { value: 'Advice', label: 'Not sure — need advice' },
];

const TRUST_ITEMS = ['100% Free', 'No Spam', 'We Visit You'];

const Hero = () => {
  const [form, setForm] = useState({ name: '', phone: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
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

      {/* ── Announcement bar ── */}
      <div className="bg-[#0f172a] text-white/80 py-2.5 text-center text-[10px] font-semibold tracking-[0.22em] uppercase">
        <span className="text-[#3d9e41] mr-2">✦</span>
        Free In-Home Measurement &amp; Design Consultation — No Obligation
        <span className="text-[#3d9e41] ml-2">✦</span>
      </div>

      {/* ── Hero body ── */}
      <div className="flex-1 flex items-center">
        <Container className="py-20 lg:py-0 lg:min-h-[calc(100vh-44px)] lg:flex lg:items-center">

          {/* Two-column layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-16 xl:gap-24 items-center">

            {/* ═══ LEFT — Copy ═══ */}
            <div className="flex flex-col">

              {/* Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-2.5 mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-[#3d9e41]/8 border border-[#3d9e41]/20 text-[#3d9e41] text-[9px] font-bold uppercase tracking-[0.28em] px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d9e41] animate-pulse" />
                  Premium Window Treatments
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="font-display font-bold text-[#0f172a] text-5xl md:text-6xl xl:text-[4rem] leading-[1.03] tracking-tight mb-6"
              >
                Curtains &amp; Blinds,<br />
                Crafted{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-[#3d9e41]">for You.</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                    <path d="M0 5 Q100 0 200 5" stroke="#3d9e41" strokeWidth="2" strokeOpacity="0.35" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-slate-500 text-base md:text-[1.06rem] font-light leading-[1.75] max-w-[460px] mb-10"
              >
                Bespoke curtains, motorized blinds &amp; shutters — precision-crafted for your exact windows.
                Trusted by{' '}
                <span className="text-[#0f172a] font-semibold">5,000+ homes</span>{' '}
                across the region.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2.5 bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-7 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm shadow-green-200/70"
                >
                  View Our Work
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-7 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Divider + Stats */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-8 pt-8 border-t border-slate-100"
              >
                {stats.map((s, i) => (
                  <div key={i} className={`${i < stats.length - 1 ? 'pr-8 border-r border-slate-100' : ''}`}>
                    <div className="font-display font-bold text-[#0f172a] text-2xl tracking-tight">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ═══ RIGHT — Lead form card ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_20px_60px_-15px_rgba(61,158,65,0.12)] overflow-hidden">

                {/* Top accent bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#3d9e41] via-[#5cb85c] to-[#1756a0]" />

                <div className="p-7 md:p-8">

                  {/* Card header */}
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#3d9e41] mb-2">Free Consultation</p>
                      <h2 className="font-display font-bold text-[#0f172a] text-[1.4rem] leading-snug tracking-tight">
                        Book Your Free<br />In-Home Visit
                      </h2>
                    </div>
                    <span className="shrink-0 mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1.5 rounded-full">
                      No Obligation
                    </span>
                  </div>

                  {/* Form / Success */}
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 px-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#3d9e41]/10 flex items-center justify-center mx-auto mb-5">
                          <svg className="w-7 h-7 text-[#3d9e41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="font-display font-bold text-[#0f172a] text-xl mb-2">Thank you, {form.name}!</p>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                          We'll call you within a few hours to schedule your free visit.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-3"
                      >
                        {/* Name */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5 ml-0.5">
                            Full Name
                          </label>
                          <input
                            name="name" required value={form.name} onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#3d9e41]/40 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5 ml-0.5">
                            Phone Number
                          </label>
                          <input
                            name="phone" type="tel" required value={form.phone} onChange={handleChange}
                            placeholder="+91 99999 99999"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#3d9e41]/40 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200"
                          />
                        </div>

                        {/* Interest */}
                        <div>
                          <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5 ml-0.5">
                            I need…
                          </label>
                          <div className="relative">
                            <select
                              name="interest" value={form.interest} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0f172a] appearance-none cursor-pointer focus:outline-none focus:border-[#3d9e41]/40 focus:bg-white focus:ring-4 focus:ring-[#3d9e41]/5 transition-all duration-200"
                            >
                              {INTERESTS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                              ))}
                            </select>
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2.5 bg-[#0f172a] hover:bg-[#1e293b] disabled:opacity-60 text-white py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm"
                          >
                            {loading ? (
                              <>
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending…
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
                          <div className="flex items-center justify-center gap-5 mt-4">
                            {TRUST_ITEMS.map((t, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <svg className="w-3 h-3 text-[#3d9e41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card footer — contact links */}
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-6">
                  <a
                    href={`tel:${company.whatsapp}`}
                    className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 hover:text-[#0f172a] transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0f172a] group-hover:border-[#0f172a] transition-colors">
                      <svg className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    {company.phoneFormatted}
                  </a>
                  <div className="w-px h-4 bg-slate-200" />
                  <a
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors">
                      <svg className="w-3 h-3 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
