import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative bg-slate-950 overflow-hidden">
      {/* Massive Cinematic Lighting Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto relative z-10 max-w-7xl">


        {/* Cinematic Bento Grid - Sleek 4-Column Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {/* Feature 01 */}
          <div className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 md:p-8 overflow-hidden hover:border-primary/30 hover:bg-slate-900/80 transition-all duration-700">
            {/* Giant Editorial Number */}
            <div className="absolute -top-4 right-0 text-[8rem] leading-none font-black text-white/[0.02] font-serif select-none pointer-events-none group-hover:text-primary/[0.04] transition-colors duration-700">
              01
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(76,175,80,0.3)] transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-serif line-clamp-2">
                Fabrics You Fall For
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                Luxuriously soft, fade-defying textiles sourced from respected mills — built to age beautifully.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 md:p-8 overflow-hidden hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-700">
            {/* Giant Editorial Number */}
            <div className="absolute -top-4 right-0 text-[8rem] leading-none font-black text-white/[0.02] font-serif select-none pointer-events-none group-hover:text-cyan-500/[0.04] transition-colors duration-700">
              02
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-serif line-clamp-2">
                Made by Hand
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                20+ years of artisan precision — every stitch thoughtful, every edge flawlessly set and finished.
              </p>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 md:p-8 overflow-hidden hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-700">
            {/* Giant Editorial Number */}
            <div className="absolute -top-4 right-0 text-[8rem] leading-none font-black text-white/[0.02] font-serif select-none pointer-events-none group-hover:text-teal-500/[0.04] transition-colors duration-700">
              03
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-8 group-hover:bg-teal-500/20 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-serif line-clamp-2">
                Installed Flawlessly
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto">
                One clean visit. No dust. No stress. Just perfect fit and operation the very first time.
              </p>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 md:p-8 overflow-hidden hover:border-accent-yellow/30 hover:bg-slate-900/80 transition-all duration-700">
            {/* Giant Editorial Number */}
            <div className="absolute -top-4 right-0 text-[8rem] leading-none font-black text-white/[0.02] font-serif select-none pointer-events-none group-hover:text-accent-yellow/[0.04] transition-colors duration-700">
              04
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-yellow mb-8 group-hover:bg-accent-yellow/20 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-serif line-clamp-2">
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
            className="relative z-10 inline-flex items-center gap-3 px-8 py-5 bg-white text-slate-900 text-base md:text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-[1.02]"
          >
            Let’s make your windows feel like home
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
            Takes 2 minutes <span className="mx-2 text-primary">•</span> Always free <span className="mx-2 text-primary">•</span> Zero pressure
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;