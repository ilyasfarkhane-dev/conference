"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Speaker } from "@/data/speakersData";
import { cardReveal } from "./animations";

const categoryLabels: Record<Speaker["category"], string> = {
  keynote: "Keynote Speaker",
  invited: "Invited Expert",
  committee: "Committee Member",
  organizer: "Organizer",
  honorary: "Honorary Guest",
};

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

interface FeaturedSpeakerCardProps {
  speaker: Speaker;
  index?: number;
  onOpen: (speaker: Speaker) => void;
}

const FeaturedSpeakerCard = ({ speaker, index = 0, onOpen }: FeaturedSpeakerCardProps) => {
  const step = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      layout
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative lg:col-span-2 lg:row-span-2"
    >
      <button
        type="button"
        onClick={() => onOpen(speaker)}
        className="relative flex w-full h-full min-h-[360px] lg:min-h-[480px] flex-col overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-ictim-navy shadow-lg shadow-slate-900/15 transition-[box-shadow] duration-300 cursor-pointer hover:shadow-2xl hover:shadow-ictim-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 text-left"
        aria-label={`View featured profile for ${speaker.fullName}`}
      >
        <Image
          src={speaker.photo}
          alt=""
          fill
          className="object-cover object-top transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-ictim-navy via-ictim-navy/30 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {categoryLabels[speaker.category]}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-bold text-white backdrop-blur-md">
            {step}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-6 min-w-[2rem] items-center justify-center rounded-lg bg-white/15 px-2 text-[11px] font-bold text-white backdrop-blur-sm">
              {speaker.countryCode}
            </span>
            <span className="text-sm font-medium text-white/80">{speaker.country}</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight max-w-lg">
            {speaker.fullName}
          </h3>
          <p className="mt-2 text-sm text-ictim-accent font-medium">{speaker.role}</p>
          <p className="mt-1 text-sm text-white/75 max-w-md line-clamp-2">{speaker.institution}</p>

          {speaker.keynoteTitle && (
            <p className="mt-4 text-sm text-white/90 italic border-l-2 border-ictim-accent pl-3 max-w-md line-clamp-2">
              &ldquo;{speaker.keynoteTitle}&rdquo;
            </p>
          )}

          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ictim-navy transition-colors duration-200 group-hover:bg-ictim-light">
            Explore profile
            <ArrowIcon />
          </span>
        </div>
      </button>
    </motion.article>
  );
};

export default FeaturedSpeakerCard;
