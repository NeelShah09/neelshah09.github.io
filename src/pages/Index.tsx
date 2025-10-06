import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import OpportunitiesCard from "@/components/OpportunitiesCard";
// import SkillsSection from "@/components/SkillsSection";
// import TechnicalSkillsCompact from "@/components/TechnicalSkillsCompact";
import SkillsCapsules from "@/components/SkillsCapsules";
// import InteractiveSkillsRadar from "@/components/InteractiveSkillsRadar";
import ProjectsSection from "@/components/ProjectsSection";
// import CoursesSection from "@/components/CoursesSection"; // Uncomment if you want to add courses
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <OpportunitiesCard />
      <SkillsCapsules />
      {/* <InteractiveSkillsRadar /> */}
      <ProjectsSection />
      {/* <CoursesSection /> */} {/* Uncomment and add your courses here */}
      <ContactSection />
    </div>
  );
};

export default Index;
