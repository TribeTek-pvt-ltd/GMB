'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const tagColors: { [key: number]: { bg: string; text: string; label: string } } = {
  0: { bg: 'bg-[#3d9e41]', text: 'text-white', label: 'Best Seller' },
  2: { bg: 'bg-[#1756a0]', text: 'text-white', label: 'Premium' },
  4: { bg: 'bg-[#0f172a]', text: 'text-white', label: 'New Arrival' },
};

const ProductCategories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc]" id="categories" ref={ref}>
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#3d9e41]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#3d9e41]">Our Products</span>
            </div>
            <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight">
              Every Style.<br />Every Window.
            </h2>
          </div>
          <Link href="/products">
            <button className="border border-slate-300 text-slate-600 hover:border-[#3d9e41] hover:bg-[#3d9e41] hover:text-white px-7 py-3.5 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap bg-white shadow-sm">
              View All Products
            </button>
          </Link>
        </motion.div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL_PRODUCTS.slice(0, 6).map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="h-full"
            >
              <Link href={`/products?category=${cat.slug}`} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(23,86,160,0.08)] hover:border-[#3d9e41]/30 transition-all duration-400">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
                  <Image
                    src={cat.image} alt={cat.title} fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay to make tags pop if present */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                  {/* Tag */}
                  {tagColors[i] && (
                    <div className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full ${tagColors[i].bg} ${tagColors[i].text} text-[8px] font-bold uppercase tracking-[0.22em] shadow-sm z-10`}>
                      {tagColors[i].label}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#0f172a] text-xl md:text-2xl mb-3 tracking-tight group-hover:text-[#3d9e41] transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-1 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Call to action arrow */}
                  <div className="flex items-center gap-3 mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
                      Explore Collection
                    </span>
                    <svg className="w-4 h-4 text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom guidance banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:mt-16 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-14 py-12 border border-slate-200 border-l-4 border-l-[#3d9e41] shadow-sm"
        >
          <div>
            <p className="text-[#3d9e41] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Need advice?</p>
            <h3 className="font-display font-bold text-[#0f172a] text-2xl md:text-3xl tracking-tight">Let our experts guide you.</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <button className="bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-8 py-4 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap shadow-sm shadow-green-200">
                Book Free Consultation
              </button>
            </Link>
            <Link href="/products">
              <button className="bg-white border border-slate-200 text-slate-600 hover:border-[#1756a0]/50 hover:text-[#1756a0] px-8 py-4 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap shadow-sm">
                Browse All
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductCategories;
