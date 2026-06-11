import { conference } from "@/data/conference";
import { registrationSteps } from "@/data/registrationData";

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

const RegistrationSteps = () => {
  return (
    <section
      className="relative overflow-hidden bg-ictim-light py-16 sm:py-20"
      aria-labelledby="registration-steps-heading"
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
              How it works
            </span>
            <h2
              id="registration-steps-heading"
              className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
            >
              Registration Process
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow these steps to secure your place at {conference.shortName}.
            </p>
            <a
              href={conference.links.submission}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ictim-primary hover:text-[#1D4ED8] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm"
            >
              Open EasyChair portal
              <ArrowIcon />
            </a>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0">
            {registrationSteps.map((item) => (
              <li key={item.step}>
                <article className="h-full rounded-2xl border border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-5 sm:p-6 shadow-lg shadow-ictim-primary/20">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-100/90 leading-relaxed">{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 sm:mt-14 rounded-2xl border border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg shadow-ictim-primary/20">
          <div>
            <p className="font-heading text-base sm:text-lg font-semibold text-white">
              Questions about registration?
            </p>
            <p className="mt-1 text-sm text-blue-100/90 leading-relaxed">
              Contact the registration chairs or visit the committee page for details.
            </p>
          </div>
          <a
            href={conference.links.contact}
            className="inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary shrink-0"
          >
            Contact us
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSteps;
