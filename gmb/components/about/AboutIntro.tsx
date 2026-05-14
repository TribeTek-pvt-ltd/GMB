'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/curtain1.png"
              alt="Company Introduction"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6">
              A Legacy of Excellence and Trust
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              GMB started as a small family-owned workshop with a single mission: to provide high-quality, bespoke window treatments that reflect the personality of every home.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Today, we are proud to be an industry leader, trusted by thousands of homeowners and interior designers for our commitment to quality, precision, and unparalleled customer service.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100 mt-6">
              <div>
                <h4 className="text-4xl font-semibold text-[#1F2E5A] mb-2">20+</h4>
                <p className="text-slate-500 font-medium">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-semibold text-[#1F2E5A] mb-2">15k+</h4>
                <p className="text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
