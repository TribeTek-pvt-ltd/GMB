'use client';

import { useState } from 'react';

import ScrollReveal from '@/components/shared/ScrollReveal';
import ProductCard from '@/components/products/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function ProductsOverviewPage() {
   const [activeGroupIndex, setActiveGroupIndex] = useState(0);
   const activeGroup = PRODUCT_CATEGORIES[activeGroupIndex];

   return (
      <div className="bg-[#f8f7f4] w-full min-h-screen flex flex-col relative">

         {/* Unified container — hero + filters + grid all share the same alignment */}
         <div className="flex-1 pt-24 pb-20">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16">

               {/* ── Page Header ─────────────────────────────────────────── */}
               <ScrollReveal delay={0.05}>
                  <div className="mb-8 border-b border-slate-200 pb-8">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-px bg-[#1756a0]" />
                        <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">
                           Our Collection
                        </span>
                     </div>

                     <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <h1 className="font-display font-bold text-[#0f172a] text-5xl md:text-6xl lg:text-[4.5rem] leading-[1] tracking-tight">
                           Refined Window<br />
                           <span className="font-medium italic text-[#1756a0]">Treatments.</span>
                        </h1>
                        <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-md lg:text-right">
                           Custom-made blinds, curtains &amp; shutters — engineered to elevate every architectural space.
                        </p>
                     </div>
                  </div>
               </ScrollReveal>

               {/* ── Category Filter Tabs ─────────────────────────────────── */}
               <ScrollReveal delay={0.15}>
                  <div className="flex flex-wrap items-center gap-2.5 mb-8">
                     {PRODUCT_CATEGORIES.map((group, idx) => (
                        <button
                           key={idx}
                           onClick={() => setActiveGroupIndex(idx)}
                           className={`relative px-7 py-3 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-400 ${
                              activeGroupIndex === idx
                                 ? 'bg-[#0f172a] text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)] scale-[1.04]'
                                 : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0f172a] shadow-sm'
                           }`}
                        >
                           {group.title}
                        </button>
                     ))}
                  </div>
               </ScrollReveal>

               {/* ── Product Grid ─────────────────────────────────────────── */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <AnimatePresence mode="popLayout">
                     {activeGroup.items.map((item, idx) => (
                        <motion.div
                           key={`${activeGroupIndex}-${item.slug}`}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.35, delay: idx * 0.05 }}
                           className="h-full"
                        >
                           <ProductCard
                              href={`/products/${item.slug}`}
                              image={item.image}
                              title={item.title}
                              sequenceNum={`0${idx + 1}`}
                              badge={item.isNew ? (
                                 <span className="bg-[#3d9e41] text-white text-[8px] font-bold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full shadow-sm">
                                    New Arrival
                                 </span>
                              ) : undefined}
                              subLabel={activeGroup.title}
                              description={item.description}
                              tags={item.subCategories}
                              ctaText="Explore Details"
                           />
                        </motion.div>
                     ))}
                  </AnimatePresence>
               </div>

            </div>
         </div>

      </div>
   );
}