'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const posts = [
  {
    title: "How to Choose the Right Fabric for Your Living Room",
    excerpt: "Discover the secrets to selecting curtains that balance light and privacy...",
    date: "March 5, 2026",
    category: "Design Tips",
    image: "/images/curtain1.png"
  },
  {
    title: "Trending Curtain Styles of 2026",
    excerpt: "From minimalist sheer to tech-integrated blackout, see what's trending...",
    date: "February 28, 2026",
    category: "Trends",
    image: "/images/curtain2.png"
  },
  {
    title: "The Impact of Curtains on Home Energy Efficiency",
    excerpt: "Learn how thermal curtains can save up to 25% on your energy bills...",
    date: "February 20, 2026",
    category: "Advice",
    image: "/images/curtain3.png"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Journal</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900 mb-4">
                Latest from our <span className="gradient-text italic">Blog</span>
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Explore our latest articles on interior design, fabric care, and window treatment trends.
              </p>
            </div>
            <div className="shrink-0 pb-1">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-slate-900 font-medium text-sm uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  View All Articles
                </span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.1}>
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-primary shadow-sm">
                  {post.category}
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">{post.date}</p>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-500 mb-5 leading-relaxed font-light line-clamp-2 text-sm">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-medium text-slate-700 group-hover:text-primary transition-colors duration-300">
                Read More
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </motion.svg>
              </div>
            </motion.article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogPreview;
