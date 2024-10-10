"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);

  return (
    <div>
      <FaBars
        size={27}
        onClick={() => setNavbar(!Navbar)}
        className="cursor-pointer"
      />
      {Navbar && (
        <div className="p-4 mr-1 mt-1 right-0 w-40 bg-black rounded absolute flex justify-end text-end">
          <ul className="text-white flex flex-col gap-6 text-xl font-semibold font-soraCust">
            <li>Sobre mim</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contate-me</li>
          </ul>
        </div>
      )}
    </div>
  );
};
