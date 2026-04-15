'use client';

import { motion } from 'framer-motion';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  items: any[];
  isSaved: (id: string) => boolean;
  onSelect: (index: number) => void;
  onSave: (item: any) => void;
  onClearFilters: () => void;
}

const GalleryGrid = ({ items, isSaved, onSelect, onSave, onClearFilters }: GalleryGridProps) => {
  if (items.length === 0) {
    return (
      <div className="container max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-5xl font-medium text-slate-200 block mb-6 select-none">No Projects Found</span>
          <p className="text-slate-500 font-light mb-8 max-w-sm mx-auto">
            We couldn&apos;t find any projects matching your current filters.
          </p>
          <button
            onClick={onClearFilters}
            className="px-8 py-3 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all border border-slate-200"
          >
            Clear Filters
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {items.map((item, idx) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={idx}
            isSelected={false}
            isSaved={isSaved(item.id)}
            onSelect={() => onSelect(idx)}
            onSave={(e) => {
              e.stopPropagation();
              onSave(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
