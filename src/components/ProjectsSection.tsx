import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectPlaceholder from "@/assets/project-placeholder.jpg";
import fininsight from "@/assets/fininsight.png";
import nl2viz from "@/assets/nl2viz.png";
import shmas from "@/assets/shmas.png";

const ProjectsSection = () => {
  // Real projects from resume
  const projects = [
    // {
    //   title: "AWS Predictive Maintenance Platform",
    //   description: "Architected end-to-end ML pipeline on AWS that ingests IoT sensor data, processes with Glue ETL jobs, and stores in S3 data lake. XGBoost classifier achieves 94% F1-score for 72hr advance equipment failure prediction.",
    //   image: projectPlaceholder,
    //   tags: ["Python", "AWS SageMaker", "Glue", "Lambda", "QuickSight", "XGBoost"],
    //   demoUrl: "https://your-demo-link.com", // Replace with actual demo link
    //   githubUrl: "https://github.com/NeelShah09/aws-predictive-maintenance", // Replace with actual repo
    //   highlight: true,
    //   metrics: [
    //     { label: "F1-Score", value: "94%", icon: "🎯" },
    //     { label: "Prediction Window", value: "72hr", icon: "⏰" },
    //     { label: "Data Processing", value: "Real-time", icon: "⚡" }
    //   ],
    //   techDetails: {
    //     architecture: "Serverless ML Pipeline",
    //     deployment: "AWS SageMaker Endpoint",
    //     monitoring: "CloudWatch + QuickSight"
    //   }
    // },
    {
      title: "Smart Hospital Multi-Agent System (SHMAS)",
      description: "🏆 2nd Runner-Up in Luddy Hackathon 2025. AI-driven hospital management with 5 collaborative agents using LangGraph. Reduces patient wait times by 40% through dynamic resource allocation.",
      image: shmas,
      tags: ["Groq API", "PostgreSQL", "LangGraph", "Streamlit", "Multi-Agent AI"],
      // demoUrl: "https://your-shmas-demo.streamlit.app", // Replace with actual Streamlit app
      githubUrl: "https://github.com/NeelShah09/shmas", // Replace with actual repo
      highlight: true,
      metrics: [
        { label: "Wait Time Reduction", value: "40%", icon: "⏱️" },
        { label: "Hackathon Rank", value: "2nd", icon: "🏆" },
        { label: "Agents", value: "5", icon: "🤖" }
      ],
      techDetails: {
        architecture: "Multi-Agent Orchestration",
        deployment: "Streamlit Cloud",
        monitoring: "Real-time Agent Coordination"
      }
    },
    {
      title: "FinInsight",
      description: "FinInsight is an AI-powered platform that simplifies financial education by offering clear, contextual explanations of financial concepts using advanced NLP and RAG technology.",
      image: fininsight,
      tags: ["Python", "Gradio", "Llama2", "RAG", "NLP", "Vector Database"],
      // demoUrl: "https://your-shmas-demo.streamlit.app", // Replace with actual Streamlit app
      githubUrl: "https://github.com/NeelShah09/finInsight", // Replace with actual repo
      highlight: true,
      metrics: [
        { label: "Financial Terms", value: "1000+", icon: "📚" },
        { label: "Pipeline", value: "RAG", icon: "🔗" },
        { label: "Response Time", value: "<2s", icon: "⚡" }
      ],
      techDetails: {
        architecture: "RAG Pipeline",
        deployment: "Gradio Interface", 
        monitoring: "Vector DB Retrieval"
      }
    },
    {
      title: "NL2Viz",
      description: "This AI-powered tool converts natural language queries into Python visualization code, generating and executing Matplotlib/Seaborn charts from CSV data using a Hugging Face model and LangGraph orchestration.",
      image: nl2viz,
      tags: ["Python", "LangGraph", "HuggingFace", "Matplotlib", "Seaborn", "Pandas"],
      // demoUrl: "https://your-shmas-demo.streamlit.app", // Replace with actual Streamlit app
      githubUrl: "https://github.com/NeelShah09/NL2Viz", // Replace with actual repo
      highlight: true,
      metrics: [
        { label: "Query Types", value: "Scatter/Bar Charts", icon: "📊" },
        { label: "Code Generation", value: "Auto Python", icon: "⚡" },
        { label: "Data Processing", value: "CSV/Pandas", icon: "🔧" }
      ],
      techDetails: {
        architecture: "LangGraph State Machine",
        deployment: "Python Script",
        monitoring: "Natural Language Processing"
      }
    },
    // {
    //   title: "Multi-Agent MongoDB Query Platform",
    //   description: "Engineered AI platform translating natural language to MongoDB queries with automated Plotly visualizations. Reduced time-to-insight by 80% and improved query accuracy by 50% using Neo4j and Qdrant.",
    //   image: projectPlaceholder,
    //   tags: ["MongoDB", "Neo4j", "Qdrant", "Plotly", "NLP", "Vector Embeddings"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "ICICI Bank ETL Pipeline",
    //   description: "Productionized ETL pipeline for predictive load forecasting on 140M+ transactions using Airflow and SQL. Achieved 5% improvement in processing efficiency and INR 1M annual savings.",
    //   image: projectPlaceholder,
    //   tags: ["Apache Airflow", "Oracle SQL", "Python", "ETL", "Predictive Analytics"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Safety Gear Detection System",
    //   description: "Trained and deployed VGG19 model for safety gear detection achieving 93% accuracy. Developed REST API in Go for RTSP streaming and implemented OpenCV algorithms for anomalous frame filtering.",
    //   image: projectPlaceholder,
    //   tags: ["TensorFlow", "Keras", "OpenCV", "Computer Vision", "Go", "Docker"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Banking Security Audit Optimization",
    //   description: "Optimized security audit process for core banking applications using Oracle SQL and Linux scripting. Generated quarterly reports reducing manual audit time by 50% while ensuring RBI compliance.",
    //   image: projectPlaceholder,
    //   tags: ["Oracle SQL", "Linux Scripting", "Security Audit", "Automation", "Compliance"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
                className={`glass-card border-0 hover:glow-effect transition-all duration-300 group hover:scale-105 overflow-hidden rounded-[3.5rem] ${
                project.highlight ? 'neural-network-bg tech-border' : ''
              }`}
            >
              {/* {/* To add a Featured tag to the project on top right*/}
              {/* {project.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold">
                    Featured
                  </span>
                </div>
              )} */}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl subsection-heading group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Metrics Section for highlighted projects */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="text-center p-2 glass-effect rounded-lg pulse-data"
                        style={{ animationDelay: `${metricIndex * 200}ms` }}
                      >
                        <div className="text-lg">{metric.icon}</div>
                        <div className="text-sm font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Details for highlighted projects */}
                {project.techDetails && (
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Architecture:</span>
                        <span className="text-primary font-medium">{project.techDetails.architecture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deployment:</span>
                        <span className="text-primary font-medium">{project.techDetails.deployment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monitoring:</span>
                        <span className="text-primary font-medium">{project.techDetails.monitoring}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 data-viz-animation"
                      style={{ animationDelay: `${tagIndex * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex ${project.demoUrl ? 'space-x-3' : ''} pt-2`}>
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 glass-effect hover:glow-effect transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={`${project.demoUrl ? 'flex-1' : 'w-full'} glass-effect border-primary/30 hover:border-primary/50 hover:glow-effect transition-all duration-300`}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass-effect border-primary/30 hover:border-primary/50 hover:glow-effect transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;