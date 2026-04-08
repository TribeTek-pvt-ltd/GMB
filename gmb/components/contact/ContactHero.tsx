'use client';

import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative pt-24 pb-4 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-px bg-primary" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Inquiry</span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-normal text-slate-900 mb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
        </div>
        <motion.p
          className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Whether you have a question about our products or want to schedule a professional measurement, our team is ready to assist you.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
