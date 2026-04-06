'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const QuoteCTA = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#1F2E5A] py-24 sm:py-32 text-center text-white">
      {/* Subtle ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10 px-6 sm:px-8">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 mb-2 justify-center">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Free Consultation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wide">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Get a personalized quote for your window treatments today. Our experts are ready to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                >
                  Request Free Quote
                </motion.button>
              </Link>
              <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </motion.button>
              </Link>
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/50 pt-2">
              Takes 2 minutes <span className="mx-2 text-primary">•</span> Always free <span className="mx-2 text-primary">•</span> Zero pressure
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuoteCTA;
