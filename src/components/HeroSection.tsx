import { ArrowDown, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import neelAvatar from "@/assets/neel-avatar.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (section: string) =>
    `transition-colors font-medium cursor-pointer ${
      activeSection === section ? 'golden-text' : 'text-foreground hover:golden-text'
    }`;

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Neel_Sachin_Shah_Resume.pdf';
    link.download = 'Neel_Sachin_Shah_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h3
              className="text-lg sm:text-xl font-bold golden-text cursor-pointer"
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Neel Shah
            </h3>

            {/* Desktop nav — hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={navLinkClass(id)} onClick={scrollTo(id)}>
                  {label}
                </a>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-primary/50 text-primary font-medium text-sm hover:bg-primary/10 hover:border-primary transition-all duration-200"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-foreground hover:golden-text transition-colors p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-background/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-base py-1 ${navLinkClass(id)}`}
                  onClick={scrollTo(id)}
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); downloadResume(); }}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/50 text-primary font-medium text-sm hover:bg-primary/10 w-fit transition-all duration-200"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Fixed Left Social Icons — hidden on mobile to avoid overlap */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5">
        <a
          href="https://github.com/NeelShah09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:golden-text transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/neel-shah1901"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:golden-text transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:shahneelsachin@gmail.com"
          className="text-muted-foreground hover:golden-text transition-colors duration-200"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <div className="w-px h-16 bg-primary/30 mt-2"></div>
      </div>

      {/* Main Hero Content — two column */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-center">

            {/* Left — circular photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={neelAvatar}
                    alt="Neel Shah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
              </div>
            </div>

            {/* Right — text */}
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-muted-foreground text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse flex-shrink-0"></span>
                Open to Opportunities
              </div>

              {/* <p className="text-base sm:text-lg text-muted-foreground">Hello!</p> */}

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Hi, I'm <span className="golden-text">Neel Shah</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
                AI/ML Engineer & Data Science Enthusiast
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground/80 italic max-w-lg">
                From architecting scalable data pipelines to deploying GenAI applications, I engineer intelligent systems that drive real-world impact.
              </p>

              {/* Mobile social links */}
              <div className="flex lg:hidden items-center gap-6 pt-2">
                <a href="https://github.com/NeelShah09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:golden-text transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/neel-shah1901" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:golden-text transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:shahneelsachin@gmail.com" className="text-muted-foreground hover:golden-text transition-colors" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
