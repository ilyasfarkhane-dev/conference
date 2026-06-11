"use client";

import { motion } from "framer-motion";
import type { GalleryItem } from "@/data/galleryData";
import GalleryCard from "./GalleryCard";
import { skeletonPulseClass } from "./animations";

interface GalleryGridProps {
  items: GalleryItem[];
  loading: boolean;
}

const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4 sm:gap-5">
    <div className={`md:col-span-2 md:row-span-2 rounded-3xl ${skeletonPulseClass}`} />
    <div className={`md:col-span-2 rounded-3xl ${skeletonPulseClass}`} />
    <div className={`rounded-3xl ${skeletonPulseClass}`} />
    <div className={`md:row-span-2 rounded-3xl ${skeletonPulseClass}`} />
    <div className={`rounded-3xl ${skeletonPulseClass}`} />
    <div className={`rounded-3xl ${skeletonPulseClass}`} />
  </div>
);

const GalleryGrid = ({ items, loading }: GalleryGridProps) => {
  if (loading) return <GallerySkeleton />;

  return (
    <>
      {/* Mobile: horizontal featured swipe + single column */}
      <motion.div layout className="md:hidden">
        <div className="mb-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 scrollbar-none">
          {items
            .filter((item) => item.featured)
            .slice(0, 3)
            .map((item) => (
              <div key={`mobile-${item.id}`} className="snap-center shrink-0 w-[85vw] max-w-sm">
                <GalleryCard item={{ ...item, layout: "featured" }} priority />
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <GalleryCard key={item.id} item={{ ...item, layout: "standard" }} />
          ))}
        </div>
      </motion.div>

      {/* Tablet: 2-column masonry */}
      <motion.div
        layout
        className="hidden md:grid lg:hidden grid-cols-2 auto-rows-[220px] gap-4 sm:gap-5"
      >
        {items.map((item) => (
          <GalleryCard
            key={item.id}
            item={
              item.featured
                ? item
                : { ...item, layout: item.layout === "featured" ? "wide" : item.layout }
            }
          />
        ))}
      </motion.div>

      {/* Desktop: 4-column bento */}
      <motion.div
        layout
        className="hidden lg:grid grid-cols-4 auto-rows-[200px] gap-4 xl:gap-5"
      >
        {items.map((item, index) => (
          <GalleryCard key={item.id} item={item} priority={index < 2} />
        ))}
      </motion.div>
    </>
  );
};

export default GalleryGrid;
