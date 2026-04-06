"use client";

import React from "react";
import { motion } from "framer-motion";
import StandardButton from "./StandardButton";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Material Palette",
    description: "Browse our curated collection of linens, suedes, and sheers. Order free samples to experience the textures first-hand.",
    cta: "Order Free Samples",
    href: "/contact?form=samples",
  },
  {
    id: "02",
    title: "Technical Precision",
    description: "Our master consultant visits your space to perform exact architectural measurements and offer bespoke design advice.",
    cta: "Book Consultation",
    href: "/contact?form=measure",
  },
  {
    id: "03",
    title: "Artisan Tailoring",
    description: "Every window treatment is custom-built in our precision facility, where traditional craftsmanship meets modern engineering.",
    cta: "Learn Manufacture",
    href: "/about#process",
  },
  {
    id: "04",
    title: "Flawless Integration",
    description: "White-glove installation ensures a perfect fit and operation. We provide a complete walkthrough and care guide.",
    cta: "See Gallery",
    href: "/gallery",
  },
];

const ArtisanJourney = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden border-y border-slate-100">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1F2E5A 1px, transparent 0)', backgroundSize: '60px 60px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8 group cursor-default">
            <div className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Precision Path</span>
            <div className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#1F2E5A] mb-8 tracking-tighter leading-[0.95]">
            The Artisan <br />
            <span className="italic font-medium text-primary drop-shadow-[0_0_20px_rgba(52,211,153,0.1)]">Journey.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            From the first tactile selection to the final flawless install, experience a seamless process guided by architectural standards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-white p-8 md:p-10 flex flex-col h-full group hover:bg-slate-50 transition-colors duration-500"
            >
              <div className="text-[10px] font-black font-serif text-primary mb-12 flex items-center gap-4">
                <span className="opacity-40">STEP</span>
                <span className="text-xl tracking-tighter">{step.id}</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              
              <h3 className="text-2xl font-black text-[#1F2E5A] mb-6 tracking-tight group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              
              <p className="text-slate-500 text-xs leading-relaxed mb-12 flex-1 font-light">
                {step.description}
              </p>

              <Link href={step.href}>
                <button className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-primary transition-all flex items-center gap-3">
                  {step.cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <div className="mt-20 pt-20 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h4 className="text-[#1F2E5A] text-xl font-bold mb-2 uppercase tracking-wide">Ready to define your space?</h4>
            <p className="text-slate-500 text-sm">Experience the GMB difference first-hand with a private consultation.</p>
          </div>
          <Link href="/contact">
            <StandardButton variant="secondary" className="px-12 py-6">
              Establish Your Vision
            </StandardButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtisanJourney;
