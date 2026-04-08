'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner, Paddington",
    rating: 5,
    quote: "GMB transformed our living room entirely. The bespoke motorized blinds fit perfectly and the whole process was so easy. Worth every cent. Their attention to detail was exactly what we were looking for in a premium service.",
    image: "/images/curtain1.png",
    tag: "Motorized Blinds",
    initial: "S",
    color: "#3d9e41", // Green
  },
  {
    name: "James L.",
    role: "Interior Designer, CBD",
    rating: 5,
    quote: "I specify GMB for every client. Their quality is consistent, installation is always on time, and the breadth of fabric choices is unmatched in the industry. It makes my job significantly easier.",
    image: "/images/curtain2.png",
    tag: "Custom Curtains",
    initial: "J",
    color: "#1756a0", // Blue
  },
  {
    name: "Priya K.",
    role: "Property Developer",
    rating: 5,
    quote: "We fitted 40 apartments with GMB's blackout roller blinds. Every single one was perfect. The buyers noticed immediately — it's a genuine value-add that elevates the entirely property.",
    image: "/images/curtain3.png",
    tag: "Roller Blinds",
    initial: "P",
    color: "#3d9e41", // Green
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), []);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] relative overflow-hidden" ref={ref}>
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#1756a0]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1756a0]">Client Reviews</span>
            </div>
            <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight">
              Trusted by Thousands<br />of Happy Homes.
            </h2>
          </div>

          <div className="flex items-center gap-2.5 pb-3">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`View testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-500 h-1.5 ${i === active ? 'w-10 bg-[#3d9e41]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-100/60 shadow-[0_8px_40px_-12px_rgba(23,86,160,0.06)]"
        >
          {/* Left: Image Panel */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
            <AnimatePresence mode="popLayout">
              <motion.div key={active} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }} className="absolute inset-0"
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
                {/* Gradient overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
              </motion.div>
            </AnimatePresence>

            {/* Tag badge floating over image */}
            <AnimatePresence mode="popLayout">
              <motion.div key={`tag-${active}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-sm border border-white/20" 
                style={{ background: `${t.color}cc` }}
              >
                {t.tag}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Quote Panel */}
          <div className="lg:col-span-7 bg-white relative flex flex-col justify-center px-8 sm:px-12 py-14 lg:p-16 xl:p-20">
            {/* Decorative Quote Mark */}
            <div className="absolute top-10 right-12 text-[#f8fafc] text-[120px] font-serif leading-none select-none pointer-events-none">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={`q-${active}`}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[#3d9e41]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-display text-[#0f172a] text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.3] tracking-tight mb-10">
                  "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg shadow-sm" style={{ background: t.color }}>
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
        </motion.div>

        {/* Summary Bar - Minimal Version */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-slate-200/60 pt-12"
        >
          {[
            { label: 'Average Rating', val: '4.9 / 5.0', color: '#0f172a' },
            { label: 'Reviews Verified', val: '850+', color: '#3d9e41' },
            { label: 'Repeat Clients', val: '65%', color: '#1756a0' },
            { label: 'Recommend Us', val: '98%', color: '#3d9e41' },
          ].map((s, i) => (
            <div key={i} className={`flex flex-col gap-1.5 ${i > 0 && i % 2 !== 0 ? 'pl-6 md:pl-0 md:border-l-0 border-l border-slate-100' : ''}`}>
              <span className="font-display font-bold text-3xl md:text-4xl tracking-tight" style={{ color: s.color }}>{s.val}</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
