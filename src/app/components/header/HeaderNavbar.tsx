import React from "react";
import { ItemsNavbar } from "./ItemsNavbar";

export const HeaderNavbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 text-xl font-semibold text-black font-soraCost">
        <ItemsNavbar />
      </ul>
    </nav>
  );
};
