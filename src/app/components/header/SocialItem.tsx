import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SocialItem = ({ children }: Props) => {
  return (
    <li className="p-[0.875rem] rounded border-2 border-black hover:bg-black hover:text-white cursor-pointer">
      {children}
    </li>
  );
};
