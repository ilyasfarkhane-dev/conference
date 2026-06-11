"use client";

import { motion } from "framer-motion";
import { galleryCategories, type GalleryCategory } from "@/data/galleryData";

interface GalleryFilterProps {
  active: GalleryCategory | "all";
  onChange: (category: GalleryCategory | "all") => void;
  counts: Record<GalleryCategory | "all", number>;
}

const GalleryFilter = ({ active, onChange, counts }: GalleryFilterProps) => {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none"
      role="tablist"
      aria-label="Filter gallery by category"
    >
      {galleryCategories.map((cat) => {
        const isActive = active === cat.id;

        return (
          <motion.button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            layout
            className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 ${
              isActive
                ? "text-white"
                : "border border-slate-200/80 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 hover:border-ictim-primary/30 hover:text-ictim-primary"
            }`}
            whileTap={{ scale: 0.97 }}
          >
            {isActive && (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full bg-ictim-primary shadow-md shadow-ictim-primary/25"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {cat.label}
              <span
                className={`text-[11px] font-semibold tabular-nums ${
                  isActive ? "text-white/80" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {counts[cat.id]}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default GalleryFilter;
