"use client";

import Link from "next/link";

const ArrowIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** @deprecated CTA is inlined in SpeakersSection */
const CommitteeCTA = () => (
  <Link
    href="/committee"
    className="inline-flex items-center gap-2 rounded-full bg-ictim-primary px-6 py-3 text-white text-sm font-medium"
  >
    View committee
    <ArrowIcon />
  </Link>
);

export default CommitteeCTA;
