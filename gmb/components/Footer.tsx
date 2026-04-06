'use client';

import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';

const Footer = () => {
  const { openTrackModal, openTermsModal, openPrivacyModal } = useModal();

  return (
    <footer className="bg-[#050B15] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-12 -left-20 text-[20rem] font-black leading-none text-white/[0.02] select-none pointer-events-none font-serif tracking-tighter">
        GMB
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/5">
          
          {/* Brand & Social - 4 Cols */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-8 group">
                <div className="flex items-center gap-2 text-3xl font-black tracking-tighter">
                  <span className="text-primary group-hover:text-white transition-colors">G</span>
                  <span>M</span>
                  <span className="text-[#F4A300]">B</span>
                </div>
                <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500 mt-1" />
              </Link>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
                Architectural window treatments for modern spaces. We combine artisan precision with smart home technology.
              </p>
              
              <div className="flex gap-3">
                {[
                  { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "FB" },
                  { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z", label: "IN" },
                  { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "TW" }
                ].map((social, i) => (
                  <Link key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center group hover:bg-white/5 hover:border-primary/50 transition-all duration-500">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation - 4 Cols (split into 2) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Vision</Link></li>
                <li><Link href="/products" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Collection</Link></li>
                <li><Link href="/gallery" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Concierge</h4>
              <ul className="space-y-4">
                <li><Link href="/measure-install" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Technical</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Enquiry</Link></li>
                <li><button onClick={openTrackModal} className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">Tracking</button></li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter - 4 Cols */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Join the Circle</h4>
            <div className="relative group mb-8">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[10px] font-black tracking-widest focus:outline-none focus:border-primary/50 transition-all uppercase placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-slate-900 text-[8px] font-black uppercase tracking-widest hover:bg-white transition-all">
                Subscribe
              </button>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">hello@gmb.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">+1 (800) GMB-PRIME</span>
              </div>
              <div className="flex items-start gap-4 text-slate-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                  No. 123, Luxury Living,<br />
                  Coimbatore, Tamil Nadu,<br />
                  India - 641001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
            &copy; 2026 GMB • ARQUITECTURA DE VENTANAS
          </p>
          <div className="flex items-center gap-8">
            <button onClick={openTermsModal} className="text-white/20 hover:text-white text-[9px] font-black uppercase tracking-[0.2em] transition-colors">Terms</button>
            <button onClick={openPrivacyModal} className="text-white/20 hover:text-white text-[9px] font-black uppercase tracking-[0.2em] transition-colors">Privacy</button>
            <button onClick={openTrackModal} className="text-white/20 hover:text-white text-[9px] font-black uppercase tracking-[0.2em] transition-colors">Support</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
