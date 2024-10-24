import React from "react";
import Image from "next/image";
import { SocialList } from "../global/SocialList";

export const HeroSection = () => {
  return (
    <section className="layoutCustom flex gap-12 flex-col lg:flex-row lg:justify-center flex-wrap items-center defaultCenter">
      <Image
        src="photos/developer.svg"
        alt="Developer"
        width={343}
        height={332}
        className="block lg:hidden"
      />
      <Image
        src="photos/developer.svg"
        alt="Developer"
        width={600}
        height={596}
        className="lg:block hidden"
      />
      <div className="flex flex-col gap-8 lg:order-first">
        <div className="flex flex-col gap-8 lg:w-[42rem]">
          <h1 className="font-normal font-soraCost defaultTitle">
            Olá eu sou Vinícius Andrade Gonzato. Desenvolvedor Front-End.
          </h1>
          <p className="text-zinc-500 tracking-wide font-normal font-soraCost">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
            exercitationem dignissimos neque expedita illo inventore error
            perferendis natus incidunt porro saepe aliquid placeat numquam
            laudantium quidem odit, nobis nesciunt!
          </p>
        </div>
        <div>
          <SocialList />
        </div>
      </div>
    </section>
  );
};
