'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/categories';

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
   const [isSecondaryNavVisible, setIsSecondaryNavVisible] = useState(false);
   const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

   const handleMouseEnter = () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setIsSecondaryNavVisible(true);
   };

   const handleMouseLeave = () => {
      hideTimeoutRef.current = setTimeout(() => {
         setIsSecondaryNavVisible(false);
      }, 300);
   };

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
            <div className="w-12 h-12 border-4 border-[#4CAF50]/20 border-t-[#4CAF50] rounded-none animate-spin" />
         </div>
      );
   }

   return (
      <main className="min-h-[70vh] bg-transparent">
         <Navbar onProductHover={handleMouseEnter} onProductLeave={handleMouseLeave} />

         <ScrollReveal delay={0.1}>
            <div className="pt-16 pb-6 mt-8">
            </div>

            {/* --- REFINED EDITORIAL HEADER --- */}
            <div className="max-w-7xl mx-auto px-6 mb-20 mt-12 text-center relative z-10">
               <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-primary/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                     Signature Collections
                  </span>
                  <div className="w-12 h-px bg-primary/30" />
               </div>
               <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-[#1F2E5A] mb-6 font-serif">
                  The <span className="gradient-text italic font-medium pr-3">{activeSubcategory.title}</span> Collection
               </h1>
               <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed font-light">
                  {activeSubcategory.description || "Expertly curated for modern architectural spaces, defining the intersection of light and geometry."}
               </p>
            </div>

            {/* --- MAIN CONTENT SECTON --- */}
            <section className="max-w-[1600px] mx-auto px-6 py-2 md:px-8 md:py-4">

               {/* STYLE FILTERS AS CARDS */}
               {activeStyle === 'All' ? (
                   <div className="max-w-[1400px] mx-auto mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans">
                      {displayStyles.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            {displayStyles.map((style, sIdx) => {
                               const productData = data.products.find(p => p.style === style);
                               const styleImage = productData?.image || activeSubcategory.image || '/images/curtain1.png';
                               
                               return (
                                  <div 
                                     key={style} 
                                     className="group flex flex-col xl:flex-row gap-6 lg:gap-8 bg-white/70 backdrop-blur-xl border border-slate-200 p-6 md:p-8 rounded-none hover:border-primary/40 transition-all duration-700 shadow-xl shadow-slate-200 relative overflow-hidden"
                                     onClick={() => router.push(`/gallery?category=${encodeURIComponent(style)}`)}
                                  >
                                     {/* Image Section */}
                                     <div className="w-full xl:w-[45%] aspect-square relative rounded-none overflow-hidden shadow-lg ring-1 ring-slate-100">
                                        <Image
                                           src={styleImage}
                                           alt={style}
                                           fill
                                           className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                        <div className="absolute top-3 right-5 text-slate-100/50 text-5xl font-serif font-black select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
                                           0{sIdx + 1}
                                        </div>
                                     </div>

                                     {/* Content Section */}
                                     <div className="w-full xl:w-[55%] flex flex-col justify-center py-2">
                                        <div className="inline-flex items-center gap-2 mb-3">
                                           <div className="w-3 h-px bg-primary/40" />
                                           <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Masterpiece</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2E5A] font-serif mb-3 leading-tight group-hover:text-primary transition-colors">
                                           {style}
                                        </h3>
                                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity max-w-sm font-light">
                                           Explore the unique architectural geometry and light-shaping capabilities of our signature {style.toLowerCase()} collection.
                                        </p>
                                        
                                        <div className="flex items-center gap-3 text-primary font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-transform duration-500 mt-auto cursor-pointer">
                                           <span className="group-hover:text-primary/80 transition-colors">Browse Style Gallery</span>
                                           <div className="w-8 h-px bg-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:w-12" />
                                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
                     <div className="sticky top-20 z-30 mb-10 rounded-none py-4 px-2 border-transparent transition-all">
                        <div className="flex flex-col gap-4">

                           <div className="flex flex-col xl:flex-row items-center gap-3 justify-between">
                              <div className="relative w-full xl:w-72 group">
                                 <input
                                    type="text"
                                    placeholder="Search elements..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/80 backdrop-blur-md border border-slate-200 rounded-none py-2 pl-12 pr-4 text-xs font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 transition-all shadow-sm"
                                 />
                                 <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#4CAF50] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                 </svg>
                              </div>
                              <div className="flex flex-wrap gap-4 justify-center items-center">
                                 <button
                                    onClick={() => { setActiveStyle('All'); setActiveRoom('All'); }}
                                    className="px-6 py-2 rounded-none text-[9px] font-bold uppercase tracking-widest transition-all bg-transparent text-slate-500 border border-slate-200 hover:text-[#4CAF50] hover:border-[#4CAF50]/30 shadow-sm bg-white/80 backdrop-blur-md"
                                 >
                                    Back To All Styles
                                 </button>

                                 {/* Room Dropdown */}
                                 <div className="flex items-center gap-3 relative">
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Placement:</span>
                                    <div className="relative">
                                       <button
                                          onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
                                          className="flex items-center gap-3 px-6 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-none text-[9px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#4CAF50]/30 transition-all shadow-sm"
                                       >
                                          <span>{activeRoom === 'All' ? 'All Rooms' : activeRoom}</span>
                                          <svg className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                          </svg>
                                       </button>

                                       {isRoomDropdownOpen && (
                                          <>
                                             <div className="fixed inset-0 z-40" onClick={() => setIsRoomDropdownOpen(false)} />
                                             <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-none shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <div className="px-5 py-2 mb-1 border-b border-slate-50">
                                                   <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Room</span>
                                                </div>
                                                {['All', ...data.rooms].map(room => (
                                                   <button
                                                      key={room}
                                                      onClick={() => { setActiveRoom(room); setIsRoomDropdownOpen(false); }}
                                                      className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeRoom === room
                                                         ? 'text-[#4CAF50] bg-[#4CAF50]/5'
                                                         : 'text-slate-500 hover:bg-slate-50 hover:text-[#4CAF50]'
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
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 mt-4">
                        {filteredProducts.map((p, idx) => (
                           <div
                              key={p.id}
                              className="group relative cursor-pointer"
                              style={{ animationDelay: `${idx * 50}ms` }}
                              onClick={() => setLightboxIndex(idx)}
                           >
                              <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl ">
                                 <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition-transform duration-700 "
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex flex-col justify-end p-4">
                                    <h3 className="text-white text-sm font-bold mb-2 truncate">{p.name}</h3>
                                    <div className="flex items-center gap-2">
                                       <span className="px-2 py-1 rounded-none bg-white/20 text-white text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm truncate">
                                          {p.category}
                                       </span>
                                       <span className="px-2 py-1 rounded-none bg-[#4CAF50]/80 text-white text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm truncate">
                                          {p.room}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Empty State Deep Navigation */}
                     {filteredProducts.length === 0 && (
                        <div className="py-16 text-center">
                           <span className="text-4xl font-bold text-slate-100 select-none block mb-6 px-10">Empty Collection</span>
                           <p className="text-slate-400 italic mb-10">We're curating pieces for this unique style. Check back soon.</p>
                           <button
                              onClick={() => { setActiveStyle('All'); setActiveRoom('All'); setSearchQuery(''); }}
                              className="px-8 py-3 bg-[#4CAF50] text-white rounded-none font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#4CAF50]/20 hover:bg-[#1F2E5A] transition-all relative overflow-hidden group"
                           >
                              <span className="relative z-10">View Entire Collection</span>
                              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 x-100 transition-transform origin-left rounded-none" />
                           </button>
                        </div>
                     )}
                  </>
               )}
            </section>
            {/* </div> */}
         </ScrollReveal >

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

                  <div className="absolute bottom-10 text-center animate-in slide-in-from-bottom-4 duration-500 w-full px-6">
                     <h2 className="text-slate-900 text-3xl font-bold mb-2">{filteredProducts[lightboxIndex].name}</h2>
                     <p className="text-slate-500 tracking-widest uppercase text-xs md:text-sm font-bold flex items-center justify-center gap-3">
                        <span>{filteredProducts[lightboxIndex].category}</span>
                        <span className="w-1 h-1 rounded-none bg-[#4CAF50]"></span>
                        <span>{filteredProducts[lightboxIndex].style}</span>
                        <span className="w-1 h-1 rounded-none bg-[#4CAF50]"></span>
                        <span>{filteredProducts[lightboxIndex].room}</span>
                     </p>
                  </div>
               </div>
            )
         }

         <Footer />
      </main >
   );
}

export default function CategoryPage() {
   return (
      <Suspense fallback={
         <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#4CAF50]/20 border-t-[#4CAF50] rounded-none animate-spin" />
         </div>
      }>
         <ProductsContent />
      </Suspense>
   );
}
