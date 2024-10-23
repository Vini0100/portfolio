"use client";
import { ProjectProps } from "@/types";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export const Project = ({ image, title, about, link, index }: ProjectProps) => {
  return (
    <li className="flex flex-col gap-7 xl:flex-row xl:gap-24">
      <Image
        src={image}
        alt={title}
        width={343}
        height={398}
        className={`w-full h-[24.858rem] rounded-2xl object-cover object-center xl:w-[33.125rem] xl:h-[24.875rem] ${
          index % 2 == 0 && "xl:order-last"
        }`}
      />
      <div className="flex flex-col gap-7 text-white font-soraCost font-extrabold justify-center xl:w-[36.375rem]">
        <h3 className="text-2xl md:text-5xl">
          {index.toString().padStart(2, "0")}
        </h3>
        <h4 className="text-xl md:text-3xl font-bold">{title}</h4>
        <p className="text-base text-zinc-500 font-normal">{about}</p>
        <FiExternalLink
          size={20}
          className="cursor-pointer"
          onClick={() => window.open(link, "blank")}
        />
      </div>
    </li>
  );
};
