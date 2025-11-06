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
                <h3 className="text-2xl font-semibold subsection-heading flex items-center">
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
                      <span>DSA in Python, Artificial Intelligence, Big Data Applications, Mathematics & Statistics, Computer Programming(C++), Digital Electronis, Microprocessor & Microcontroller, Control Systems</span>
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
                    I’m an AI and data practitioner driven by curiosity to turn complex ideas into intelligent, human-centered systems. Over the past few years, I’ve worked across machine learning, generative AI, and data engineering — designing pipelines, fine-tuning models, and building end-to-end solutions that make data think, not just speak.
                    </p>
                  </div>

                  {/* Paragraph 1 - Academic Foundation */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                    My journey began with analytics and experimentation, where I learned to align precision with real-world context. Since then, I’ve delved deep into the AI domain — training and optimizing LLMs, orchestrating multi-agent systems, and exploring in computer vision and natural language understanding. I also enjoy translating complexity into clarity through interactive visualizations and storytelling dashboards.
                    </p>
                  </div>

                  {/* Paragraph 2 - Professional Experience */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                    I believe innovation in AI happens where engineering meets empathy. Whether it’s designing a scalable model pipeline or crafting an intuitive visualization, I strive to make intelligence transparent, interpretable, and impactful.
                    </p>
                  </div>

                  {/* Paragraph 3 - Innovation & Impact */}
                  <div className="space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                    Currently, I’m seeking opportunities where I can keep bridging data, models, and meaning to build systems that truly learn and adapt.
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