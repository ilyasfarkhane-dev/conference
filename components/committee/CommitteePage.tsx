import Link from "next/link";
import { committeeGroups } from "@/data/committeeData";
import { conference } from "@/data/conference";
import PageHeroBackground from "../common/PageHeroBackground";
import CommitteeGroupSection from "./CommitteeGroupSection";
import CommitteeHero from "./CommitteeHero";

const SKIP_GROUP_IDS = new Set(["co-chair"]);

const HERO_BG_GROUP_IDS = new Set([
  "sponsorship",
  "publicity",
  "publication",
  "local-junior",
]);

const CommitteePage = () => {
  const groups = committeeGroups.filter((g) => !SKIP_GROUP_IDS.has(g.id));

  return (
    <main>
      <CommitteeHero />

      {groups.map((group, index) => (
        <CommitteeGroupSection
          key={group.id}
          group={group}
          variant={
            HERO_BG_GROUP_IDS.has(group.id)
              ? "hero"
              : index % 2 === 1
                ? "dark"
                : "light"
          }
        />
      ))}

      <section className="relative overflow-hidden bg-ictim-navy py-16 sm:py-20">
        <PageHeroBackground />
        <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Ready to join {conference.shortName}?
          </h2>
          <p className="mt-4 text-blue-100/75 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Register today or submit your paper through the official conference portal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <Link
              href="/registration"
              className="inline-flex items-center justify-center min-h-11 w-full sm:w-auto sm:min-w-[180px] px-8 py-3.5 rounded-full bg-[#2D68FF] text-white text-sm font-semibold hover:bg-[#2457d6] transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-navy"
            >
              Registration
            </Link>
            <a
              href={conference.links.cfp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-11 w-full sm:w-auto sm:min-w-[180px] px-8 py-3.5 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-navy"
            >
              Call for Papers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommitteePage;
