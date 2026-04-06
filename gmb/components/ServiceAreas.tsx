"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import StandardButton from "./StandardButton";
import { motion } from "framer-motion";

const areas = [
  "New York City", "Brooklyn", "Queens", "The Bronx", "Staten Island",
  "Jersey City", "Hoboken", "Newark", "Yonkers", "New Rochelle",
  "White Plains", "Greenwich", "Stamford", "Fort Lee", "Princeton"
];

const ServiceAreas = () => {
  return (
    <section className="py-24 md:py-32 relative bg-white overflow-hidden border-y border-slate-100">
      {/* Precision Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1F2E5A 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8 group cursor-default">
              <div className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">National Coverage</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 text-[#1F2E5A] tracking-tighter leading-[0.95]">
              Serving the <br />
              <span className="gradient-text italic font-medium pr-4">Tri-State Area.</span>
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 font-light leading-relaxed max-w-xl">
              From urban lofts to coastal estates, we provide professional consultation, measurement, and white-glove installation across the most prestigious regions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 mb-12">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-600 transition-all hover:translate-x-1 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-none bg-primary opacity-30 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">{area}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <StandardButton variant="primary" className="px-10 py-5">
                Check All Locations
              </StandardButton>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[350px] lg:h-[600px] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl group border border-slate-100"
          >
            <Image 
              src="/images/curtain3.png" 
              alt="Architectural Service Map" 
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* Architectural Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
