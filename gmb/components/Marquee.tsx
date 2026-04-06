"use client";

import { motion } from "framer-motion";

const keywords = [
  "Signature Silks",
  "Motorized Smart Home",
  "Bespoke Craftsmanship",
  "Expert Consultation",
  "Italian Textiles",
  "Architectural Precision",
  "Luxury Redefined",
];

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 py-10 md:py-16 border-y border-white/5">
      <div className="flex whitespace-nowrap">
        {/* First Copy */}
        <motion.div
          className="flex items-center gap-12 md:gap-20 px-6 md:px-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {keywords.map((word, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-20">
              <span className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-tighter">
                {word}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          ))}
        </motion.div>
        
        {/* Second Copy for Seamless Loop */}
        <motion.div
          className="flex items-center gap-12 md:gap-20 px-6 md:px-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {keywords.map((word, i) => (
            <div key={i+"-copy"} className="flex items-center gap-12 md:gap-20">
              <span className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-tighter">
                {word}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Cinematic Glare Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
};

export default Marquee;
