import Image from 'next/image';
import Link from 'next/link';
import StandardButton from './StandardButton';

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
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">Curated <span className="gradient-text italic">Knowledge</span></h2>
            <p className="text-slate-500 text-lg">
              Explore our latest articles on interior design, fabric care, and window treatment trends.
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Link href="/blog">
              <StandardButton variant="outline" className="!px-6 !py-3 !text-[10px] !text-slate-900 !border-slate-200">
                <div className="flex items-center gap-2">
                  View All Articles
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </StandardButton>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-none overflow-hidden mb-4 premium-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 "
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-none text-xs font-bold text-primary">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-3">{post.date}</p>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-bold text-slate-800 group-hover:text-primary group-hover:gap-4 transition-all">
                Read More
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
