import iuLogo from "@/assets/iu_logo.png";
import uomLogo from "@/assets/uom_logo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden min-h-screen">

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
            About Me
          </h2>
          
          {/* Compact All-in-One Layout */}
          <div className="flex-1 grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Column - Education */}
            <div className="space-y-6 relative lg:pl-12 lg:col-span-2">
              {/* Education Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold golden-text flex items-center">
                  <span className="text-4xl mr-2">🎓</span> Education
                </h3>
                
                {/* Indiana University */}
                <div className="border-l-2 border-primary/20 pl-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                      <img 
                        src={iuLogo} 
                        alt="Indiana University" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">Master of Science in</h4>
                      <h4 className="font-semibold text-primary">Data Science</h4>
                      <p className="text-sm text-muted-foreground">Indiana University Bloomington</p>
                      <p className="text-sm text-muted-foreground">GPA: 3.95/4.0 • 2024-2026</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h5 className="text-sm font-medium text-primary mb-2">Key Courses:</h5>
                    <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                      <span>Statistics, Applied Machine Learning, Data Mining, Advanced Database Concepts, Big Data, Applied Algorithms, Data Visualization</span>
                    </div>
                  </div>
                </div>

                {/* University of Mumbai */}
                <div className="border-l-2 border-primary/20 pl-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                      <img 
                        src={uomLogo} 
                        alt="University of Mumbai" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">Bachelor of Technology in</h4>
                      <h4 className="font-semibold text-primary">Electrical Engineering</h4>
                      <p className="text-sm text-muted-foreground">University of Mumbai</p>
                      <p className="text-sm text-muted-foreground">GPA: 9.26/10.0 • 2018-2022</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h5 className="text-sm font-medium text-primary mb-2">Key Courses:</h5>
                    <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                      <span>DSA in Python, Artificial Intelligence, Mathematics & Statistics, Computer Programming(C++), Digital Electronis, Microprocessor & Microcontroller, Control Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Summary */}
            <div className="space-y-6 lg:col-span-3">
              <div className="glass-card p-8 hover:glow-effect transition-all duration-300 neural-network-bg h-fit">
                <div className="space-y-6">
                  {/* Introduction */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                      I'm a passionate Data Scientist and AI/ML enthusiast with a unique blend of academic excellence, 
                      industry experience, and innovative thinking, dedicated to transforming data into intelligent solutions.
                    </p>
                  </div>

                  {/* Paragraph 1 - Academic Foundation */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                      My journey in data science began with a solid academic foundation, earning my BTech from the University of Mumbai 
                      with an exceptional 9.26/10.0 GPA. Currently pursuing MS in Data Science at Indiana University Bloomington with 
                      a 3.95/4.0 GPA, I specialize in machine learning, statistical modeling, and AI research methodologies.
                    </p>
                  </div>

                  {/* Paragraph 2 - Professional Experience */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                      With 2+ years of industry experience as Data Scientist and Deputy Manager at ICICI Bank, I led cross-functional 
                      teams delivering impactful projects that achieved 5% operational efficiency boost and INR 1M annual savings. 
                      My recent internship at SproutsAI showcased innovation through multi-agent AI platforms that reduced time-to-insight by 80%.
                    </p>
                  </div>

                  {/* Paragraph 3 - Innovation & Impact */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                      My passion for innovation culminated in leading the award-winning Smart Hospital Multi-Agent System, earning 
                      2nd Runner-up in Luddy Hackathon 2025 among 50+ teams. I specialize in transforming complex data into actionable 
                      business insights, bridging the gap between cutting-edge research and real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;