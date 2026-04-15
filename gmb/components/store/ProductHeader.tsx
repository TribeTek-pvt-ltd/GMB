'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BADGE_BG } from './FabricData';
import type { StoreProduct } from '@/lib/data/store';

interface ProductHeaderProps {
  product: StoreProduct;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <button
        onClick={() => router.push('/store')}
        className="flex items-center gap-2 text-slate-400 hover:text-[#1756a0] transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Store
      </button>

      <div className="flex items-center gap-2 mb-2">
        <span className={`text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full ${BADGE_BG[product.badge] ?? 'bg-slate-200 text-slate-600'}`}>
          {product.badge}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
          {product.subCategory}
        </span>
      </div>

      <h1 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl tracking-tight leading-tight">
        Configure Your<br />
        <span className="text-[#1756a0]">{product.name}</span>
      </h1>
      <p className="text-slate-500 text-base mt-3 max-w-xl font-light leading-relaxed">
        {product.tagline}
      </p>
    </motion.div>
  );
}
