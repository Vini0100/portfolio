import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export type itemSkill = {
  name: string;
  icon: ReactNode;
  about: string;
};

export type itemExperience = {
  name: string;
  icon: string | StaticImport;
  about: string;
  time: string;
  enterprise: string;
};

export type ProjectProps = {
  image: string;
  title: string;
  about: string;
  link: string;
  index: number;
};
