import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { SiCredly } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { SocialItem } from "../global/SocialItem";

export const HeroSection = () => {
  return (
    <section className="layoutCustom flex gap-12 flex-col lg:flex-row lg:justify-center flex-wrap items-center defaultCenter border border-red-600">
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
          <ul className="flex gap-6">
            <SocialItem>
              <FaLinkedin size={20} />
            </SocialItem>
            <SocialItem>
              <SiCredly size={20} />
            </SocialItem>
            <SocialItem>
              <RiInstagramFill size={20} />
            </SocialItem>
          </ul>
        </div>
      </div>
    </section>
  );
};
