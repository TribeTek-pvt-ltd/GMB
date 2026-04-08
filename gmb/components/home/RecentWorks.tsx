'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../shared/ScrollReveal';

const RecentWorks = () => {
  const [allGalleryItems, setAllGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/gallery');
        const data = await res.json();
        if (data.gallery && data.gallery.length > 0) {
          setAllGalleryItems(data.gallery);
        }
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
      <div className="py-24 md:py-32 bg-white flex flex-col items-center justify-center min-h-[600px]">
        <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-[#1756a0] animate-spin mb-4" />
        <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Loading Portfolio...</span>
      </div>
    );
  }

  const getBentoClass = (index: number) => {
    switch (index) {
      case 0: return 'col-span-1 md:col-span-2 md:row-span-2';
      case 1: return 'col-span-1 md:col-span-1 md:row-span-1';
      case 2: return 'col-span-1 md:col-span-1 md:row-span-1';
      case 3: return 'col-span-1 md:col-span-1 md:row-span-1';
      case 4: return 'col-span-1 md:col-span-1 md:row-span-1';
      default: return 'col-span-1 md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="recent-works">
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#1756a0]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1756a0]">Our Portfolio</span>
              </div>
              <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.04] tracking-tight mb-5">
                Featured Projects.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                A curated selection of our finest installations showcasing immaculate attention to detail, precision engineering, and elevated aesthetics.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/gallery"
                className="border border-slate-300 text-slate-600 hover:border-[#1756a0] hover:bg-[#1756a0] hover:text-white px-8 py-3.5 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 bg-white shadow-sm inline-flex items-center gap-2"
              >
                View Full Gallery
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5 h-auto md:h-[640px]">
            {displayedItems.map((item: any, index: number) => (
              <Link
                href={`/gallery`}
                key={`${item.id}-${index}`}
                className={`group relative rounded-2xl md:rounded-3xl overflow-hidden block bg-slate-50 border border-slate-100/50 hover:border-[#1756a0]/30 hover:shadow-xl transition-all duration-500 ease-in-out ${getBentoClass(index)}`}
                style={{ minHeight: '260px' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                
                {/* Elegant dark overlay directly on hover */}
                <div className="absolute inset-0 bg-[#0f172a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out backdrop-blur-[2px]" />
                
                {/* Content sliding up */}
                <div className={`absolute inset-0 flex flex-col justify-end opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out ${index === 0 ? 'p-10' : 'p-7'}`}>
                  
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[8px] font-bold uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'} font-display font-bold text-white mb-2 tracking-tight`}>
                    {item.title}
                  </h3>

                  {/* Description only on the large card */}
                  {index === 0 && (
                    <p className="text-white/80 font-light text-sm md:text-base line-clamp-2 max-w-sm mt-1">
                      {item.description}
                    </p>
                  )}

                  {/* Elegant click icon top-right */}
                  <div className="absolute top-7 right-7 w-12 h-12 rounded-full bg-white text-[#1756a0] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-[50ms]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default RecentWorks;
