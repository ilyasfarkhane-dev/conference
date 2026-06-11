"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menu_data from "./menu-data";

const CFP_URL = "https://easychair.org/cfp/ICITM26";

type MobileMenusProps = {
  variant?: "solid" | "hero";
  navExpanded?: boolean;
};

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" />
    ) : (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    )}
  </svg>
);

const MobileMenus = ({ variant = "solid", navExpanded = true }: MobileMenusProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("");

  const isHero = variant === "hero";

  useEffect(() => {
    setOpen(false);
    setExpandedMenu("");
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const toggleSubmenu = (title: string) => {
    setExpandedMenu((current) => (current === title ? "" : title));
  };

  const linkClass =
    "flex min-h-12 items-center px-5 text-base font-medium text-slate-800 hover:bg-ictim-light hover:text-ictim-primary transition-colors duration-200 cursor-pointer touch-manipulation";

  return (
    <div className="lg:hidden relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center justify-center min-h-11 min-w-11 rounded-xl border transition-colors duration-200 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ictim-secondary focus-visible:ring-offset-2 ${
          isHero
            ? "border-white/40 text-white hover:bg-white/10"
            : "border-slate-200 text-slate-700 hover:bg-slate-50"
        }`}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] touch-manipulation"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <nav
            id="mobile-nav-panel"
            className={`fixed left-0 right-0 z-50 overflow-y-auto overscroll-contain bg-white border-t border-slate-200 shadow-2xl ${
              navExpanded
                ? "top-16 sm:top-[4.5rem] max-h-[calc(100dvh-4rem-env(safe-area-inset-top,0px))] sm:max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top,0px))]"
                : "top-[calc(5.75rem+env(safe-area-inset-top,0px))] max-h-[calc(100dvh-5.75rem-env(safe-area-inset-top,0px))]"
            }`}
            aria-label="Mobile navigation"
          >
            <ul className="list-none p-0 m-0">
              {menu_data.map((menu) =>
                menu.has_dropdown ? (
                  <li key={menu.title} className="border-b border-slate-100">
                    <button
                      type="button"
                      className={`${linkClass} w-full justify-between gap-3`}
                      onClick={() => toggleSubmenu(menu.title)}
                      aria-expanded={expandedMenu === menu.title}
                    >
                      <span>{menu.title}</span>
                      <span className="text-slate-400 text-xl leading-none" aria-hidden="true">
                        {expandedMenu === menu.title ? "−" : "+"}
                      </span>
                    </button>
                    {expandedMenu === menu.title && (
                      <ul className="list-none p-0 m-0 bg-slate-50">
                        {menu.sub_menus?.map((sub) => (
                          <li key={sub.title}>
                            <Link
                              href={sub.link}
                              className={`${linkClass} pl-8 text-sm text-slate-600`}
                              onClick={() => setOpen(false)}
                              {...(sub.link.startsWith("http")
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={menu.title} className="border-b border-slate-100">
                    <Link
                      href={menu.link}
                      className={linkClass}
                      onClick={() => setOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  </li>
                )
              )}

              <li className="border-b border-slate-100">
                <a
                  href={CFP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <Link
                  href="/registration"
                  className={`${linkClass} text-ictim-primary font-semibold`}
                  onClick={() => setOpen(false)}
                >
                  Registration
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenus;
