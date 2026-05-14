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
  withGlow?: boolean;
  compact?: boolean;
}

const Hero = ({
  eyebrow,
  title,
  description,
  centered = false,
  accentColor = '#1756a0',
  className = '',
  children,
  eyebrowLine = true,
  withGlow = false,
  compact = false,
}: HeroProps) => {
  return (
    <section className={`relative pt-16 pb-20 md:pt-20 md:pb-28 bg-transparent overflow-hidden ${className}`}>

      {withGlow && (
        <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#1756a0]/[0.012] blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#3d9e41]/[0.010] blur-[120px]" />
        </div>
      )}

      <Container className="relative z-10">
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} max-w-4xl ${centered ? 'mx-auto' : ''}`}>

          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-3 ${compact ? 'mb-4' : 'mb-6'} ${centered ? 'justify-center' : ''}`}
            >
              {eyebrowLine && <div className="w-8 h-px" style={{ backgroundColor: `${accentColor}cc` }} />}
              <span
                className="text-[10px] font-bold tracking-[0.25em] uppercase"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </span>
              {eyebrowLine && centered && <div className="w-8 h-px" style={{ backgroundColor: `${accentColor}cc` }} />}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className={`font-display font-medium text-[#0f172a] text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] tracking-tight ${compact ? 'mb-4' : 'mb-8'}`}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className={`text-slate-500 text-lg md:text-xl font-light leading-[1.7] max-w-2xl ${centered ? 'mx-auto' : ''} ${compact ? 'mb-4' : 'mb-8'}`}
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
              className={`w-full ${centered ? 'flex justify-center' : ''}`}
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
