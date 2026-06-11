"use client";

import Image from "next/image";
import { partners } from "@/data/partnersData";
import { conference } from "@/data/conference";

interface PartnersSectionProps {
  /** Extra top padding for inner pages (e.g. FAQ) */
  compactTop?: boolean;
}

const PartnersSection = ({ compactTop = false }: PartnersSectionProps) => {
  const marqueeItems = [...partners, ...partners];

  return (
    <section
      className={`relative overflow-hidden bg-white py-16 sm:py-20 ${compactTop ? "pt-24 sm:pt-28" : ""}`}
      aria-labelledby="partners-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
            Our Partners
          </span>

          <h2
            id="partners-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight"
          >
            Institutional Partners
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {conference.shortName} is proudly supported by leading universities, research
            institutions, and organizations committed to advancing IT and modeling.
          </p>
        </div>

        {/* Desktop & tablet grid */}
        <ul className="hidden sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 list-none p-0 m-0">
          {partners.map((partner) => (
            <li key={partner.id}>
              <PartnerLogoCard partner={partner} />
            </li>
          ))}
        </ul>

        {/* Mobile: smooth marquee */}
        <div className="sm:hidden relative -mx-4 overflow-hidden">
          <div className="flex w-max animate-partners-marquee gap-4 px-4 motion-reduce:animate-none">
            {marqueeItems.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="w-[140px] shrink-0">
                <PartnerLogoCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden="true"
      />

      <style jsx>{`
        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

function PartnerLogoCard({ partner }: { partner: (typeof partners)[number] }) {
  const content = (
    <>
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        className="object-contain object-center p-1 transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100 opacity-90"
        sizes="(max-width: 640px) 140px, 180px"
      />
    </>
  );

  const className =
    "group relative flex aspect-[5/3] items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 sm:p-5 transition-[box-shadow,border-color,background-color] duration-200 hover:border-ictim-primary/25 hover:bg-white hover:shadow-md";

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2`}
        aria-label={`Visit ${partner.name}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className} title={partner.name}>
      {content}
    </div>
  );
}

export default PartnersSection;
