'use client';

import { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';

  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [activeLocation, setActiveLocation] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/products');
        const data = await res.json();
        setGalleryItems(data.gallery || []);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [initialCategory]);

  const availableLocations = Array.from(
    new Set(galleryItems.map(item => item.location || item.room).filter(Boolean))
  );

  const filteredItems = galleryItems.filter(item => {
    if (!item.category && !item.style && !item.location && !item.room) {
      return true;
    }
    const categoryName = item.category || 'Unknown';
    const styleName = item.style || 'Unknown';
    const matchesCategory = initialCategory === 'All' || categoryName === initialCategory || styleName === initialCategory;
    const itemLocation = item.location || item.room || 'Unknown';
    const matchesLocation = activeLocation === 'All' || itemLocation === activeLocation;
    return matchesCategory && matchesLocation;
  });

  // Lightbox Navigation
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  // Keyboard support for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, filteredItems]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const headerTitle = initialCategory === 'All' ? 'Full' : initialCategory;

  return (
    <main className="min-h-[70vh] bg-slate-50">
      <Navbar />

      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* Header - Signature Sync */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 mt-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-6 h-px bg-[#4CAF50]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#4CAF50]">Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-[#1F2E5A] mb-2">
                Our <span className="gradient-text">{headerTitle}</span> Portfolio
              </h1>
              <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
                Discover our {initialCategory === 'All' ? 'complete range of' : `curated selection of ${initialCategory}`} bespoke window treatments, designed and installed with meticulous care.
              </p>
            </div>
          </div>

          {/* Filter Tabs (Locations) */}
          {availableLocations.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['All', ...availableLocations].map((loc) => (
                <button
                  key={loc as string}
                  onClick={() => {
                    setActiveLocation(loc as string);
                    setSelectedIdx(null); // Reset lightbox when filter changes
                  }}
                  className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-sm ${activeLocation === loc
                    ? 'bg-[#4CAF50] text-white shadow-md scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-[#4CAF50]/50 hover:text-[#4CAF50]'
                    }`}
                >
                  {loc as string}
                </button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl ring-1 ring-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold bg-[#4CAF50]/90 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md">
                        {item.location || item.room || 'Any Room'}
                      </span>
                      <span className="text-[8px] font-bold bg-white/20 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md">
                        {item.category || item.style || initialCategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <span className="text-4xl font-bold text-slate-200 select-none block mb-6 px-10">Empty Portfolio</span>
              <p className="text-slate-400 italic mb-10 max-w-sm mx-auto">No projects found matching the combined Category and Location filters.</p>
              <button
                onClick={() => setActiveLocation('All')}
                className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Clear Location Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
            onClick={() => setSelectedIdx(null)}
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-10 z-[110] w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30"
            onClick={handlePrev}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            className="absolute right-4 md:right-10 z-[110] w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-30"
            onClick={handleNext}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Image Wrapper */}
          <div
            className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10 pointer-events-auto group">
              <Image
                src={filteredItems[selectedIdx].image}
                alt={filteredItems[selectedIdx].title}
                fill
                className="object-contain"
                priority
              />

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="text-[#4CAF50] text-[10px] uppercase font-black tracking-[0.3em] mb-2 block">Project Spotlight</span>
                  <h2 className="text-white text-2xl md:text-3xl font-black">{filteredItems[selectedIdx].title}</h2>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-white/40 text-[9px] uppercase font-bold block mb-1">Room</span>
                    <span className="text-white text-xs font-bold">{filteredItems[selectedIdx].location || filteredItems[selectedIdx].room || 'Any Room'}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-white/40 text-[9px] uppercase font-bold block mb-1">Style</span>
                    <span className="text-white text-xs font-bold">{filteredItems[selectedIdx].category || filteredItems[selectedIdx].style || initialCategory}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Counter */}
            <div className="mt-8 text-white/40 text-sm font-bold tracking-widest uppercase">
              Item <span className="text-white">{selectedIdx + 1}</span> of {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
