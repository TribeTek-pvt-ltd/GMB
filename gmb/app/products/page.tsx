'use client';

import { useState } from 'react';

import ScrollReveal from '@/components/shared/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/categories';
import Hero from '@/components/ui/Hero';

export default function ProductsOverviewPage() {
   const [activeGroupIndex, setActiveGroupIndex] = useState(0);

   const activeGroup = PRODUCT_CATEGORIES[activeGroupIndex];

   return (
      <div className="bg-white w-full min-h-screen flex flex-col relative">

         <Hero
            withGlow
            eyebrow="Our Collection"
            title={<>Refined Window<br />Treatments.</>}
            description="Explore our complete collection of custom-made blinds, curtains, and shutters. Expertly curated and engineered to elevate modern architectural spaces with pristine elegance."
            // accentColor="#1756a0"
            className="!pt-32 !pb-12"
         />

         <div className="flex-1 pb-32 -mt-4">
            <div className="container max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 relative z-10">

               {/* Category Navigation Ribbon */}
               <ScrollReveal delay={0.2}>
                  <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-slate-100 pb-8 w-full">
                     {PRODUCT_CATEGORIES.map((group, idx) => (
                        <button
                           key={idx}
                           onClick={() => setActiveGroupIndex(idx)}
                           className={`relative px-8 py-3.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${activeGroupIndex === idx
                                 ? 'bg-[#0f172a] text-white shadow-[0_10px_30px_rgba(15,23,42,0.15)] scale-105'
                                 : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0f172a] shadow-sm'
                              }`}
                        >
                           {group.title}
                        </button>
                     ))}
                  </div>
               </ScrollReveal>

               {/* 3-Column Minimal Grid Layout */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
