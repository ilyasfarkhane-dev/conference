"use client";

import Link from "next/link";
import { conference } from "../../../src/data/conference";
import { CalendarIcon } from "../../icitm26/icons";

const milestoneHints: Record<string, string> = {
  "Paper Submission Date": "Submit your full paper through EasyChair.",
  "Notification of Acceptance": "Authors receive peer-review decisions.",
  "Camera-Ready Submission": "Upload the final version for proceedings.",
  "Conference Dates": "Present and network in Casablanca.",
};

const PlayIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#3B82F6" />
    <path d="M10 8v8l7-4-7-4z" fill="white" />
  </svg>
);

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

const ChoseAreaHomeOne = () => {
  const lastIndex = conference.importantDates.length - 1;

  return (
    <section
      className="relative overflow-hidden bg-ictim-light py-20 sm:py-28"
      aria-labelledby="participation-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 100% 0%, rgba(59,130,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 45% 35% at 0% 100%, rgba(30,64,175,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,30rem)_1fr] gap-10 lg:gap-14 xl:gap-20 items-start mb-12 sm:mb-14">
          <div className="px-2 sm:px-4 lg:px-8 xl:px-12 py-2 sm:py-4 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
              Important Milestones
            </span>

            <h2
              id="participation-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight"
            >
              Participation Process
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow the key deadlines for authors and attendees at{" "}
              <span className="font-medium text-slate-800">{conference.shortName}</span>
              , {conference.location}.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600">
              <CalendarIcon className="w-4 h-4 text-ictim-primary shrink-0" />
              <span>{conference.dates}</span>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 list-none p-0 m-0">
            {conference.importantDates.map((item, i) => {
              const isFinal = i === lastIndex;
              const hint = milestoneHints[item.label] ?? "";

              return (
                <li key={item.step} className="h-full">
                  <article
                    className={`group relative h-full rounded-3xl overflow-hidden border transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none ${
                      isFinal
                        ? "border-ictim-navy/20 bg-gradient-to-br from-ictim-navy via-ictim-primary to-ictim-secondary shadow-lg shadow-ictim-navy/15"
                        : "border-ictim-primary/15 bg-gradient-to-br from-ictim-primary to-[#2563EB] shadow-md shadow-ictim-primary/10 hover:border-white/25 hover:shadow-xl hover:shadow-ictim-primary/20"
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 90% 70% at 100% 0%, rgba(255,255,255,0.14) 0%, transparent 60%)",
                      }}
                      aria-hidden="true"
                    />

                    <span
                      className="absolute -right-2 -top-4 text-[5.5rem] font-light leading-none text-white/[0.07] select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>

                    <div className="relative flex h-full flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90">
                          Step {item.step}
                        </span>
                        {isFinal && (
                          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                            Event
                          </span>
                        )}
                      </div>

                      <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.label}
                      </h3>

                      {hint && (
                        <p className="mt-2 text-sm text-white/75 leading-relaxed flex-1">
                          {hint}
                        </p>
                      )}

                      <div className="mt-5 pt-5 border-t border-white/15">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-sm font-medium text-white">
                          <CalendarIcon className="w-4 h-4 text-ictim-accent shrink-0" />
                          <time dateTime={item.date.replace(/–/g, "-")}>{item.date}</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="rounded-3xl border border-ictim-primary/20 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-lg shadow-ictim-primary/20">
          <div>
            <p className="font-heading text-lg sm:text-xl font-semibold text-white">
              Ready to contribute?
            </p>
            <p className="mt-1 text-sm text-blue-100/90 max-w-md leading-relaxed">
              Submit your research or explore the conference topics and call for papers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 shrink-0">
            <a
              href={conference.links.submission}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
            >
              Submit Paper
              <ArrowIcon />
            </a>
            <a
              href={conference.links.cfp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/70 px-5 py-2.5 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
            >
              <PlayIcon />
              <span>View call for papers</span>
            </a>
            <Link
              href={conference.links.topics}
              className="inline-flex items-center gap-2 text-blue-100 text-sm font-medium hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary rounded-sm"
            >
              Conference topics
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseAreaHomeOne;
