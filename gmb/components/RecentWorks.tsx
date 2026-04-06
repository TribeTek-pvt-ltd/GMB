"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StandardButton from "./StandardButton";
import BeforeAfterSlider from "./BeforeAfterSlider";

const ProjectCard = ({ item, index, className = "" }: { item: any; index: number; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative group overflow-hidden bg-white architectural-border ${className}`}
    >
      {/* Background Image / Slider */}
      <div className="absolute inset-0 w-full h-full">
        {item.beforeImage ? (
          <BeforeAfterSlider 
            beforeImage={item.beforeImage} 
            afterImage={item.image} 
          />
        ) : (
          <>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            {/* Deep Focus Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-40'}`} />
          </>
        )}
      </div>

      {/* Project Dossier Reveal (Top Left) */}
      <div className="absolute top-0 left-0 p-8 z-40 pointer-events-none">
        <motion.div
           animate={{ 
             opacity: isHovered ? 1 : 0, 
             x: isHovered ? 0 : -20 
           }}
           className="flex flex-col gap-2"
        >
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-1">
            PROJECT DOSSIER
          </span>
          <div className="h-[1px] w-12 bg-white/30 mb-2" />
          <h4 className="text-white text-xl font-bold tracking-tight">{item.title}</h4>
          <span className="text-white/60 text-[11px] font-medium tracking-wider uppercase">
            {item.category || "Architectural Install"} • {item.location || "Victoria, AU"}
          </span>
        </motion.div>
      </div>

      {/* Floating Action Button (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-40">
        <Link href={`/gallery/${item.id || '#'}`}>
          <motion.div
            animate={{ 
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0
            }}
            className="w-14 h-14 bg-white flex items-center justify-center text-slate-900 shadow-2xl hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </Link>
      </div>

      {/* Transformation Marker (Bottom Left) */}
      {item.beforeImage && (
        <div className="absolute bottom-8 left-8 z-40">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">
                Interactive Transformation
              </span>
           </div>
        </div>
      )}
    </motion.div>
  );
};

const RecentWorks = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("/api/public/gallery");
        const data = await res.json();
        if (data.gallery && data.gallery.length > 0) {
          // Limit to only 5 recent works as requested
          setItems(data.gallery.slice(0, 5));
        }
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  return (
    <section className="min-h-screen py-24 bg-white relative overflow-hidden flex flex-col justify-center" id="recent-works">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#1F2E5A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em]">
                Portfolio Showcase
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#1F2E5A] mb-0 leading-[0.95]"
            >
              Real Installations <br />
              <span className="gradient-text italic font-medium pr-4">& Room Transformations</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-2"
          >
            <Link href="/gallery">
              <StandardButton variant="secondary" className="group px-8 py-5">
                <div className="flex items-center gap-3">
                  <span>View Archive</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </StandardButton>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid - Optimized for 5 items + 1 CTA (Total 6) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          {loading ? (
             Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-slate-100 animate-pulse aspect-video md:aspect-auto h-64 md:h-80 col-span-4" />
             ))
          ) : (
            <>
              {/* Row 1 & 2 Combined Asymmetric Pattern */}
              <ProjectCard key={items[0]?.id || 0} item={items[0]} index={0} className="md:col-span-8 md:row-span-2 h-[400px] md:h-auto" />
              <ProjectCard key={items[1]?.id || 1} item={items[1]} index={1} className="md:col-span-4 md:row-span-1 h-64 md:h-auto" />
              <ProjectCard key={items[2]?.id || 2} item={items[2]} index={2} className="md:col-span-4 md:row-span-1 h-64 md:h-auto" />
              
              {/* Row 3 */}
              <ProjectCard key={items[3]?.id || 3} item={items[3]} index={3} className="md:col-span-4 md:row-span-1 h-64 md:h-auto" />
              <ProjectCard key={items[4]?.id || 4} item={items[4]} index={4} className="md:col-span-4 md:row-span-1 h-64 md:h-auto" />
              
              {/* Perspective CTA Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-4 md:row-span-1 bg-slate-900 flex flex-col justify-between p-10 relative overflow-hidden group h-64 md:h-auto"
              >
                 <div className="absolute inset-0 bg-brand-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                 <div className="relative z-10">
                    <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-4 block">
                      Next Chapter
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                      Transform your space?
                    </h3>
                 </div>
                 <Link href="/contact" className="relative z-10">
                    <button className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:gap-6 transition-all duration-300">
                      Consultation
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                 </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
