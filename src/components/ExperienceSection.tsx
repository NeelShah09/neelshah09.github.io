import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Experience & Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-10 w-px bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {/* Current Education */}
              {/* <div className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 glass-effect rounded-full flex items-center justify-center glow-effect">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 glass-card p-8 hover:glow-effect transition-all duration-300 neural-network-bg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">MS Data Science @ Indiana University</h3>
                    <span className="text-accent font-medium">Aug 2024 - May 2026</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Luddy School of Informatics, Computing and Engineering | GPA: 3.95/4.0</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Advanced coursework in machine learning, statistical modeling, deep learning frameworks, 
                    and AI research methodologies. Focus on practical applications of data science in 
                    business and research environments.
                  </p>
                </div>
              </div> */}

              {/* SproutsAI Internship */}
              <div className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 glass-effect rounded-full flex items-center justify-center glow-effect">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 glass-card p-8 hover:glow-effect transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">AI & ML Intern @ SproutsAI Inc.</h3>
                    <span className="text-accent font-medium">July 2025 - Aug 2025</span>
                  </div>
                  <p className="text-muted-foreground mb-3">California, USA</p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Engineered a multi-agent AI platform translating natural language to MongoDB queries 
                    with automated Plotly visualizations, reducing time-to-insight by 80% and improving 
                    query accuracy by 50% using Neo4j and Qdrant for context retrieval.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Multi-Agent AI</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">MongoDB</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Neo4j</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Qdrant</span>
                  </div>
                </div>
              </div>
              
              {/* ICICI Bank Experience */}
              <div className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 glass-effect rounded-full flex items-center justify-center glow-effect">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 glass-card p-8 hover:glow-effect transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">Deputy Manager II @ ICICI Bank Limited</h3>
                    <span className="text-accent font-medium">June 2022 - July 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Core Banking Department (Data Science & Predictive Analysis) | India</p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Led cross-functional teams to develop and productionize ETL pipelines for predictive load 
                    forecasting on 140M+ transactions. Achieved 5% improvement in processing efficiency and 
                    INR 1M annual savings through data optimization and automation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">ETL Pipelines</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Apache Airflow</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Oracle SQL</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Predictive Analytics</span>
                  </div>
                </div>
              </div>

              {/* Wobot Intelligence Internship */}
              <div className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 glass-effect rounded-full flex items-center justify-center glow-effect">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 glass-card p-8 hover:glow-effect transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">Computer Vision Intern @ Wobot Intelligence</h3>
                    <span className="text-accent font-medium">Sep 2021 - Jan 2022</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Remote, India</p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Trained and deployed VGG19 model for safety gear detection achieving 93% accuracy. 
                    Developed REST API in Go for RTSP streaming from 100+ videos and implemented OpenCV 
                    algorithms for anomalous frame filtering.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Computer Vision</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">TensorFlow</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">OpenCV</span>
                    <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Go</span>
                  </div>
                </div>
              </div>

              {/* Bachelor's Education */}
              {/* <div className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 glass-effect rounded-full flex items-center justify-center glow-effect">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 glass-card p-8 hover:glow-effect transition-all duration-300 neural-network-bg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">BTech @ University of Mumbai</h3>
                    <span className="text-accent font-medium">Aug 2018 - May 2022</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Sardar Patel College of Engineering | GPA: 9.26/10.0</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Bachelor of Technology with exceptional academic performance. Strong foundation in 
                    computer science fundamentals, programming, and analytical problem-solving.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;