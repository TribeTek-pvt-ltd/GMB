'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const STORE_DATA = {
  blinds: [
    { id: 'roller-blinds', name: 'Roller Blinds', image: '/images/curtain1.png', price: 159, leadTime: 'Ready in 2-3 weeks' },
    { id: 'roman-blinds', name: 'Roman Blinds', image: '/images/curtain2.png', price: 219, leadTime: 'Ready in 3-4 weeks' },
    { id: 'double-blinds', name: 'Double Blinds', image: '/images/curtain3.png', price: 299, leadTime: 'Ready in 2-3 weeks' },
  ],
  curtains: [
    { id: 'sheer-curtains', name: 'Sheer Curtains', image: '/images/curtain4.png', price: 337, leadTime: 'Ready in 3-4 weeks' },
    { id: 'blockout-curtains', name: 'Blockout Curtains', image: '/images/curtain5.png', price: 399, leadTime: 'Ready in 3-4 weeks' },
    { id: 'double-curtains', name: 'Double Curtains', image: '/images/curtain1.png', price: 659, leadTime: 'Ready in 3-4 weeks' },
  ]
};

export default function StoreListingPage() {
  const [activeTab, setActiveTab] = useState<'blinds' | 'curtains'>('blinds');

  return (
    <main className="min-h-screen bg-[#f8f7f4] pt-20">
      <Navbar />

      <section className="container max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#1F2E5A] font-serif">
            Shop Blinds & Curtains
          </h1>

          {/* Toggle Ribbon */}
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center w-full max-w-[300px]">
            <button
              onClick={() => setActiveTab('blinds')}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'blinds' 
                  ? 'bg-[#1F2E5A] text-white shadow-md' 
                  : 'text-slate-500 hover:text-[#1F2E5A]'
              }`}
            >
              Blinds
            </button>
            <button
              onClick={() => setActiveTab('curtains')}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'curtains' 
                  ? 'bg-[#1F2E5A] text-white shadow-md' 
                  : 'text-slate-500 hover:text-[#1F2E5A]'
              }`}
            >
              Curtains
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {STORE_DATA[activeTab].map((product) => (
            <Link 
              key={product.id} 
              href={`/store/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                
                {/* Visual Label (Pill) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 text-center flex items-center justify-between">
                  <span className="font-bold text-[#1F2E5A] text-sm md:text-base truncate pr-2">
                    {product.name}
                  </span>
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest shrink-0">
                    <span className="group-hover:mr-1 transition-all">Shop</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>

              {/* Text Info Below Card */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-2 px-2">
                <div>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block mb-1">Starting From</span>
                  <span className="text-2xl font-black text-[#1F2E5A]">${product.price}.00</span>
                </div>
                <div className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-full inline-flex self-start md:self-auto items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {product.leadTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
