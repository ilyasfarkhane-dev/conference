import Link from "next/link";
import { conference } from "@/data/conference";
import PageHeroBackground from "../common/PageHeroBackground";

const TopicsHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-ictim-navy pt-28 sm:pt-32 pb-14 sm:pb-16"
      aria-labelledby="topics-page-heading"
    >
      <PageHeroBackground />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-200/70 list-none p-0 m-0">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-blue-400/40">
              /
            </li>
            <li className="text-white/90" aria-current="page">
              Topics
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="text-ictim-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {conference.shortName}
          </p>

          <h1
            id="topics-page-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Research Topics
          </h1>

          <p className="mt-4 text-blue-100/80 text-sm sm:text-base leading-relaxed">
            Explore the thematic tracks for {conference.shortName}. Submissions aligned
            with these areas are welcome under the theme{" "}
            <span className="text-white/95">&ldquo;{conference.theme.title}&rdquo;</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopicsHero;
