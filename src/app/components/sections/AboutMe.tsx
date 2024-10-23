import Image from "next/image";
import React from "react";
import { TitleDefault } from "../global/TitleDefault";

export const AboutMe = () => {
  return (
    <section className="layoutCustom defaultCenter flex flex-col xl:flex-row gap-5 xl:gap-20 items-center xl:items-start">
      <Image
        src="photos/aboutMe.svg"
        alt="Developer"
        width={343}
        height={374}
        className="w-full md:w-[32.828rem] md:h-[35.75rem]"
      />
      <div className="flex flex-col gap-5">
        <TitleDefault>
          Sobre <span className="font-extrabold">mim</span>
        </TitleDefault>
        <p className="font-normal text-base text-zinc-500 font-soraCost">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam
          porro autem voluptatum aliquam soluta ducimus molestiae et aut
          veritatis magnam consectetur unde numquam at asperiores optio quos
          temporibus tenetur.
        </p>
      </div>
    </section>
  );
};
