import React from "react";
import { Resumo } from "./Resumo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="pxCustom py-4 relative">
      <div className="flex justify-between items-center">
        <Resumo />
        <Navbar />
      </div>
    </header>
  );
};
