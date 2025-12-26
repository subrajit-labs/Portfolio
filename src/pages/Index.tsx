import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Subrajit Paul | Solution-Oriented Professional</title>
        <meta
          name="description"
          content="Subrajit Paul - Solution-Oriented Professional with Entrepreneurial Vision. Driving growth through smart execution and turning ideas into action."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://subrajitpaul.com" />
      </Helmet>

      <main className="relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
