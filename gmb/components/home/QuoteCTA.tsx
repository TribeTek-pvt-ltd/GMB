'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { company } from '@/lib/data/company';
import Container from '../ui/Container';

const QuoteCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <Container>
        <div className="bg-[#1a2647] rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-20px_rgba(26,38,71,0.5)]">

          {/* Ethereal Glow Elements */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,158,65,0.12)_0,transparent_60%)] pointer-events-none -translate-y-1/2 animate-float-slow" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(23,86,160,0.15)_0,transparent_60%)] pointer-events-none translate-y-1/2 animate-float-slow" style={{ animationDelay: '3s' }} />

          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3d9e41]/50 to-transparent" />

          <div className="px-10 py-20 md:py-24 text-center max-w-2xl mx-auto">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 mb-8"
            >
              <div className="w-6 h-px bg-[#3d9e41]/60" />
              <span className="text-[9px] text-[#3d9e41] font-bold uppercase tracking-[0.28em]">
                Start Today — It's Free
              </span>
              <div className="w-6 h-px bg-[#3d9e41]/60" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-display font-medium text-white text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] tracking-tight mb-5"
            >
              Ready to transform<br />your home?
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-11"
            >
              Our design consultants visit your home, measure every window, and provide a
              fully tailored quote — at absolutely no cost.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#3d9e41]/20 animate-pulse-glow hover:animate-none"
              >
                Request Free Quote
              </Link>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 text-white/80 hover:text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="mt-10 flex items-center justify-center gap-6"
            >
              {['Takes 2 minutes', 'Always free', 'Zero pressure'].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3d9e41]/60" />
                  <span className="text-[9px] text-white/40 font-semibold uppercase tracking-[0.18em]">{t}</span>
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
