'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StepCardProps {
  step: number;
  title: string;
  desc?: string;
  children: ReactNode;
}

export default function StepCard({ step, title, desc, children }: StepCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: step * 0.04 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-7 h-7 rounded-full bg-[#1756a0] text-white text-[11px] font-black flex items-center justify-center shrink-0">
          {step}
        </span>
        <h3 className="text-sm font-bold text-[#0f172a] tracking-tight">{title}</h3>
      </div>
      {desc && <p className="text-xs text-slate-400 mb-4 leading-relaxed">{desc}</p>}
      {children}
    </motion.section>
  );
}
