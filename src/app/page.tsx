import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiCredly } from "react-icons/si";
import { SocialItem } from "./components/header/SocialItem";

export default function Home() {
  return (
    <div className="layoutCustom">
      <section className="flex gap-12 flex-col md:flex-row items-center px-8 pt-28 border relative border-blue-400">
        <Image
          src="photos/developer.svg"
          alt="Developer"
          width={343}
          height={332}
          className="block md:hidden"
        />
        <Image
          src="photos/developer2.svg"
          alt="Developer"
          width={796}
          height={596}
          className="md:block hidden absolute right-20 top-0"
        />
        <div className="flex flex-col gap-8 order-first">
          <div className="flex flex-col gap-8 md:w-[42rem]">
            <h1 className="font-normal font-soraCost text-3xl">
              Olá eu sou Vinícius Andrade Gonzato. Desenvolvedor Front-End.
            </h1>
            <p className="text-zinc-500 tracking-wide font-normal font-soraCost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              et exercitationem dignissimos neque expedita illo inventore error
              perferendis natus incidunt porro saepe aliquid placeat numquam
              laudantium quidem odit, nobis nesciunt!
            </p>
          </div>
          <div className="mt-40">
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
    </div>
  );
}
