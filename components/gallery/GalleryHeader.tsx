"use client";

import { motion } from "framer-motion";
import { galleryMemoryCount } from "@/data/galleryData";
import { conference } from "@/data/conference";
import { fadeUpVariants } from "./animations";

const GalleryHeader = () => {
  return (
    <motion.header variants={fadeUpVariants} className="max-w-3xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
        <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
        Our Moments
      </span>

      <motion.h2
        id="gallery-heading"
        className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 dark:text-white leading-[1.08] tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Explore Our Gallery
      </motion.h2>

      <motion.p
        className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        A curated visual archive of {conference.shortName} — ceremonies, awards, workshops,
        and the community that shapes intelligent digital ecosystems.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
       
      </motion.div>
    </motion.header>
  );
};

export default GalleryHeader;
