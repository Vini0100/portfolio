import React from "react";
import { LayoutBlack } from "../global/LayoutBlack";
import { FaFigma } from "react-icons/fa";

export const Footer = () => {
  return (
    <LayoutBlack>
      <footer className="defaultCenter text-white flex flex-col px-4 py-5 items-center gap-1">
        <h3 className="font-semibold text-xl font-soraCost">
          Figma do portfólio
        </h3>
        <FaFigma size={30} className="cursor-pointer" />
      </footer>
    </LayoutBlack>
  );
};
