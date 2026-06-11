import { conference } from "@/data/conference";
import TopicsHero from "./TopicsHero";
import TopicsTracks from "./TopicsTracks";

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

const TopicsPage = () => {
  return (
    <main>
      <TopicsHero />
      <TopicsTracks />

      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="rounded-3xl border border-ictim-primary/20 bg-gradient-to-br from-ictim-primary to-[#2563EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-lg shadow-ictim-primary/20">
            <div>
              <p className="font-heading text-lg sm:text-xl font-semibold text-white">
                Ready to submit your research?
              </p>
              <p className="mt-1 text-sm text-blue-100/90 max-w-md leading-relaxed">
                Papers aligned with these topics can be submitted through EasyChair for{" "}
                {conference.shortName}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={conference.links.cfp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto px-7 py-3 rounded-full bg-white text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
              >
                Call for Papers
                <ArrowIcon />
              </a>
              <a
                href={conference.links.submission}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto px-7 py-3 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-primary"
              >
                Submit on EasyChair
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopicsPage;
