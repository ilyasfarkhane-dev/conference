import type { CommitteeMember } from "@/data/committeeData";
import CommitteeAvatar, { getInitials } from "./CommitteeAvatar";

export type CommitteeCardVariant = "portrait" | "compact" | "hero";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
  variant?: CommitteeCardVariant;
  highlighted?: boolean;
  role?: string;
}

const CommitteeMemberCard = ({
  member,
  variant = "portrait",
  highlighted = false,
  role,
}: CommitteeMemberCardProps) => {
  const initials = getInitials(member.name);

  if (variant === "compact") {
    return (
      <article className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-ictim-primary/30 hover:shadow-md h-full">
        <h3 className="font-heading text-sm font-semibold text-slate-900 leading-snug">
          {member.name}
        </h3>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{member.affiliation}</p>
      </article>
    );
  }

  if (variant === "hero") {
    return (
      <article
        className={`group flex w-[9.5rem] sm:w-[10.5rem] lg:w-[11rem] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-200 ${
          highlighted
            ? "ring-2 ring-ictim-secondary ring-offset-2 ring-offset-ictim-navy"
            : "hover:shadow-lg"
        }`}
      >
        <div className="flex flex-col items-center px-3 pt-5 pb-4 text-center">
          <CommitteeAvatar member={member} size="lg" />
          {role && (
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-ictim-primary">
              {role}
            </p>
          )}
          <h3 className="mt-1 font-heading text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed line-clamp-2">
            {member.affiliation}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group flex w-[9.5rem] sm:w-[10.5rem] lg:w-[11rem] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-200 hover:shadow-lg`}
    >
      <div className="relative aspect-[3/4] bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 flex items-center justify-center">
        <span
          className="font-heading text-3xl sm:text-4xl font-bold text-slate-600/80 select-none grayscale"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="flex flex-1 flex-col items-center text-center px-3 py-4 border-t border-slate-100">
        <h3 className="font-heading text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed line-clamp-2">
          {member.affiliation}
        </p>
      </div>
    </article>
  );
};

export default CommitteeMemberCard;
