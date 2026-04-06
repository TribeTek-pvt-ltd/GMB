"use client";

import { motion } from "framer-motion";

const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden opacity-[0.03]">
      <motion.div
        animate={{
          x: ["0%", "-5%", "5%", "-2%", "2%"],
          y: ["0%", "5%", "-5%", "2%", "-2%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
        }}
        className="absolute -inset-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"
      />
    </div>
  );
};

export default GrainOverlay;
