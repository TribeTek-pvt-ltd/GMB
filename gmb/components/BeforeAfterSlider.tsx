"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  title?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className = "", title }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance motion value for direct DOM updates
  const xPercent = useMotionValue(50);
  
  // Weighted spring for a "premium" tactile feeling
  const springX = useSpring(xPercent, { 
    stiffness: 120, 
    damping: 30, 
    mass: 0.8,
    restDelta: 0.001 
  });
  
  // Transform the spring into a clip-path string for the 'after' overlay
  // This bypasses React's render loop during user dragging
  const clipPathValue = useTransform(springX, (latest) => `inset(0 ${100 - latest}% 0 0)`);
  const handlePosition = useTransform(springX, (latest) => `${latest}%`);

  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const pos = ((clientX - rect.left) / rect.width) * 100;
      xPercent.set(Math.min(Math.max(pos, 0), 100));
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      className={`relative w-full h-full overflow-hidden cursor-ew-resize select-none bg-slate-100 group/slider ${className}`}
    >
      {/* Before Image (Static Frame) */}
      <div className="absolute inset-0">
        <Image 
          src={beforeImage} 
          alt="Before Installation" 
          fill 
          className="object-cover brightness-[0.9]" 
          onLoad={() => setIsLoaded(true)}
          draggable={false}
          priority
        />
        
        {/* Origin Badge */}
        <div className="absolute top-8 left-8 z-10 flex flex-col gap-1 items-start">
          <span className="px-4 py-1.5 bg-slate-900/90 backdrop-blur-md border-l-2 border-primary text-[10px] font-black uppercase tracking-[0.3em] text-white rounded-none shadow-2xl">
            ORIGIN
          </span>
          <span className="text-[12px] font-black text-white/40 tracking-widest mt-1">BEFORE</span>
        </div>
      </div>

      {/* After Image (High-Performance Clipped Overlay) */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none border-r border-white/30 shadow-[10px_0_30px_rgba(0,0,0,0.2)]"
        style={{ 
          clipPath: clipPathValue,
          willChange: "clip-path" // Force GPU acceleration for clipping
        }}
      >
        <Image 
          src={afterImage} 
          alt="After Installation" 
          fill 
          className="object-cover" 
          draggable={false}
          priority
        />
        
        {/* Success Badge */}
        <div className="absolute top-8 right-8 z-10 flex flex-col gap-1 items-end">
          <span className="px-4 py-1.5 bg-primary backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-white rounded-none shadow-2xl shadow-primary/20">
            TRANSFORMATION
          </span>
          <span className="text-[12px] font-black text-primary tracking-widest mt-1">AFTER</span>
        </div>
      </motion.div>

      {/* Central Handle System (Directly Mapped to Motion Value) */}
      <motion.div 
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: handlePosition }}
      >
        {/* Handle Body - Minimalist Architectural Line */}
        <div className="w-[1px] h-full bg-white/50 backdrop-blur-sm relative flex items-center justify-center">
            {/* Minimalist Floating Circle */}
            <motion.div 
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)"
              }}
              className="w-12 h-12 rounded-none border-[0.5px] border-slate-900/10 flex items-center justify-center shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1.5">
                <div className="w-[2px] h-4 bg-slate-900/20" />
                <div className="w-[2px] h-4 bg-primary" />
                <div className="w-[2px] h-4 bg-slate-900/20" />
              </div>
            </motion.div>

            {/* Float Indication Label */}
            <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-16 whitespace-nowrap bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-none shadow-2xl border-l border-primary"
                  >
                    SLIDE TO REVEAL
                  </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>

      {/* Background Hint for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none opacity-40 group-hover/slider:opacity-20 transition-opacity duration-1000" />
    </motion.div>
  );
};

export default BeforeAfterSlider;
