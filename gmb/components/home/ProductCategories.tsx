'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const TAGS: Record<number, { color: string; bg: string; label: string }> = {
  0: { color: '#3d9e41', bg: 'rgba(61,158,65,0.1)', label: 'Best Seller' },
  2: { color: '#1756a0', bg: 'rgba(23,86,160,0.1)', label: 'Premium' },
  4: { color: '#0f172a', bg: 'rgba(15,23,42,0.08)', label: 'New Arrival' },
};

const ProductCategories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-white" id="categories" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#3d9e41]" />
              <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#3d9e41]">Our Products</span>
            </div>
            <h2 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1]">
              Every style.<br />Every window.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 shrink-0 border border-slate-200 bg-white hover:border-[#3d9e41]/50 hover:text-[#3d9e41] text-slate-600 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
          >
            View All Products
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_PRODUCTS.slice(0, 6).map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:border-[#1756a0]/20 hover:shadow-[0_20px_60px_-15px_rgba(23,86,160,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image} alt={cat.title} fill
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  {TAGS[i] && (
                    <div
                      className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
                      style={{ color: TAGS[i].color, background: 'rgba(255,255,255,0.88)', border: `1px solid ${TAGS[i].color}30` }}
                    >
                      {TAGS[i].label}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#0f172a] text-lg md:text-xl mb-2.5 tracking-tight group-hover:text-[#1756a0] transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-5 flex-1 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
                      Explore Collection
                    </span>
                    <svg className="w-3.5 h-3.5 text-[#1756a0] group-hover:text-[#3d9e41] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Guidance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          className="mt-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-[#3d9e41]/10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8 shadow-[0_10px_40px_-10px_rgba(61,158,65,0.05)]"
        >
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-[#3d9e41]/8 border border-[#3d9e41]/15 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#3d9e41]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3d9e41] mb-1">Need advice?</p>
              <h3 className="font-display font-bold text-[#0f172a] text-xl tracking-tight">Let our experts guide you to the perfect fit.</h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#3d9e41] hover:bg-[#2e7d31] text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm shadow-green-200/60 whitespace-nowrap">
              Book Free Consultation
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-[#1756a0]/40 hover:text-[#1756a0] text-slate-600 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap">
              Browse All
            </Link>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default ProductCategories;
