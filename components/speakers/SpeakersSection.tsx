"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { speakers, type Speaker } from "@/data/speakersData";
import { conference } from "@/data/conference";
import SpeakerCard from "./SpeakerCard";
import SpeakerModal from "./SpeakerModal";

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

const SpeakersSection = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = useCallback((speaker: Speaker) => {
    const index = speakers.findIndex((s) => s.id === speaker.id);
    setModalIndex(index >= 0 ? index : 0);
  }, []);

  const closeModal = useCallback(() => {
    setModalIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-ictim-light py-20 sm:py-28"
      aria-labelledby="speakers-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 100% 0%, rgba(59,130,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 45% 35% at 0% 100%, rgba(30,64,175,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,28rem)_1fr] gap-10 lg:gap-14 xl:gap-20 items-start">
          <div className="px-2 sm:px-4 lg:px-4 xl:px-8 py-2 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
              Featured Experts
            </span>

            <h2
              id="speakers-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight"
            >
              Speakers
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Meet the researchers and academics shaping {conference.shortName} — leading
              voices in AI, modeling, and intelligent digital ecosystems from around the world.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 list-none p-0 m-0">
            {speakers.map((speaker, index) => (
              <li key={speaker.id}>
                <SpeakerCard speaker={speaker} index={index} onOpen={openModal} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 sm:mt-14 rounded-3xl border border-ictim-primary/20 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-lg shadow-ictim-primary/20">
          <div>
            <p className="font-heading text-lg sm:text-xl font-semibold text-white">
              Full steering committee
            </p>
            <p className="mt-1 text-sm text-blue-100/90 max-w-md leading-relaxed">
              Explore the complete list of session chairs, organizers, and committee members.
            </p>
          </div>
          <Link
            href="/committee"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary shrink-0"
          >
            View committee
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {isMounted && modalIndex !== null && (
        <SpeakerModal
          speakers={speakers}
          activeIndex={modalIndex}
          onClose={closeModal}
          onNavigate={setModalIndex}
        />
      )}
    </section>
  );
};

export default SpeakersSection;
