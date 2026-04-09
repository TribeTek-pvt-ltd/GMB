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

  if (loading) {
    return (
      <div className="py-24 bg-white flex flex-col items-center justify-center min-h-[480px]">
        <div className="w-7 h-7 rounded-full border-2 border-slate-100 border-t-[#1756a0] animate-spin mb-4" />
        <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px]">Loading Portfolio…</span>
      </div>
    );
  }

  if (!displayedItems.length) return null;

  return (
    <section className="py-24 md:py-32 bg-white" id="recent-works" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#1756a0]" />
              <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-[#1756a0]">Our Portfolio</span>
            </div>
            <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl tracking-tight leading-tight mb-3">
              Featured Projects.
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
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[620px]"
        >
          {displayedItems.map((item: any, index: number) => (
            <Link
              href="/gallery"
              key={`${item.id}-${index}`}
              className={`group relative rounded-2xl overflow-hidden block bg-slate-100 hover:shadow-xl transition-all duration-500 ${getBentoClass(index)}`}
              style={{ minHeight: '240px' }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-[#0f172a]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content on hover */}
              <div className={`absolute inset-0 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${index === 0 ? 'p-9' : 'p-6'}`}>
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[8px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-white tracking-tight ${index === 0 ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'}`}>
                  {item.title}
                </h3>
                {index === 0 && item.description && (
                  <p className="text-white/65 text-sm font-light mt-2 line-clamp-2 max-w-sm">{item.description}</p>
                )}
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 backdrop-blur-sm">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default RecentWorks;
