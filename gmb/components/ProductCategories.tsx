import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';

const ProductCategories = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent" id="categories">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header - Signature Sync */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Signature Collections</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Our <span className="gradient-text"><span className="italic">Product</span> Categories</span>
            </h2>
            <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
              Choose from our wide range of premium window treatments tailored to your style.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {ALL_PRODUCTS.slice(0, 6).map((category, index) => (
            <div key={index} className="premium-card relative h-[420px] overflow-hidden rounded-[1.5rem]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-10 sm:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{category.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{category.description}</p>
                <Link href={`/products?category=${category.slug}`} className="mt-4">
                  <button className="text-white font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    Browse Category
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* View All Card Banner */}
          <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 sm:col-span-2 lg:col-span-3 group transition-all duration-500 border border-white/10 shadow-xl">
            {/* Ambient luxury glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent-yellow/10 rounded-full blur-[80px] translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 sm:p-12 lg:p-16 gap-8">
              <div className="flex-1 max-w-2xl">
                <h3 className="text-white text-3xl md:text-4xl lg:text-[2.5rem] font-black mb-4 tracking-tight drop-shadow-md">
                  View All Categories
                </h3>
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                  Explore our complete collection of premium window treatments, smart tech, and accessories.
                </p>
              </div>
              
              <Link href="/products" className="shrink-0">
                <button className="relative overflow-hidden bg-white text-slate-900 px-10 py-5 rounded-full font-extrabold tracking-wide text-sm sm:text-base transition-all duration-300 flex items-center gap-3 group-hover:pr-8 group/btn">
                  Explore Catalog
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
