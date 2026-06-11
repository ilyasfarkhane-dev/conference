"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { conference } from "../../../src/data/conference";
import { galleryImages } from "../../../src/data/gallery-images";
import PageHeroBackground from "../../common/PageHeroBackground";
import { CalendarIcon, MapPinIcon } from "../../icitm26/icons";

const slides = galleryImages.map((item) => ({
  id: item.id,
  label: item.label,
  image: item.image,
  alt: item.alt,
}));

const PlayIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#3B82F6" />
    <path d="M10 8v8l7-4-7-4z" fill="white" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const HeroHomeTwo = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section id="hero-section" className="relative min-h-[100dvh] overflow-hidden bg-ictim-navy">
      <PageHeroBackground priority />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-[100dvh] flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-16 lg:gap-40 items-center w-full">
          {/* Left — copy */}
          <div className="order-2 lg:order-1 lg:pr-20 xl:pr-32 2xl:pr-40 max-w-2xl">
            <p className="text-ictim-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5">
              8th International Conference
            </p>

            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight">
              {conference.shortName}
            </h1>

            <span className="inline-block mt-4 text-blue-200/80 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
              8th Edition · Welcome
            </span>

            <p className="mt-6 text-white/75 text-sm sm:text-base leading-relaxed max-w-md">
              {conference.theme.subtitle}. Join researchers and practitioners at{" "}
              {conference.location} — {conference.dates}.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
              <a
                href={conference.links.submission}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-11 w-full sm:w-auto px-8 py-3 rounded-full border border-white/70 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer touch-manipulation"
              >
                Submit Paper
              </a>
              <a
                href={conference.links.cfp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 min-h-11 text-white/90 text-sm font-medium hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation group"
              >
                <PlayIcon />
                <span className="group-hover:underline underline-offset-4">
                  View call for papers
                </span>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 text-blue-200/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 shrink-0 text-ictim-accent" />
                <span>{conference.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 shrink-0 text-ictim-accent" />
                <span>{conference.dates}</span>
              </div>
            </div>
          </div>

          {/* Right — stacked cards */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end lg:pl-20 xl:pl-32 2xl:pl-40 shrink-0">
            <div className="relative w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[520px] 2xl:max-w-[580px] h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px] mx-auto">
              {slides.map((s, i) => {
                const offset = (i - active + slides.length) % slides.length;
                const isFront = offset === 0;
                const isMid = offset === 1;

                return (
                  <div
                    key={s.id}
                    className={`absolute inset-0 rounded-3xl overflow-hidden border border-white/15 shadow-2xl transition-all duration-500 ease-out cursor-pointer ${
                      isFront
                        ? "z-30 translate-x-0 translate-y-0 scale-100 opacity-100"
                        : isMid
                          ? "z-20 translate-x-4 sm:translate-x-12 lg:translate-x-14 -translate-y-4 scale-[0.94] opacity-70"
                          : "z-10 translate-x-8 sm:translate-x-20 lg:translate-x-24 -translate-y-6 scale-[0.88] opacity-40"
                    }`}
                    onClick={() => setActive(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                    aria-label={`Show slide: ${s.label}`}
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 360px, (max-width: 1280px) 460px, 580px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ictim-navy/90 via-ictim-navy/20 to-transparent" />

                    {isFront && (
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <span className="text-white/50 text-2xl font-light">
                              {String(active + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-white text-lg sm:text-xl font-semibold mt-0.5">
                              {slide.label}
                            </h3>
                            <div className="mt-3 h-0.5 w-28 bg-white/20 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-ictim-accent rounded-full transition-all duration-500"
                                style={{
                                  width: `${((active + 1) / slides.length) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActive((active + 1) % slides.length);
                            }}
                            className="shrink-0 min-h-11 min-w-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer touch-manipulation"
                            aria-label="Next slide"
                          >
                            <ArrowIcon />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination dots */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 max-w-[320px] sm:max-w-[480px] lg:max-w-none">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="inline-flex items-center justify-center min-h-11 min-w-11 cursor-pointer touch-manipulation rounded-full"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`rounded-full transition-all duration-200 ${
                      i === active
                        ? "w-6 h-2 bg-white"
                        : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeTwo;
