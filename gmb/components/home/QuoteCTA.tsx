'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { company } from '@/lib/data/company';
import Container from '../ui/Container';

const QuoteCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      
      {/* Subtle atmospheric accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#1756a0]/[0.02] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#3d9e41]/[0.015] rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.05)] overflow-hidden">
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#1756a0]" />
              <span className="text-[10px] text-[#1756a0] font-bold uppercase tracking-[0.35em]">
                Design Consultation
              </span>
              <div className="w-8 h-px bg-[#1756a0]" />
            </motion.div>

            {/* Headline with Serif Accents */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-medium text-[#0f172a] text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.1] tracking-tight mb-6"
            >
              Ready to <span className="text-slate-400 font-serif italic font-light">transform</span> your living space?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl"
            >
              Schedule a free home visit. Our experts will measure your space and help 
              you choose the perfect treatments for your home.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#0f172a] hover:bg-[#1e293b] text-white px-9 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-400 shadow-xl shadow-slate-200"
              >
                Request Free Quote
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 text-[#0f172a] px-9 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Chat
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4"
            >
              {['Always free visit', 'No obligation', 'Expert installation'].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3d9e41]" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuoteCTA;
