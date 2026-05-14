'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const getBentoClass = (index: number) => {
  switch (index) {
    case 0: return 'col-span-1 md:col-span-2 md:row-span-2';
    default: return 'col-span-1 md:col-span-1 md:row-span-1';
  }
};

const RecentWorks = () => {
  const [allGalleryItems, setAllGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/gallery');
        const data = await res.json();
        if (data.gallery?.length > 0) setAllGalleryItems(data.gallery);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const displayedItems = allGalleryItems.slice(0, 5);

  // if (loading) {
  //   return (
  //     <div className="py-24 bg-white flex flex-col items-center justify-center min-h-[480px]">
  //       <div className="w-7 h-7 rounded-full border-2 border-slate-100 border-t-[#1756a0] animate-spin mb-4" />
  //       <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px]">Loading Portfolio…</span>
  //     </div>
  //   );
  // }

  // if (!displayedItems.length) return null;

  return (
    <section className="py-24 md:py-32 bg-white" id="recent-works" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#1756a0]" />
              <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">Our Portfolio</span>
            </div>
            <h2 className="font-display font-medium text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] mb-3">
              Featured projects.
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              A curated selection of our finest installations — precision crafted and immaculately installed.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 shrink-0 border border-slate-200 bg-white hover:border-[#1756a0]/50 hover:text-[#1756a0] text-slate-600 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
          >
            View Full Gallery
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[620px]"
        >
          {displayedItems.map((item: any, index: number) => (
            <Link
              href="/gallery"
              key={`${item.id}-${index}`}
              className={`group relative rounded-[2rem] overflow-hidden block bg-white border border-slate-100 hover:border-[#1756a0]/30 hover:shadow-[0_20px_60px_-15px_rgba(23,86,160,0.15)] transition-all duration-500 ${getBentoClass(index)}`}
              style={{ minHeight: '240px' }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
              />

              {/* Minimal Category Pill (Always visible) */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/50 text-[8px] font-bold uppercase tracking-[0.2em] text-[#1756a0]">
                {item.category}
              </div>

              {/* Elegant White Frosted Glass Overlay on Hover */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-2xl rounded-[1.5rem] p-5 border border-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-[0_10px_30px_-10px_rgba(23,86,160,0.15)] flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className={`font-display font-medium text-[#0f172a] tracking-tight truncate ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  {index === 0 && item.description && (
                    <p className="text-slate-500 text-sm font-light mt-1 truncate">{item.description}</p>
                  )}
                </div>
                
                {/* Green Arrow Button */}
                <div className="w-10 h-10 rounded-full bg-[#3d9e41] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#3d9e41]/20 group-hover:scale-100 scale-75 transition-transform duration-500 delay-100">
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default RecentWorks;
