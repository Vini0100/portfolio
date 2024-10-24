import { AboutMe } from "./components/sections/AboutMe";
import { Contact } from "./components/sections/Contact";
import { HeroSection } from "./components/sections/HeroSection";
import { MyProjects } from "./components/sections/MyProjects";
import { SkillSection } from "./components/sections/SkillSection";
import { TestimonialSection } from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <TestimonialSection />
      <AboutMe />
      <MyProjects />
      <Contact />
    </div>
  );
}
