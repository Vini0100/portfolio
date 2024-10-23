import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LayoutBlack = ({ children }: Props) => {
  return <div className="bg-black">{children}</div>;
};
