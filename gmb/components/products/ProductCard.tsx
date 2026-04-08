import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProductCardProps {
  href: string;
  image: string;
  title: string;
  // Optional top-left badge (e.g. Lead Time, New Arrival)
  badge?: ReactNode;
  // Optional top-right text (e.g. Number sequence)
  sequenceNum?: string;
  // Below the image, the top sub-label (e.g. "Custom Made" or the category group)
  subLabel?: string;
  // The right aligned info block (e.g. Price "From $159")
  priceBlock?: ReactNode;
  // Middle description text
  description?: string;
  // Features / Tags listed below description
  tags?: string[];
  // Bottom Call to Action Text
  ctaText?: string;
}

export default function ProductCard({
  href,
  image,
  title,
  badge,
  sequenceNum,
  subLabel,
  priceBlock,
  description,
  tags,
  ctaText = "Explore Details"
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(23,86,160,0.08)] hover:border-[#1756a0]/30 transition-all duration-400"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

        {badge && (
          <div className="absolute top-5 left-5 z-10 hidden sm:block">
            {badge}
          </div>
        )}

        {sequenceNum && (
          <div className="absolute bottom-4 right-5 text-white/90 text-sm font-display font-bold select-none drop-shadow-md">
            {sequenceNum}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            {subLabel && (
              <span className="text-[#1756a0] text-[9px] font-bold uppercase tracking-[0.2em] mb-1 block opacity-80">
                {subLabel}
              </span>
            )}
            <h3 className="font-display font-bold text-[#0f172a] text-2xl tracking-tight group-hover:text-[#1756a0] transition-colors duration-300">
              {title}
            </h3>
          </div>
          {priceBlock && (
            <div className="text-right">
              {priceBlock}
            </div>
          )}
        </div>

        {description && (
          <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-1 line-clamp-2">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-100 px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Call to action arrow */}
        <div className="flex items-center gap-3 mt-auto border-t border-slate-100 pt-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300">
            {ctaText}
          </span>
          <svg className="w-4 h-4 text-[#1756a0] group-hover:text-[#3d9e41] transition-colors duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
