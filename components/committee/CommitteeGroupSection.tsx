import type { CommitteeGroup } from "@/data/committeeData";
import PageHeroBackground from "../common/PageHeroBackground";
import CommitteeMemberCard from "./CommitteeMemberCard";

interface CommitteeGroupSectionProps {
  group: CommitteeGroup;
  variant?: "light" | "dark" | "hero";
}

const PORTRAIT_THRESHOLD = 10;

const CommitteeGroupSection = ({ group, variant = "light" }: CommitteeGroupSectionProps) => {
  const usePortrait = group.layout === "featured" || group.members.length <= PORTRAIT_THRESHOLD;
  const isHero = variant === "hero";
  const isDark = variant === "dark" || isHero;

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 ${
        isHero ? "bg-ictim-navy" : isDark ? "bg-[#000B2B]" : "bg-white"
      }`}
      aria-labelledby={`committee-group-${group.id}`}
    >
      {isHero && <PageHeroBackground />}

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id={`committee-group-${group.id}`}
            className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {group.title}
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDark ? "text-blue-100/70" : "text-slate-600"
            }`}
          >
            {group.members.length} member{group.members.length !== 1 ? "s" : ""}
          </p>
        </div>

        {usePortrait ? (
          <div className="-mx-4 sm:mx-0">
            <ul className="flex flex-wrap justify-center gap-5 sm:gap-6 list-none p-0 m-0 px-4 sm:px-0">
              {group.members.map((member) => (
                <li key={`${group.id}-${member.name}`}>
                  <CommitteeMemberCard member={member} variant="portrait" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0">
            {group.members.map((member) => (
              <li key={`${group.id}-${member.name}`}>
                <CommitteeMemberCard member={member} variant="compact" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CommitteeGroupSection;
