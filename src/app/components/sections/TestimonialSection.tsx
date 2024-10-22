import React from "react";
import { ExperienceItem } from "../experience/ExperienceItem";
import { ExperienceItems } from "../experience/SkillItems";

export const TestimonialSection = () => {
  return (
    <div className="bg-black">
      <section className="defaultCenter layoutCustom flex flex-col gap-5">
        <h2 className="text-white text-5xl py-5 font-extrabold font-soraCost text-center">
          <span className="font-normal">Minha</span> Experiência
        </h2>
        <div className="flex flex-col gap-8">
          {ExperienceItems.map((item) => (
            <ExperienceItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              about={item.about}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
