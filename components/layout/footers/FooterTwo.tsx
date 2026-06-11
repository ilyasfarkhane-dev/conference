import Image from "next/image";
import Link from "next/link";
import { conference } from "@/data/conference";
import PageHeroBackground from "../../common/PageHeroBackground";
import footer_logo from "../../../public/assets/img/logo/logo tim.png";

const quickLinks = [
  { title: "Registration", link: "/registration" },
  { title: "Committee", link: "/committee" },
  { title: "Topics", link: "/topics" },
  { title: "Programme", link: "/programme" },
];

const FooterTwo = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ictim-navy">
      <PageHeroBackground />

      <div className="relative pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_1fr_1fr] gap-10 lg:gap-14">
            <div>
              <Link
                href="/"
                className="inline-block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ictim-navy rounded-sm"
              >
                <Image
                  src={footer_logo}
                  alt="ICTIM'26 — International Conference on Information Technology and Modeling"
                  className="!h-28 !w-auto sm:!h-32"
                />
              </Link>
              <p className="mt-5 text-sm text-blue-100/75 leading-relaxed max-w-sm">
                {conference.fullName} — {conference.location}
              </p>
              <p className="mt-2 text-xs text-blue-200/60">{conference.dates}</p>
            </div>

            <div>
              <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white mb-5">
                Contact
              </h2>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <p className="text-sm text-blue-100/80 leading-relaxed">
                    {conference.location}
                  </p>
                </li>
                <li>
                  <a
                    href={conference.links.contact}
                    className="inline-flex min-h-11 items-center text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm break-all"
                  >
                    {conference.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:omar.zahour@univh2c.ma"
                    className="inline-flex min-h-11 items-center text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm break-all"
                  >
                    omar.zahour@univh2c.ma
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+212660082091"
                    className="inline-flex min-h-11 items-center text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm"
                  >
                    +212 660-082091
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white mb-5">
                Quick Links
              </h2>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {quickLinks.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className="inline-flex min-h-11 items-center text-sm text-blue-100/80 hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-6 text-center">
          <p className="text-sm text-blue-100/70">
            Copyright &copy; {year} {conference.shortName} by{" "}
            <a
              href="https://sites.google.com/view/labotimfsbm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary rounded-sm"
            >
              TIM Laboratory
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
