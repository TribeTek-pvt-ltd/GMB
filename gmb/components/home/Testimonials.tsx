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
    <section className="py-24 md:py-32 bg-[#f8fafc]" ref={ref}>
      <Container>

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
            <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl tracking-tight leading-tight">
              Trusted by Thousands<br />of Happy Homes.
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

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03),0_24px_48px_-12px_rgba(23,86,160,0.07)]"
        >
          {/* Image panel */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-100">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/5" />
              </motion.div>
            </AnimatePresence>

            {/* Tag */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`tag-${active}`}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 px-3.5 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-sm"
                style={{ background: `${t.color}cc` }}
              >
                {t.tag}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote panel */}
          <div className="lg:col-span-7 bg-white relative flex flex-col justify-center px-8 sm:px-12 py-12 lg:px-16 lg:py-16 xl:px-20">
            {/* Decorative large quote mark */}
            <div className="absolute top-8 right-10 font-serif text-[100px] leading-none text-slate-100 select-none pointer-events-none">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`q-${active}`}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-7">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-[#3d9e41]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-display text-[#0f172a] text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.35] tracking-tight mb-10">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-7 border-t border-slate-100">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold text-base shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#0f172a] text-base leading-tight">{t.name}</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

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
