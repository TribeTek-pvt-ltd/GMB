'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function CollectionsPage() {
   const [activeChapter, setActiveChapter] = useState(1);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPos = window.scrollY + window.innerHeight / 2;
         const sections = document.querySelectorAll('.chapter-section');
         sections.forEach((section, idx) => {
            const top = (section as HTMLElement).offsetTop;
            const height = (section as HTMLElement).offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
               setActiveChapter(idx + 1);
            }
         });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div className="min-h-screen bg-[#f8f7f4] transition-colors duration-1000 overflow-x-hidden">

         {/* Sticky Chapter Indicator (Desktop) */}
         <div className="fixed left-12 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-10 items-center">
            {[1, 2, 3].map((num) => (
               <div key={num} className="flex flex-col items-center gap-4 group cursor-pointer" onClick={() => {
                  const target = document.getElementById(`chapter-0${num}`);
                  target?.scrollIntoView({ behavior: 'smooth' });
               }}>
                  <span className={`text-[10px] font-black tracking-[0.4em] transition-all duration-500 rotate-90 origin-center translate-y-4 ${
                     activeChapter === num ? 'text-primary scale-125' : 'text-slate-300'
                  }`}>
                     0{num}
                  </span>
                  <div className={`w-0.5 transition-all duration-700 ${
                     activeChapter === num ? 'h-16 bg-primary shadow-[0_0_15px_rgba(76,175,80,0.5)]' : 'h-8 bg-slate-200 group-hover:bg-slate-300'
                  }`} />
               </div>
            ))}
         </div>

         {/* Hero Section */}
         <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden px-6">
            <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
               <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
            </div>
            
            <div className="container max-w-7xl mx-auto relative z-10">
               <ScrollReveal delay={0.1}>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                     <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 mb-2">
                           <div className="w-6 h-px bg-primary" />
                           <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Masterpiece Collections</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-[#1F2E5A] mb-4 font-serif">
                           Signature <span className="gradient-text italic font-medium pr-2">Collections</span>
                        </h1>
                        <p className="mt-4 text-slate-500 text-lg md:text-xl leading-relaxed font-light">
                           Explore our complete collection of premium window treatments, expertly curated for modern architectural spaces.
                        </p>
                     </div>
                  </div>
               </ScrollReveal>
            </div>
         </section>

         {/* CHAPTER 01: Soft Treatments (Airy & Light) */}
         <section id="chapter-01" className="chapter-section py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-5 sticky top-40">
                     <ScrollReveal>
                        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Chapter 01</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1F2E5A] font-serif mb-8 leading-tight">
                           The Art of <br />
                           <span className="italic font-medium text-primary">Soft</span> Motion
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-light mb-12">
                           Luxuriously soft curtains and sheers, sourced from elite global mills. We don’t just hang textiles—we choreograph the natural light in your home.
                        </p>
                        <div className="flex flex-col gap-6 border-l-2 border-slate-100 pl-8">
                           {PRODUCT_CATEGORIES[0].items.map((item, idx) => (
                              <Link key={idx} href={`/products/${item.slug}`} className="group flex items-center gap-4 text-[#1F2E5A] hover:text-primary transition-colors">
                                 <span className="text-xs font-black text-slate-300 group-hover:text-primary transition-colors">0{idx + 1}</span>
                                 <span className="text-lg font-bold tracking-tight">{item.title}</span>
                              </Link>
                           ))}
                        </div>
                     </ScrollReveal>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                     {PRODUCT_CATEGORIES[0].items.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1} className={idx % 2 !== 0 ? 'md:mt-24' : ''}>
                           <Link href={`/products/${item.slug}`} className="group block relative overflow-hidden rounded-[2.5rem] bg-slate-50 aspect-[3/4] shadow-2xl transition-all duration-700">
                              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                 <h3 className="text-white text-2xl font-bold font-serif">{item.title}</h3>
                                 <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Explore Perspective</p>
                              </div>
                           </Link>
                        </ScrollReveal>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CHAPTER 02: Blinds & Hard Covers (Geometric Grid) */}
         <section id="chapter-02" className="chapter-section py-24 md:py-40 bg-slate-50 relative overflow-hidden border-y border-slate-200">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1f2e5a_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center mb-24 max-w-3xl mx-auto">
                  <ScrollReveal>
                     <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Chapter 02</span>
                     <h2 className="text-5xl md:text-7xl font-bold text-[#1F2E5A] font-serif mb-8">Structural Precision</h2>
                     <p className="text-slate-500 text-lg font-light leading-relaxed">
                        Modern, versatile styles designed for practical light control and architectural geometry.
                     </p>
                  </ScrollReveal>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCT_CATEGORIES[1].items.map((item, idx) => (
                     <ScrollReveal key={idx} delay={idx * 0.1}>
                        <Link href={`/products/${item.slug}`} className="group block relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-xl transition-all duration-700 border border-white">
                           <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000" />
                           <div className="absolute inset-x-4 bottom-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-transform duration-500">
                              <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                              <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-none">Perspective 0{idx + 1}</p>
                           </div>
                        </Link>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>

         {/* CHAPTER 03: Systems & Smart Tech (Dramatic Dark) */}
         <section id="chapter-03" className="chapter-section py-24 md:py-48 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30" />
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
               <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                  <div className="flex-1">
                     <ScrollReveal>
                        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4 block">Chapter 03</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-8 leading-tight">
                           Intelligent <br />
                           <span className="gradient-text italic font-medium pr-8">Systems</span>
                        </h2>
                     </ScrollReveal>
                  </div>
                  <div className="flex-1">
                     <ScrollReveal>
                        <p className="text-slate-400 text-xl leading-relaxed font-light">
                           Reliable automation and smart integrations for the modern home. The invisible magic behind your window treatments.
                        </p>
                     </ScrollReveal>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {PRODUCT_CATEGORIES[2].items.map((item, idx) => (
                     <ScrollReveal key={idx} delay={idx * 0.1}>
                        <Link href={`/products/${item.slug}`} className="group flex flex-col md:flex-row gap-8 bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[3rem] transition-all duration-700 h-full">
                           <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                              <Image src={item.image} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                              {item.isNew && (
                                 <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">NEW</span>
                              )}
                           </div>
                           <div className="w-full md:w-1/2 flex flex-col justify-center">
                              <h3 className="text-white text-3xl font-bold font-serif mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">{item.description}</p>
                              <div className="flex items-center gap-4 text-primary font-black text-[10px] uppercase tracking-[0.4em] transition-transform duration-500">
                                 <span>The Tech</span>
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                              </div>
                           </div>
                        </Link>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>

         {/* Final Narrative Closer */}
         <section className="py-24 md:py-40 bg-slate-950 text-center relative overflow-hidden">
            {/* Ambient luxury glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent-yellow/5 rounded-full blur-[80px] translate-y-1/3 pointer-events-none"></div>

            <ScrollReveal className="relative z-10">
               <div className="h-px w-20 bg-primary/20 mx-auto mb-10" />
               <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-8 italic">Ready to redefine your space?</h2>
               <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Discover the perfect architectural fit for your home.</p>
               <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-[#4CAF50] text-white text-lg font-bold rounded-2xl shadow-xl transition-all">
                  Request Free Quote
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </Link>
            </ScrollReveal>
         </section>

      </div>
   );
}
