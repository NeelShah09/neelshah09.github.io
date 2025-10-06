import { useState } from "react";
import { Briefcase, GraduationCap, Cloud, Brain, Database, Wrench } from "lucide-react";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      title: "AI & ML Intern",
      company: "SproutsAI Inc.",
      location: "California, USA",
      date: "July 2025 - Aug 2025",
      icon: Brain,
      description: "Engineered a multi-agent AI platform translating natural language to MongoDB queries with automated Plotly visualizations, reducing time-to-insight by 80% and improving query accuracy by 50% using Neo4j and Qdrant for context retrieval.",
      achievements: [
        "Engineered a multi-agent AI platform translating natural language to MongoDB queries with automated Plotly visuals, cutting time-to-insight by 80% across 128+ collections.",
        "Improved query accuracy by 50% via a knowledge-graph based context retriever using Neo4j and Qdrant to map relationships across collections, combined with vector embeddings and community detection.",
        "Empowered non-technical users to perform complex data analysis through self-service analytics, significantly reducing reliance on data engineering teams."
      ],
      technologies: ["Multi-Agent AI", "MongoDB", "Neo4j", "Qdrant", "Python", "Plotly"]
    },
    {
      id: 1,
      title: "Deputy Manager II",
      company: "ICICI Bank Limited",
      location: "Core Banking Department | India",
      date: "June 2022 - July 2024",
      icon: Database,
      description: "Led cross-functional teams to develop and productionize ETL pipelines for predictive load forecasting on 140M+ transactions. Achieved 5% improvement in processing efficiency and INR 1M annual savings through data optimization and automation.",
      achievements: [
        "Led development of ETL pipelines processing 140M+ transactions daily",
        "Achieved 5% improvement in processing efficiency across banking operations",
        "Generated INR 1M annual savings through data optimization and automation",
        "Implemented predictive load forecasting models for banking infrastructure",
        "Managed cross-functional teams for large-scale data infrastructure projects"
      ],
      technologies: ["ETL Pipelines", "Apache Airflow", "Oracle SQL", "Predictive Analytics", "Python"]
    },
    {
      id: 2,
      title: "Computer Vision Intern",
      company: "Wobot Intelligence",
      location: "Remote, India",
      date: "Sep 2021 - Jan 2022",
      icon: Cloud,
      description: "Trained and deployed VGG19 model for safety gear detection achieving 93% accuracy. Developed REST API in Go for RTSP streaming from 100+ videos and implemented OpenCV algorithms for anomalous frame filtering.",
      achievements: [
        "Achieved 93% accuracy in safety gear detection using VGG19 model",
        "Developed REST API in Go for real-time video streaming from 100+ sources",
        "Implemented OpenCV algorithms for anomalous frame detection and filtering",
        "Optimized computer vision pipeline for real-time processing",
        "Deployed machine learning models for production use"
      ],
      technologies: ["Computer Vision", "TensorFlow", "OpenCV", "Go", "VGG19", "RTSP"]
    }
  ];

  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
          Experience
        </h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0 h-[75vh] lg:h-auto lg:max-h-[75vh] min-h-0">
              {/* Left Navigation Panel */}
              <div className="lg:col-span-1 bg-card/50 border-r border-border/50 overflow-y-auto min-h-0 h-full lg:h-auto">
                <div className="p-4">
                  <div className="space-y-3">
                    {experiences.map((exp, index) => {
                      const IconComponent = exp.icon;
                      const isSelected = selectedExperience === index;
                      
                      return (
                        <div
                          key={exp.id}
                          onClick={() => setSelectedExperience(index)}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'bg-primary/20 border-l-4 border-primary' 
                              : 'hover:bg-muted/30 border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'text-primary' : 'text-muted-foreground'
                            }`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-semibold text-sm mb-1 ${
                                isSelected ? 'text-primary' : 'text-foreground'
                              }`}>
                                {exp.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mb-1">
                                {exp.company}
                              </p>
                              <p className={`text-xs ${
                                isSelected ? 'text-primary' : 'text-muted-foreground'
                              }`}>
                                {exp.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Detail Panel */}
              <div className="lg:col-span-2 p-6 overflow-y-auto min-h-0 h-full lg:h-auto">
                {experiences[selectedExperience] && (
                  <>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {experiences[selectedExperience].title}
                      </h3>
                      <p className="text-primary text-lg">
                        {experiences[selectedExperience].company} | {experiences[selectedExperience].date}
                      </p>
                      {/* location removed per request */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experiences[selectedExperience].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-foreground/80 leading-relaxed">
                        {experiences[selectedExperience].description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <Wrench className="h-5 w-5 text-primary mr-2" />
                        <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {experiences[selectedExperience].achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
/** Compact opportunities card to include below Experience */