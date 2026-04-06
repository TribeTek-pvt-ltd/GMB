'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Our Legacy</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-normal text-slate-900 mb-3"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              >
                Crafting Elegance for{' '}
                <span className="gradient-text">Every Window</span>
              </motion.h1>
            </div>

            <motion.p
              className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Since 2005, GMB has been at the forefront of premium window treatments, combining traditional artistry with modern innovation.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
