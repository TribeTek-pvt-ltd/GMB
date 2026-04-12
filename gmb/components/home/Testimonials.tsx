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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#1756a0]" />
              <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">Client Reviews</span>
            </div>
            <h2 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1]">
              Trusted by thousands<br />of happy homes.
            </h2>
          </div>

          {/* Dot nav */}
          <div className="flex items-center gap-2 pb-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-400 h-1.5 ${i === active ? 'w-10 bg-[#1756a0]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main interactive area */}
        <div className="relative w-full border border-slate-100 rounded-[3rem] overflow-hidden bg-[#f8fafc]/50 p-8 md:p-12 lg:p-20 mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* ═══ LEFT — Typography & Quote ═══ */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`quote-${active}`}
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#3d9e41]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-display font-medium text-[#0f172a] text-2xl md:text-3xl lg:text-4xl leading-[1.3] tracking-tight mb-10">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg shrink-0 shadow-sm" style={{ background: t.color }}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#0f172a] text-lg leading-tight">{t.name}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ═══ RIGHT — Arched Image ═══ */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`img-${active}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[360px] aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(23,86,160,0.1)] border-4 border-white"
                >
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-[#0f172a] bg-white/90 backdrop-blur-md shadow-sm border border-slate-100">
                    {t.tag}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
        {/* Keep Stats Row but slightly spaced out */}

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-200/50"
        >
          {summaryStats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span
                className="font-display font-bold text-3xl md:text-[2.25rem] tracking-tight"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default Testimonials;
