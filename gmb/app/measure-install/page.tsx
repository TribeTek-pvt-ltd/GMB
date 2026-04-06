'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StandardButton from '@/components/StandardButton';

const MeasureInstallPage = () => {
  const steps = [
    {
      id: '01',
      title: 'Determine Mount Type',
      description: 'Choose between Inside Mount (Recess) for a clean architectural look or Outside Mount (Face Fit) to make windows appear larger.',
      details: ['Check depth for Inside Mount', 'Overlap requirements for Outside Mount'],
    },
    {
      id: '02',
      title: 'Measure Width',
      description: 'Measure the width at the top, middle, and bottom. For inside mount, use the narrowest measurement.',
      details: ['Measure to the nearest mm', 'Zero deductions required'],
    },
    {
      id: '03',
      title: 'Measure Drop',
      description: 'Measure the height at the left, middle, and right. For inside mount, use the longest measurement.',
      details: ['Consider sill clearance', 'Floor-to-ceiling alignment'],
    },
  ];

  const installFeatures = [
    {
      title: 'Laser Precision',
      description: 'Our installers use industrial-grade laser levels to ensure every track is perfectly horizontal.',
    },
    {
      title: 'Secure Anchoring',
      description: 'Bespoke fixing solutions for every wall type, from concrete to reinforced plasterboard.',
    },
    {
      title: 'Clean Handover',
      description: 'We leave your space exactly as we found it—except for the beautiful new atmosphere.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-slate-100">
        <div className="container max-w-7xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Technical Standards</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1F2E5A] mb-8 leading-[0.95] font-serif whitespace-nowrap md:whitespace-normal">
              Measure <span className="gradient-text italic font-medium pr-4">&</span> <br className="md:hidden" /> Install.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Precision is the foundation of luxury. Follow our expert standards for measurement or book a professional installation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Measurement Guide */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1F2E5A] mb-12 tracking-tight">The Measuring <br /><span className="italic font-medium pr-2">Protocol.</span></h2>
              <div className="space-y-12">
                {steps.map((step) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-16 group"
                  >
                    <span className="absolute left-0 top-0 text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">
                      {step.id}
                    </span>
                    <h3 className="text-xl font-bold text-[#1F2E5A] mb-4">{step.title}</h3>
                    <p className="text-slate-500 font-light mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <div className="w-1.5 h-1.5 bg-primary/40 rounded-none" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="aspect-[4/5] bg-white border border-slate-200 p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 h-full flex flex-col justify-center border-2 border-slate-200/50 p-8">
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-[10px] font-black text-slate-400 tracking-widest uppercase">Inside Mount Diagram</div>
                     <div className="w-full h-full border border-dashed border-primary/30 flex items-center justify-center">
                        <span className="text-slate-300 text-xs font-black uppercase tracking-[0.2em] transform -rotate-12">Precise Fit Standard</span>
                     </div>
                  </div>
                </div>
                <div className="mt-8 p-8 bg-[#1F2E5A] text-white rounded-none">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Pro Tip</p>
                  <p className="text-sm font-light leading-relaxed italic">"Always use a metal tape measure. Fabric tapes can stretch over time, leading to inaccurate results in architectural fits."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Quality */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-[#1F2E5A] mb-4 tracking-tight">Professional <span className="gradient-text italic font-medium pr-2">Execution.</span></h2>
            <p className="text-slate-500 font-light">White-glove service from measurement to the final adjustment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {installFeatures.map((feature, idx) => (
              <div key={idx} className="p-10 border border-slate-100 hover:border-primary/20 transition-all duration-500 group">
                <div className="w-12 h-px bg-primary/20 mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-xl font-bold text-[#1F2E5A] mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact?form=quote">
              <StandardButton variant="secondary" className="px-12 py-6 shadow-2xl">
                Book Expert Measurement
              </StandardButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MeasureInstallPage;
