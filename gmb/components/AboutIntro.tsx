'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const AboutIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with clip-path reveal */}
          <ScrollReveal variant="slideRight">
            <motion.div
              className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg bg-slate-100"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img
                src="/images/curtain1.png"
                alt="Company Introduction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5" />

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-600 mb-0.5">Established</p>
                <p className="text-xl font-semibold text-[#1F2E5A]">Since 2005</p>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.15}>
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900">
                A Legacy of <span className="gradient-text"><span className="italic">Excellence</span> and Trust</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                GMB started as a small family-owned workshop with a single mission: to provide high-quality, bespoke window treatments that reflect the personality of every home.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Today, we are proud to be an industry leader, trusted by thousands of homeowners and interior designers for our commitment to quality, precision, and unparalleled customer service.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-4xl font-semibold text-primary mb-2">20+</h4>
                  <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-primary mb-2">15k+</h4>
                  <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Happy Clients</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
