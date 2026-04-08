"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  { q: "Is the in-home measurement really free?", a: "Absolutely. We send a specialist to your home at no cost, no obligation. They'll measure every window with precision and offer personalised product recommendations during the same visit." },
  { q: "How long does the full process take?", a: "From initial consultation to full installation, most projects are completed within 2–3 weeks. For urgent requests, we can often expedite to within 5 business days." },
  { q: "Can I see fabric samples before committing?", a: "Yes — we'll bring up to 20 fabric samples to your consultation, or we can courier a selection to you in advance so you can see them in your home's natural light." },
  { q: "Do you offer motorized and smart home options?", a: "Yes. We specialise in quiet, app-controlled motorized blinds and curtains that integrate with Google Home, Apple HomeKit, and Amazon Alexa." },
  { q: "What warranty do your products carry?", a: "All products carry a 3-year warranty covering fabric integrity, hardware, and motorized components. If anything fails, we fix it — no questions asked." },
  { q: "Do you service apartments and commercial spaces?", a: "We work across residential, apartment, and commercial settings. We've fitted entire apartment buildings and large office buildings — our team scales to any project." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#1756a0]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1756a0]">FAQ</span>
              </div>
              <h2 className="font-display font-bold text-[#0f172a] text-3xl md:text-4xl leading-tight tracking-tight mb-5">
                Questions We<br />Hear Every Day.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                If your question isn't here, our team is always a call or message away.
              </p>

              <div className="flex flex-col gap-3">
                <a href="tel:+917397223388" className="flex items-center gap-3 text-slate-600 hover:text-[#1756a0] transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-[#1756a0]/08 border border-[#1756a0]/12 flex items-center justify-center group-hover:bg-[#1756a0] transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#1756a0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  </div>
                  <span className="font-bold text-sm">+91 73972 23388</span>
                </a>
                <a href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-[#3d9e41] transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-[#3d9e41]/08 border border-[#3d9e41]/12 flex items-center justify-center group-hover:bg-[#3d9e41] transition-colors duration-300">
                    <svg className="w-4 h-4 fill-[#3d9e41] group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <span className="font-bold text-sm">WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-[#1756a0]/15 bg-white shadow-[0_4px_20px_-8px_rgba(23,86,160,0.1)]' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left focus:outline-none"
                >
                  <span className={`font-display font-semibold text-base leading-snug pr-6 transition-colors ${open === i ? 'text-[#1756a0]' : 'text-[#0f172a]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center border transition-all duration-300 ${open === i ? 'bg-[#1756a0] border-[#1756a0] text-white' : 'bg-transparent border-slate-200 text-slate-400'}`}>
                    <motion.svg
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </motion.svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-slate-500 text-sm leading-relaxed font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
