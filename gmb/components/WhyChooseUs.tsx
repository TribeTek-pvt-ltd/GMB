'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import StandardButton from './StandardButton';

const features = [
  {
    id: '01',
    title: 'Fabrics You Fall For',
    description: 'Luxuriously soft, fade-defying textiles sourced from respected mills — built to age beautifully.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z',
    color: 'text-primary',
    bg: 'bg-primary/5',
    span: 'md:col-span-2'
  },
  {
    id: '02',
    title: 'Made by Hand',
    description: '20+ years of artisan precision — every stitch thoughtful, every edge flawlessly set and finished.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/5',
    span: 'md:col-span-1'
  },
  {
    id: '03',
    title: 'Installed Flawlessly',
    description: 'One clean visit. No dust. No stress. Just perfect fit and operation the very first time.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'text-teal-400',
    bg: 'bg-teal-500/5',
    span: 'md:col-span-1'
  },
  {
    id: '04',
    title: 'Guided by You',
    description: 'Free in-home visit. Honest conversation. Measurements and recommendations that truly fit your life.',
    icon: 'M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    span: 'md:col-span-2'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="min-h-screen py-24 md:py-32 relative bg-slate-50 overflow-hidden flex flex-col justify-center" id="why-us">
      {/* Ambient backgrounds */}
      {/* Ambient backgrounds removed for clean white look */}

      <div className="container mx-auto relative z-10 max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The GMB Standard</span>
            <div className="w-12 h-px bg-primary/30" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1F2E5A] mb-8 leading-[0.95]">
            Why Choose <br />
            <span className="gradient-text italic font-medium pr-4">Excellence?</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            We don&apos;t just sell window treatments; we craft architectural atmospheres that respond to your space and lifestyle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${feature.span} group relative bg-white border border-slate-200/50 rounded-none p-6 md:p-8 overflow-hidden shadow-sm`}
            >
              {/* Giant Watermark Number */}
              <div className="absolute top-0 right-0 text-[7rem] leading-none font-black text-slate-100/50 select-none pointer-events-none font-serif">
                {feature.id}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl md:text-4xl font-black text-[#1F2E5A] mb-6 tracking-tight font-serif leading-none">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light mt-auto max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Interactive CTA */}
        <div className="text-center mt-12">
          <Link href="/contact?form=quote">
            <StandardButton variant="secondary" className="px-12 py-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <span>Start Your Journey</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </StandardButton>
          </Link>
          
          <div className="mt-8 flex justify-center gap-8 md:gap-8 opacity-30">
            {['Expert Consultation', '20+ Yrs Precision', 'Flawless Finish'].map((text, i) => (
              <span key={i} className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                {text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
