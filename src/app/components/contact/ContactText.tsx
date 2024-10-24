import React from "react";
import { TitleDefault } from "../global/TitleDefault";

export const ContactText = () => {
  return (
    <div className="flex flex-col gap-8 py-5 justify-center">
      {/* See the center adjusts*/}
      <div className="flex flex-col gap-8 md:gap-0">
        <TitleDefault>Vamos conversar</TitleDefault>
        <p className="text-base font-normal font-soraCost text-zinc-500">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
      </div>
      <div className="font-bold text-xl md:text-3xl font-soraCost flex flex-col gap-3">
        <h5>vinigonzatofw@gmail.com</h5>
        <h5>(55) 9 8457-8958</h5>
      </div>
    </div>
  );
};
