"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: "Projects Completed", value: "5,000+", icon: "✦" },
  { label: "Premium Fabrics", value: "200+", icon: "✦" },
  { label: "Years Experience", value: "20+", icon: "✦" },
  { label: "Happy Families", value: "4,800+", icon: "✦" },
];

const trustBadges = [
  "Free In-Home Measurement",
  "Expert Installation",
  "3-Year Warranty",
];

const backgroundImages = [
  '/images/curtain1.png',
  '/images/curtain2.png',
  '/images/curtain3.png',
  '/images/curtain4.png',
  '/images/curtain5.png',
];

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formError, setFormError] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Name, email, and phone are required.');
      return;
    }
    setFormError('');
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0a1628] pt-12 pb-32">

      {/* Background images with crossfade */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
            style={{ opacity: idx === currentImage ? 1 : 0 }}
          >
            <Image src={img} alt="" fill className="object-cover" priority={idx === 0} sizes="100vw" />
          </div>
        ))}
        {/* Deep cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-[#0a1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/30 backdrop-blur-[2px]" />
      </div>

      {/* Ambient glow accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="container mx-auto max-w-7xl relative z-10 mt-12 lg:mt-16 px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Trust Badges Eyebrow */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {badge}
                </div>
              ))}
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[1.05] text-white tracking-tight drop-shadow-2xl">
              Transform Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#a5f3b4] to-[#F4A300]">Dream Space</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mt-8 font-light leading-relaxed drop-shadow-md">
              Bespoke curtains and smart motorized blinds tailored strictly to your dimensions. <strong className="text-white font-semibold">Because your home deserves ordinary-defying luxury.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <Link href="/gallery">
                <button className="group relative overflow-hidden text-slate-900 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 bg-white shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                  View Portfolio
                </button>
              </Link>
              <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                <button className="group flex items-center gap-2.5 text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20">
                  <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Lead Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="w-full bg-[#0a1628]/60 backdrop-blur-2xl border border-white/20 p-6 sm:p-8 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] relative z-20">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white tracking-tight">Request a <span className="text-primary">Free Quote</span></h3>
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold mt-3">
                  <div className="flex -space-x-1.5">
                    {['/images/curtain5.png', '/images/curtain2.png', '/images/curtain3.png'].map((src, i) => (
                      <Image key={i} src={src} alt="" width={24} height={24} className="rounded-full border-2 border-[#0a1628] object-cover w-6 h-6" />
                    ))}
                  </div>
                  <span>Trusted by <strong className="text-white">4,800+</strong> homes</span>
                </div>
              </div>

              {submitted ? (
                 <div className="text-center py-7">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
                       <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <p className="text-white font-black text-xl">Request Received!</p>
                    <p className="text-white/60 text-sm mt-2 max-w-sm mx-auto leading-relaxed">Thank you {formData.name}, our consultant will contact you within 24 hours.</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                   <div className="space-y-4">
                     <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name *" className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner" />
                     <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email Address *" className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner" />
                     <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Phone Number *" className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner" />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <select value={formData.roomType} onChange={(e) => setFormData({...formData, roomType: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white/80 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer shadow-inner">
                        <option value="" disabled className="bg-slate-900 text-white">Room...</option>
                        <option value="Living Room" className="bg-slate-900 text-white">Living</option>
                        <option value="Bedroom" className="bg-slate-900 text-white">Bedroom</option>
                        <option value="Full Home" className="bg-slate-900 text-white">Full Home</option>
                     </select>
                     <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="Area" className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner" />
                   </div>
                   
                   {formError && <p className="text-red-400 text-xs font-bold text-left px-1 tracking-wide uppercase">{formError}</p>}
                   
                   <button type="submit" disabled={submitting} className="w-full bg-primary text-slate-900 rounded-xl py-4 font-black text-sm tracking-wide transition-all duration-300 disabled:opacity-60 shadow-[0_0_20px_rgba(76,175,80,0.3)] flex justify-center items-center mt-2">
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Sending...
                        </span>
                      ) : 'Book Free Consultation'}
                   </button>
                   <p className="text-center text-white/30 text-[10px] leading-snug mt-1 uppercase tracking-wider font-bold">
                      🔒 100% private
                    </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Floating Stats Row - Pushed to bottom */}
        <div className="w-full max-w-5xl mx-auto mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
             <div key={i} className="group flex flex-col items-center">
                <div 
                  className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #ffffff, #a5f3b4)' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-2">{stat.label}</div>
             </div>
          ))}
        </div>

      </div>

      {/* Progress dots at bottom of screen */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {backgroundImages.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentImage(idx)} 
            className={`transition-all duration-500 rounded-full ${idx === currentImage ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`} 
            aria-label={`Slide ${idx + 1}`} 
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
