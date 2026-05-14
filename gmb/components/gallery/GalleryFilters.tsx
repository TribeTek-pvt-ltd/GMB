'use client';

import { motion } from 'framer-motion';

interface GalleryFiltersProps {
  locations: string[];
  activeLocation: string;
  onFilterChange: (location: string) => void;
}

const GalleryFilters = ({ locations, activeLocation, onFilterChange }: GalleryFiltersProps) => {
  if (locations.length === 0) return null;

  return (
    <div className="container max-w-7xl mx-auto px-6 mb-12">
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {['All', ...locations].map((loc) => (
          <button
            key={loc}
            onClick={() => onFilterChange(loc)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
              activeLocation === loc
                ? 'bg-[#1F2E5A] text-white border-[#1F2E5A] shadow-md'
                : 'bg-white text-slate-500 border-slate-200 hover:border-[#1F2E5A]/30 hover:text-[#1F2E5A]'
            }`}
          >
            {loc}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryFilters;
