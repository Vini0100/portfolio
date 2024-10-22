import { itemExperience } from "@/types";
import Image from "next/image";
import React from "react";

export const ExperienceItem = ({ name, icon, about, time }: itemExperience) => {
  return (
    <div className="font-soraCost flex flex-col gap-7 px-6 py-[1.875rem] border border-zinc-500 rounded-xl bg-black hover:bg-zinc-800 hover:border-zinc-800">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
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
        <p className="text-base font-semibold text-zinc-500">{time}</p>
      </div>
      <p className="text-gray-300 font-normal text-base">{about}</p>
    </div>
  );
};
