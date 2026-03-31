import Link from 'next/link';
import React from 'react';

const QuoteCTA = () => {
  return (
    <section className="w-full relative overflow-hidden bg-slate-950 py-16 sm:py-24 text-center text-white border-y border-white/5 mb-12 md:mb-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-md">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Get a personalized quote for your window treatments today. Our experts are ready to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact">
              <button className="bg-[var(--accent-yellow)] text-white px-6 py-3 rounded-xl font-bold text-lg transition-all w-full sm:w-auto hover:brightness-110">
                Request Free Quote
              </button>
            </Link>
            <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover:brightness-110">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
