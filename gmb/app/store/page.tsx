'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

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
    <main className="min-h-screen bg-[#f8f7f4] pt-20">
      <Navbar />

      <section className="container max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Our Store</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1F2E5A]">
              Shop Blinds & Curtains
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-md">
              Bespoke, made-to-measure window treatments crafted with precision and care.
            </p>

            {/* Tab Toggle */}
            <div className="relative bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center w-full max-w-[280px]">
              {/* Sliding indicator */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#1F2E5A] rounded-full shadow-md"
                animate={{ x: activeTab === 'blinds' ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                style={{ left: '6px' }}
              />
              <button
                onClick={() => setActiveTab('blinds')}
                className={`relative flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                  activeTab === 'blinds' ? 'text-white' : 'text-slate-500 hover:text-[#1F2E5A]'
                }`}
              >
                Blinds
              </button>
              <button
                onClick={() => setActiveTab('curtains')}
                className={`relative flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                  activeTab === 'curtains' ? 'text-white' : 'text-slate-500 hover:text-[#1F2E5A]'
                }`}
              >
                Curtains
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {STORE_DATA[activeTab].map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/store/${product.id}`} className="group block">
                  <motion.div
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-sm"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Label inside card */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-md border border-white/50 flex items-center justify-between">
                      <span className="font-medium text-[#1F2E5A] text-sm md:text-base truncate pr-2">
                        {product.name}
                      </span>
                      <div className="flex items-center gap-1 text-primary text-xs font-medium uppercase tracking-wide shrink-0">
                        <span>Shop</span>
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Info Below */}
                  <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-2 px-2">
                    <div>
                      <span className="text-slate-400 text-xs font-medium uppercase tracking-widest block mb-1">Starting From</span>
                      <span className="text-2xl font-semibold text-[#1F2E5A]">${product.price}.00</span>
                    </div>
                    <div className="bg-slate-100 text-slate-500 text-xs font-medium px-3 py-1.5 rounded-full inline-flex self-start md:self-auto items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {product.leadTime}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
