"use client";
import React, { useState } from "react";
import { Skill } from "../skill/Skill";
import { itemSkill } from "@/types";
import { items } from "../skill/SkillItems";

export const SkillSection = () => {
  const [click, setClick] = useState<itemSkill | null>(null);

  return (
    <section className="layoutCustom flex flex-col gap-5 items-center defaultCenter border border-purple-600">
      <h2 className="py-5 font-soraCost font-normal defaultTitle">
        Minhas <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="flex md:flex-row flex-wrap justify-center md:justify-center gap-5 md:gap-16 border border-red-500">
        {items.map((item) => (
          <Skill key={item.name} item={item} setClick={() => setClick(item)} />
        ))}
      </ul>
      {click !== null && (
        <div className="rounded border-2 border-gray-600 p-2 self-start w-full animate-slide-down">
          <div className="flex gap-2 items-center">
            <h3 className="textSkill">{click.name}</h3>
            {React.cloneElement(click.icon as React.ReactElement, { size: 28 })}
          </div>
          <p>{click.about}</p>
        </div>
      )}
    </section>
  );
};
