'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [direction, setDirection] = useState(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const active = testimonials[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900">
            What Our <span className="gradient-text italic">Clients Say</span>
          </h2>
        </motion.div>

        {/* Carousel Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-[0_4px_40px_-5px_rgba(0,0,0,0.06)] border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative h-[300px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.workImage}
                    alt={`${active.name}'s installation`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-slate-800 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Featured Project
              </div>
            </div>

            {/* Right: Review */}
            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-16 bg-[#1F2E5A] overflow-hidden">
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex text-accent-yellow mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Review Text */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`review-${activeIndex}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light mb-8 font-serif italic">
                      &ldquo;{active.content}&rdquo;
                    </p>

                    {/* Client Profile */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold shadow-md border-2 border-white/20 shrink-0">
                        {active.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">{active.name}</h4>
                        <p className="text-xs text-primary font-medium uppercase tracking-widest mt-0.5">{active.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 flex items-center gap-4 z-20">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-400 rounded-full h-1.5 ${
                    idx === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
