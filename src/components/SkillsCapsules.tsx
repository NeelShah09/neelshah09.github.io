import { useState } from "react";
import { Code, Brain, BarChart3, Database, Cloud } from "lucide-react";

type SkillPill = {
  name: string;
  subtitle: string;
  icon?: string;
};

type Category = {
  key: string;
  title: string;
  icon?: string;
  skills: SkillPill[];
};

const categories: Category[] = [
  {
    key: "programming",
    title: "Languages",
    skills: [
      { name: "Python", subtitle: "Primary", icon: "https://cdn.simpleicons.org/python" },
      { name: "C++", subtitle: "", icon: "https://cdn.simpleicons.org/c++" },
      { name: "Java", subtitle: "", icon: "/skills/java.svg" },
      { name: "SQL", subtitle: "Data Query", icon: "/skills/sql.svg" },
    ],
  },
  {
    key: "ai-ml",
    title: "AI & ML",
    skills: [
      { name: "TensorFlow", subtitle: "DL", icon: "https://cdn.simpleicons.org/tensorflow" },
      { name: "Scikit-Learn", subtitle: "ML", icon: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "OpenCV", subtitle: "Vision", icon: "/skills/opencv.svg" },
    //   { name: "LangChain", subtitle: "LLM Apps", icon: "https://cdn.simpleicons.org/langchain" },
      { name: "LangChain", subtitle: "LLM Apps", icon: "https://cdn.simpleicons.org/langchain"},
      { name: "LangGraph", subtitle: "NLP", icon: "https://cdn.simpleicons.org/langgraph" },
      { name: "Hugging Face", subtitle: "NLP", icon: "https://cdn.simpleicons.org/huggingface" },
      { name: "Qdrant", subtitle: "Vector DB", icon: "/skills/qdrant.svg" },
    ],
  },
  {
    key: "data-analytics",
    title: "Big Data & Analytics",
    skills: [
      { name: "Spark", subtitle: "Big Data", icon: "/skills/spark.svg" },
      { name: "Airflow", subtitle: "Orchestration", icon: "/skills/airflow.svg" },
      { name: "AWS Glue", subtitle: "ETL", icon: "/skills/aws-glue.svg" },
      { name: "AWS Lambda", subtitle: "ETL", icon: "/skills/aws-lambda.svg" },
      { name: "AWS Kinesis", subtitle: "ETL", icon: "/skills/aws-kinesis.svg" },
      { name: "AWS S3", subtitle: "ETL", icon: "/skills/s3.svg" },
      { name: "Pandas", subtitle: "Analysis", icon: "/skills/pandas.svg" },
      { name: "NumPy", subtitle: "Arrays", icon: "/skills/numpy.svg" },
    ],
  },
  {
    key: "bi-viz",
    title: "BI & Visualization",
    skills: [
        { name: "Power BI", subtitle: "BI", icon: "/skills/powerbi.svg" },
        { name: "Matplotlib", subtitle: "Visualization", icon: "/skills/matplotlib.svg" },
        { name: "Seaborn", subtitle: "Visualization", icon: "/skills/seaborn.svg" },
        { name: "Plotly", subtitle: "Visualization", icon: "/skills/plotly.svg" },
        { name: "Excel", subtitle: "Spreadsheets", icon: "/skills/excel.svg" },
    ],
  },
  {
    key: "database",
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", subtitle: "Relational", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Oracle", subtitle: "Relational", icon: "/skills/oracle.svg" },
      { name: "MongoDB", subtitle: "Document", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Neo4j", subtitle: "Graph", icon: "https://cdn.simpleicons.org/neo4j" },
      { name: "MySQL", subtitle: "DW", icon: "/skills/mysql.svg" },
    ],
  },
  {
    key: "cloud-devops",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", subtitle: "Compute", icon: "/skills/aws.svg" },
      { name: "Docker", subtitle: "Containers", icon: "/skills/docker.svg" },
      { name: "GitHub", subtitle: "CI/CD", icon: "/skills/github.svg" },
      { name: "BitBucket", subtitle: "CI/CD", icon: "/skills/bitbucket.svg" },
      { name: "Linux", subtitle: "Shell", icon: "/skills/linux.svg" },
    ],
  },
];

function Pill({ skill }: { skill: SkillPill }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/70 border border-glass-border hover:glow-effect transition-all">
      <div className="w-12 h-12 rounded-xl bg-white border border-border/50 flex items-center justify-center overflow-hidden">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain opacity-90" />
        ) : (
          <span className="text-sm font-semibold text-foreground/90">{skill.name[0]}</span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-base font-semibold text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.subtitle}</span>
      </div>
    </div>
  );
}

const SkillsCapsules = () => {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active) ?? categories[0];
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">Skills</h2>

        {/* Centered, larger tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`px-4 py-2 rounded-full text-base md:text-lg transition-colors ${
                  active === c.key
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'bg-muted/40 text-foreground/90 hover:bg-muted/60 border border-border/50'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {c.key === 'programming' && <Code className="h-4 w-4" />}
                  {c.key === 'ai-ml' && <Brain className="h-4 w-4" />}
                  {c.key === 'data-analytics' && <BarChart3 className="h-4 w-4" />}
                  {c.key === 'database' && <Database className="h-4 w-4" />}
                  {c.key === 'cloud-devops' && <Cloud className="h-4 w-4" />}
                  {c.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Capsule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {current.skills.map((s, idx) => (
            <Pill key={idx} skill={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCapsules;


