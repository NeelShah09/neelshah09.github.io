import iuLogo from "@/assets/iu_logo.png";
import uomLogo from "@/assets/uom_logo.jpeg";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Indiana University Bloomington",
    gpa: "3.96 / 4.0",
    period: "2024 – 2026",
    logo: iuLogo,
    courses: [
      "Large Language Models and Prompt Engineering",
      "Applied Machine Learning",
      "Data Mining",
      "Advanced Database Concepts",
      "Big Data",
      "Applied Algorithms",
      "Data Visualization",
      "Statistics",
    ],
  },
  {
    degree: "Bachelor of Technology in Electrical Engineering",
    school: "University of Mumbai",
    gpa: "9.26 / 10.0",
    period: "2018 – 2022",
    logo: uomLogo,
    courses: [
      "Artificial Intelligence",
      "Big Data Applications",
      "Computer Programming (C++)",
      "Mathematics & Statistics",
      "DSA in Python",
      "Digital Electronics",
      "Microprocessor & Microcontroller",
      "Control Systems",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 gradient-text">
            About Me
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left — Education */}
            <div className="lg:col-span-2 space-y-4">
              {/* <h3 className="text-xl font-semibold subsection-heading flex items-center gap-2">
                <span className="text-2xl">🎓</span> Education
              </h3> */}

              <div className="glass-card divide-y divide-border/50">
                {education.map((edu) => (
                  <div key={edu.school} className="p-5 space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-foreground leading-snug">{edu.degree}</h4>
                        <p className="text-sm text-primary">{edu.school}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">GPA: {edu.gpa} · {edu.period}</p>
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      {/* <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Key Courses</p> */}
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span key={course} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Professional Summary */}
            <div className="space-y-4 sm:space-y-6 lg:col-span-3">
              <div className="glass-card p-5 sm:p-8 hover:glow-effect transition-all duration-300 neural-network-bg">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    I'm an AI and data practitioner driven by curiosity to turn complex ideas into intelligent, human-centered systems. Over the past few years, I've worked across machine learning, generative AI, and data engineering — designing pipelines, fine-tuning models, and building end-to-end solutions that make data think, not just speak.
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    My journey began with analytics and experimentation, where I learned to align precision with real-world context. Since then, I've delved deep into the AI domain — training and optimizing LLMs, orchestrating multi-agent systems, and exploring computer vision and natural language understanding. I also enjoy translating complexity into clarity through interactive visualizations and storytelling dashboards.
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    I believe innovation in AI happens where engineering meets empathy. Whether it's designing a scalable model pipeline or crafting an intuitive visualization, I strive to make intelligence transparent, interpretable, and impactful.
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Currently, I'm seeking opportunities where I can keep bridging data, models, and meaning to build systems that truly learn and adapt.
                  </p>
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
