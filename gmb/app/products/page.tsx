'use client';

import { useState } from 'react';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function ProductsOverviewPage() {
   const [activeGroupIndex, setActiveGroupIndex] = useState(0);

   const activeGroup = PRODUCT_CATEGORIES[activeGroupIndex];

   return (
      <div className="bg-[#f8fafc] w-full min-h-screen flex flex-col">

         <div className="flex-1 pt-32 pb-24">
            <div className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
               
               {/* Header Section */}
               <ScrollReveal delay={0.1}>
                  <div className="max-w-3xl mb-16">
                     <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-px bg-[#1756a0]" />
                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1756a0]">Our Collection</span>
                     </div>
                     <h1 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                        Premium Window<br />Treatments.
                     </h1>
                     <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light max-w-2xl">
                        Explore our complete collection of custom-made blinds, curtains, and shutters, expertly curated and engineered for modern architectural spaces.
                     </p>
                  </div>
               </ScrollReveal>

               {/* Category Navigation Ribbon */}
               <ScrollReveal delay={0.2}>
                  <div className="flex flex-wrap items-center gap-2 mb-14 border-b border-slate-200/60 pb-6">
                     {PRODUCT_CATEGORIES.map((group, idx) => (
                        <button
                           key={idx}
                           onClick={() => setActiveGroupIndex(idx)}
                           className={`relative px-6 py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                              activeGroupIndex === idx 
                              ? 'bg-[#1756a0] text-white shadow-md shadow-blue-900/10' 
                              : 'bg-white text-slate-500 border border-slate-200 hover:border-[#1756a0]/30 hover:text-[#1756a0]'
                           }`}
                        >
                           {group.title}
                        </button>
                     ))}
                  </div>
               </ScrollReveal>

               {/* 3-Column Minimal Grid Layout */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <AnimatePresence mode="popLayout">
                     {activeGroup.items.map((item, idx) => (
                        <motion.div
                           key={`${activeGroupIndex}-${item.slug}`}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.4, delay: idx * 0.05 }}
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
