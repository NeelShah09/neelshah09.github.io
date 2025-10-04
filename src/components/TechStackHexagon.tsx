import { useState, useEffect } from "react";
import { Code, Database, Brain, BarChart, Wrench, Cloud, Zap, Cpu, Globe, Server } from "lucide-react";

const TechStackHexagon = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Core tech stack with positioning for hexagonal layout
  const coreSkills = [
    { name: "Python", icon: Code, level: 95, color: "#3776ab", position: { x: 0, y: 0 }, category: "core" },
    { name: "Machine Learning", icon: Brain, level: 90, color: "#ff6b6b", position: { x: 150, y: -87 }, category: "core" },
    { name: "Data Engineering", icon: Database, level: 88, color: "#4ecdc4", position: { x: 150, y: 87 }, category: "core" },
    { name: "Cloud Computing", icon: Cloud, level: 85, color: "#45b7d1", position: { x: 0, y: 174 }, category: "core" },
    { name: "Analytics", icon: BarChart, level: 92, color: "#96ceb4", position: { x: -150, y: 87 }, category: "core" },
    { name: "DevOps", icon: Wrench, level: 80, color: "#feca57", position: { x: -150, y: -87 }, category: "core" }
  ];

  // Surrounding skills in outer ring
  const outerSkills = [
    { name: "TensorFlow", icon: Zap, level: 90, color: "#ff7f50", position: { x: 75, y: -130 }, category: "ml" },
    { name: "PyTorch", icon: Cpu, level: 85, color: "#ee4c2c", position: { x: 195, y: -45 }, category: "ml" },
    { name: "Scikit-learn", icon: Brain, level: 95, color: "#f7931e", position: { x: 195, y: 45 }, category: "ml" },
    { name: "Apache Spark", icon: Zap, level: 85, color: "#e25a1c", position: { x: 120, y: 130 }, category: "data" },
    { name: "PostgreSQL", icon: Database, level: 90, color: "#336791", position: { x: 0, y: 220 }, category: "data" },
    { name: "MongoDB", icon: Database, level: 88, color: "#4db33d", position: { x: -120, y: 130 }, category: "data" },
    { name: "AWS", icon: Cloud, level: 85, color: "#ff9900", position: { x: -195, y: 45 }, category: "cloud" },
    { name: "Docker", icon: Server, level: 82, color: "#0db7ed", position: { x: -195, y: -45 }, category: "devops" },
    { name: "Airflow", icon: Wrench, level: 95, color: "#017cee", position: { x: -75, y: -130 }, category: "data" },
    { name: "FastAPI", icon: Globe, level: 90, color: "#009688", position: { x: 0, y: -174 }, category: "api" }
  ];

  const allSkills = [...coreSkills, ...outerSkills];

  useEffect(() => {
    const phases = [0, 1, 2, 3];
    let currentPhase = 0;
    
    const interval = setInterval(() => {
      currentPhase = (currentPhase + 1) % phases.length;
      setAnimationPhase(currentPhase);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSkillOpacity = (skill: any, index: number) => {
    if (hoveredSkill && hoveredSkill !== skill.name) return 0.3;
    return 1;
  };

  const getConnectionOpacity = (skill1: any, skill2: any) => {
    if (!hoveredSkill) return 0.1;
    if (hoveredSkill === skill1.name || hoveredSkill === skill2.name) return 0.6;
    return 0.05;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Technology Ecosystem
        </h2>

        {/* Hexagonal Tech Stack Visualization */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] flex items-center justify-center">
            <svg 
              width="600" 
              height="600" 
              viewBox="-300 -300 600 600" 
              className="absolute inset-0 w-full h-full"
            >
              {/* Connection lines between skills */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Draw connections */}
              {allSkills.map((skill1, i) => 
                allSkills.slice(i + 1).map((skill2, j) => {
                  const distance = Math.sqrt(
                    Math.pow(skill1.position.x - skill2.position.x, 2) + 
                    Math.pow(skill1.position.y - skill2.position.y, 2)
                  );
                  
                  if (distance < 200) {
                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={skill1.position.x}
                        y1={skill1.position.y}
                        x2={skill2.position.x}
                        y2={skill2.position.y}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        opacity={getConnectionOpacity(skill1, skill2)}
                        className="transition-opacity duration-300"
                      />
                    );
                  }
                  return null;
                })
              )}
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>

            {/* Skill nodes */}
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isCore = skill.category === "core";
              const size = isCore ? 80 : 60;
              const delay = index * 100;

              return (
                <div
                  key={skill.name}
                  className={`absolute transition-all duration-500 cursor-pointer group ${
                    isCore ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: `calc(50% + ${skill.position.x}px - ${size/2}px)`,
                    top: `calc(50% + ${skill.position.y}px - ${size/2}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}ms`,
                    opacity: getSkillOpacity(skill, index),
                    transform: hoveredSkill === skill.name ? 'scale(1.2)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Hexagonal background */}
                  <div 
                    className={`w-full h-full rounded-xl glass-effect flex items-center justify-center relative overflow-hidden group-hover:glow-effect transition-all duration-300 ${
                      isCore ? 'tech-border' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                      borderColor: skill.color,
                    }}
                  >
                    {/* Animated background pattern */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}40 0%, transparent 70%)`,
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${delay}ms`
                      }}
                    />
                    
                    {/* Icon */}
                    <IconComponent 
                      className={`${isCore ? 'h-8 w-8' : 'h-6 w-6'} relative z-10`}
                      style={{ color: skill.color }}
                    />

                    {/* Skill level indicator */}
                    <div 
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                        color: 'white'
                      }}
                    >
                      {skill.level}
                    </div>
                  </div>

                  {/* Skill name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-primary/20 whitespace-nowrap">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <div className="text-xs text-muted-foreground">{skill.level}% proficiency</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center glass-card p-4">
              <div className="w-4 h-4 rounded-full bg-primary mx-auto mb-2"></div>
              <div className="text-sm font-medium">Core Skills</div>
              <div className="text-xs text-muted-foreground">Foundation</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <div className="text-sm font-medium">ML/AI</div>
              <div className="text-xs text-muted-foreground">Intelligence</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="w-4 h-4 rounded-full bg-secondary mx-auto mb-2"></div>
              <div className="text-sm font-medium">Data & Cloud</div>
              <div className="text-xs text-muted-foreground">Infrastructure</div>
            </div>
            <div className="text-center glass-card p-4">
              <div className="w-4 h-4 rounded-full bg-muted mx-auto mb-2"></div>
              <div className="text-sm font-medium">DevOps</div>
              <div className="text-xs text-muted-foreground">Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackHexagon;

