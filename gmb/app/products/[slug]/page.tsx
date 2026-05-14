'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ScrollReveal from '@/components/shared/ScrollReveal';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/categories';
import ProductCard from '@/components/products/ProductCard';
import Hero from '@/components/ui/Hero';

function ProductsContent() {
   const params = useParams();
   const router = useRouter();
   const slug = typeof params?.slug === 'string' ? params.slug : '';

   // Cross-reference slug with lib/categories.ts to correctly map Category Group and Subcategory (Item)
   const activeSubcategory = ALL_PRODUCTS.find(p => p.slug.toLowerCase() === slug.toLowerCase()) || ALL_PRODUCTS[0];
   const activeGroup = PRODUCT_CATEGORIES.find(g => g.items.some(i => i.slug === activeSubcategory.slug));
   const targetTabName = activeSubcategory.title;

   const [data, setData] = useState<{
      categoryMetadata: Record<string, string>;
      styles: string[];
      rooms: string[];
      products: any[];
   }>({
      categoryMetadata: {},
      styles: [],
      rooms: [],
      products: []
   });

   const [activeTab, setActiveTab] = useState(targetTabName);
   const [activeStyle, setActiveStyle] = useState('All');
   const [activeRoom, setActiveRoom] = useState('All');
   const [searchQuery, setSearchQuery] = useState('');
   const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
   const [loading, setLoading] = useState(true);
   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

   useEffect(() => {
      async function fetchProducts() {
         try {
            const res = await fetch('/api/public/products');
            const d = await res.json();
            setData({
               categoryMetadata: d.categoryMetadata || {},
               styles: d.styles || [],
               rooms: d.rooms || [],
               products: d.products || []
            });
            setActiveTab(targetTabName);
            setActiveStyle('All');
         } catch (err) {
            console.error('Failed to fetch products:', err);
         } finally {
            setLoading(false);
         }
      }
      fetchProducts();
   }, [targetTabName]);

   // Build the active level 3 filters from lib/categories.ts, fallback to api data if empty
   const displayStyles = activeSubcategory.subCategories && activeSubcategory.subCategories.length > 0
      ? activeSubcategory.subCategories
      : data.styles;

   const filteredProducts = data.products.filter(p => {
      const tabNameStandardized = activeTab.toLowerCase().replace(/[^a-z0-9]+/g, '');
      const productCategoryStandardized = p.category?.toLowerCase().replace(/[^a-z0-9]+/g, '') || '';

      const matchesTab = productCategoryStandardized === tabNameStandardized || activeSubcategory.title.toLowerCase() === productCategoryStandardized;
      const matchesStyle = activeStyle === 'All' || p.style === activeStyle;
      const matchesRoom = activeRoom === 'All' || p.room === activeRoom;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.room.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesStyle && matchesRoom && matchesSearch;
   });

   if (loading) {
      return (
         <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#1756a0]/20 border-t-[#1756a0] rounded-full animate-spin" />
         </div>
      );
   }

   return (
      <div className="min-h-[70vh] bg-white relative">

         <ScrollReveal delay={0.1}>

            {/* --- REFINED EDITORIAL HEADER --- */}
            <Hero
               centered
               withGlow
               eyebrow="Signature Collections"
               title={<>The {activeSubcategory.title} Collection.</>}
               description={activeSubcategory.description || "Expertly curated for modern architectural spaces, defining the intersection of light and geometry."}
               accentColor="#3d9e41"
               className="!pt-8 !pb-12"
            />

            {/* --- MAIN CONTENT SECTON --- */}
            <section className="max-w-[1600px] mx-auto px-6 py-2 md:px-8 md:py-4 relative z-10">

               {/* STYLE FILTERS AS CARDS */}
               {activeStyle === 'All' ? (
                  <div className="max-w-[1400px] mx-auto mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
                     {displayStyles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                           {displayStyles.map((style, sIdx) => {
                              const productData = data.products.find(p => p.style === style);
                              const styleImage = productData?.image || activeSubcategory.image || '/images/curtain1.png';

                              return (
                                 <div
                                    key={style}
                                    className="group flex flex-col xl:flex-row gap-8 lg:gap-10 bg-white border border-slate-100/60 p-6 md:p-8 rounded-[2.5rem] hover:border-slate-200 transition-all duration-700 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden cursor-pointer"
                                    onClick={() => router.push(`/gallery?category=${encodeURIComponent(style)}`)}
                                 >
                                    {/* Image Section */}
                                    <div className="w-full xl:w-[45%] aspect-[4/5] xl:aspect-square relative rounded-[2rem] overflow-hidden bg-slate-50">
                                       <Image
                                          src={styleImage}
                                          alt={style}
                                          fill
                                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                       />
                                       <div className="absolute top-4 right-6 text-white/50 text-5xl font-display font-light select-none pointer-events-none transition-colors duration-700">
                                          0{sIdx + 1}
                                       </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full xl:w-[55%] flex flex-col justify-center py-2">
                                       <div className="inline-flex items-center gap-3 mb-5">
                                          <div className="w-6 h-px bg-[#1756a0]/80" />
                                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#1756a0]">Masterpiece</span>
                                       </div>
                                       <h3 className="font-display font-medium text-[#0f172a] text-3xl md:text-4xl mb-4 leading-[1.1] transition-colors">
                                          {style}
                                       </h3>
                                       <p className="text-slate-500 text-sm md:text-base leading-[1.7] mb-8 font-light max-w-sm">
                                          Explore the unique architectural geometry and light-shaping capabilities of our signature {style.toLowerCase()} collection.
                                       </p>

                                       <div className="flex items-center gap-3 text-[#0f172a] font-bold text-[10px] uppercase tracking-[0.2em] transition-transform duration-500 mt-auto">
                                          <span className="group-hover:text-[#1756a0] transition-colors">Browse Style Gallery</span>
                                          <div className="w-8 h-px bg-slate-200 group-hover:bg-[#1756a0] transition-all duration-500 group-hover:w-16" />
                                          <svg className="w-4 h-4 group-hover:text-[#1756a0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     ) : null}
                  </div>
               ) : (
                  <>
                     {/* Tiered Filters + Search (Floating UI) when deep inside a Style */}
                     <div className="sticky top-20 z-30 mb-10 rounded-xl py-4 px-2 border-transparent transition-all">
                        <div className="flex flex-col gap-4">

                           <div className="flex flex-col xl:flex-row items-center gap-4 justify-between">
                              <div className="relative w-full xl:w-[400px] group">
                                 <input
                                    type="text"
                                    placeholder="Search elements..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-full py-3 h-[46px] pl-12 pr-6 text-xs font-bold tracking-[0.2em] uppercase focus:outline-none focus:border-[#1756a0]/30 transition-all shadow-sm"
                                 />
                                 <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1756a0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                 </svg>
                              </div>
                              <div className="flex flex-wrap gap-4 justify-center items-center">
                                 <button
                                    onClick={() => { setActiveStyle('All'); setActiveRoom('All'); }}
                                    className="h-[46px] px-8 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all bg-white text-slate-500 border border-slate-200 hover:text-[#0f172a] hover:border-slate-300 shadow-sm"
                                 >
                                    Back To All Styles
                                 </button>

                                 {/* Room Dropdown */}
                                 <div className="flex items-center gap-3 relative">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Placement:</span>
                                    <div className="relative">
                                       <button
                                          onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
                                          className="flex items-center justify-between min-w-[160px] h-[46px] px-6 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f172a] hover:border-slate-300 transition-all shadow-sm"
                                       >
                                          <span>{activeRoom === 'All' ? 'All Rooms' : activeRoom}</span>
                                          <svg className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                          </svg>
                                       </button>

                                       {isRoomDropdownOpen && (
                                          <>
                                             <div className="fixed inset-0 z-40" onClick={() => setIsRoomDropdownOpen(false)} />
                                             <div className="absolute top-full right-0 mt-3 w-64 bg-white border border-slate-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <div className="px-6 py-2 mb-2 border-b border-slate-50">
                                                   <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Select Room</span>
                                                </div>
                                                {['All', ...data.rooms].map(room => (
                                                   <button
                                                      key={room}
                                                      onClick={() => { setActiveRoom(room); setIsRoomDropdownOpen(false); }}
                                                      className={`w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${activeRoom === room
                                                         ? 'text-[#1756a0] bg-slate-50'
                                                         : 'text-slate-500 hover:bg-slate-50 hover:text-[#0f172a]'
                                                         }`}
                                                   >
                                                      {room === 'All' ? 'All Rooms' : room}
                                                   </button>
                                                ))}
                                             </div>
                                          </>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* PRODUCT GRID FOR SPECIFIC STYLE */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-4">
                        {filteredProducts.map((p, idx) => (
                           <div
                              key={p.id}
                              className="h-full cursor-pointer animate-in fade-in zoom-in-95 duration-500"
                              style={{ animationDelay: `${idx * 50}ms` }}
                              onClick={(e) => { e.preventDefault(); setLightboxIndex(idx); }}
                           >
                              <ProductCard
                                 href={`#product-${p.id}`}
                                 image={p.image}
                                 title={p.name}
                                 subLabel={p.category}
                                 sequenceNum={`0${idx + 1}`}
                                 badge={
                                    <span className="bg-white/90 text-[#0f172a] text-[8px] font-bold uppercase tracking-[0.22em] px-3.5 py-1.5 rounded-full shadow-sm border border-slate-100 backdrop-blur-sm">
                                       {p.room}
                                    </span>
                                 }
                                 ctaText="View Details"
                              />
                           </div>
                        ))}
                     </div>

                     {/* Empty State Deep Navigation */}
                     {filteredProducts.length === 0 && (
                        <div className="py-24 text-center max-w-xl mx-auto">
                           <span className="text-5xl font-display text-slate-200 select-none block mb-6 font-medium">Empty Collection</span>
                           <p className="text-slate-500 font-light text-lg mb-12">We are currently curating pieces for this unique style. Please check back soon.</p>
                           <button
                              onClick={() => { setActiveStyle('All'); setActiveRoom('All'); setSearchQuery(''); }}
                              className="h-[46px] px-8 bg-[#0f172a] text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-[#0f172a]/10 hover:bg-[#1756a0] hover:shadow-[#1756a0]/20 transition-all w-fit mx-auto cursor-pointer relative z-20"
                           >
                              View Entire Collection
                           </button>
                        </div>
                     )}
                  </>
               )}
            </section>
         </ScrollReveal>

         {/* FULLSCREEN LIGHTBOX MODAL */}
         {
            lightboxIndex !== null && (
               <div
                  className="fixed inset-0 z-50 bg-white/80 backdrop-blur-2xl flex flex-col items-center justify-center animate-in fade-in duration-300"
               >
                  <button
                     onClick={() => setLightboxIndex(null)}
                     className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 transition-all z-50 p-2 "
                  >
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>

                  <button
                     onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + filteredProducts.length) % filteredProducts.length); }}
                     className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 z-50 text-slate-400 hover:text-slate-900 transition-all p-4"
                  >
                     <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>

                  <div className="relative w-full max-w-6xl h-[65vh] flex items-center justify-center pointer-events-none px-20">
                     <Image
                        src={filteredProducts[lightboxIndex].image}
                        alt={filteredProducts[lightboxIndex].name}
                        fill
                        className="object-contain"
                     />
                  </div>

                  <button
                     onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % filteredProducts.length); }}
                     className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 z-50 text-slate-400 hover:text-slate-900 transition-all p-4"
                  >
                     <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>

                  <div className="absolute bottom-12 text-center animate-in slide-in-from-bottom-4 duration-500 w-full px-6">
                     <h2 className="text-[#0f172a] text-4xl font-display font-medium mb-4">{filteredProducts[lightboxIndex].name}</h2>
                     <p className="text-slate-500 tracking-[0.2em] uppercase text-[10px] font-bold flex items-center justify-center gap-4">
                        <span>{filteredProducts[lightboxIndex].category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#1756a0]"></span>
                        <span>{filteredProducts[lightboxIndex].style}</span>
                        <span className="w-1 h-1 rounded-full bg-[#1756a0]"></span>
                        <span>{filteredProducts[lightboxIndex].room}</span>
                     </p>
                  </div>
               </div>
            )
         }

      </div>
   );
}

export default function CategoryPage() {
   return (
      <Suspense fallback={
         <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#1756a0]/20 border-t-[#1756a0] rounded-full animate-spin" />
         </div>
      }>
         <ProductsContent />
      </Suspense>
   );
}
