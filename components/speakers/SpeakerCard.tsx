"use client";

import Image from "next/image";
import type { Speaker } from "@/data/speakersData";

const PlusIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  onOpen: (speaker: Speaker) => void;
}

const SpeakerCard = ({ speaker, index, onOpen }: SpeakerCardProps) => {
  const step = String(index + 1).padStart(2, "0");

  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onOpen(speaker)}
        className="flex w-full items-center gap-4 sm:gap-5 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 text-left shadow-sm transition-[box-shadow,border-color] duration-200 cursor-pointer hover:border-ictim-primary/25 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2"
        aria-label={`View profile for ${speaker.fullName}`}
      >
        <div className="relative h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
          <Image
            src={speaker.photo}
            alt={speaker.fullName}
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ictim-primary tabular-nums">
              {step}
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              {speaker.countryCode}
            </span>
          </div>
          <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900 leading-snug line-clamp-1">
            {speaker.fullName}
          </h3>
          <p className="mt-0.5 text-sm text-slate-600 line-clamp-1">{speaker.role}</p>
          <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">{speaker.institution}</p>
        </div>

        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:border-ictim-primary/30 group-hover:bg-ictim-light group-hover:text-ictim-primary">
          <PlusIcon />
        </span>
      </button>
    </article>
  );
};

export default SpeakerCard;
