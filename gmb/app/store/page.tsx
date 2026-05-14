'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/products/ProductCard';
import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import { STORE_DATA } from '@/lib/data/store';

const BADGE_COLORS: Record<string, string> = {
  Blockout: 'bg-[#1756a0]/10 text-[#1756a0]',
  'Light Filtering': 'bg-amber-50 text-amber-700',
  Sunscreen: 'bg-sky-50 text-sky-700',
  Sheer: 'bg-purple-50 text-purple-700',
  Combo: 'bg-[#3d9e41]/10 text-[#3d9e41]',
};

const TABS = [
  { key: 'blinds' as const, label: 'Blinds' },
  { key: 'curtains' as const, label: 'Curtains' },
];

export default function StoreListingPage() {
  const [activeTab, setActiveTab] = useState<'blinds' | 'curtains'>('blinds');
  const products = STORE_DATA[activeTab];

  return (
    <div className="bg-[#f8fafc] w-full flex flex-col">

      {/* ── Hero Section ── */}
      <Hero
        withGlow
        eyebrow="Online Store"
        title={<>Shop & Configure Window Coverings.</>}
        description="Custom-made blinds and curtains, measured to your window. Choose a style, configure your size, and we handle the rest."
        className="!pb-12"
      >
        {/* Tab Switcher */}
        <div className="mt-2">
          <div className="relative flex items-center bg-white border border-slate-200/70 rounded-full p-1 shadow-sm w-fit">
            {/* Animated pill */}
            <motion.div
              layoutId="tab-pill"
              className="absolute h-[calc(100%-8px)] rounded-full bg-[#1756a0] shadow-md"
              style={{
                width: `calc(50% - 4px)`,
                left: activeTab === 'blinds' ? 4 : '50%',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative z-10 min-w-[120px] py-2.5 px-7 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${activeTab === tab.key ? 'text-white' : 'text-slate-500 hover:text-[#1756a0]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </Hero>

      {/* ── Products Section ── */}
      <section className="pb-28">
        <Container>

          {/* Section Meta Row */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-1">
                  Showing
                </span>
                <span className="font-display font-semibold text-[#0f172a] text-lg tracking-tight">
                  {products.length} {activeTab === 'blinds' ? 'Blind' : 'Curtain'} Styles
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d9e41] inline-block" />
              Custom Made · Fast Delivery
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {products.map((product, idx) => (
                <motion.div
                  key={`${activeTab}-${product.id}`}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <ProductCard
                    href={`/store/${product.id}`}
                    image={product.image}
                    title={product.name}
                    badge={
                      <span className={`text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full flex items-center gap-1.5 ${BADGE_COLORS[product.badge] ?? 'bg-slate-100 text-slate-500'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current inline-block opacity-70" />
                        {product.badge}
                      </span>
                    }
                    subLabel={product.subCategory}
                    ctaText="Shop & Configure"
                    priceBlock={
                      <>
                        <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] block mb-0.5">From</span>
                        <span className="font-display font-bold text-[#1756a0] text-2xl tracking-tight">
                          ${product.price}
                        </span>
                        <span className="text-slate-400 text-[9px] ml-1">{product.colors} colours</span>
                      </>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Trust Strip */}
          <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📐', label: 'Measure to Fit', desc: 'Every item made to your exact window dimensions' },
              { icon: '🚚', label: 'Fast Delivery', desc: 'Most orders shipped within 2–4 weeks' },
              { icon: '✦', label: 'Premium Quality', desc: 'Commercial-grade fabrics & hardware standard' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 px-4">
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1756a0]">{item.label}</span>
                <span className="text-slate-400 text-xs leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </div>
  );
}
