'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { faqs } from '@/lib/data/faqs';
import { company } from '@/lib/data/company';
import Container from '../ui/Container';
import Link from 'next/link';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc]" ref={ref}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* ── Left sidebar (sticky) ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-[#1756a0]" />
                <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">FAQ</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-bold text-[#0f172a] text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                Questions We<br />Hear Every Day.
              </h2>

              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Still have questions? Our team is always just one message away.
              </p>

              {/* Contact options */}
              <div className="flex flex-col gap-3">

                <a
                  href={`tel:${company.whatsapp}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1756a0] group-hover:border-[#1756a0] transition-all duration-300 shadow-sm">
                    <svg className="w-4 h-4 text-[#1756a0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-0.5">Call us</p>
                    <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#1756a0] transition-colors">{company.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#3d9e41] group-hover:border-[#3d9e41] transition-all duration-300 shadow-sm">
                    <svg className="w-4 h-4 fill-[#3d9e41] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-0.5">WhatsApp</p>
                    <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#3d9e41] transition-colors">Chat with us</p>
                  </div>
                </a>
              </div>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#1756a0] hover:text-[#3d9e41] transition-colors group"
              >
                Send us a message
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Accordion ── */}
          <div className="lg:col-span-8">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    open === i
                      ? 'border-[#1756a0]/15 bg-white shadow-[0_4px_20px_-8px_rgba(23,86,160,0.09)]'
                      : 'border-slate-200/70 bg-white hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus:outline-none"
                  >
                    <span className={`font-display font-semibold text-[0.95rem] leading-snug transition-colors ${open === i ? 'text-[#1756a0]' : 'text-[#0f172a]'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center border transition-all duration-300 ${
                      open === i ? 'bg-[#1756a0] border-[#1756a0]' : 'bg-transparent border-slate-200'
                    }`}>
                      <motion.svg
                        animate={{ rotate: open === i ? 45 : 0 }}
                        transition={{ duration: 0.28 }}
                        className={`w-3.5 h-3.5 ${open === i ? 'text-white' : 'text-slate-400'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-slate-500 text-sm font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
