"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { conference } from "@/data/conference";

const TOPICS = [
  "Artificial Intelligence & Generative AI",
  "Machine Learning and Deep Learning",
  "Intelligent Digital Ecosystems",
  "Business Intelligence, Big Data and Data Mining",
  "Smart and Sustainable Systems",
  "Ontology and Knowledge Modeling",
  "Computer Vision",
  "Information System Security",
  "Blockchain & Security",
  "Cloud Computing",
  "Natural Language Processing (NLP)",
] as const;

const LNCS_TEMPLATE_URL =
  "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines";

type FaqItem = {
  id: string;
  step: string;
  question: string;
  summary: string;
  content: ReactNode;
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${
      open ? "rotate-180" : ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const FAQHomeOne = () => {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>("description");

  const faqItems: FaqItem[] = [
    {
      id: "description",
      step: "01",
      question: "Conference Description",
      summary: "Overview of ICTIM'26 and this year's theme.",
      content: (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The 8th edition of the{" "}
          <span className="font-medium text-slate-800">{conference.fullName}</span>{" "}
          ({conference.shortName}), organized by the TIM Laboratory at{" "}
          {conference.location}. The conference runs under the theme{" "}
          <strong className="font-semibold text-slate-800">
            &ldquo;{conference.theme.title}: {conference.theme.subtitle}&rdquo;
          </strong>
          . Join researchers and practitioners to explore AI, digital ecosystems, and
          sustainable systems — {conference.dates}.
        </p>
      ),
    },
    {
      id: "topics",
      step: "02",
      question: "Research Topics",
      summary: "Main areas of interest for paper submissions.",
      content: (
        <div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm sm:text-base text-slate-600">
            {TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ictim-secondary"
                  aria-hidden="true"
                />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <Link
            href={conference.links.topics}
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-ictim-primary hover:text-[#1D4ED8] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 rounded-sm"
          >
            View all conference topics
            <ArrowIcon />
          </Link>
        </div>
      ),
    },
    {
      id: "template",
      step: "03",
      question: "Paper Template",
      summary: "Formatting rules and Springer LNCS guidelines.",
      content: (
        <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Use the official proceedings template to prepare your submission. It defines
            the required structure and ensures consistency across accepted papers.
            Review all instructions before uploading to EasyChair.
          </p>
          <p>
            English is the language of the conference and all submissions. Manuscripts
            should follow the A4 IEEE template format and Springer LNCS proceedings
            guidelines.
          </p>
          <a
            href={LNCS_TEMPLATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ictim-primary font-medium hover:text-[#1D4ED8] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 rounded-sm"
          >
            Springer LNCS proceedings guidelines
            <ArrowIcon />
          </a>
        </div>
      ),
    },
  ];

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-ictim-navy via-ictim-primary to-[#2563EB] py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 10% 30%, rgba(56,189,248,0.16) 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 95% 75%, rgba(10,22,40,0.45) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[minmax(0,26rem)_1fr] xl:grid-cols-[minmax(0,30rem)_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left — intro + illustration */}
          <div className="px-2 sm:px-4 lg:px-6 xl:px-10 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ictim-primary mb-5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ictim-secondary" aria-hidden="true" />
              Conference Info
            </span>

            <h2
              id="faq-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight"
            >
              About {conference.shortName}
            </h2>

            <p className="mt-4 text-blue-100/80 text-sm sm:text-base leading-relaxed">
              Everything authors and attendees need to know — conference scope, research
              topics, and submission formatting.
            </p>

            <div className="relative mt-10 w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-6 rounded-[2rem] bg-ictim-accent/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative  p-4 sm:p-5 ">
                <Image
                  src="/assets/img/bg/illustration.png"
                  alt="Illustration representing information technology and modeling research"
                  width={480}
                  height={480}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="px-2 sm:px-4 lg:px-2 xl:px-6">
            <div className="space-y-3" role="list">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const buttonId = `${baseId}-${item.id}-button`;

                return (
                  <article
                    key={item.id}
                    role="listitem"
                    className={`rounded-2xl border transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none overflow-hidden ${
                      isOpen
                        ? "border-white/40 bg-white shadow-xl shadow-black/15"
                        : "border-white/20 bg-white/90 hover:border-white/35 hover:bg-white hover:shadow-lg hover:shadow-black/10"
                    }`}
                  >
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(item.id)}
                        className="flex w-full items-start sm:items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-inset"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none ${
                            isOpen
                              ? "bg-ictim-primary text-white"
                              : "bg-ictim-light text-ictim-primary"
                          }`}
                          aria-hidden="true"
                        >
                          {item.step}
                        </span>

                        <span className="flex-1 min-w-0">
                          <span className="block font-heading text-base sm:text-lg font-semibold text-slate-900">
                            {item.question}
                          </span>
                          <span className="block mt-0.5 text-xs sm:text-sm text-slate-500 line-clamp-1">
                            {item.summary}
                          </span>
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 motion-reduce:transition-none ${
                            isOpen
                              ? "border-ictim-primary/20 bg-ictim-light text-ictim-primary"
                              : "border-slate-200 bg-slate-50 text-slate-500"
                          }`}
                          aria-hidden="true"
                        >
                          <ChevronIcon open={isOpen} />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-slate-200/80">
                          <div className="pt-4">{item.content}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-10 rounded-2xl border border-white/40 bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-lg shadow-black/10">
              <div>
                <p className="font-heading text-base sm:text-lg font-semibold text-slate-900">
                  Ready to contribute?
                </p>
                <p className="mt-1 text-sm text-slate-600 max-w-md leading-relaxed">
                  Review the call for papers or submit directly through EasyChair.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={conference.links.cfp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-ictim-primary text-ictim-primary text-sm font-medium hover:bg-ictim-light transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2"
                >
                  Call for Papers
                </a>
                <a
                  href={conference.links.submission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-ictim-primary text-white text-sm font-medium hover:bg-[#1D4ED8] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2"
                >
                  Submit on EasyChair
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHomeOne;
