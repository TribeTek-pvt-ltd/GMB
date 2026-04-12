'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import { summaryStats } from '@/lib/data/stats';
import Container from '../ui/Container';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), []);
  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Ultra-soft ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#1756a0]/[0.015] blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#3d9e41]/[0.015] blur-[100px]" />
      </div>

      <Container className="relative z-10">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6 relative z-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#1756a0]/80" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1756a0]">Client Reviews</span>
            </div>
            <h2 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Trusted by thousands<br />of happy homes.
            </h2>
          </div>

          {/* Dot nav */}
          <div className="flex items-center gap-6 pb-2">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-500 h-1.5 ${i === active ? 'w-12 bg-[#1756a0]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main interactive area */}
        <div className="relative w-full mt-10 mb-20 bg-white rounded-[2rem] border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] border-slate-100/50 p-8 md:p-14 lg:p-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* ═══ LEFT — Typography & Quote ═══ */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`quote-${active}`}
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-[#f59e0b]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-display text-[#0f172a] text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.4] md:leading-[1.5] tracking-tight mb-12 relative z-10">
                    <span className="text-[#1756a0] text-6xl md:text-7xl absolute -top-5 -left-6 md:-top-7 md:-left-8 opacity-10 font-serif leading-none">"</span>
                    {t.quote}
                    <span className="text-[#1756a0] text-6xl md:text-7xl absolute -bottom-10 md:-bottom-12 ml-2 opacity-10 font-serif leading-none">"</span>
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-medium text-xl shrink-0 shadow-sm" style={{ background: t.color }}>
                      {t.initial}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-display font-semibold text-[#0f172a] text-lg leading-tight">{t.name}</p>
                      <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] mt-1.5">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ═══ RIGHT — Image ═══ */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`img-${active}`}
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm"
                >
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-6 right-6 whitespace-nowrap px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f172a] bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                    {t.tag}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100 relative z-10"
        >
          {summaryStats.map((s, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span
                className="font-display font-medium text-4xl md:text-5xl tracking-tight"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default Testimonials;
