import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import neelAvatar from "@/assets/neel-avatar.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for sticky nav

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Clean Background with Subtle Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/0 to-background/0"></div>
        
        {/* Subtle Tech Grid */}
        {/* <div className="absolute inset-0 tech-grid-yellow opacity-30"></div> */}
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <h3 className="text-xl font-bold golden-text">Neel Shah</h3>
            
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <a 
                href="#hero" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'hero' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'about' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[id*="about"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#experience" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'experience' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[id*="experience"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </a>
              <a 
                href="#skills" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'skills' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[id*="skills"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'projects' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[id*="projects"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`transition-colors font-medium cursor-pointer ${
                  activeSection === 'contact' 
                    ? 'golden-text' 
                    : 'text-foreground hover:golden-text'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[id*="contact"]')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content - Text */}
          <div className="space-y-8 lg:text-left text-center lg:pl-12">
            {/* Greeting */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">Hello!</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="golden-text">Neel Shah</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Data Science and AI/ML Development Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground/80 italic">
                Transforming financial insights into intelligent systems through data science and machine learning.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="yellow-accent-border hover:golden-glow transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/neel-shah1901" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="yellow-accent-border hover:golden-glow transition-all duration-300"
                asChild
              >
                <a href="https://github.com/NeelShah09" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="yellow-accent-border hover:golden-glow transition-all duration-300"
                asChild
              >
                <a href="mailto:shahneelsachin@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image & Button */}
          <div className="flex flex-col items-center lg:items-center space-y-8">
            {/* Profile Image - No box, bigger size */}
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-primary/20">
                <img 
                  src={neelAvatar} 
                  alt="Neel Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-accent/5"></div>
            </div>

            {/* CTA Button */}
            <div className="w-96">
              <Button 
                className="w-full golden-glow hover:bg-primary/90 transition-all duration-300"
                onClick={() => {
                  // Create a temporary link element and trigger download
                  const link = document.createElement('a');
                  link.href = '/Neel_Sachin_Shah_Resume.pdf'; // Update this path to your actual CV file
                  link.download = 'Neel_Sachin_Shah_Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;