import { useState } from "react";
import { Calendar, TrendingUp, Award, Code, Database, Brain, Cloud, BarChart, Wrench } from "lucide-react";

const SkillsTimeline = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const skillsJourney = [
    {
      year: 2021,
      title: "Foundation Building",
      description: "Started with programming fundamentals and data analysis",
      skills: [
        { name: "Python", level: 70, icon: Code, category: "Programming" },
        { name: "R", level: 60, icon: BarChart, category: "Analysis" },
        { name: "SQL", level: 65, icon: Database, category: "Database" },
        { name: "Excel/VBA", level: 80, icon: BarChart, category: "Analysis" }
      ],
      milestone: "First Data Science Project",
      color: "#8b5cf6"
    },
    {
      year: 2022,
      title: "Machine Learning Mastery",
      description: "Deepened ML knowledge and expanded technical toolkit",
      skills: [
        { name: "Scikit-learn", level: 85, icon: Brain, category: "ML" },
        { name: "Pandas/NumPy", level: 90, icon: Code, category: "Programming" },
        { name: "Matplotlib/Seaborn", level: 85, icon: BarChart, category: "Visualization" },
        { name: "Git/GitHub", level: 80, icon: Code, category: "DevOps" },
        { name: "Jupyter", level: 85, icon: Code, category: "Tools" }
      ],
      milestone: "ML Certification Completed",
      color: "#06b6d4"
    },
    {
      year: 2023,
      title: "Data Engineering Focus",
      description: "Transitioned into data engineering and cloud technologies",
      skills: [
        { name: "Apache Airflow", level: 95, icon: Wrench, category: "Data Engineering" },
        { name: "PostgreSQL", level: 90, icon: Database, category: "Database" },
        { name: "AWS Services", level: 80, icon: Cloud, category: "Cloud" },
        { name: "Docker", level: 75, icon: Wrench, category: "DevOps" },
        { name: "FastAPI", level: 85, icon: Code, category: "Backend" }
      ],
      milestone: "Led 140M+ Records ETL Project",
      color: "#10b981"
    },
    {
      year: 2024,
      title: "AI & Advanced Systems",
      description: "Advanced into AI/ML engineering and modern frameworks",
      skills: [
        { name: "TensorFlow/Keras", level: 90, icon: Brain, category: "Deep Learning" },
        { name: "PyTorch", level: 85, icon: Brain, category: "Deep Learning" },
        { name: "Hugging Face", level: 80, icon: Brain, category: "NLP" },
        { name: "MongoDB", level: 88, icon: Database, category: "NoSQL" },
        { name: "Neo4j", level: 85, icon: Database, category: "Graph DB" },
        { name: "Apache Spark", level: 85, icon: Wrench, category: "Big Data" }
      ],
      milestone: "MS Data Science @ Indiana University",
      color: "#f59e0b"
    },
    {
      year: 2025,
      title: "Specialization & Innovation",
      description: "Current focus on advanced AI and specialized technologies",
      skills: [
        { name: "XGBoost", level: 92, icon: Brain, category: "ML" },
        { name: "Qdrant", level: 80, icon: Database, category: "Vector DB" },
        { name: "Snowflake", level: 85, icon: Cloud, category: "Data Warehouse" },
        { name: "PowerBI", level: 85, icon: BarChart, category: "BI Tools" },
        { name: "OpenCV", level: 75, icon: Brain, category: "Computer Vision" }
      ],
      milestone: "AI Engineering Internship",
      color: "#ef4444"
    }
  ];

  const getSkillIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      "Programming": Code,
      "ML": Brain,
      "Deep Learning": Brain,
      "Database": Database,
      "Cloud": Cloud,
      "Analysis": BarChart,
      "DevOps": Wrench,
      "Data Engineering": Wrench,
      "Visualization": BarChart,
      "Backend": Code,
      "Tools": Code,
      "NoSQL": Database,
      "Graph DB": Database,
      "Big Data": Wrench,
      "NLP": Brain,
      "Vector DB": Database,
      "Data Warehouse": Cloud,
      "BI Tools": BarChart,
      "Computer Vision": Brain
    };
    return iconMap[category] || Code;
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills Evolution Timeline
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {skillsJourney.map((period, index) => (
                <div
                  key={period.year}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10"
                       style={{ backgroundColor: period.color }}>
                  </div>

                  {/* Year indicator */}
                  <div className={`flex-shrink-0 w-24 text-center mb-4 md:mb-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } ml-16 md:ml-0`}>
                    <div 
                      className="glass-card p-4 cursor-pointer transition-all duration-300 hover:glow-effect"
                      style={{ borderColor: period.color }}
                      onClick={() => setSelectedYear(selectedYear === period.year ? null : period.year)}
                    >
                      <Calendar className="h-6 w-6 mx-auto mb-2" style={{ color: period.color }} />
                      <div className="text-xl font-bold" style={{ color: period.color }}>{period.year}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}>
                    <div 
                      className={`glass-card p-6 transition-all duration-500 hover:glow-effect neural-network-bg ${
                        selectedYear === period.year ? 'ring-2 glow-effect' : ''
                      }`}
                      style={{ 
                        borderColor: selectedYear === period.year ? period.color : undefined,
                        transform: selectedYear === period.year ? 'scale(1.02)' : 'scale(1)'
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <TrendingUp className="h-6 w-6 mr-3" style={{ color: period.color }} />
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{period.title}</h3>
                          <p className="text-sm text-muted-foreground">{period.description}</p>
                        </div>
                      </div>

                      {/* Milestone */}
                      <div className="flex items-center mb-6 p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <Award className="h-5 w-5 mr-2" style={{ color: period.color }} />
                        <span className="text-sm font-medium text-primary">{period.milestone}</span>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {period.skills.map((skill, skillIndex) => {
                          const IconComponent = getSkillIcon(skill.category);
                          return (
                            <div
                              key={skill.name}
                              className="flex items-center p-3 glass-effect rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                                   style={{ backgroundColor: `${period.color}20` }}>
                                <IconComponent className="h-4 w-4" style={{ color: period.color }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground truncate">{skill.name}</div>
                                <div className="flex items-center mt-1">
                                  <div className="flex-1 h-1.5 bg-muted/30 rounded-full overflow-hidden">
                                    <div
                                      className="h-full transition-all duration-1000 ease-out rounded-full"
                                      style={{
                                        width: selectedYear === period.year ? `${skill.level}%` : '0%',
                                        backgroundColor: period.color
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-muted-foreground ml-2 font-medium">
                                    {skill.level}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Years Journey</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Skills Mastered</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Avg Proficiency</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Major Milestones</div>
            </div>
          </div>

          {/* Instruction */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Click on any year to see detailed skill progression
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTimeline;

