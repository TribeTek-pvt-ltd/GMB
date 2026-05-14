'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import { summaryStats } from '@/lib/data/stats';
import Container from '../ui/Container';

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 mx-3 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-medium text-sm shadow-sm" 
        style={{ background: t.color }}
      >
        {t.initial}
      </div>
      <div>
        <h4 className="font-display font-semibold text-[#0f172a] text-sm leading-tight">{t.name}</h4>
        <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider mt-0.5">{t.role}</p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>
    </div>
    <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
      "{t.quote}"
    </p>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  // Split testimonials into two rows for variety
  const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const row2 = [...testimonials.slice(5, 10), ...testimonials.slice(5, 10)];

  return (
    <section className="py-20 bg-slate-50/50 overflow-hidden" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#1756a0]/30" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1756a0]">Client Love</span>
            <div className="w-8 h-px bg-[#1756a0]/30" />
          </div>
          <h2 className="font-display font-medium text-[#0f172a] text-3xl md:text-4xl tracking-tight">
            Trusted by the community
          </h2>
        </motion.div>
      </Container>

      {/* Marquee Row 1 */}
      <div className="relative flex overflow-x-hidden py-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </motion.div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative flex overflow-x-hidden py-4">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </motion.div>
      </div>
      
      {/* Decorative gradient masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent pointer-events-none z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent pointer-events-none z-10 hidden md:block" />

      {/* Compact Stats */}
      <Container className="mt-16 pt-10 border-t border-slate-100/60">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {summaryStats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-display font-semibold text-xl md:text-2xl tracking-tight" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
