'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';
import StandardButton from './StandardButton';

const ProductCategories = () => {
  // Define bento grid layout mappings for the first few items
  const bentoLayouts = [
    { span: 'md:col-span-2 md:row-span-1', height: 'h-[300px]' }, // Curtains (Reduced)
    { span: 'md:col-span-1 md:row-span-1', height: 'h-[300px]' }, // Sheers (Reduced)
    { span: 'md:col-span-2 md:row-span-1', height: 'h-[300px]' }, // Pelmets 
    { span: 'md:col-span-1 md:row-span-1', height: 'h-[300px]' }, // Swags 
    { span: 'md:col-span-1 md:row-span-1', height: 'h-[300px]' }, // Blinds 
    { span: 'md:col-span-2 md:row-span-1', height: 'h-[300px]' }, // Roller Blinds
  ];

  return (
    <section className="min-h-0 py-12 md:py-20 bg-white flex flex-col justify-center" id="categories">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Curated Collections</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1F2E5A] mb-8 leading-[0.95]">
            Define Your <br />
            <span className="gradient-text italic font-medium pr-4">Atmosphere.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            From ethereal sheers to statement architectural blinds, explore our range of bespoke window solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 md:gap-6 lg:gap-8">
          {ALL_PRODUCTS.slice(0, 6).map((category, index) => {
            const layout = bentoLayouts[index] || { span: 'md:col-span-1', height: 'h-[400px]' };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${layout.span} group relative overflow-hidden rounded-none bg-slate-100 ${layout.height} border border-slate-200/50 hover:border-primary/30 transition-all duration-700 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10`}
              >
                {/* Image Component */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                />

                {/* Subtle Overlay Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E5A]/90 via-[#1F2E5A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Floating Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  {/* Category Pill */}
                  <div className="mb-4">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-none text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                      {category.slug.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                    {category.title}
                  </h3>

                  <p className="text-white/60 text-sm font-medium line-clamp-2 max-w-xs mb-6 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                    {category.description}
                  </p>

                  <Link href={`/products?category=${category.slug}`}>
                    <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.2em] transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                      Explore {category.title}
                      <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* Catalog CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-[#1F2E5A] rounded-none p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-white/5"
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-none blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                Can&apos;t Find Your <br />
                <span className="italic text-primary font-medium">Perfect Match?</span>
              </h3>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Browse our entire architectural catalog with over 500+ material combinations and smart home system integrations.
              </p>
            </div>

            <Link href="/products" className="relative z-10 w-full md:w-auto">
              <StandardButton variant="white" className="px-12 py-6 shadow-2xl">
                View Entire Catalog
              </StandardButton>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;
