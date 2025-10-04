import { Code, Database, Brain, BarChart, Wrench, Cloud } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Analysis",
      skills: ["Python", "R", "C++", "NumPy", "Pandas", "Git", "GitHub", "Bitbucket", "Vi/Vim"]
    },
    {
      icon: BarChart,
      title: "Data Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "OpenCV", "PowerBI", "QuickSight"]
    },
    {
      icon: Database,
      title: "Database Technologies",
      skills: ["MySQL", "PostgreSQL", "Oracle SQL", "Snowflake", "MongoDB", "Neo4j", "Qdrant"]
    },
    {
      icon: Wrench,
      title: "ETL & Data Wrangling",
      skills: ["Apache Airflow", "Apache Spark", "FastAPI", "AWS Glue", "Lambda", "Kinesis"]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "Hugging Face", "Deep Learning", "XGBoost"]
    },
    {
      icon: Cloud,
      title: "ML Techniques & Methods",
      skills: ["Predictive Modeling", "A/B Testing", "Clustering", "Regression", "Decision Trees", "SVM", "Data Mining", "Statistical Analysis"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-8 hover:glow-effect transition-all duration-300 group hover:scale-105 neural-network-bg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center mr-4 group-hover:glow-effect transition-all duration-300 tech-border">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center p-3 glass-effect rounded-lg hover:bg-primary/10 transition-all duration-200 group/skill"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 data-viz-animation"></div>
                      <span className="text-foreground/90 font-medium group-hover/skill:text-primary transition-colors duration-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;