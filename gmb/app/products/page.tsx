'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function ProductsOverviewPage() {
   const [activeGroupIndex, setActiveGroupIndex] = useState(0);

   const activeGroup = PRODUCT_CATEGORIES[activeGroupIndex];

   return (
      <main className="min-h-screen bg-[#f8fafc] flex flex-col">
         <Navbar />

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
                           <Link
                              href={`/products/${item.slug}`}
                              className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(23,86,160,0.08)] hover:border-[#1756a0]/30 transition-all duration-400"
                           >
                              {/* Image Container */}
                              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                 />
                                 {/* Overlay to pop tags */}
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                                 {/* NEW Badge */}
                                 {item.isNew && (
                                    <div className="absolute top-5 left-5 z-10 hidden sm:block">
                                       <span className="bg-[#3d9e41] text-white text-[8px] font-bold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full shadow-sm">
                                          New Arrival
                                       </span>
                                    </div>
                                 )}

                                 {/* Model Number / Decoration */}
                                 <div className="absolute bottom-4 right-5 text-white/90 text-sm font-display font-bold select-none drop-shadow-md">
                                    0{idx + 1}
                                 </div>
                              </div>

                              {/* Content Container */}
                              <div className="p-6 sm:p-8 flex flex-col flex-1">
                                 <span className="text-[#1756a0] text-[9px] font-bold uppercase tracking-[0.2em] mb-3 block opacity-80">
                                    {activeGroup.title}
                                 </span>
                                 
                                 <h3 className="font-display font-bold text-[#0f172a] text-2xl mb-3 tracking-tight group-hover:text-[#1756a0] transition-colors duration-300">
                                    {item.title}
                                 </h3>
                                 
                                 <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-1 line-clamp-2">
                                    {item.description}
                                 </p>

                                 {/* Sub-categories (Features) listed elegantly */}
                                 {item.subCategories && item.subCategories.length > 0 && (
                                    <div className="mb-8 flex flex-wrap gap-2">
                                       {item.subCategories.slice(0, 3).map((sub, sIdx) => (
                                          <div key={sIdx} className="bg-[#f8fafc] border border-slate-100 px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                                             {sub}
                                          </div>
                                       ))}
                                    </div>
                                 )}

                                 {/* Call to action arrow */}
                                 <div className="flex items-center gap-3 mt-auto border-t border-slate-100 pt-5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
                                       Explore Details
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

            </div>
         </div>

         <Footer />
      </main>
   );
}
