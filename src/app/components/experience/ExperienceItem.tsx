import { itemExperience } from "@/types";
import Image from "next/image";
import React from "react";

export const ExperienceItem = ({ name, icon, about }: itemExperience) => {
  return (
    <div className="font-soraCost flex flex-col gap-7 px-6 py-[1.875rem] border border-zinc-500 rounded-xl bg-black hover:bg-zinc-800 hover:border-zinc-800">
      <span className="flex gap-8">
        <Image
          src={icon}
          alt="Developer"
          width={32}
          height={32}
          className="object-contain shrink-0"
        />
        <h3 className="text-white font-semibold text-2xl">{name}</h3>
      </span>
      <p className="text-gray-300 font-normal text-base">{about}</p>
    </div>
  );
};
