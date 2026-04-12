'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stats } from '@/lib/data/stats';
import { company } from '@/lib/data/company';
import Container from '../ui/Container';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="bg-white min-h-[calc(100vh-80px)] flex items-center py-12 md:py-16 relative overflow-hidden">
      
      {/* Extremely faint atmospheric glow for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1756a0]/[0.015] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3d9e41]/[0.015] rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <Container className="w-full relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,600px)] gap-16 lg:gap-12 items-center">

          {/* ═══ LEFT — Editorial Copy ═══ */}
          <div className="flex flex-col pr-0 lg:pr-8">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px bg-[#0f172a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">
                Bespoke Window Treatments
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-medium text-[#0f172a] text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8"
            >
              Elegance, <br />
              <span className="text-slate-400 font-serif italic text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] tracking-normal font-light">crafted for</span><br />
              your home.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-[480px] mb-12"
            >
              Premium curtains, motorized blinds &amp; shutters. Precision-fitted by experts, trusted by over 5,000 homes.
            </motion.p>

            {/* CTA + Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center gap-10"
            >
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-4 bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-400 w-fit shrink-0"
              >
                View Portfolio
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              
              <div className="flex gap-8 items-center sm:border-l border-slate-200 sm:pl-8">
                {stats.slice(0, 2).map((s, i) => (
                  <div key={i}>
                    <div className="font-display font-medium text-[#0f172a] text-2xl">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ═══ RIGHT — LAYERED IMAGE & FORM ═══ */}
          <div className="relative w-full h-[650px] lg:h-[750px] flex flex-col justify-end lg:justify-center mt-10 lg:mt-0">
            
            {/* Structural High-End Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-[95%] lg:w-[90%] h-[85%] lg:h-[95%] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-[0_20px_60px_-15px_rgba(23,86,160,0.08)]"
            >
              <Image src="/images/curtain1.png" alt="Bespoke Curtains" fill className="object-cover object-center" priority />
              {/* Elegant overlay to ensure the image sits well globally */}
              <div className="absolute inset-0 bg-[#0f172a]/[0.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent opacity-80" />
            </motion.div>

            {/* Overlapping Glassmorphic Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 w-full sm:w-[90%] lg:w-[420px] self-start lg:self-auto -mt-16 lg:mt-32 lg:-ml-12"
            >
              <div className="bg-white/90 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-20px_rgba(23,86,160,0.12)] p-8 md:p-10 rounded-[2rem] relative overflow-hidden">
                
                <div className="mb-8 relative z-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#3d9e41] mb-2">Complimentary Service</p>
                  <h2 className="font-display text-[#0f172a] text-2xl md:text-[1.75rem] tracking-tight leading-[1.15]">
                    Book a Design<br />Consultation
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="py-4"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#3d9e41] flex items-center justify-center mb-5 bg-[#3d9e41]/5">
                        <svg className="w-4 h-4 text-[#3d9e41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-display text-[#0f172a] text-xl mb-3">Thank you, {form.name.split(' ')[0]}.</p>
                      <p className="text-slate-500 font-light text-sm leading-relaxed">
                        Our design team will contact you shortly to arrange your consultation.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                      onSubmit={handleSubmit}
                      className="space-y-5 relative z-10"
                    >
                      <div className="group">
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b border-slate-200 text-sm text-[#0f172a] placeholder:text-slate-300 py-2.5 focus:outline-none focus:border-[#0f172a] transition-colors"
                        />
                      </div>

                      <div className="group">
                        <input
                          name="phone" type="tel" required value={form.phone} onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full bg-transparent border-b border-slate-200 text-sm text-[#0f172a] placeholder:text-slate-300 py-2.5 focus:outline-none focus:border-[#0f172a] transition-colors"
                        />
                      </div>

                      <div className="group relative">
                        <select
                          name="interest" value={form.interest} onChange={handleChange}
                          className={`w-full bg-transparent border-b border-slate-200 py-2.5 text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#0f172a] transition-colors ${form.interest ? 'text-[#0f172a]' : 'text-slate-400'}`}
                        >
                          {INTERESTS.map(opt => (
                            <option key={opt.value} value={opt.value} className="text-[#0f172a]">{opt.label}</option>
                          ))}
                        </select>
                        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-between bg-[#0f172a] hover:bg-[#1e293b] disabled:opacity-60 text-white px-7 py-3.5 text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 group rounded-full"
                        >
                          {loading ? 'Sending...' : 'Request Consultation'}
                          {!loading && (
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center gap-5 pt-2">
                        {TRUST_ITEMS.slice(0, 2).map((t, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-200" />
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">{t}</span>
                          </div>
                        ))}
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
