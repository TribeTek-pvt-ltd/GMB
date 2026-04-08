'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

const QuoteCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 relative z-10">
        <ScrollReveal variant="scale">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_40px_-12px_rgba(23,86,160,0.08)] overflow-hidden relative">
            
            {/* Elegant Soft Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#3d9e41]/15 via-[#1756a0]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#1756a0]/15 via-[#3d9e41]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
            
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="px-8 py-20 md:py-28 text-center relative z-10 max-w-3xl mx-auto">

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-[#1756a0]" />
                <span className="text-[10px] text-[#1756a0] font-bold uppercase tracking-[0.25em]">Start Today — It's Free</span>
                <div className="w-8 h-px bg-[#1756a0]" />
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="font-display font-bold text-[#0f172a] text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6"
              >
                Ready to Transform<br />Your Home?
              </motion.h2>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-slate-500 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-12"
              >
                Let our design consultants craft the perfect window solution for your space — zero pressure, zero obligation, and zero compromise.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
              >
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-10 py-4 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 shadow-sm shadow-green-200">
                    Request Free Quote
                  </button>
                </Link>
                <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto border border-slate-200 text-slate-600 hover:border-[#1756a0]/30 hover:text-[#1756a0] hover:bg-slate-50 px-10 py-4 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-3">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                   </svg>
                   Chat on WhatsApp
                 </button>
               </Link>
             </motion.div>

             {/* Trust Details */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.36 }}
               className="flex flex-wrap items-center justify-center gap-4 md:gap-7 mt-10 md:mt-12"
             >
               {['Takes 2 minutes', 'Always free', 'Zero pressure'].map((t, i) => (
                 <div key={i} className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#1756a0]/40" />
                   <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t}</span>
                 </div>
               ))}
             </motion.div>

           </div>
         </div>
       </ScrollReveal>
     </div>
   </section>
 );
};

export default QuoteCTA;
