import Link from "next/link";
import menu_data from "./menu-data";

export type NavVariant = "hero" | "solid";

type NavMenuProps = {
  variant?: NavVariant;
};

const linkClass = {
  hero: "px-3 py-2 text-xs font-medium uppercase tracking-widest text-white/85 hover:text-white transition-colors duration-200 cursor-pointer rounded-md block",
  solid:
    "px-3 py-2 text-xs font-medium uppercase tracking-widest text-slate-600 hover:text-ictim-primary transition-colors duration-200 cursor-pointer rounded-md block",
};

const buttonClass = {
  hero: "px-3 py-2 text-xs font-medium uppercase tracking-widest text-white/85 hover:text-white transition-colors duration-200 cursor-pointer rounded-md",
  solid:
    "px-3 py-2 text-xs font-medium uppercase tracking-widest text-slate-600 hover:text-ictim-primary transition-colors duration-200 cursor-pointer rounded-md",
};

const dropdownClass = {
  hero: "bg-ictim-deep/95 backdrop-blur-md border border-white/10",
  solid: "bg-white border border-slate-200 shadow-xl",
};

const dropdownLinkClass = {
  hero: "block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer",
  solid:
    "block px-4 py-2 text-sm text-slate-600 hover:text-ictim-primary hover:bg-ictim-light transition-colors duration-200 cursor-pointer",
};

const NavMenu = ({ variant = "solid" }: NavMenuProps) => {
  return (
    <ul className="flex items-center gap-1">
      {menu_data.map((item) => (
        <li key={item.id} className="relative group">
          {item.has_dropdown ? (
            <>
              <button type="button" className={buttonClass[variant]}>
                {item.title}
              </button>
              <ul className="absolute top-full left-0 pt-1 hidden group-hover:block min-w-[180px] z-50">
                <li className={`rounded-lg py-1 ${dropdownClass[variant]}`}>
                  {item.sub_menus?.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={dropdownLinkClass[variant]}
                    >
                      {sub.title}
                    </a>
                  ))}
                </li>
              </ul>
            </>
          ) : (
            <Link href={item.link} className={linkClass[variant]}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
