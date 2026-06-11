import Link from "next/link";
import {
  committeeGroups,
  conferenceChair,
  honoraryChair,
  type CommitteeMember,
} from "@/data/committeeData";
import { conference } from "@/data/conference";
import PageHeroBackground from "../common/PageHeroBackground";
import { CalendarIcon, MapPinIcon } from "../icitm26/icons";
import CommitteeMemberCard from "./CommitteeMemberCard";

const honoraryMember: CommitteeMember = {
  name: honoraryChair.lines[0],
  affiliation: honoraryChair.lines[1] ?? "",
};

const CommitteeHero = () => {
  const coChairs = committeeGroups.find((g) => g.id === "co-chair")?.members ?? [];

  const heroCards: { member: CommitteeMember; role: string; highlighted?: boolean }[] = [
    { member: conferenceChair, role: "Conference Chair", highlighted: true },
    ...coChairs.map((member) => ({
      member,
      role: "Co-Chair",
    })),
    { member: honoraryMember, role: "Honorary Chair" },
  ].slice(0, 4);

  return (
    <section
      className="relative overflow-hidden bg-ictim-navy pt-28 sm:pt-32 pb-0"
      aria-labelledby="committee-page-heading"
    >
      <PageHeroBackground />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 pb-10 sm:pb-14">
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
              Committee
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
          <div className="max-w-2xl">
            <p className="text-ictim-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              {conference.shortName}
            </p>

            <h1
              id="committee-page-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.15]"
            >
              Steering Committee
            </h1>

            <p className="mt-4 text-blue-100/80 text-sm sm:text-base leading-relaxed">
              {conference.fullName}
            </p>

            <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm text-blue-100/80">
              <span className="inline-flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-ictim-accent shrink-0" />
                {conference.dates}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-ictim-accent shrink-0" />
                {conference.location}
              </span>
            </div>

            <Link
              href="/registration"
              className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#2D68FF] text-white text-sm font-semibold hover:bg-[#2457d6] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-navy"
            >
              Register
            </Link>
          </div>

          <div className="hidden lg:flex items-end justify-end gap-4 xl:gap-5 pb-2">
            {heroCards.map((item) => (
              <CommitteeMemberCard
                key={item.member.name}
                member={item.member}
                variant="hero"
                role={item.role}
                highlighted={item.highlighted}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 lg:hidden -mx-4 sm:-mx-6">
          <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 pb-2 snap-x snap-mandatory scrollbar-none">
            {heroCards.map((item) => (
              <div key={item.member.name} className="snap-start">
                <CommitteeMemberCard
                  member={item.member}
                  variant="hero"
                  role={item.role}
                  highlighted={item.highlighted}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeHero;
