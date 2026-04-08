'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';

  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [activeLocation, setActiveLocation] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const { addToCart, cartItems } = useCart();

  const isSaved = (id: string) => cartItems.some(item => item.id === id);

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
    if (!item.category && !item.style && !item.location && !item.room) return true;
    const categoryName = item.category || 'Unknown';
    const styleName = item.style || 'Unknown';
    const matchesCategory = initialCategory === 'All' || categoryName === initialCategory || styleName === initialCategory;
    const itemLocation = item.location || item.room || 'Unknown';
    const matchesLocation = activeLocation === 'All' || itemLocation === activeLocation;
    return matchesCategory && matchesLocation;
  });

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
    <div className="min-h-[70vh] bg-[#f8f7f4]">

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-[#4CAF50]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#4CAF50]">Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-normal leading-tight text-[#1F2E5A] mb-2">
                Our <span className="gradient-text">{headerTitle}</span> Portfolio
              </h1>
              <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
                Discover our {initialCategory === 'All' ? 'complete range of' : `curated selection of ${initialCategory}`} bespoke window treatments, designed and installed with meticulous care.
              </p>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          {availableLocations.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {['All', ...availableLocations].map((loc) => (
                <button
                  key={loc as string}
                  onClick={() => {
                    setActiveLocation(loc as string);
                    setSelectedIdx(null);
                  }}
                  className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-sm ${activeLocation === loc
                    ? 'bg-[#4CAF50] text-white shadow-md'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-[#4CAF50]/50 hover:text-[#4CAF50]'
                    }`}
                >
                  {loc as string}
                </button>
              ))}
            </motion.div>
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm transition-all duration-700 ring-1 ring-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-6 right-6 translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isSaved(item.id)) return;
                          addToCart({
                            id: item.id,
                            name: item.title,
                            price: 0,
                            image: item.image,
                            category: item.category || 'Portfolio'
                          });
                        }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 border border-slate-100 group/select ${isSaved(item.id) ? 'bg-primary text-white' : 'bg-white text-[#1F2E5A] hover:bg-primary hover:text-white'
                          }`}
                        title={isSaved(item.id) ? "Saved to Selection" : "Save to Selection"}
                      >
                        <svg className="w-4 h-4" fill={isSaved(item.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-white text-lg font-bold tracking-tight mb-2 font-serif">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold bg-[#4CAF50]/90 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md font-sans">
                        {item.location || item.room || 'Any Room'}
                      </span>
                      <span className="text-[8px] font-bold bg-white/20 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md font-sans">
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
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-4xl font-semibold text-slate-200 select-none block mb-4">Empty Portfolio</span>
              <p className="text-slate-400 italic mb-8 max-w-sm mx-auto text-sm">No projects found matching the selected filters.</p>
              <button
                onClick={() => setActiveLocation('All')}
                className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-200/40 backdrop-blur-3xl p-4 md:p-8 animate-in fade-in duration-500"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button - Integrated with Theme */}
            <motion.button
              className="absolute top-6 right-6 z-[110] w-11 h-11 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 shadow-lg hover:bg-white transition-all"
              onClick={() => setSelectedIdx(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              whileHover={{ rotate: 90 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation Arrows - High Contrast */}
            <button
              className="absolute left-4 md:left-8 z-[110] w-14 h-14 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center text-[#1F2E5A] shadow-xl transition-all duration-300 disabled:opacity-30 group"
              onClick={handlePrev}
            >
              <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button
              className="absolute right-4 md:right-8 z-[110] w-14 h-14 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center text-[#1F2E5A] shadow-xl transition-all duration-300 disabled:opacity-30 group"
              onClick={handleNext}
            >
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Card Popup Wrapper */}
            <div
              className="relative w-full max-w-4xl h-full max-h-[85vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)] border border-white/50 pointer-events-auto flex flex-col group">
                <div className="relative flex-grow w-full h-full overflow-hidden">
                  <Image
                    src={filteredItems[selectedIdx].image}
                    alt={filteredItems[selectedIdx].title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Masterpiece Info Overlay (Directly on Image) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <span className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-3 block">Signature Achievement</span>
                      <h2 className="text-white text-3xl md:text-4xl font-black font-serif leading-tight">{filteredItems[selectedIdx].title}</h2>
                    </div>

                    <div className="flex flex-wrap items-end gap-6 md:gap-8">
                      <div className="flex gap-6 md:gap-10">
                        <div className="flex flex-col gap-1">
                          <span className="text-white/50 text-[9px] uppercase font-medium tracking-wide">Room</span>
                          <span className="text-white text-sm font-medium">{filteredItems[selectedIdx].location || filteredItems[selectedIdx].room || 'Any Room'}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-l border-white/10 pl-6 md:pl-8">
                          <span className="text-white/50 text-[9px] uppercase font-medium tracking-wide">Style</span>
                          <span className="text-white text-sm font-medium">{filteredItems[selectedIdx].category || filteredItems[selectedIdx].style || initialCategory}</span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const item = filteredItems[selectedIdx];
                          if (isSaved(item.id)) return;
                          addToCart({
                            id: item.id,
                            name: item.title,
                            price: 0,
                            image: item.image,
                            category: item.category || 'Portfolio'
                          });
                        }}
                        className={`w-14 h-14 rounded-2xl shadow-xl transition-all flex items-center justify-center pointer-events-auto group/save ml-auto ${isSaved(filteredItems[selectedIdx].id)
                            ? 'bg-primary text-white cursor-default'
                            : 'bg-white text-[#1F2E5A] hover:bg-primary hover:text-white transform hover:-translate-y-1'
                          }`}
                        title={isSaved(filteredItems[selectedIdx].id) ? 'Saved' : 'Save to Selection'}
                      >
                        <svg className={`w-6 h-6 transition-all ${isSaved(filteredItems[selectedIdx].id) ? 'fill-current' : 'group-hover/save:fill-current'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Counter - Floating Mode */}
              <div className="mt-8 text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase">
                Masterpiece <span className="text-[#1F2E5A]">{selectedIdx + 1}</span> of {filteredItems.length}
              </div>
            </div>
        </div>
      )}

    </div>
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
