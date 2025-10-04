import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";

const InteractiveSkillsRadar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  // Skills data based on your resume - targeting AI Engineering/ML/Data Engineering roles
  const skillCategories = {
    "ai-ml": {
      name: "AI/ML Engineering",
      color: "hsl(var(--primary))",
      skills: [
        { name: "TensorFlow/Keras", level: 90, experience: "2+ years" },
        { name: "PyTorch", level: 85, experience: "1+ year" },
        { name: "Scikit-learn", level: 95, experience: "3+ years" },
        { name: "Deep Learning", level: 88, experience: "2+ years" },
        { name: "XGBoost", level: 92, experience: "2+ years" },
        { name: "Hugging Face", level: 80, experience: "1+ year" }
      ]
    },
    "data-engineering": {
      name: "Data Engineering",
      color: "hsl(var(--accent))",
      skills: [
        { name: "Apache Airflow", level: 95, experience: "2+ years" },
        { name: "Apache Spark", level: 85, experience: "1+ year" },
        { name: "AWS Glue/Lambda", level: 88, experience: "1+ year" },
        { name: "ETL Pipelines", level: 95, experience: "2+ years" },
        { name: "FastAPI", level: 90, experience: "2+ years" },
        { name: "Docker", level: 82, experience: "1+ year" }
      ]
    },
    "databases": {
      name: "Database Technologies",
      color: "hsl(var(--secondary))",
      skills: [
        { name: "PostgreSQL", level: 90, experience: "2+ years" },
        { name: "Oracle SQL", level: 95, experience: "2+ years" },
        { name: "MongoDB", level: 88, experience: "1+ year" },
        { name: "Neo4j", level: 85, experience: "6 months" },
        { name: "Qdrant", level: 80, experience: "6 months" },
        { name: "Snowflake", level: 85, experience: "1+ year" }
      ]
    },
    "programming": {
      name: "Programming & Analysis",
      color: "hsl(270 80% 65%)",
      skills: [
        { name: "Python", level: 95, experience: "3+ years" },
        { name: "R", level: 88, experience: "2+ years" },
        { name: "C++", level: 80, experience: "2+ years" },
        { name: "NumPy/Pandas", level: 95, experience: "3+ years" },
        { name: "Git/GitHub", level: 90, experience: "3+ years" },
        { name: "Linux/Bash", level: 85, experience: "2+ years" }
      ]
    }
  };

  const allSkills = Object.values(skillCategories).flatMap(category => 
    category.skills.map(skill => ({ ...skill, category: category.name, color: category.color }))
  );

  const getFilteredSkills = () => {
    if (!selectedCategory || selectedCategory === "") return [];
    if (selectedCategory === "all") return allSkills;
    return skillCategories[selectedCategory]?.skills.map(skill => ({
      ...skill,
      category: skillCategories[selectedCategory].name,
      color: skillCategories[selectedCategory].color
    })) || [];
  };

  useEffect(() => {
    if (selectedCategory && showSkills) {
      setAnimationComplete(false);
      const timer = setTimeout(() => setAnimationComplete(true), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory, showSkills]);

  const filteredSkills = getFilteredSkills();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Interactive Skills Assessment
        </h2>

        {/* Skills Category Selector */}
        <div className="max-w-md mx-auto mb-12">
          <div className="glass-card p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Skills Category
                </label>
                <Select 
                  value={selectedCategory} 
                  onValueChange={(value) => {
                    setSelectedCategory(value);
                    setShowSkills(true);
                  }}
                >
                  <SelectTrigger className="glass-effect hover:glow-effect transition-all duration-300">
                    <SelectValue placeholder="Choose a skill category to explore..." />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-primary/20">
                    <SelectItem value="all" className="hover:bg-primary/10">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mr-3"></div>
                        All Skills ({allSkills.length})
                      </div>
                    </SelectItem>
                    {Object.entries(skillCategories).map(([key, category]) => (
                      <SelectItem key={key} value={key} className="hover:bg-primary/10">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          {category.name} ({category.skills.length})
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedCategory && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSkills(!showSkills)}
                  className="glass-effect hover:glow-effect transition-all duration-300 min-w-[100px]"
                >
                  {showSkills ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Show
                    </>
                  )}
                </Button>
              )}
            </div>
            
            {selectedCategory && (
              <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  {selectedCategory === "all" 
                    ? `Viewing all ${allSkills.length} technical skills across categories`
                    : `Viewing ${skillCategories[selectedCategory]?.skills.length} skills in ${skillCategories[selectedCategory]?.name}`
                  }
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Skills Grid - Only show when skills are selected and showSkills is true */}
        {showSkills && selectedCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${selectedCategory}`}
              className="glass-card p-6 hover:glow-effect transition-all duration-500 neural-network-bg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.experience}</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: animationComplete ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color || 'hsl(var(--primary))'}, ${skill.color || 'hsl(var(--accent))'})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        star <= skill.level / 20
                          ? 'bg-primary glow-effect'
                          : 'bg-muted/30'
                      }`}
                      style={{
                        animationDelay: `${(star - 1) * 200 + index * 50}ms`
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Proficient'}
                </span>
              </div>
            </div>
            ))}
          </div>
        )}

        {/* Summary Stats - Only show when skills are visible */}
        {showSkills && selectedCategory && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="text-center glass-card p-4 pulse-data">
            <div className="text-2xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Technical Skills</div>
          </div>
          <div className="text-center glass-card p-4 pulse-data" style={{ animationDelay: '200ms' }}>
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center glass-card p-4 pulse-data" style={{ animationDelay: '400ms' }}>
            <div className="text-2xl font-bold text-primary">140M+</div>
            <div className="text-sm text-muted-foreground">Records Processed</div>
          </div>
          <div className="text-center glass-card p-4 pulse-data" style={{ animationDelay: '600ms' }}>
            <div className="text-2xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">Best ML Accuracy</div>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveSkillsRadar;

