import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative bg-transparent overflow-hidden">
      {/* Cinematic Ambient Lighting - Optimized for Light Background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 left-10 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none translate-y-1/2 opacity-40" />

      <div className="container mx-auto relative z-10 max-w-7xl px-6">


        {/* Cinematic Bento Grid - Sleek 4-Column Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {/* Feature 01 */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 overflow-hidden hover:border-primary/40 hover:bg-slate-900 transition-all duration-700 shadow-2xl shadow-slate-950/20">
            {/* Giant Watermarked Number - Light for Dark Card */}
            <div className="absolute -top-6 right-0 text-[10rem] leading-none font-black text-white/[0.03] font-serif select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700">
              01
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary/20 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif line-clamp-2 leading-tight">
                Fabrics You Fall For
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mt-auto">
                Luxuriously soft, fade-defying textiles sourced from respected mills — built to age beautifully.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-700 shadow-2xl shadow-slate-950/20">
            {/* Giant Watermarked Number - Light for Dark Card */}
            <div className="absolute -top-6 right-0 text-[10rem] leading-none font-black text-white/[0.03] font-serif select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-700">
              02
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-10 group-hover:bg-cyan-500/20 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif line-clamp-2 leading-tight">
                Made by Hand
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                20+ years of artisan precision — every stitch thoughtful, every edge flawlessly set and finished.
              </p>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 overflow-hidden hover:border-teal-500/40 hover:bg-slate-900 transition-all duration-700 shadow-2xl shadow-slate-950/20">
            {/* Giant Watermarked Number - Light for Dark Card */}
            <div className="absolute -top-6 right-0 text-[10rem] leading-none font-black text-white/[0.03] font-serif select-none pointer-events-none group-hover:text-teal-500/[0.05] transition-colors duration-700">
              03
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-10 group-hover:bg-teal-500/20 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif line-clamp-2 leading-tight">
                Installed Flawlessly
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                One clean visit. No dust. No stress. Just perfect fit and operation the very first time.
              </p>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-12 overflow-hidden hover:border-accent-yellow/40 hover:bg-slate-900 transition-all duration-700 shadow-2xl shadow-slate-950/20">
            {/* Giant Watermarked Number - Light for Dark Card */}
            <div className="absolute -top-6 right-0 text-[10rem] leading-none font-black text-white/[0.03] font-serif select-none pointer-events-none group-hover:text-accent-yellow/[0.05] transition-colors duration-700">
              04
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-yellow mb-10 group-hover:bg-accent-yellow/20 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif line-clamp-2 leading-tight">
                Guided by You
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                Free in-home visit. Honest conversation. Measurements and recommendations that truly fit your life.
              </p>
            </div>
          </div>

        </div>

        {/* Cinematic Glowing CTA */}
        <div className="text-center mt-12 md:mt-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-primary/20 blur-[50px] pointer-events-none rounded-full" />

          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-[#4CAF50] text-white text-base md:text-lg font-bold rounded-2xl shadow-[0_20px_40px_rgba(76,175,80,0.2)] hover:shadow-[0_25px_50px_rgba(76,175,80,0.3)] transition-all duration-500 border border-primary/20"
          >
            Let’s make your windows feel like home
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-500/60 drop-shadow-sm">
            Takes 2 minutes <span className="mx-2 text-primary">•</span> Always free <span className="mx-2 text-primary">•</span> Zero pressure
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;