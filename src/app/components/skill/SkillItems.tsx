import { itemSkill } from "@/types";
import { FaAws, FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

export const items: itemSkill[] = [
  { name: "React.js", icon: <FaReact size={56} />, about: "I know so much" },
  { name: "Next.js", icon: <SiNextdotjs size={56} />, about: "I know so much" },
  {
    name: "Javascript",
    icon: <SiJavascript size={56} />,
    about: "I know so much",
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={56} />,
    about: "I know so much",
  },
  { name: "Spring", icon: <SiSpring size={56} />, about: "I know so much" },
  { name: "Java", icon: <FaJava size={56} />, about: "I know so much" },
  { name: "AWS", icon: <FaAws size={56} />, about: "I know so much" },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill size={56} />,
    about: "I know so much",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
    about: "I know so much",
  },
  {
    name: "CSS",
    icon: <FaCss3 size={56} />,
    about: "I know so much",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={56} />,
    about: "I know so much",
  },
  {
    name: "MySQL",
    icon: <GrMysql size={56} />,
    about: "I know so much",
  },
  { name: "Git", icon: <ImGit size={56} />, about: "I know so much" },
];
