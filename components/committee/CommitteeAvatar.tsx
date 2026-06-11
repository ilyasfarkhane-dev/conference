import Image, { type StaticImageData } from "next/image";
import type { CommitteeMember } from "@/data/committeeData";
import { resolveCommitteePhoto } from "@/data/committeePhotos";

export function getInitials(name: string): string {
  const cleaned = name.replace(/^Pr\.?\s*/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

const sizeClasses = {
  md: "h-16 w-16 text-xl",
  lg: "h-20 w-20 sm:h-24 sm:w-24 text-2xl sm:text-3xl",
} as const;

interface CommitteeAvatarProps {
  member: CommitteeMember;
  photo?: StaticImageData;
  size?: keyof typeof sizeClasses;
  className?: string;
}

const CommitteeAvatar = ({
  member,
  photo: photoProp,
  size = "lg",
  className = "",
}: CommitteeAvatarProps) => {
  const photo = photoProp ?? resolveCommitteePhoto(member);
  const initials = getInitials(member.name);
  const sizeClass = sizeClasses[size];

  if (photo) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 ${sizeClass} ${className}`}
      >
        <Image
          src={photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes={size === "lg" ? "96px" : "64px"}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-400 font-heading font-bold text-slate-600 ring-2 ring-white/20 ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

export default CommitteeAvatar;
