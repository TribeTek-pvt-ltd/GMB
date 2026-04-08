'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

const STORE_DATA = {
  blinds: [
    { id: 'roller-blinds', name: 'Roller Blinds', image: '/images/curtain1.png', price: 159, leadTime: 'Ready in 2-3 weeks' },
    { id: 'roman-blinds', name: 'Roman Blinds', image: '/images/curtain2.png', price: 219, leadTime: 'Ready in 3-4 weeks' },
    { id: 'double-blinds', name: 'Double Blinds', image: '/images/curtain3.png', price: 299, leadTime: 'Ready in 2-3 weeks' },
  ],
  curtains: [
    { id: 'sheer-curtains', name: 'Sheer Curtains', image: '/images/curtain4.png', price: 337, leadTime: 'Ready in 3-4 weeks' },
    { id: 'blockout-curtains', name: 'Blockout Curtains', image: '/images/curtain5.png', price: 399, leadTime: 'Ready in 3-4 weeks' },
    { id: 'double-curtains', name: 'Double Curtains', image: '/images/curtain1.png', price: 659, leadTime: 'Ready in 3-4 weeks' },
  ]
};

export default function StoreListingPage() {
  const [activeTab, setActiveTab] = useState<'blinds' | 'curtains'>('blinds');

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-24">
        <section className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#3d9e41]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#3d9e41]">Online Store</span>
                <div className="w-6 h-px bg-[#3d9e41]" />
              </div>
              <h1 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-10">
                Shop Configurations.
              </h1>

              {/* Minimal Toggle Ribbon */}
              <div className="bg-white p-1.5 rounded-full border border-slate-200/60 shadow-sm flex items-center w-full max-w-xs relative z-10">
                <button
                  onClick={() => setActiveTab('blinds')}
                  className={`flex-1 py-3 px-6 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeTab === 'blinds'
                      ? 'bg-[#1756a0] text-white shadow-md'
                      : 'text-slate-500 hover:text-[#1756a0]'
                    }`}
                >
                  Blinds
                </button>
                <button
                  onClick={() => setActiveTab('curtains')}
                  className={`flex-1 py-3 px-6 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeTab === 'curtains'
                      ? 'bg-[#1756a0] text-white shadow-md'
                      : 'text-slate-500 hover:text-[#1756a0]'
                    }`}
                >
                  Curtains
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Minimal Bento Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {STORE_DATA[activeTab].map((product, idx) => (
                <motion.div
                   key={`${activeTab}-${product.id}`}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.4, delay: idx * 0.05 }}
                   className="h-full"
                >
                  <Link
                    href={`/store/${product.id}`}
                    className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(23,86,160,0.08)] hover:border-[#1756a0]/30 transition-all duration-400"
                  >
                    {/* Image Top Half */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                      
                      {/* Lead Time Badge replacing Pill */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="bg-white/95 backdrop-blur-md text-slate-600 text-[8px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#3d9e41]" />
                           {product.leadTime}
                        </span>
                      </div>
                    </div>

                    {/* Text Details Container */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] block mb-1">Custom Made</span>
                          <h3 className="font-display font-bold text-[#0f172a] text-2xl tracking-tight group-hover:text-[#1756a0] transition-colors duration-300">
                            {product.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] block mb-1">From</span>
                          <span className="font-display font-bold text-[#3d9e41] text-2xl tracking-tight">
                            ${product.price}
                          </span>
                        </div>
                      </div>

                      {/* Call to action arrow */}
                      <div className="flex items-center gap-3 mt-auto border-t border-slate-100 pt-5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
                           Shop & Configure
                        </span>
                        <svg className="w-4 h-4 text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </section>
      </div>

      <Footer />
    </main>
  );
}
