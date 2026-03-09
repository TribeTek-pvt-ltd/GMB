import Image from 'next/image';
import Link from 'next/link';

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
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Latest from our <span className="gradient-text">Blog</span></h2>
            <p className="text-slate-300 text-lg">
              Explore our latest articles on interior design, fabric care, and window treatment trends.
            </p>
          </div>
          <Link href="/blog" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-colors whitespace-nowrap">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 premium-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-transparent/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-slate-400 font-medium mb-3">{post.date}</p>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
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
