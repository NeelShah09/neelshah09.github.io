import { useState, useEffect } from "react";
import { TrendingUp, Star, Zap, Award } from "lucide-react";

const SkillsTagCloud = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("level");

  // Skills with categories and proficiency levels
  const skills = [
    // Programming & Core
    { name: "Python", level: 95, category: "programming", years: 3, projects: 15 },
    { name: "R", level: 88, category: "programming", years: 2, projects: 8 },
    { name: "C++", level: 80, category: "programming", years: 2, projects: 5 },
    { name: "SQL", level: 95, category: "programming", years: 3, projects: 20 },
    { name: "Git/GitHub", level: 90, category: "programming", years: 3, projects: 25 },
    
    // Machine Learning & AI
    { name: "Scikit-learn", level: 95, category: "ml", years: 3, projects: 12 },
    { name: "TensorFlow", level: 90, category: "ml", years: 2, projects: 8 },
    { name: "Keras", level: 90, category: "ml", years: 2, projects: 8 },
    { name: "PyTorch", level: 85, category: "ml", years: 1, projects: 6 },
    { name: "XGBoost", level: 92, category: "ml", years: 2, projects: 10 },
    { name: "Deep Learning", level: 88, category: "ml", years: 2, projects: 7 },
    { name: "Hugging Face", level: 80, category: "ml", years: 1, projects: 4 },
    
    // Data Engineering
    { name: "Apache Airflow", level: 95, category: "data-eng", years: 2, projects: 8 },
    { name: "Apache Spark", level: 85, category: "data-eng", years: 1, projects: 4 },
    { name: "FastAPI", level: 90, category: "data-eng", years: 2, projects: 6 },
    { name: "ETL Pipelines", level: 95, category: "data-eng", years: 2, projects: 12 },
    { name: "Docker", level: 82, category: "data-eng", years: 1, projects: 5 },
    
    // Databases
    { name: "PostgreSQL", level: 90, category: "database", years: 2, projects: 10 },
    { name: "MongoDB", level: 88, category: "database", years: 1, projects: 6 },
    { name: "Neo4j", level: 85, category: "database", years: 1, projects: 3 },
    { name: "Oracle SQL", level: 95, category: "database", years: 2, projects: 8 },
    { name: "Snowflake", level: 85, category: "database", years: 1, projects: 4 },
    { name: "Qdrant", level: 80, category: "database", years: 1, projects: 2 },
    
    // Data Science & Analytics
    { name: "Pandas", level: 95, category: "analytics", years: 3, projects: 20 },
    { name: "NumPy", level: 95, category: "analytics", years: 3, projects: 18 },
    { name: "Matplotlib", level: 85, category: "analytics", years: 2, projects: 15 },
    { name: "Seaborn", level: 85, category: "analytics", years: 2, projects: 12 },
    { name: "Plotly", level: 88, category: "analytics", years: 2, projects: 10 },
    { name: "PowerBI", level: 85, category: "analytics", years: 1, projects: 6 },
    { name: "Statistical Analysis", level: 92, category: "analytics", years: 3, projects: 15 },
    
    // Cloud & DevOps
    { name: "AWS", level: 85, category: "cloud", years: 1, projects: 6 },
    { name: "AWS Glue", level: 88, category: "cloud", years: 1, projects: 4 },
    { name: "AWS Lambda", level: 85, category: "cloud", years: 1, projects: 5 },
    { name: "Kinesis", level: 82, category: "cloud", years: 1, projects: 3 },
    { name: "QuickSight", level: 80, category: "cloud", years: 1, projects: 3 }
  ];

  const categories = [
    { id: "all", name: "All Skills", color: "hsl(var(--primary))" },
    { id: "programming", name: "Programming", color: "#3b82f6" },
    { id: "ml", name: "ML & AI", color: "#ef4444" },
    { id: "data-eng", name: "Data Engineering", color: "#10b981" },
    { id: "database", name: "Databases", color: "#8b5cf6" },
    { id: "analytics", name: "Analytics", color: "#f59e0b" },
    { id: "cloud", name: "Cloud", color: "#06b6d4" }
  ];

  const getFilteredSkills = () => {
    const filtered = filter === "all" ? skills : skills.filter(skill => skill.category === filter);
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "level":
          return b.level - a.level;
        case "name":
          return a.name.localeCompare(b.name);
        case "years":
          return b.years - a.years;
        case "projects":
          return b.projects - a.projects;
        default:
          return 0;
      }
    });
  };

  const getSkillSize = (skill: any) => {
    const baseSize = 0.8;
    const levelMultiplier = skill.level / 100;
    const projectsMultiplier = Math.min(skill.projects / 20, 1);
    return baseSize + (levelMultiplier * 0.5) + (projectsMultiplier * 0.3);
  };

  const getSkillColor = (skill: any) => {
    const category = categories.find(cat => cat.id === skill.category);
    return category ? category.color : "hsl(var(--primary))";
  };

  const getBadgeVariant = (level: number) => {
    if (level >= 90) return "expert";
    if (level >= 80) return "advanced";
    if (level >= 70) return "intermediate";
    return "beginner";
  };

  const getBadgeIcon = (level: number) => {
    if (level >= 90) return Star;
    if (level >= 80) return Award;
    if (level >= 70) return TrendingUp;
    return Zap;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        {/* Controls */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "glass-card glow-effect text-primary border-primary/50"
                    : "glass-effect hover:glass-card text-muted-foreground hover:text-foreground"
                }`}
                style={{
                  borderColor: filter === category.id ? category.color : undefined,
                  color: filter === category.id ? category.color : undefined
                }}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-60">
                  ({filter === category.id ? filteredSkills.length : skills.filter(s => s.category === category.id).length})
                </span>
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex justify-center gap-3">
            <span className="text-sm text-muted-foreground self-center">Sort by:</span>
            {[
              { id: "level", name: "Proficiency" },
              { id: "name", name: "Name" },
              { id: "years", name: "Experience" },
              { id: "projects", name: "Projects" }
            ].map((sort) => (
              <button
                key={sort.id}
                onClick={() => setSortBy(sort.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                  sortBy === sort.id
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "hover:bg-muted/20 text-muted-foreground hover:text-foreground"
                }`}
              >
                {sort.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Tag Cloud */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filteredSkills.map((skill, index) => {
              const IconComponent = getBadgeIcon(skill.level);
              const variant = getBadgeVariant(skill.level);
              const size = getSkillSize(skill);
              const color = getSkillColor(skill);
              
              return (
                <div
                  key={skill.name}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: `scale(${size})`
                  }}
                >
                  {/* Main Badge */}
                  <div 
                    className={`
                      inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                      transition-all duration-300 cursor-pointer
                      glass-card hover:glow-effect hover:scale-110
                      ${variant === "expert" ? "ring-2 ring-yellow-400/30" : ""}
                    `}
                    style={{
                      borderColor: `${color}40`,
                      background: `linear-gradient(135deg, ${color}15, ${color}05)`
                    }}
                  >
                    <IconComponent 
                      className="h-3 w-3 mr-2" 
                      style={{ color: color }}
                    />
                    <span style={{ color: color }}>{skill.name}</span>
                    <span className="ml-2 text-xs opacity-60">{skill.level}%</span>
                  </div>

                  {/* Detailed Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-lg min-w-48">
                      <div className="text-sm font-semibold text-primary mb-2">{skill.name}</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Proficiency:</span>
                          <span style={{ color: color }}>{skill.level}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="text-foreground">{skill.years}+ years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Projects:</span>
                          <span className="text-foreground">{skill.projects}+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Level:</span>
                          <span className="text-foreground capitalize">{variant}</span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${color}, ${color}80)`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">{skills.length}</div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Proficiency</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">
                {skills.filter(skill => skill.level >= 90).length}
              </div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">
                {Math.max(...skills.map(skill => skill.years))}+
              </div>
              <div className="text-sm text-muted-foreground">Max Experience</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="text-2xl font-bold text-primary">
                {skills.reduce((acc, skill) => acc + skill.projects, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTagCloud;

