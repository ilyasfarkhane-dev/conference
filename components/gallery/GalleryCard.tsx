"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/data/galleryData";
import { cardVariants } from "./animations";

const layoutClasses: Record<GalleryItem["layout"], string> = {
  featured: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[420px]",
  wide: "md:col-span-2 min-h-[220px]",
  tall: "md:row-span-2 min-h-[320px] md:min-h-[420px]",
  standard: "min-h-[220px]",
};

interface GalleryCardProps {
  item: GalleryItem;
  priority?: boolean;
}

const GalleryCard = ({ item, priority = false }: GalleryCardProps) => {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: "-40px" }}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow duration-300 ${layoutClasses[item.layout]}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        sizes={
          item.layout === "featured"
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, 25vw"
        }
        priority={priority}
      />
    </motion.article>
  );
};

export default GalleryCard;
