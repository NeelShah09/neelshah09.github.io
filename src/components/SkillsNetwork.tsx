import { useState, useEffect, useRef } from "react";
import { Code, Database, Brain, BarChart, Wrench, Cloud, Zap, Globe, Server, Cpu, Monitor } from "lucide-react";

const SkillsNetwork = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // Network nodes representing skills with relationships
  const skillNodes = [
    // Core Programming Hub
    { 
      id: "python", 
      name: "Python", 
      icon: Code, 
      level: 95, 
      size: 80, 
      x: 400, 
      y: 300, 
      color: "#3776ab", 
      category: "core",
      connections: ["pandas", "tensorflow", "fastapi", "airflow", "scikit"]
    },
    
    // Data Science Branch
    { 
      id: "pandas", 
      name: "Pandas", 
      icon: BarChart, 
      level: 95, 
      size: 65, 
      x: 250, 
      y: 200, 
      color: "#150458", 
      category: "data-science",
      connections: ["numpy", "matplotlib", "python"]
    },
    { 
      id: "numpy", 
      name: "NumPy", 
      icon: BarChart, 
      level: 90, 
      size: 60, 
      x: 150, 
      y: 150, 
      color: "#013243", 
      category: "data-science",
      connections: ["pandas", "scikit", "tensorflow"]
    },
    { 
      id: "matplotlib", 
      name: "Matplotlib", 
      icon: BarChart, 
      level: 85, 
      size: 55, 
      x: 200, 
      y: 100, 
      color: "#11557c", 
      category: "visualization",
      connections: ["pandas", "seaborn"]
    },
    { 
      id: "seaborn", 
      name: "Seaborn", 
      icon: BarChart, 
      level: 85, 
      size: 55, 
      x: 300, 
      y: 80, 
      color: "#4c72b0", 
      category: "visualization",
      connections: ["matplotlib", "pandas"]
    },

    // Machine Learning Branch
    { 
      id: "scikit", 
      name: "Scikit-learn", 
      icon: Brain, 
      level: 95, 
      size: 70, 
      x: 500, 
      y: 150, 
      color: "#f7931e", 
      category: "ml",
      connections: ["python", "numpy", "xgboost"]
    },
    { 
      id: "tensorflow", 
      name: "TensorFlow", 
      icon: Brain, 
      level: 90, 
      size: 70, 
      x: 600, 
      y: 200, 
      color: "#ff6f00", 
      category: "deep-learning",
      connections: ["python", "keras", "pytorch"]
    },
    { 
      id: "keras", 
      name: "Keras", 
      icon: Brain, 
      level: 90, 
      size: 60, 
      x: 650, 
      y: 120, 
      color: "#d00000", 
      category: "deep-learning",
      connections: ["tensorflow"]
    },
    { 
      id: "pytorch", 
      name: "PyTorch", 
      icon: Brain, 
      level: 85, 
      size: 65, 
      x: 700, 
      y: 250, 
      color: "#ee4c2c", 
      category: "deep-learning",
      connections: ["tensorflow", "huggingface"]
    },
    { 
      id: "xgboost", 
      name: "XGBoost", 
      icon: Brain, 
      level: 92, 
      size: 60, 
      x: 550, 
      y: 80, 
      color: "#1f77b4", 
      category: "ml",
      connections: ["scikit"]
    },
    { 
      id: "huggingface", 
      name: "Hugging Face", 
      icon: Brain, 
      level: 80, 
      size: 55, 
      x: 750, 
      y: 180, 
      color: "#ff9a00", 
      category: "nlp",
      connections: ["pytorch", "tensorflow"]
    },

    // Data Engineering Branch
    { 
      id: "airflow", 
      name: "Apache Airflow", 
      icon: Wrench, 
      level: 95, 
      size: 70, 
      x: 300, 
      y: 400, 
      color: "#017cee", 
      category: "data-eng",
      connections: ["python", "docker", "aws"]
    },
    { 
      id: "spark", 
      name: "Apache Spark", 
      icon: Zap, 
      level: 85, 
      size: 65, 
      x: 200, 
      y: 450, 
      color: "#e25a1c", 
      category: "big-data",
      connections: ["airflow", "python"]
    },
    { 
      id: "docker", 
      name: "Docker", 
      icon: Server, 
      level: 82, 
      size: 60, 
      x: 350, 
      y: 500, 
      color: "#0db7ed", 
      category: "devops",
      connections: ["airflow", "aws"]
    },

    // Database Branch
    { 
      id: "postgresql", 
      name: "PostgreSQL", 
      icon: Database, 
      level: 90, 
      size: 65, 
      x: 500, 
      y: 450, 
      color: "#336791", 
      category: "database",
      connections: ["mongodb", "sql"]
    },
    { 
      id: "mongodb", 
      name: "MongoDB", 
      icon: Database, 
      level: 88, 
      size: 60, 
      x: 600, 
      y: 400, 
      color: "#4db33d", 
      category: "nosql",
      connections: ["postgresql", "neo4j"]
    },
    { 
      id: "neo4j", 
      name: "Neo4j", 
      icon: Database, 
      level: 85, 
      size: 55, 
      x: 650, 
      y: 480, 
      color: "#008cc1", 
      category: "graph-db",
      connections: ["mongodb"]
    },
    { 
      id: "sql", 
      name: "SQL", 
      icon: Database, 
      level: 95, 
      size: 60, 
      x: 450, 
      y: 520, 
      color: "#00758f", 
      category: "database",
      connections: ["postgresql", "snowflake"]
    },
    { 
      id: "snowflake", 
      name: "Snowflake", 
      icon: Cloud, 
      level: 85, 
      size: 55, 
      x: 550, 
      y: 550, 
      color: "#29b5e8", 
      category: "cloud-db",
      connections: ["sql", "aws"]
    },

    // Cloud & API Branch
    { 
      id: "aws", 
      name: "AWS", 
      icon: Cloud, 
      level: 85, 
      size: 65, 
      x: 150, 
      y: 350, 
      color: "#ff9900", 
      category: "cloud",
      connections: ["docker", "airflow", "snowflake"]
    },
    { 
      id: "fastapi", 
      name: "FastAPI", 
      icon: Globe, 
      level: 90, 
      size: 60, 
      x: 400, 
      y: 200, 
      color: "#009688", 
      category: "api",
      connections: ["python"]
    }
  ];

  // Animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getConnectedNodes = (nodeId: string) => {
    const node = skillNodes.find(n => n.id === nodeId);
    return node ? node.connections : [];
  };

  const isNodeHighlighted = (nodeId: string) => {
    if (!activeNode) return false;
    if (activeNode === nodeId) return true;
    return getConnectedNodes(activeNode).includes(nodeId);
  };

  const getNodeOpacity = (nodeId: string) => {
    if (!activeNode) return 1;
    return isNodeHighlighted(nodeId) ? 1 : 0.3;
  };

  const getConnectionOpacity = (fromId: string, toId: string) => {
    if (!activeNode) return 0.2;
    if (activeNode === fromId || activeNode === toId) {
      return getConnectedNodes(activeNode).includes(fromId === activeNode ? toId : fromId) ? 0.8 : 0.1;
    }
    return 0.1;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills Network Graph
        </h2>

        {/* Interactive Network Visualization */}
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 overflow-hidden">
            <svg 
              ref={svgRef}
              width="100%" 
              height="600" 
              viewBox="0 0 800 600" 
              className="w-full"
            >
              {/* Definitions for effects */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <radialGradient id="nodeGradient" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>

              {/* Connection lines */}
              {skillNodes.map(node => 
                node.connections.map(connId => {
                  const connectedNode = skillNodes.find(n => n.id === connId);
                  if (!connectedNode) return null;
                  
                  return (
                    <line
                      key={`${node.id}-${connId}`}
                      x1={node.x}
                      y1={node.y}
                      x2={connectedNode.x}
                      y2={connectedNode.y}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      opacity={getConnectionOpacity(node.id, connId)}
                      className="transition-opacity duration-300"
                    />
                  );
                })
              )}

              <defs>
                <linearGradient id="connectionGradient">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>

              {/* Skill nodes */}
              {skillNodes.map((node, index) => {
                const IconComponent = node.icon;
                const isHighlighted = isNodeHighlighted(node.id);
                const isActive = activeNode === node.id;
                
                return (
                  <g key={node.id}>
                    {/* Node background circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size / 2}
                      fill={`${node.color}20`}
                      stroke={node.color}
                      strokeWidth={isActive ? "4" : "2"}
                      opacity={getNodeOpacity(node.id)}
                      className="transition-all duration-300 cursor-pointer"
                      filter={isHighlighted ? "url(#glow)" : "none"}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    />
                    
                    {/* Gradient overlay */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size / 2 - 2}
                      fill="url(#nodeGradient)"
                      opacity={getNodeOpacity(node.id)}
                      className="transition-opacity duration-300 pointer-events-none"
                    />

                    {/* Skill level indicator ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size / 2 + 5}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="3"
                      strokeDasharray={`${(node.level / 100) * 2 * Math.PI * (node.size / 2 + 5)} ${2 * Math.PI * (node.size / 2 + 5)}`}
                      opacity={isHighlighted ? 0.8 : 0.3}
                      className="transition-opacity duration-300"
                      transform={`rotate(-90 ${node.x} ${node.y})`}
                    />

                    {/* Node label */}
                    <text
                      x={node.x}
                      y={node.y + node.size / 2 + 20}
                      textAnchor="middle"
                      className="text-xs font-medium fill-foreground"
                      opacity={getNodeOpacity(node.id)}
                    >
                      {node.name}
                    </text>
                    
                    {/* Proficiency percentage */}
                    <text
                      x={node.x}
                      y={node.y + node.size / 2 + 35}
                      textAnchor="middle"
                      className="text-xs fill-muted-foreground"
                      opacity={isHighlighted ? 1 : 0.5}
                    >
                      {node.level}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend and Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">Core</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-orange-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">ML/AI</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">Data Eng</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-purple-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">Database</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-cyan-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">Cloud</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="w-4 h-4 rounded-full bg-pink-500 mx-auto mb-2"></div>
              <div className="text-xs font-medium">Visualization</div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Hover over any skill to see its connections and related technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNetwork;

