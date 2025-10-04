import { Award, BookOpen, Calendar, ExternalLink } from "lucide-react";

const CoursesSection = () => {
  // You can add your courses here - currently showing template examples
  const courses = [
    {
      title: "Deep Learning Specialization",
      provider: "Coursera - Andrew Ng",
      date: "2024",
      status: "Completed",
      skills: ["Neural Networks", "CNN", "RNN", "Transformers"],
      certificateUrl: "#", // Add your certificate link
      highlight: true
    },
    {
      title: "AWS Machine Learning Specialty",
      provider: "Amazon Web Services",
      date: "2024",
      status: "Completed",
      skills: ["SageMaker", "ML Pipelines", "Model Deployment"],
      certificateUrl: "#",
      highlight: true
    },
    {
      title: "Advanced SQL for Data Analytics",
      provider: "Platform Name",
      date: "2023",
      status: "Completed",
      skills: ["Complex Queries", "Window Functions", "Performance Tuning"],
      certificateUrl: "#"
    },
    {
      title: "MLOps Engineering",
      provider: "Platform Name", 
      date: "2024",
      status: "In Progress",
      skills: ["CI/CD for ML", "Model Monitoring", "A/B Testing"],
      certificateUrl: "#"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Courses & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`glass-card p-8 hover:glow-effect transition-all duration-300 group hover:scale-105 ${
                course.highlight ? 'neural-network-bg tech-border' : ''
              }`}
            >
              {course.highlight && (
                <div className="absolute top-4 right-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
              )}
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 glass-effect rounded-lg flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{course.provider}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{course.date}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {course.status}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 data-viz-animation"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {course.certificateUrl !== "#" && (
                  <div className="pt-2">
                    <a 
                      href={course.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Certificate</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            💡 Continuously learning and staying updated with latest technologies in AI/ML
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

