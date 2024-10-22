import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export type item = {
  name: string;
  icon: ReactNode;
  about: string;
};

export type itemExperience = {
  name: string;
  icon: string | StaticImport;
  about: string;
};
