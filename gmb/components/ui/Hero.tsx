'use client';

import { motion } from 'framer-motion';
import Container from './Container';
import React from 'react';

interface HeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  accentColor?: string;
  className?: string;
  children?: React.ReactNode; // Extra content below description
  eyebrowLine?: boolean;
}

const Hero = ({
  eyebrow,
  title,
  description,
  centered = false,
  accentColor = '#3d9e41',
  className = '',
  children,
  eyebrowLine = true,
}: HeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden ${className}`}>
      <Container>
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} max-w-4xl ${centered ? 'mx-auto' : ''}`}>
          
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}
            >
              {eyebrowLine && !centered && <div className="w-8 h-px" style={{ backgroundColor: accentColor }} />}
              <span 
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </span>
              {eyebrowLine && centered && <div className="w-8 h-px" style={{ backgroundColor: accentColor }} />}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className={`font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-7`}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-500 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-8"
            >
              {description}
            </motion.p>
          )}

          {/* Extra Content (Buttons, Forms, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
