import Link from 'next/link';

const QuoteCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-slate-900 to-emerald-900 py-24 px-8 text-center text-white shadow-2xl shadow-emerald-900/50 border border-white/10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get a personalized quote for your window treatments today. Our experts are ready to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <button className="bg-[var(--accent-yellow)] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform w-full sm:w-auto">
                Request Free Quote
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="bg-primary-foreground/10 border-2 border-white/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-transparent/10 transition-colors w-full sm:w-auto">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
