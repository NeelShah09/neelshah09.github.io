import { useState } from "react";
import { Cloud, Brain, Database, Wrench, X } from "lucide-react";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [modalExp, setModalExp] = useState<number | null>(null);

  const experiences = [
    {
      id: 0,
      title: "AI Engineer",
      company: "Project 990",
      location: "Indiana, USA",
      date: "September 2025 - Present",
      icon: Wrench,
      description: "Developed and optimized CharityBot pipelines for nonprofit intelligence by enhancing semantic retrieval with LLM-based query refinement and ranking.",
      achievements: [
        "Optimized a CharityBot by engineering a hybrid retrieval architecture fusing BM25 and vector similarity search(FAISS), boosting the retrieval accuracy and improving overall MRR to 0.919",
        "Built a GPU-optimized BERT-based Zero-Shot inference pipeline using SLURM arrays and DeepSpeed to classify 175K+ nonprofit mission statements with multi-label thematic tags at scale.",
        "Drove gains in large-scale entity resolution accuracy by training Spark-backed EMM models that combined phonetic matching and vector similarity across 13M+ nonprofit records."
      ],
      technologies: ["LLM", "RAG", "FAISS", "Python"]
    },
    {
      id: 1,
      title: "AI & ML Intern",
      company: "SproutsAI Inc.",
      location: "California, USA",
      date: "July 2025 - August 2025",
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
      id: 2,
      title: "Data Analyst & Engineer",
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
      id: 3,
      title: "Computer Vision Intern",
      company: "Wobot Intelligence",
      location: "Remote, India",
      date: "September 2021 - January 2022",
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

  const activeModal = modalExp !== null ? experiences[modalExp] : null;

  return (
    <section id="experience" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
          Experience
        </h2>

        <div className="max-w-7xl mx-auto">

          {/* ── Desktop layout (lg+) ── */}
          <div className="hidden lg:block glass-card rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-3 lg:max-h-[75vh]">
              {/* Left nav */}
              <div className="lg:col-span-1 bg-card/50 border-r border-border/50 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    const isSelected = selectedExperience === index;
                    return (
                      <div
                        key={exp.id}
                        onClick={() => setSelectedExperience(index)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-primary/20 border-l-4 border-primary"
                            : "hover:bg-muted/30 border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-sm mb-1 ${isSelected ? "text-primary" : "text-foreground"}`}>{exp.title}</h4>
                            <p className="text-xs text-muted-foreground mb-1">{exp.company}</p>
                            <p className={`text-xs ${isSelected ? "text-primary" : "text-muted-foreground"}`}>{exp.date}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right detail */}
              <div className="lg:col-span-2 p-6 overflow-y-auto">
                {experiences[selectedExperience] && (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        {experiences[selectedExperience].title}
                      </h3>
                      <p className="text-primary text-base lg:text-lg">
                        {experiences[selectedExperience].company} | {experiences[selectedExperience].date}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experiences[selectedExperience].technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-foreground/80 leading-relaxed">{experiences[selectedExperience].description}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <Wrench className="h-5 w-5 text-primary mr-2" />
                        <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {experiences[selectedExperience].achievements.map((a, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80 text-sm leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── Mobile layout (< lg): tap a card → modal ── */}
          <div className="lg:hidden space-y-3">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <button
                  key={exp.id}
                  onClick={() => setModalExp(exp.id)}
                  className="w-full text-left glass-card p-4 rounded-xl hover:glow-effect transition-all duration-200 active:scale-[0.98]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground">{exp.title}</h4>
                      <p className="text-xs text-primary mt-0.5">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.date}</p>
                    </div>
                    <span className="text-muted-foreground text-lg leading-none mt-1">›</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Modal popup ── */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setModalExp(null)}
        >
          <div
            className="glass-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">{activeModal.title}</h3>
                <p className="text-sm text-primary mt-0.5">{activeModal.company}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{activeModal.date}</p>
              </div>
              <button
                onClick={() => setModalExp(null)}
                className="text-muted-foreground hover:golden-text transition-colors flex-shrink-0 mt-0.5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {activeModal.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">{tech}</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/80 leading-relaxed">{activeModal.description}</p>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" /> Key Achievements
              </h4>
              <ul className="space-y-3">
                {activeModal.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
