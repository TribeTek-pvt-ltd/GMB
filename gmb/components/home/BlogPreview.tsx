'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { itemVariants } from '../shared/AnimatedSection';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

const posts = [
  {
    title: "How to Choose the Right Fabric for Your Living Room",
    excerpt: "Discover the secrets to selecting curtains that balance architectural light and absolute privacy without compromising on aesthetics.",
    date: "March 5, 2026",
    category: "Design Tips",
    image: "/images/curtain1.png"
  },
  {
    title: "The Ultimate Guide to Quiet Motorized Blinds",
    excerpt: "From minimalist sheer to tech-integrated blackout systems, see what's trending in the luxury smart home ecosystem.",
    date: "February 28, 2026",
    category: "Smart Tech",
    image: "/images/curtain2.png"
  },
  {
    title: "The Impact of Premium Curtains on Energy Efficiency",
    excerpt: "Learn how layered thermal curtains can save up to 25% on your energy bills while providing a dramatic foundation to the room.",
    date: "February 20, 2026",
    category: "Advice",
    image: "/images/curtain3.png"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#4CAF50]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4CAF50]">Journal</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2E5A] mb-4 font-serif">
                Inside the Studio
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                Explore our curated articles regarding interior design methodology, fabric care, and the latest in window treatment elevations.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 text-[#1F2E5A] bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:text-[#4CAF50] hover:border-[#4CAF50]/30 transition-all duration-300 whitespace-nowrap"
              >
                View Full Journal
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group cursor-pointer bg-white rounded-2xl p-4 border border-slate-100 hover:border-slate-300 hover:shadow-[0_10px_30px_-15px_rgba(31,46,90,0.08)] transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-50 ring-1 ring-slate-100/50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-[#1F2E5A] shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="px-4 pb-4">
                <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-[0.2em]">{post.date}</p>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#1F2E5A] font-serif group-hover:text-[#4CAF50] transition-colors duration-300 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-light line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="w-full h-px bg-slate-100 mb-5" />
                
                <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] text-[#1F2E5A] group-hover:text-[#4CAF50] transition-colors duration-300">
                  Read Article
                  <motion.div
                    className="w-6 h-px bg-[#1F2E5A] group-hover:bg-[#4CAF50]"
                    transition={{ duration: 0.3 }}
                  />
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogPreview;
