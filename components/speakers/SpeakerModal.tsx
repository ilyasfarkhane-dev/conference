"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Speaker } from "@/data/speakersData";
import { modalOverlay, modalPanel } from "./animations";

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

interface SpeakerModalProps {
  speakers: Speaker[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SpeakerModal = ({ speakers, activeIndex, onClose, onNavigate }: SpeakerModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const speaker = speakers[activeIndex];

  const goPrev = useCallback(() => {
    onNavigate(activeIndex === 0 ? speakers.length - 1 : activeIndex - 1);
  }, [activeIndex, speakers.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate(activeIndex === speakers.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, speakers.length, onNavigate]);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, goPrev, goNext]);

  if (!speaker) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[110] flex items-center justify-center p-4"
        variants={modalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          type="button"
          className="absolute inset-0 bg-ictim-navy/60 backdrop-blur-sm cursor-pointer"
          onClick={onClose}
          aria-label="Close speaker profile"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-modal-title"
          aria-describedby="speaker-modal-bio"
          variants={modalPanel}
          className="relative z-10 flex w-full max-w-[420px] max-h-[min(88vh,640px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          <div className="flex items-center gap-4 border-b border-slate-100 shrink-0 p-4 pr-11">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-slate-100 bg-slate-100 shadow-sm">
              <Image
                src={speaker.photo}
                alt={speaker.fullName}
                fill
                className="object-cover object-top"
                sizes="80px"
                priority
              />
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ictim-primary mb-1">
                {speaker.country} · {speaker.countryCode}
              </p>
              <h3
                id="speaker-modal-title"
                className="font-heading text-base font-bold text-slate-900 leading-snug line-clamp-2"
              >
                {speaker.fullName}
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-700 line-clamp-1">{speaker.role}</p>
              <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-2">{speaker.institution}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Biography
              </p>
              <p
                id="speaker-modal-bio"
                className="text-xs leading-relaxed text-slate-600"
              >
                {speaker.biography}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/80 px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 cursor-pointer hover:bg-slate-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                aria-label="Previous speaker"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 cursor-pointer hover:bg-slate-50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
                aria-label="Next speaker"
              >
                <ChevronRight />
              </button>
              <span className="text-[10px] text-slate-500 tabular-nums pl-1">
                {activeIndex + 1}/{speakers.length}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-ictim-primary cursor-pointer hover:bg-ictim-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary"
            >
              Done
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default SpeakerModal;
