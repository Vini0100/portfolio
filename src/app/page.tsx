import { HeroSection } from "./components/sections/HeroSection";
import { SkillSection } from "./components/sections/SkillSection";
import { TestimonialSection } from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <TestimonialSection />
    </div>
  );
}
