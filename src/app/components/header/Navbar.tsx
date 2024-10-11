"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ItemsNavbar } from "./ItemsNavbar";

export const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);

  return (
    <div className="md:hidden">
      <FaBars
        size={27}
        onClick={() => setNavbar(!Navbar)}
        className="cursor-pointer"
      />
      {Navbar && (
        <div className="p-4 mr-1 mt-1 right-0 w-40 bg-black rounded absolute flex justify-end text-end">
          <ul className="text-white flex flex-col gap-6 text-xl font-semibold font-soraCost">
            <ItemsNavbar />
          </ul>
        </div>
      )}
    </div>
  );
};
