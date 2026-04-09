'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  accentColor?: string;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  centered = false,
  accentColor = '#1756a0',
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
          {!centered && <div className="w-8 h-px" style={{ backgroundColor: accentColor }} />}
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: accentColor }}>
            {eyebrow}
          </span>
          {centered && <div className="w-8 h-px" style={{ backgroundColor: accentColor }} />}
        </div>
      )}
      
      <h2 className={`font-display font-bold text-[#0f172a] text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight ${description ? 'mb-6' : ''}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
