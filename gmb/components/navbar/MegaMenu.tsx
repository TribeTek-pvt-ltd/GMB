import Link from 'next/link';
import Image from 'next/image';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export function MegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-[45%] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[950px]">
      <div className="bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 grid grid-cols-3 gap-x-10 gap-y-8">
        {PRODUCT_CATEGORIES.map((group) => (
          <div key={group.title} className="space-y-5">
            <h3 className="text-sm font-bold text-primary tracking-wider uppercase border-b border-slate-100 pb-2">{group.title}</h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="flex items-center gap-4 group/item">
                  <div className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100 ${item.isNew ? 'ring-2 ring-[#F4A300]/50' : ''}`}>
                    <Image src={item.image} alt={item.title} fill sizes="48px" className="object-cover group-hover/item:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-700 font-bold group-hover/item:text-primary transition-colors text-sm">{item.title}</span>
                      {item.isNew && <span className="bg-[#F4A300]/10 text-[#F4A300] text-[9px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>}
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
