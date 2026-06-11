"use client";

import { useId, useState } from "react";
import { conference } from "@/data/conference";
import { topicTracks } from "@/data/topicsData";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
      open ? "rotate-180" : ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const TopicsTracks = () => {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(topicTracks[0]?.id ?? "");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <section
      className="relative overflow-hidden bg-ictim-light py-16 sm:py-20"
      aria-labelledby="topics-tracks-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 100% 0%, rgba(59,130,246,0.1) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] gap-10 lg:gap-14 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
              Thematic Tracks
            </span>

            <h2
              id="topics-tracks-heading"
              className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
            >
              Areas of Interest
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {topicTracks.length} research tracks covering AI, intelligent systems,
              data engineering, cybersecurity, and more.
            </p>

            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {conference.theme.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {topicTracks.map((track, index) => {
              const isOpen = openId === track.id;
              const panelId = `${baseId}-panel-${track.id}`;
              const buttonId = `${baseId}-button-${track.id}`;
              const step = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={track.id}
                  className={`rounded-2xl border border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] shadow-lg shadow-ictim-primary/20 transition-[border-color,box-shadow] duration-200 ${
                    isOpen
                      ? "border-white/40 shadow-xl shadow-ictim-primary/30"
                      : "hover:border-white/30"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 min-h-[3.25rem] text-left text-white cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary rounded-2xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(track.id)}
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white tabular-nums">
                        {step}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-heading text-base sm:text-lg font-semibold text-white leading-snug">
                          {track.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-blue-100/80">
                          {track.items.length} sub-topics
                        </span>
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-5 sm:px-6 sm:pb-6"
                  >
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 list-none p-0 m-0 pt-4 border-t border-white/20">
                      {track.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-blue-50/95">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsTracks;
