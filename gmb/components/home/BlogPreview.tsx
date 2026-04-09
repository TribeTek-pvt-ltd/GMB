'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const posts = [
  {
    title: "How to Choose the Right Fabric for Your Living Room",
    excerpt: "Discover the secrets to selecting curtains that balance architectural light and absolute privacy without compromising on aesthetics.",
    date: "March 5, 2026",
    category: "Design Tips",
    image: "/images/curtain1.png",
    categoryColor: '#3d9e41',
  },
  {
    title: "The Ultimate Guide to Quiet Motorized Blinds",
    excerpt: "From minimalist sheer to tech-integrated blackout systems — see what's defining the luxury smart home ecosystem.",
    date: "February 28, 2026",
    category: "Smart Tech",
    image: "/images/curtain2.png",
    categoryColor: '#1756a0',
  },
  {
    title: "Premium Curtains & Energy Efficiency",
    excerpt: "Learn how layered thermal curtains can reduce energy bills by up to 25% while delivering a dramatic visual foundation.",
    date: "February 20, 2026",
    category: "Advice",
    image: "/images/curtain3.png",
    categoryColor: '#3d9e41',
  },
];

const BlogPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc]" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#3d9e41]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#3d9e41]">Journal</span>
            </div>
            <h2 className="font-display font-bold text-[#0f172a] text-4xl md:text-5xl tracking-tight leading-tight mb-3">
              Inside the Studio.
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Design methodology, fabric care tips, and the latest in window treatment innovations.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 shrink-0 border border-slate-200 bg-white hover:border-[#3d9e41]/50 hover:text-[#3d9e41] text-slate-600 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
          >
            View Journal
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.08)] transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image
                  src={post.image} alt={post.title} fill
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] bg-white/90 backdrop-blur-sm shadow-sm"
                  style={{ color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{post.date}</p>
                <h3 className="font-display font-bold text-[#0f172a] text-lg leading-snug tracking-tight mb-3 group-hover:text-[#1756a0] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-5 border-t border-slate-100 flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
                  Read Article
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default BlogPreview;
