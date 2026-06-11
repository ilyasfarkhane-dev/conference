"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import MobileMenus from "./mobile-menus";

const CFP_URL = "https://easychair.org/cfp/ICITM26";
const SCROLL_EXPAND_THRESHOLD = 48;

const SiteNavbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);
  const isExpanded = !isHome || isScrolled;
  const variant = isExpanded ? "solid" : "hero";

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);

    const update = () => {
      setIsScrolled(window.scrollY > SCROLL_EXPAND_THRESHOLD);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome, pathname]);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ease-out ${
        isExpanded
          ? "top-0 left-0 right-0 w-full"
          : "top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6"
      }`}
    >
      <div
        className={`transition-all duration-300 ease-out ${
          isExpanded
            ? "w-full bg-white/95 backdrop-blur-xl shadow-sm pr-4 sm:pr-6 lg:pr-10 xl:pr-16 py-2 sm:py-2.5"
            : "max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3.5 shadow-lg shadow-black/10"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 max-w-[100rem] mx-auto px-3 sm:px-6 lg:px-10 xl:px-32">
          <Link
            href="/"
            className={`shrink-0 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 touch-manipulation ${
              isExpanded ? "pl-2 sm:pl-6 lg:pl-10 xl:pl-16" : ""
            }`}
          >
            <img
              src="/assets/img/logo/logo tim.png"
              alt="ICTIM'26 — International Conference on Information Technology and Modeling"
              className={`w-auto transition-all duration-300 ${
                isExpanded
                  ? "h-12 sm:h-14 lg:h-16 opacity-100"
                  : "h-12 sm:h-14 lg:h-16 brightness-0 invert opacity-95"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            <NavMenu variant={variant} />
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={CFP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center min-h-11 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 ${
                isExpanded
                  ? "px-4 py-2.5 bg-white border border-ictim-primary text-ictim-primary hover:bg-ictim-light"
                  : "px-4 py-2.5 border border-white/40 text-white hover:bg-white/10"
              }`}
            >
              Call for Papers
            </a>
            <Link
              href="/registration"
              className={`inline-flex items-center justify-center min-h-11 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 ${
                isExpanded
                  ? "px-4 py-2.5 bg-ictim-primary text-white hover:bg-[#1D4ED8]"
                  : "px-4 py-2.5 bg-white text-ictim-primary hover:bg-ictim-light"
              }`}
            >
              <span className="hidden sm:inline">Registration</span>
              <span className="sm:hidden">Register</span>
            </Link>
            <MobileMenus variant={variant} navExpanded={isExpanded} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteNavbar;
