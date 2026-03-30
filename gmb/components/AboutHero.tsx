const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/8 rounded-xl blur-3xl" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Our Legacy</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
                Crafting Elegance for <span className="gradient-text">Every Window</span>
             </h1>
             <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
                Since 2005, GMB has been at the forefront of premium window treatments, combining traditional artistry with modern innovation.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
