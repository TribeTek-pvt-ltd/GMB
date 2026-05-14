import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import QuoteCTA from '@/components/home/QuoteCTA';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Link from 'next/link';

const GuideCard = ({ title, time, measureHref, installHref }: { title: string, time: string, measureHref: string, installHref: string }) => (
  <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col items-start gap-4 hover:-translate-y-1">
    <div className="w-12 h-12 bg-slate-50/80 rounded-xl flex items-center justify-center text-[#1756a0] mb-2 border border-slate-100">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#1a2647] mb-1.5">{title}</h3>
      <p className="text-[13px] text-slate-500 font-medium tracking-wide">{time}</p>
    </div>
    <div className="mt-4 flex flex-col w-full gap-2.5">
      <Link href={measureHref} className="text-[13px] font-bold text-[#1756a0] hover:text-[#1a2647] transition-all flex items-center justify-between group bg-slate-50/50 hover:bg-slate-100 px-4 py-3.5 rounded-xl border border-slate-100">
        How to Measure
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </Link>
      <Link href={installHref} className="text-[13px] font-bold text-[#1756a0] hover:text-[#1a2647] transition-all flex items-center justify-between group bg-slate-50/50 hover:bg-slate-100 px-4 py-3.5 rounded-xl border border-slate-100">
        How to Install
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </Link>
    </div>
  </div>
);

export default function MeasureAndInstallPage() {
  return (
    <div className="min-h-[70vh] bg-[#f8f9fa]">
      <Hero
        withGlow
        eyebrow="Guides & Support"
        title={<>Get The Perfect Fit<br />Without The Guesswork.</>}
        description="Just measure your space — ceiling to floor, wall to wall. We'll craft your product to fit that space, perfectly. No tricky calculations, no deductions needed."
        accentColor="#3d9e41"
      />

      <section className="py-24">
        <Container>
          <ScrollReveal>
             <div className="mb-20">
               <div className="mb-10 flex items-center gap-4">
                 <h2 className="text-2xl md:text-3xl font-display font-medium text-[#1a2647]">Blinds Guides</h2>
                 <div className="h-px bg-slate-200 flex-1"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <GuideCard title="Roller Blinds" time="5 MINS OR LESS" measureHref="#" installHref="#" />
                  <GuideCard title="Roman Blinds" time="5-15 MINS" measureHref="#" installHref="#" />
                  <GuideCard title="Vertical Blinds" time="5-15 MINS" measureHref="#" installHref="#" />
               </div>
             </div>

             <div className="mb-10">
               <div className="mb-10 flex items-center gap-4">
                 <h2 className="text-2xl md:text-3xl font-display font-medium text-[#1a2647]">Curtains Guides</h2>
                 <div className="h-px bg-slate-200 flex-1"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <GuideCard title="Sheer Curtains" time="5-20 MINS" measureHref="#" installHref="#" />
                  <GuideCard title="Blockout Curtains" time="5-20 MINS" measureHref="#" installHref="#" />
                  <GuideCard title="Double Curtains" time="10-30 MINS" measureHref="#" installHref="#" />
               </div>
             </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,86,160,0.03)_0,transparent_60%)]" />
        <Container>
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <span className="inline-flex items-center gap-2 text-[10px] text-[#3d9e41] font-bold uppercase tracking-[0.2em] mb-6">
                <div className="w-4 h-px bg-[#3d9e41]" /> Need Assistance? <div className="w-4 h-px bg-[#3d9e41]" />
              </span>
              <h2 className="text-3xl md:text-[2.5rem] leading-[1.2] font-display font-medium text-[#1a2647] mb-6">Have a tricky layout?</h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-slate-500 mb-10">Got corner windows, sloping ceilings, or unique architectural features? We've got you — just reach out and our team will help assure a perfect fit.</p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#1a2647] hover:bg-[#111930] text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-slate-200">
                Contact For Help
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <QuoteCTA />
    </div>
  );
}
