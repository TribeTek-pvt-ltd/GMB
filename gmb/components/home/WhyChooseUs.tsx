'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { reasons } from '@/lib/data/services';
import Container from '../ui/Container';

const IconMap: Record<string, React.ReactNode> = {
  'home-measure': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  'custom-made': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  'installation': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  'guarantee': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

const TRUST = [
  { label: '5,000+ Homes Fitted', color: '#1756a0' },
  { label: '20 Years Experience', color: '#3d9e41' },
  { label: 'Same-Week Booking', color: '#1756a0' },
  { label: '4.9★ Average Rating', color: '#3d9e41' },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#1756a0]" />
              <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">Why GMB</span>
            </div>
            <h2 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1]">
              The GMB difference —<br />first visit to final finish.
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xs md:pb-1">
            Every step of your journey is handled with care, expertise, and zero hassle.
          </p>
        </motion.div>

        {/* Reason Cards — 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 70, damping: 20, delay: i * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-[#1756a0]/20 hover:shadow-[0_20px_60px_-15px_rgba(23,86,160,0.08)] transition-all duration-500"
            >
              {/* Watermark number */}
              <div
                className="absolute -top-3 -right-1 font-display font-black text-[5.5rem] leading-none select-none pointer-events-none"
                style={{ color: r.color, opacity: 0.04 }}
              >
                {r.num}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ color: r.color, background: r.bg, border: `1px solid ${r.border}` }}
              >
                {IconMap[r.iconName]}
              </div>

              <h3 className="font-display font-bold text-[#0f172a] text-[0.95rem] leading-tight tracking-tight mb-2.5">
                {r.title}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {r.body}
              </p>

              {/* Bottom color line on hover - enhanced to subtle gradient */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl bg-gradient-to-r from-[#1756a0] to-[#3d9e41]"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 bg-white rounded-[2rem] border border-slate-100/80"
        >
          <div className="flex flex-wrap items-center gap-6">
            {TRUST.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f172a]">{t.label}</span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 shrink-0 bg-[#1756a0] hover:bg-[#1044a0] text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm shadow-blue-100 whitespace-nowrap"
          >
            Book Free Visit
          </Link>
        </motion.div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;