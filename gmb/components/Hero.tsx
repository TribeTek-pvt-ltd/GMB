"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StandardButton from './StandardButton';

const stats = [
  { label: "Projects Completed", value: "5,000+", icon: "✦" },
  { label: "Premium Fabrics", value: "200+", icon: "✦" },
  { label: "Years Experience", value: "20+", icon: "✦" },
  { label: "Happy Families", value: "4,800+", icon: "✦" },
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
    <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0a1628] pt-20 pb-12">

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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-none blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-none blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="container mx-auto max-w-7xl relative z-10 mt-12 lg:mt-20 px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Modern Eyebrow */}
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-none mb-8 shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Signature 2024 Collection</span>
              </div>

              {/* Ultra-Bold Headline */}
              <motion.h1 
                initial={{ filter: 'blur(12px)', opacity: 0, y: 15 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.95] text-white tracking-tighter mb-8 filter drop-shadow-2xl"
              >
                Luxury <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 italic font-medium pr-4">Redefined.</span>
              </motion.h1>

              {/* Subheadline with better spacing */}
              <motion.p 
                initial={{ filter: 'blur(8px)', opacity: 0, y: 10 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-10"
              >
                Architectural window treatments tailored strictly to your vision. <span className="text-white font-medium border-b border-primary/40 pb-0.5">Bespoke. Smart. Extraordinary.</span>
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <Link href="/gallery" className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-emerald-400 rounded-none blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <StandardButton variant="white" className="px-12 py-5 h-full">
                    Explore Gallery
                  </StandardButton>
                </Link>

                <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                  <StandardButton variant="secondary" className="px-12 py-5 bg-[#25D366]/20 border border-[#25D366]/40 backdrop-blur-md hover:bg-[#25D366]/30">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </div>
                  </StandardButton>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Floating Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[440px] relative shrink-0"
          >
            {/* Minimal card border/glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/10 via-white/5 to-primary/10 rounded-none opacity-30" />
            
            <div className="relative bg-[#0a1628]/60 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-none shadow-2xl overflow-hidden group">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/40" />
              
              <div className="mb-8 relative z-10">
                 <h3 className="text-3xl font-black text-white tracking-tighter mb-4 uppercase">Request Quote</h3>
                 
                 {/* Trusted Avatars Restoration */}
                 <div className="flex items-center gap-3 text-white/50 text-[10px] font-black mt-3 uppercase tracking-widest">
                  <div className="flex -space-x-2">
                    {['/images/curtain5.png', '/images/curtain2.png', '/images/curtain3.png'].map((src, i) => (
                      <div key={i} className="w-7 h-7 rounded-none border-[0.5px] border-white/20 overflow-hidden bg-slate-900">
                        <Image src={src} alt="" width={28} height={28} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by <strong className="text-white">4,800+</strong> families</span>
                </div>
              </div>

              {submitted ? (
                 <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 rounded-none bg-primary/10 border-[0.5px] border-primary/30 flex items-center justify-center mx-auto mb-6">
                       <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <h4 className="text-white font-black text-2xl tracking-tighter uppercase">Request Sent</h4>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-4 leading-relaxed transition-all">Our expert will contact you within 24 hours.</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                    <div className="space-y-4">
                      <div className="relative">
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="FULL NAME" className="w-full px-6 py-4 rounded-none bg-white/[0.02] border border-white/10 text-white placeholder:text-white/30 text-[10px] font-black tracking-widest focus:outline-none focus:border-primary/50 transition-all uppercase" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="EMAIL ADDRESS" className="w-full px-6 py-4 rounded-none bg-white/[0.02] border border-white/10 text-white placeholder:text-white/30 text-[10px] font-black tracking-widest focus:outline-none focus:border-primary/50 transition-all uppercase" />
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="PHONE NUMBER" className="w-full px-6 py-4 rounded-none bg-white/[0.02] border border-white/10 text-white placeholder:text-white/30 text-[10px] font-black tracking-widest focus:outline-none focus:border-primary/50 transition-all uppercase" />
                      </div>
                      <input type="text" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="INSTALLATION ADDRESS" className="w-full px-6 py-4 rounded-none bg-white/[0.02] border border-white/10 text-white placeholder:text-white/30 text-[10px] font-black tracking-widest focus:outline-none focus:border-primary/50 transition-all uppercase" />
                    </div>
                   
                   {formError && <p className="text-red-400 text-[9px] font-black uppercase tracking-[0.2em] mt-2">{formError}</p>}
                   
                   <StandardButton type="submit" disabled={submitting} fullWidth className="mt-4 mb-2">
                      {submitting ? 'PROCESSING...' : 'BOOK FREE CONSULTATION'}
                   </StandardButton>
                   <p className="text-center text-white/20 text-[8px] font-black uppercase tracking-[0.4em]">100% Privacy Guaranteed</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Stats - Bottom Floating */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-12">
           <div className="flex flex-col gap-1">
             <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Global Recognition</div>
             <div className="flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {['Artisan Crafted', 'Smart Home Ready', 'Child & Pet Safe'].map((badge, i) => (
                 <div key={i} className="text-white text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-none" />
                    {badge}
                 </div>
               ))}
             </div>
           </div>
           
           <div className="flex gap-16 flex-wrap lg:flex-nowrap">
             {stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                  <div className="text-white/40 text-[8px] font-black uppercase tracking-[0.4em] mt-1">{stat.label}</div>
                </div>
             ))}
           </div>
        </div>

      </div>

      {/* Slide Navigation Overlay */}
      <div className="absolute bottom-8 right-8 z-30 flex flex-col items-center gap-4">
        <div className="h-32 w-[1px] bg-white/10 relative">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-primary"
            style={{ height: `${((currentImage + 1) / backgroundImages.length) * 100}%` }}
          />
        </div>
        <div className="flex flex-col gap-4">
          {backgroundImages.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentImage(idx)} 
              className={`transition-all duration-500 rounded-none ${idx === currentImage ? 'w-1 h-8 bg-primary' : 'w-[1.5px] h-1.5 bg-white/20 hover:bg-white/40'}`} 
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
