'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function ProductsOverviewPage() {
   const [activeGroupIndex, setActiveGroupIndex] = useState(0);

   const activeGroup = PRODUCT_CATEGORIES[activeGroupIndex];

   return (
      <main className="min-h-screen bg-transparent selection:bg-primary/20">
         <Navbar />
         
         {/* Page Hero Background Effects */}
         <div className="fixed inset-0 pointer-events-none overflow-hidden z-[0]">
            <div className={`absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 transition-all duration-1000 ${
                  activeGroupIndex === 0 ? 'bg-primary' : activeGroupIndex === 1 ? 'bg-cyan-500' : 'bg-accent-yellow'
               }`} 
            />
            <div className={`absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 transition-all duration-1000 ${
                  activeGroupIndex === 0 ? 'bg-emerald-500' : activeGroupIndex === 1 ? 'bg-blue-600' : 'bg-amber-600'
               }`} 
            />
         </div>

         <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 mt-8 relative z-10">
            {/* Header Section - Signature Sync */}
            <ScrollReveal delay={0.1}>
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 mt-6">
                  <div className="max-w-xl">
                     <div className="inline-flex items-center gap-2 mb-2">
                        <div className="w-6 h-px bg-primary" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Signature Collections</span>
                     </div>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-[#1F2E5A] mb-2 font-serif">
                        Masterpiece <span className="gradient-text italic font-medium pr-2">Collections</span>
                     </h1>
                     <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
                        Explore our complete collection of premium window treatments, expertly curated for modern architectural spaces.
                     </p>
                  </div>
               </div>
            </ScrollReveal>

            {/* Category Tab Ribbon - Minimalist Transparent */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mb-16 sticky top-24 z-30 py-4 max-w-max mx-auto px-8 transition-all duration-500">
               {PRODUCT_CATEGORIES.map((group, idx) => (
                  <button
                     key={idx}
                     onClick={() => setActiveGroupIndex(idx)}
                     className={`group relative py-2 px-1 transition-all duration-500 ${
                        activeGroupIndex === idx ? 'text-primary' : 'text-slate-400 hover:text-slate-900'
                     }`}
                  >
                     <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative z-10">
                        {group.title}
                     </span>
                     {activeGroupIndex === idx && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left duration-500 shadow-[0_0_10px_rgba(76,175,80,0.3)]" />
                     )}
                  </button>
               ))}
            </div>

            {/* Horizontal Systems-Class Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
               {activeGroup.items.map((item, itemIdx) => (
                  <ScrollReveal key={itemIdx + activeGroupIndex} delay={itemIdx * 0.1}>
                      <Link
                        href={`/products/${item.slug}`}
                        className="group flex flex-col xl:flex-row gap-8 bg-white/70 backdrop-blur-xl border border-slate-200 p-6 md:p-8 rounded-[3.5rem] hover:border-primary/40 transition-all duration-700 h-full shadow-xl shadow-slate-200 group"
                     >
                        {/* Image Left Section */}
                        <div className="w-full xl:w-[45%] aspect-square relative rounded-[2.5rem] overflow-hidden shadow-lg ring-1 ring-slate-200">
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                           />
                           
                           {/* New Ribbon Badge */}
                           {item.isNew && (
                              <div className="absolute top-4 left-4 z-10">
                                 <span className="bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg aura-primary">
                                    NEW
                                 </span>
                              </div>
                           )}

                           {/* Perspective Watermark */}
                           <div className="absolute bottom-4 right-6 text-slate-100/50 text-6xl font-serif font-black select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
                              0{itemIdx + 1}
                           </div>
                        </div>

                        {/* Text Right Section */}
                        <div className="w-full xl:w-[55%] flex flex-col justify-center py-2">
                           <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block transition-transform">Collection Detail</span>
                           <h3 className="text-2xl md:text-4xl font-bold text-[#1F2E5A] font-serif mb-4 leading-tight group-hover:text-primary transition-colors">
                              {item.title}
                           </h3>
                           <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-grow opacity-90 group-hover:opacity-100 transition-opacity">
                              {item.description}
                           </p>

                           {/* Sub-Category List Expansion (Inline) */}
                           <div className="mb-10 grid grid-cols-2 gap-x-4 gap-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                              {item.subCategories?.slice(0, 4).map((sub, sIdx) => (
                                 <div key={sIdx} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors animate-pulse" />
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1F2E5A]/40 group-hover:text-[#1F2E5A]/70 truncate">{sub}</span>
                                 </div>
                              ))}
                           </div>

                           {/* Interactive CTA */}
                           <div className="flex items-center gap-4 text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] transition-transform duration-500 mt-auto">
                              <span className="group-hover:text-primary/80 transition-colors">The Masterpiece</span>
                              <div className="w-12 h-px bg-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:w-16" />
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                           </div>
                        </div>
                     </Link>
                  </ScrollReveal>
               ))}
            </div>

            {/* Interactive Bottom Accent */}
            <div className="mt-32 text-center relative">
               <div className="h-px w-24 bg-primary/20 mx-auto mb-10" />
               <p className="text-[#1F2E5A] text-lg md:text-xl font-serif italic max-w-xl mx-auto opacity-70">
                  "Architecture begins where engineering ends."
               </p>
               <p className="mt-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">GMB Curated Collections 2026</p>
            </div>
         </div>

         <Footer />
      </main>
   );
}
