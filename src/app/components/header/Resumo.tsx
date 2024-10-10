import React from "react";
import { LuDownload } from "react-icons/lu";

export const Resumo = () => {
  return (
    <button className="py-5 px-4 bg-black text-white flex items-center gap-2 rounded">
      <span className="text-white text-xl font-semibold tracking-wide font-soraCust">
        Resumo
      </span>
      <LuDownload size={20} />
    </button>
  );
};
