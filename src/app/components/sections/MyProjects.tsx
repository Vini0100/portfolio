import React from "react";
import { TitleDefault } from "../global/TitleDefault";
import { LayoutBlack } from "../global/LayoutBlack";
import { Project } from "../projects/Project";
import { Projects } from "../projects/Projects";

export const MyProjects = () => {
  return (
    <LayoutBlack>
      <section className="defaultCenter layoutCustom flex flex-col items-center gap-5 md:gap-24">
        <TitleDefault color="text-white">
          Meus <span className="font-extrabold">Projetos</span>
        </TitleDefault>
        <ul className="gap-7 flex flex-col md:gap-28">
          {Projects.map((project, index) => (
            <Project
              about={project.about}
              image={project.image}
              index={index + 1}
              link={project.link}
              title={project.title}
              key={index}
            />
          ))}
        </ul>
      </section>
    </LayoutBlack>
  );
};
