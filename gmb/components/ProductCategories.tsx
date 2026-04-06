'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ProductCategories = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent" id="categories">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Signature Collections</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900 mb-3">
                Our <span className="gradient-text"><span className="italic">Product</span> Categories</span>
              </h2>
              <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
                Choose from our wide range of premium window treatments tailored to your style.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.09}>
          {ALL_PRODUCTS.slice(0, 6).map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[420px] overflow-hidden rounded-[1.5rem] cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1.5 transition-colors group-hover:text-primary/90">{category.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed font-light">{category.description}</p>
                <Link href={`/products?category=${category.slug}`} className="mt-4">
                  <button className="text-white font-medium flex items-center gap-2 hover:text-primary transition-colors group/btn">
                    Browse Category
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* View All Card Banner */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[1.5rem] bg-[#1F2E5A] sm:col-span-2 lg:col-span-3 group transition-all duration-500 shadow-md"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 sm:p-12 lg:p-16 gap-8">
              <div className="flex-1 max-w-2xl">
                <h3 className="text-white text-3xl md:text-4xl lg:text-[2.5rem] font-semibold mb-4 tracking-wide">
                  View All Categories
                </h3>
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                  Explore our complete collection of premium window treatments, smart tech, and accessories.
                </p>
              </div>

              <Link href="/products" className="shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden bg-white text-slate-900 px-10 py-5 rounded-full font-semibold tracking-wide text-sm sm:text-base transition-all duration-300 flex items-center gap-3 shadow-sm"
                >
                  Explore Catalog
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductCategories;
