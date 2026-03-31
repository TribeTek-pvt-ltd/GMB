'use client';

import { useState, useMemo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

// Dummy product info generator based on slug
const getProductDetails = (slug: string) => {
  const isCurtain = slug.includes('curtain');
  const basePrice = isCurtain ? 337 : 159;
  return {
    id: slug,
    name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    basePrice,
    image: isCurtain ? '/images/curtain4.png' : '/images/curtain1.png',
    type: isCurtain ? 'curtain' : 'blind'
  };
};

const FABRICS = [
  { id: 'ash', name: 'Ash', color: '#B3B6B7' },
  { id: 'chalk', name: 'Chalk', color: '#F2F3F4' },
  { id: 'black', name: 'Midnight', color: '#1B2631' },
  { id: 'sand', name: 'Sand', color: '#E5E7E9' },
  { id: 'navy', name: 'Navy', color: '#283747' },
];

export default function StoreProductSpecificationPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const product = getProductDetails(slug);
  const { addToCart } = useCart();
  const router = useRouter();

  // Specification State
  const [fabric, setFabric] = useState(FABRICS[0]);
  const [fittingType, setFittingType] = useState<'Face Fit' | 'Top Fit'>('Top Fit');
  const [width, setWidth] = useState<number | ''>('');
  const [drop, setDrop] = useState<number | ''>('');
  const [position, setPosition] = useState<'Standard' | 'Wall to Wall'>('Standard');
  const [stack, setStack] = useState<'Left' | 'Right' | 'Center'>('Center');
  const [roomName, setRoomName] = useState('');
  
  // Validation State
  const [measurementsChecked, setMeasurementsChecked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Dynamic Price Calculation
  const totalPrice = useMemo(() => {
    let price = product.basePrice;
    if (typeof width === 'number' && typeof drop === 'number') {
      // Dummy formula: (width * drop) / 1000 * 0.05
      const areaCost = (width * drop) / 1000 * 0.05;
      price += areaCost;
    }
    return Math.round(price);
  }, [width, drop, product.basePrice]);

  const isValid = measurementsChecked && width !== '' && drop !== '';

  const handleAddToCart = () => {
    if (!isValid) return;
    setIsAdding(true);
    
    setTimeout(() => {
      addToCart({
        id: `${product.id}-${Date.now()}`, // unique id for cart
        name: product.name,
        price: totalPrice,
        image: product.image,
        category: product.type.toUpperCase(),
        configuration: {
          fabric: fabric.name,
          fittingType,
          width,
          drop,
          position,
          stack,
          roomName: roomName || 'Not specified'
        }
      });
      setIsAdding(false);
      // Wait for the cart drawer to naturally open via context
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#f8f7f4] pt-24 pb-16">
      <Navbar />

      <div className="container max-w-7xl mx-auto px-6">
        {/* Breadcrumb / Title */}
        <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
          <button 
            onClick={() => router.push('/store')} 
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            Back to Shop
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-[#1F2E5A] font-serif leading-tight">
            Configure Your <span className="text-primary italic font-medium">{product.name}</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative items-start">
          
          {/* LEFT COLUMN: Visual Configurator Steps */}
          <div className="w-full lg:w-3/5 space-y-12">
            
            {/* STEP 1: Fabric */}
            <section className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-xl font-bold text-[#1F2E5A]">1. Choose Your Colour</h3>
                <span className="text-slate-400 text-sm font-medium">{fabric.name}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {FABRICS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFabric(f)}
                    className={`group relative w-16 h-16 rounded-full transition-all duration-300 ${
                      fabric.id === f.id ? 'ring-2 ring-offset-4 ring-primary scale-110' : 'hover:scale-105 ring-1 ring-slate-200'
                    }`}
                    style={{ backgroundColor: f.color }}
                    title={f.name}
                  >
                    {fabric.id === f.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className={`w-6 h-6 ${f.color === '#F2F3F4' || f.color === '#E5E7E9' ? 'text-slate-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* STEP 2: Fitting Type */}
            <section className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#1F2E5A] mb-6">2. Choose Fitting Type</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'Top Fit', desc: 'Fitted inside the window frame or ceiling' },
                  { id: 'Face Fit', desc: 'Fitted on the wall above the window' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFittingType(type.id as 'Top Fit' | 'Face Fit')}
                    className={`relative flex flex-col items-center text-center p-6 border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                      fittingType === type.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    {/* Visual Placeholder for Fitting */}
                    <div className="w-full h-24 bg-white rounded-xl mb-4 border border-slate-200 flex items-center justify-center shadow-inner relative overflow-hidden">
                      {type.id === 'Top Fit' ? (
                        <div className="w-2/3 h-16 border-t-[8px] border-slate-700 relative mt-4">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full bg-slate-200/50" />
                        </div>
                      ) : (
                        <div className="w-2/3 h-20 border-t-2 border-slate-300 relative mt-2">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[6px] bg-slate-700 -mt-[4px]" />
                           <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[95%] h-full bg-slate-200/50" />
                        </div>
                      )}
                    </div>
                    
                    <span className="font-bold text-[#1F2E5A] block mb-1">{type.id}</span>
                    <span className="text-xs text-slate-500 font-light">{type.desc}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* STEP 3: Dimensions */}
            <section className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#1F2E5A] mb-6">3. Enter Measurements (mm)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Width (mm)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="e.g. 2400"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-bold text-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Drop (mm)</label>
                  <input
                    type="number"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="e.g. 2100"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-bold text-lg"
                  />
                </div>
              </div>
            </section>

            {/* STEP 4: Position (Curtains Only Example) */}
            {product.type === 'curtain' && (
              <section className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-[#1F2E5A] mb-6">4. Choose Position</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Standard', 'Wall to Wall'].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPosition(pos as 'Standard' | 'Wall to Wall')}
                      className={`relative flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all duration-300 ${
                        position === pos 
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                      }`}
                    >
                      {/* Simple Icon Representation */}
                      <div className="w-16 h-12 mb-3 border border-slate-300 relative rounded-sm flex items-center justify-center bg-white">
                        {pos === 'Standard' ? (
                          <div className="w-8 h-8 bg-slate-200 mx-auto" />
                        ) : (
                          <div className="w-full h-8 bg-slate-200" />
                        )}
                      </div>
                      <span className="font-bold text-sm text-[#1F2E5A]">{pos}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* STEP 5: Stack */}
            <section className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#1F2E5A] mb-6">
                {product.type === 'curtain' ? '5. Choose Curtain Stack' : '4. Choose Control Side'}
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {['Left', 'Center', 'Right'].map((dir) => (
                  <button
                    key={dir}
                    onClick={() => setStack(dir as 'Left' | 'Center' | 'Right')}
                    className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-2xl transition-all duration-300 ${
                      stack === dir 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-full h-10 flex">
                      <div className={`h-full bg-slate-300 rounded-sm ${dir === 'Left' ? 'w-1/2 mr-auto' : dir === 'Right' ? 'w-1/2 ml-auto' : 'w-1/4 mx-auto'}`} />
                      {dir === 'Center' && <div className="h-full bg-slate-300 rounded-sm w-1/4 mx-auto" />}
                    </div>
                    <span className="font-bold text-xs md:text-sm text-[#1F2E5A] mt-3">{dir}</span>
                  </button>
                ))}
              </div>
            </section>

          </div>


          {/* RIGHT COLUMN: Sticky Summary */}
          <div className="w-full lg:w-2/5 xl:w-[35%] lg:sticky lg:top-32 relative">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl border border-slate-800 overflow-hidden relative">
              
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h2 className="text-2xl font-bold font-serif border-b border-white/10 pb-6 mb-6">
                Your Selection
              </h2>

              <div className="flex gap-4 mb-8">
                <div className="w-24 h-32 rounded-xl border border-white/10 overflow-hidden relative bg-slate-800 shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 ring-inset ring-1 ring-white/10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: fabric.color }} />
                    <span className="text-sm font-light text-slate-300">{fabric.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 capitalize">{fittingType} • {stack} Stack</p>
                </div>
              </div>

              {/* Specs Summary List */}
              <div className="space-y-3 font-light text-sm text-slate-300 mb-8 border-b border-white/10 pb-8">
                <div className="flex justify-between items-center">
                  <span>Width</span>
                  <span className="font-bold text-white">{width ? `${width} mm` : '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Drop</span>
                  <span className="font-bold text-white">{drop ? `${drop} mm` : '-'}</span>
                </div>
                {product.type === 'curtain' && (
                  <div className="flex justify-between items-center">
                    <span>Position</span>
                    <span className="font-bold text-white">{position}</span>
                  </div>
                )}
                
                <div className="pt-4 mt-4 text-xs">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Room Reference (Optional)</label>
                  <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="e.g. Master Bedroom"
                    className="w-full bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-white text-sm"
                  />
                </div>
              </div>

              {/* Price Calculation */}
              <div className="flex items-end justify-between mb-8">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Total Price</span>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#a5f3b4] to-[#F4A300]">
                  ${totalPrice}.00
                </span>
              </div>

              {/* Mandatory Confirmation */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={measurementsChecked}
                      onChange={(e) => setMeasurementsChecked(e.target.checked)}
                    />
                    <div className="w-5 h-5 border-2 border-slate-600 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center group-hover:border-primary/50">
                      <svg className={`w-3 h-3 text-white transition-opacity ${measurementsChecked ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className={`text-xs leading-relaxed transition-colors ${measurementsChecked ? 'text-white' : 'text-slate-400'}`}>
                    I have double checked my measurements and customisations.
                  </span>
                </label>
              </div>

              {/* Add to Cart Action */}
              <button
                onClick={handleAddToCart}
                disabled={!isValid || isAdding}
                className={`w-full py-4 rounded-xl font-black tracking-widest text-sm uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                  isValid && !isAdding
                    ? 'bg-primary text-slate-900 shadow-[0_10px_30px_-10px_rgba(76,175,80,0.5)] hover:bg-[#a5f3b4] cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                {isAdding ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Adding...
                  </>
                ) : (
                   <>
                    Add To Cart
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </>
                )}
              </button>
              
              {!isValid && (
                <p className="text-[10px] text-center text-red-400/80 mt-4 uppercase tracking-[0.2em] font-bold">
                  * Please complete measurements and click checkbox
                </p>
              )}

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
