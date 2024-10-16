import React from "react";
import { Resume } from "./Resume";
import { Navbar } from "./Navbar";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
  return (
    <header className="p-4 md:px-20 md:py-6 relative">
      <div className="flex justify-between items-center md:px-8">
        <div className="w-[140px] hidden xl:block"></div>
        <Resume />
        <HeaderNavbar />
        <Navbar />
      </div>
    </header>
  );
};
