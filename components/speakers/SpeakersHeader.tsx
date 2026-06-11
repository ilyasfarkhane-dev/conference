"use client";

import { conference } from "@/data/conference";

/** @deprecated Use inline header in SpeakersSection */
const SpeakersHeader = () => (
  <header>
    <h2 className="font-heading text-3xl font-bold text-slate-900">Speakers</h2>
    <p className="mt-2 text-slate-600">{conference.shortName}</p>
  </header>
);

export default SpeakersHeader;
