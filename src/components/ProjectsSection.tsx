import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

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
      title: "FinInsight",
      description: "FinInsight is an AI-powered platform that simplifies financial education by offering clear, contextual explanations of financial concepts using advanced NLP and RAG technology.",
      tags: ["Python", "Gradio", "Llama2", "RAG", "NLP", "Vector Database"],
      githubUrl: "https://github.com/NeelShah09/finInsight",
      highlight: true,
    },
    {
      title: "Smart Hospital Multi-Agent System (SHMAS)",
      description: "2nd Runner-Up in Luddy Hackathon 2025. AI-driven hospital management with 5 collaborative agents using LangGraph. Reduces patient wait times by 40% through dynamic resource allocation.",
      tags: ["Groq API", "PostgreSQL", "LangGraph", "Streamlit", "Multi-Agent AI"],
      githubUrl: "https://github.com/NeelShah09/shmas",
      highlight: true,
    },
    {
      title: "AWS Predictive Maintenance Platform",
      description: "End-to-end ML system predicting equipment failures using IoT sensor data and automated MLOps pipelines.",
      tags: ["Python", "AWS", "Sagemaker", "Glue", "MLOps", "XGBoost"],
      githubUrl: "",
      highlight: true,
    },
    {
      title: "NL2Viz",
      description: "This AI-powered tool converts natural language queries into Python visualization code, generating and executing Matplotlib/Seaborn charts from CSV data using a Hugging Face model and LangGraph orchestration.",
      tags: ["Python", "LangGraph", "HuggingFace", "Matplotlib", "Seaborn", "Pandas"],
      githubUrl: "https://github.com/NeelShah09/NL2Viz",
      highlight: true,
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
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-card border-0 hover:glow-effect transition-all duration-300 group hover:scale-105 overflow-hidden rounded-[3.5rem] ${
                project.highlight ? 'neural-network-bg tech-border' : ''
              } ${
                showAll
                  ? ''                                          // show all
                  : index === 0
                  ? ''                                          // always show first
                  : index < 3
                  ? 'hidden sm:flex sm:flex-col'               // sm+: show 2nd & 3rd; mobile: hide
                  : 'hidden'                                    // 4th+ always hidden until showAll
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl subsection-heading group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
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
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;