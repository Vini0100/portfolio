import React from "react";
import { Resume } from "./Resume";
import { Navbar } from "./Navbar";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
  return (
    <header className="p-4 md:px-20 md:py-6 relative defaultCenter">
      <div className="flex justify-between items-center md:px-8">
        <Resume />
        <HeaderNavbar />
        <Navbar />
      </div>
    </header>
  );
};
