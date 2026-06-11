import Link from "next/link";
import { conference } from "@/data/conference";
import {
  programmeDays,
  programmePdf,
  programmePublicationNote,
} from "@/data/programmeData";

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);

const ProgrammeOverview = () => {
  const pdfAvailable = Boolean(programmePdf.url);

  return (
    <section
      className="relative overflow-hidden bg-ictim-light py-16 sm:py-20"
      aria-labelledby="programme-overview-heading"
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
              Official Programme
            </span>

            <h2
              id="programme-overview-heading"
              className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
            >
              Schedule &amp; Proceedings
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {programmePublicationNote}
            </p>

            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Theme:{" "}
              <span className="font-medium text-slate-700">
                &ldquo;{conference.theme.title}&rdquo;
              </span>
            </p>
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-6 sm:p-8 shadow-lg shadow-ictim-primary/20">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
                Download Programme
              </h3>
              <p className="mt-2 text-sm text-blue-100/90 leading-relaxed max-w-lg">
                {pdfAvailable
                  ? "Get the full conference programme with session times, rooms, and speaker details."
                  : "The detailed programme will be published closer to the conference dates. Check back soon or contact us for updates."}
              </p>

              {pdfAvailable ? (
                <a
                  href={programmePdf.url!}
                  download={programmePdf.filename}
                  className="mt-6 inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto px-7 py-3 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
                >
                  <DownloadIcon />
                  Download PDF
                </a>
              ) : (
                <Link
                  href={conference.links.contact}
                  className="mt-6 inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto px-7 py-3 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
                >
                  Contact us for updates
                </Link>
              )}
            </article>

            <div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-4">
                Schedule outline
              </h3>
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0">
                {programmeDays.map((day, index) => (
                  <li key={day.id} className="h-full">
                    <article className="h-full rounded-2xl border border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-5 sm:p-6 shadow-lg shadow-ictim-primary/20">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-4 font-heading text-base font-semibold text-white">
                        {day.day}
                      </h4>
                      <p className="mt-1 text-xs text-blue-100/80">{day.date}</p>
                      <ul className="mt-4 space-y-2 list-none p-0 m-0">
                        {day.sessions.map((session) => (
                          <li
                            key={session}
                            className="flex items-start gap-2 text-sm text-blue-50/95"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                              aria-hidden="true"
                            />
                            <span>{session}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeOverview;
