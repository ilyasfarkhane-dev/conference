"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  // Toggle Submenu
  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  // Close menu on initial load
  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
        style={{
          right: "0px",
          left: "auto",
          textAlign: "center",
          textIndent: "0px",
          fontSize: "18px",
        }}
      >
        {toggle ? (
          "X"
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      {/* Mobile Menu */}
      {toggle && (
        <nav className="mean-nav">
          <ul>
            {/* Add Registration Link */}
            <li>
              <Link href="/registration">Register</Link>
            </li>

            {/* Dynamically Render Menu Items */}
            {menu_data.map((menu, i) => (
              <React.Fragment key={i}>
                {menu.has_dropdown && (
                  <li className="has-dropdown">
                    <Link href={menu.link}>{menu.title}</Link>
                    <ul
                      className="submenu"
                      style={{
                        display: navTitle === menu.title ? "block" : "none",
                      }}
                    >
                      {menu.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={sub.link}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`mean-expand ${
                        navTitle === menu.title ? "mean-clicked" : ""
                      }`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    >
                      {navTitle === menu.title ? "-" : "+"}
                    </button>
                  </li>
                )}
                {!menu.has_dropdown && (
                  <li>
                    <Link href={menu.link}>{menu.title}</Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenus;
