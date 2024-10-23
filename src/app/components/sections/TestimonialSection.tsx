import React from "react";
import { ExperienceItem } from "../experience/ExperienceItem";
import { ExperienceItems } from "../experience/SkillItems";
import { TitleDefault } from "../global/TitleDefault";
import { LayoutBlack } from "../global/LayoutBlack";

export const TestimonialSection = () => {
  return (
    <LayoutBlack>
      <section className="defaultCenter layoutCustom flex flex-col items-center gap-5">
        <TitleDefault color="text-white">
          Minha <span className="font-extrabold">Experiência</span>
        </TitleDefault>
        <ul className="flex flex-col gap-8">
          {ExperienceItems.map((item) => (
            <ExperienceItem
              key={item.name}
              name={item.name}
              icon={item.icon}
              about={item.about}
              time={item.time}
              enterprise={item.enterprise}
            />
          ))}
        </ul>
      </section>
    </LayoutBlack>
  );
};
