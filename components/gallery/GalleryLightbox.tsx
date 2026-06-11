"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/data/galleryData";
import { lightboxOverlayVariants, lightboxPanelVariants } from "./animations";

const ChevronLeft = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GalleryLightbox = ({ items, activeIndex, onClose, onNavigate }: GalleryLightboxProps) => {
  const item = items[activeIndex];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  const goPrevItem = useCallback(() => {
    onNavigate(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  }, [activeIndex, items.length, onNavigate]);

  const goNextItem = useCallback(() => {
    onNavigate(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, items.length, onNavigate]);

  const goPrevImage = useCallback(() => {
    if (!item) return;
    setImageIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  }, [item]);

  const goNextImage = useCallback(() => {
    if (!item) return;
    setImageIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  }, [item]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        event.shiftKey ? goPrevItem() : item && item.images.length > 1 ? goPrevImage() : goPrevItem();
      }
      if (event.key === "ArrowRight") {
        event.shiftKey ? goNextItem() : item && item.images.length > 1 ? goNextImage() : goNextItem();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, goPrevItem, goNextItem, goPrevImage, goNextImage, item]);

  if (!item) return null;

  const currentImage = item.images[imageIndex] ?? item.image;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox"
        className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6"
        variants={lightboxOverlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          type="button"
          className="absolute inset-0 bg-ictim-navy/70 backdrop-blur-md cursor-pointer"
          onClick={onClose}
          aria-label="Close gallery lightbox"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          variants={lightboxPanelVariants}
          className="relative z-10 flex w-full max-w-5xl max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${item.id}-${imageIndex}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-ictim-navy/60 via-transparent to-ictim-navy/20 pointer-events-none" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 shadow-sm transition-colors duration-200 cursor-pointer hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {item.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-sm cursor-pointer hover:bg-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={goNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-sm cursor-pointer hover:bg-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {item.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        idx === imageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ictim-primary mb-2">
                  {item.date}
                </p>
                <h3 id="lightbox-title" className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={goPrevItem}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                  aria-label="Previous story"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={goNextItem}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                  aria-label="Next story"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </p>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Story {activeIndex + 1} of {items.length}
              {item.images.length > 1 && ` · Image ${imageIndex + 1} of ${item.images.length}`}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default GalleryLightbox;
