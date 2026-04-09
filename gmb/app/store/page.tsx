'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { STORE_DATA } from '@/lib/data/store';
import Hero from '@/components/ui/Hero';


export default function StoreListingPage() {
  const [activeTab, setActiveTab] = useState<'blinds' | 'curtains'>('blinds');

  return (
    <div className="bg-[#f8fafc] w-full h-full flex flex-col pt-12">

      <div className="flex-1 pt-0 pb-24">
        <Hero 
          centered
          eyebrow="Online Store"
          title="Shop Configurations."
          accentColor="#3d9e41"
          className="!pb-0 !bg-transparent"
        >
          {/* Minimal Toggle Ribbon */}
          <div className="bg-white p-1.5 rounded-full border border-slate-200/60 shadow-sm flex items-center w-full max-w-xs relative z-10 mx-auto">
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
        </Hero>

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
                  <ProductCard
                    href={`/store/${product.id}`}
                    image={product.image}
                    title={product.name}
                    badge={
                      <span className="bg-white/95 backdrop-blur-md text-slate-600 text-[8px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3d9e41]" />
                        {product.leadTime}
                      </span>
                    }
                    subLabel="Custom Made"
                    ctaText="Shop & Configure"
                    priceBlock={
                      <>
                        <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] block mb-1">From</span>
                        <span className="font-display font-bold text-[#3d9e41] text-2xl tracking-tight">
                          ${product.price}
                        </span>
                      </>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
      </div>
    </div>
  );
}
