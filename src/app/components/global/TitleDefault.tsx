import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
};

export const TitleDefault = ({ children, color }: Props) => {
  return (
    <h2
      className={`py-5 font-soraCost font-normal defaultTitle ${
        color ? color : "text-black"
      }`}
    >
      {children}
    </h2>
  );
};
