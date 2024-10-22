import Image from "next/image";
import React from "react";

export const AboutMe = () => {
  return (
    <section className="layoutCustom defaultCenter flex flex-col md:flex-row gap-20 items-center md:items-start">
      <Image
        src="photos/aboutMe.svg"
        alt="Developer"
        width={343}
        height={374}
        className="md:w-[32.828rem] md:h-[35.75rem]"
      />
      <div className="font-soraCost flex flex-col gap-5">
        <h2 className="font-normal defaultTitle py-5">
          Sobre <span className="font-extrabold">mim</span>
        </h2>
        <p className="font-normal text-base text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam
          porro autem voluptatum aliquam soluta ducimus molestiae et aut
          veritatis magnam consectetur unde numquam at asperiores optio quos
          temporibus tenetur.
        </p>
      </div>
    </section>
  );
};
