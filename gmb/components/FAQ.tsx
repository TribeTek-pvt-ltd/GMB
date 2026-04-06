"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { itemVariants } from './AnimatedSection';

const faqData = [
  {
    question: "Do you provide free on-site measurements?",
    answer: "Yes, we provide professional on-site measurements at no cost. Our experts will visit your space to ensure a perfect fit and provide a detailed consultation on styles and fabrics."
  },
  {
    question: "How long does the custom installation process take?",
    answer: "Typically, custom curtains and blinds are ready for installation within 2-3 weeks of the initial measurement. The actual installation usually takes only a few hours."
  },
  {
    question: "What is the warranty on motorized blinds?",
    answer: "Our smart motorized systems come with a comprehensive 5-year warranty on the motor and a 2-year warranty on the fabric and mounting hardware."
  },
  {
    question: "Are your fabrics child and pet safe?",
    answer: "Absolutely. We offer a wide range of cordless and motorized options that are safe for children and pets. All our fabrics also meet international safety and flame-retardant standards."
  },
  {
    question: "Can I request fabric samples before placing an order?",
    answer: "Yes! We encourage clients to see and feel the materials. You can request up to 5 fabric swatches to be delivered to your home for free."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Got Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900 mb-4">
            Frequently Asked <span className="gradient-text italic">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our premium window treatments and services.
          </p>
        </motion.div>

        <AnimatedSection className="space-y-3" staggerDelay={0.07}>
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-slate-200 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
              >
                <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    openIndex === index
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
