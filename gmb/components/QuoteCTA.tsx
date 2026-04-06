import Link from 'next/link';
import React from 'react';
import StandardButton from './StandardButton';

const QuoteCTA = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#050B15] py-16 sm:py-20 text-center text-white border-y border-white/5 mb-8 sm:mb-12">
      {/* Precision Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Structured Gradient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container max-w-7xl mx-auto relative z-10 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 group cursor-default">
            <div className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Start Your Transformation</span>
            <div className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95] max-w-xl">
            Design Your <br />
            <span className="italic font-medium text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.2)]">Living Canvas.</span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mb-12">
            Experience the fusion of artisan precision and modern technology. Book your bespoke architectural consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <StandardButton variant="primary" className="px-12 py-5 shadow-2xl shadow-primary/10">
                Get Expert Quote
              </StandardButton>
            </Link>

            <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <StandardButton variant="outline" className="px-10 py-5">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </div>
              </StandardButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
