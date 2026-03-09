const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Crafting Elegance for <br />
            <span className="gradient-text">Every Window</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Since 2005, CurtainMaster has been at the forefront of premium window treatments, combining traditional artistry with modern innovation.
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
