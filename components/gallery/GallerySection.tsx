"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/galleryData";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import { sectionVariants } from "./animations";

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

interface GallerySectionProps {
  showArchiveCta?: boolean;
}

const GallerySection = ({ showArchiveCta = true }: GallerySectionProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-ictim-light dark:bg-ictim-navy py-20 sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(30,64,175,0.25) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 65%)" }}
        />
      </div>

      <motion.div
        className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mb-10 sm:mb-12">
          <GalleryHeader />
        </div>

        <GalleryGrid items={galleryItems} loading={loading} />

        {showArchiveCta && (
          <motion.div
            className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto rounded-full bg-ictim-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 cursor-pointer touch-manipulation hover:bg-ictim-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2"
            >
              View Complete Archive
              <ArrowIcon />
            </Link>
          </motion.div>
        )}
      </motion.div>

      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-600/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default GallerySection;
