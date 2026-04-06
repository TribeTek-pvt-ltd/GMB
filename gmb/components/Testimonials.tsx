'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    initials: "SJ",
    content: "The quality of the curtains is exceptional. It transformed my living room into a luxury space. The bespoke measurements fit identically to my vision. Highly recommend their service!",
    workImage: "/images/curtain1.png"
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    initials: "MC",
    content: "As a designer, I'm very picky with fabrics. GMB consistently delivers premium quality that my clients love, paired with seamless motorization tech.",
    workImage: "/images/curtain2.png"
  },
  {
    name: "Emma Wilson",
    role: "Architect",
    initials: "EW",
    content: "Professional, timely, and beautiful work. Their automated blackout curtains are an absolute game changer for the modern smart homes we build.",
    workImage: "/images/curtain3.png"
  },
  {
    name: "David Aris",
    role: "Real Estate Developer",
    initials: "DA",
    content: "We outfitted our entire new luxury condo building with their sheer and motorized options. The feedback and perceived value from buyers has been incredible.",
    workImage: "/images/curtain4.png"
  },
  {
    name: "Jessica Lane",
    role: "Boutique Owner",
    initials: "JL",
    content: "The custom motorized blinds give my store an incredibly high-end, exclusive feel. Installation was fast, pristine, and didn't disrupt my business.",
    workImage: "/images/curtain5.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400); // Wait for fade out
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 400); // Wait for fade out
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Carousel Showcase */}
        <div className="relative w-full rounded-none overflow-hidden bg-slate-900 shadow-[0_20px_50px_-15px_rgba(31,46,90,0.25)] border border-slate-800">
          
          <div className={`grid grid-cols-1 lg:grid-cols-2 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            
            {/* Left Box: Client's Work Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden">
              <Image 
                src={active.workImage} 
                alt={`${active.name}'s installation`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Overlay gradient to blend edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/30 pointer-events-none" />
              
              {/* Floating tag on image */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest text-slate-800 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-primary animate-pulse" />
                Featured Project
              </div>
            </div>

            {/* Right Box: Review Content */}
            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12 bg-slate-900 overflow-hidden">
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-none blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-yellow/10 rounded-none blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex text-accent-yellow mb-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl lg:text-[1.5rem] leading-relaxed text-white font-medium mb-8 drop-shadow-sm font-serif italic">
                  "{active.content}"
                </p>

                {/* Client Profile */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-none bg-primary flex items-center justify-center text-white text-xl font-bold shadow-[0_0_20px_rgba(76,175,80,0.4)] border-2 border-white/20 shrink-0">
                    {active.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{active.name}</h4>
                    <p className="text-sm text-primary font-bold uppercase tracking-widest mt-1">{active.role}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controls & Pagination */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 flex items-center gap-6 z-20">
            <button onClick={handlePrev} aria-label="Previous testimonial" className="w-10 h-10 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 focus:outline-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating || idx === activeIndex) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 400);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-none h-2 ${idx === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
            <button onClick={handleNext} aria-label="Next testimonial" className="w-10 h-10 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 focus:outline-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
