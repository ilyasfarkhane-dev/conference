import type { StaticImageData } from "next/image";
import type { CommitteeMember } from "./committeeData";
import { speakers } from "./speakersData";

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/^pr\.?\s*/i, "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function namesLikelyMatch(a: string, b: string): boolean {
  const partsA = normalizeName(a).split(" ").filter(Boolean);
  const partsB = normalizeName(b).split(" ").filter(Boolean);
  if (partsA.length === 0 || partsB.length === 0) return false;

  const lastA = partsA[partsA.length - 1];
  const lastB = partsB[partsB.length - 1];
  if (lastA !== lastB) return false;

  const firstA = partsA[0];
  const firstB = partsB[0];
  return firstA === firstB || partsA.some((p) => partsB.includes(p));
}

export function resolveCommitteePhoto(member: CommitteeMember): StaticImageData | undefined {
  if (member.photo) return member.photo;

  const match = speakers.find((speaker) => namesLikelyMatch(member.name, speaker.fullName));
  return match?.photo;
}
