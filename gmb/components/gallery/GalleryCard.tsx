'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryCardProps {
  item: {
    id: string;
    title: string;
    image: string;
    location?: string;
    room?: string;
    category?: string;
    style?: string;
  };
  index: number;
  isSelected: boolean;
  isSaved: boolean;
  onSelect: () => void;
  onSave: (e: React.MouseEvent) => void;
}

const GalleryCard = ({ item, index, isSaved, onSelect, onSave }: GalleryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 ring-1 ring-slate-200/50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-lg font-medium tracking-tight mb-2">{item.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest">
                {item.location || item.room || 'Gallery'}
              </span>
              <span className="text-[9px] font-bold bg-[#1F2E5A]/80 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest">
                {item.category || item.style || 'Bespoke'}
              </span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={onSave}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 transform ${
            isSaved 
              ? 'bg-[#1F2E5A] text-white' 
              : 'bg-white/80 text-slate-900 border border-white/50 hover:bg-[#1F2E5A] hover:text-white opacity-0 group-hover:opacity-100'
          }`}
          title={isSaved ? "Saved to Selection" : "Save to Selection"}
        >
          <svg className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
