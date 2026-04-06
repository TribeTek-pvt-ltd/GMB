'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    iconColor: 'text-primary',
    iconBg: 'bg-slate-50 group-hover:bg-primary/10',
    title: 'Fabrics You Fall For',
    body: 'Luxuriously soft, fade-defying textiles sourced from respected mills — built to age beautifully.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    iconColor: 'text-cyan-500',
    iconBg: 'bg-slate-50 group-hover:bg-cyan-500/10',
    title: 'Made by Hand',
    body: '20+ years of artisan precision — every stitch thoughtful, every edge flawlessly set and finished.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconColor: 'text-teal-500',
    iconBg: 'bg-slate-50 group-hover:bg-teal-500/10',
    title: 'Installed Flawlessly',
    body: 'One clean visit. No dust. No stress. Just perfect fit and operation the very first time.',
  },
  {
    number: '04',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    iconColor: 'text-accent-yellow',
    iconBg: 'bg-slate-50 group-hover:bg-accent-yellow/10',
    title: 'Guided by You',
    body: 'Free in-home visit. Honest conversation. Measurements and recommendations that truly fit your life.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 md:py-36 lg:py-40 relative bg-transparent overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Our Promise</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900 mb-4">
              Why Choose <span className="gradient-text italic">GMB?</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mx-auto">
              Four pillars that have made us the trusted name in premium window treatments since 2005.
            </p>
          </div>
        </ScrollReveal>

        <AnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.number}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="relative group bg-white border border-slate-100 rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:border-slate-200 transition-all duration-400 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -top-6 right-0 text-[10rem] leading-none font-black text-slate-900/[0.018] font-serif select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700">
                {feat.number}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feat.iconColor} ${feat.iconBg} mb-8 transition-all duration-400`}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {feat.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 font-serif leading-tight">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mt-auto">
                  {feat.body}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16 md:mt-20">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-[#1F2E5A] text-white text-base md:text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Let&apos;s make your windows feel like home
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <p className="mt-6 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
              Takes 2 minutes <span className="mx-2 text-primary">•</span> Always free <span className="mx-2 text-primary">•</span> Zero pressure
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;