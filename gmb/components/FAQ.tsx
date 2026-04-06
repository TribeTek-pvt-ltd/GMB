"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqData = [
  {
    id: "01",
    question: "Do you provide free on-site measurements?",
    answer: "Yes, we provide professional on-site measurements at no cost. Our experts will visit your space to ensure a perfect fit and provide a detailed consultation on styles and fabrics."
  },
  {
    id: "02",
    question: "How long does the custom installation process take?",
    answer: "Typically, custom curtains and blinds are ready for installation within 2-3 weeks of the initial measurement. The actual installation usually takes only a few hours."
  },
  {
    id: "03",
    question: "What is the warranty on motorized blinds?",
    answer: "Our smart motorized systems come with a comprehensive 5-year warranty on the motor and a 2-year warranty on the fabric and mounting hardware."
  },
  {
    id: "04",
    question: "Are your fabrics child and pet safe?",
    answer: "Absolutely. We offer a wide range of cordless and motorized options that are safe for children and pets. All our fabrics also meet international safety and flame-retardant standards."
  },
  {
    id: "05",
    question: "Can I request fabric samples?",
    answer: "Yes! We encourage clients to see and feel the materials. You can request up to 5 fabric swatches to be delivered to your home for free."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="faq">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Editorial Header */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-primary/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Inquiry & Details</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1F2E5A] mb-6 leading-[0.95]">
                Curated <br />
                <span className="gradient-text italic font-medium pr-4">Knowledge.</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-md">
                Everything you need to know about our premium window treatments, from initial measurement to final installation.
              </p>

              <div className="hidden lg:block pt-12 border-t border-slate-100">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-[#1F2E5A] text-white rounded-none font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-slate-900 transition-all duration-500 shadow-xl">
                    General Inquiry
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Refined Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-100 border-t border-slate-100">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between py-6 text-left focus:outline-none transition-all"
                  >
                    <div className="flex gap-6 md:gap-8">
                      <span className="text-primary/30 text-lg font-black tracking-tighter mt-1.5 font-serif group-hover:text-primary transition-colors">
                        {faq.id}
                      </span>
                      <span className={`text-xl md:text-2xl font-black tracking-tight transition-all duration-500 ${openIndex === index ? 'text-[#1F2E5A]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`mt-2 shrink-0 transition-all duration-500 ${openIndex === index ? 'rotate-180 text-primary' : 'text-slate-300'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-20 md:pl-24 pr-12">
                          <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl">
                            {faq.answer}
                          </p>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
