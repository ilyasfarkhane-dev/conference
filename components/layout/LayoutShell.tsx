"use client";

import SiteNavbar from "./headers/SiteNavbar";

const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteNavbar />
      <div>{children}</div>
    </>
  );
};

export default LayoutShell;
