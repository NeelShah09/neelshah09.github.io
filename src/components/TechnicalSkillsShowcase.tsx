import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid, Timeline, Network, Tags, Hexagon } from "lucide-react";

// Import all the different skill components
import SkillsSection from "./SkillsSection";
import InteractiveSkillsRadar from "./InteractiveSkillsRadar";
import TechStackHexagon from "./TechStackHexagon";
import SkillsTimeline from "./SkillsTimeline";
import SkillsNetwork from "./SkillsNetwork";
import SkillsTagCloud from "./SkillsTagCloud";

const TechnicalSkillsShowcase = () => {
  const [currentDesign, setCurrentDesign] = useState(0);

  const skillsDesigns = [
    {
      id: "original-grid",
      name: "Original Grid Layout",
      description: "Clean card-based grid with skill categories and glass morphism effects",
      icon: Grid,
      component: <SkillsSection />
    },
    {
      id: "interactive-radar",
      name: "Interactive Skills Radar",
      description: "Animated progress bars with category filtering and proficiency levels",
      icon: Timeline,
      component: <InteractiveSkillsRadar />
    },
    {
      id: "hexagon-tech-stack",
      name: "Hexagonal Tech Stack",
      description: "Connected hexagonal nodes showing technology relationships and ecosystem",
      icon: Hexagon,
      component: <TechStackHexagon />
    },
    {
      id: "timeline-progression",
      name: "Skills Timeline",
      description: "Chronological progression showing skill development over years",
      icon: Timeline,
      component: <SkillsTimeline />
    },
    {
      id: "network-graph",
      name: "Network Graph",
      description: "Interactive network visualization showing skill connections and dependencies",
      icon: Network,
      component: <SkillsNetwork />
    },
    {
      id: "tag-cloud",
      name: "Minimalist Tag Cloud",
      description: "Clean badge-based layout with filtering, sorting, and detailed tooltips",
      icon: Tags,
      component: <SkillsTagCloud />
    }
  ];

  const nextDesign = () => {
    setCurrentDesign((prev) => (prev + 1) % skillsDesigns.length);
  };

  const prevDesign = () => {
    setCurrentDesign((prev) => (prev - 1 + skillsDesigns.length) % skillsDesigns.length);
  };

  const currentSkillsDesign = skillsDesigns[currentDesign];
  const IconComponent = currentSkillsDesign.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Current Design Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <IconComponent className="h-6 w-6 text-primary" />
                <div>
                  <h1 className="text-xl font-semibold text-primary">
                    {currentSkillsDesign.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {currentSkillsDesign.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {currentDesign + 1} of {skillsDesigns.length}
              </span>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevDesign}
                  className="glass-effect hover:glow-effect"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextDesign}
                  className="glass-effect hover:glow-effect"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Design Selector Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {skillsDesigns.map((design, index) => {
              const DesignIcon = design.icon;
              return (
                <button
                  key={design.id}
                  onClick={() => setCurrentDesign(index)}
                  className={`
                    flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                    transition-all duration-300 hover:scale-105
                    ${
                      currentDesign === index
                        ? "glass-card glow-effect text-primary border-primary/30"
                        : "glass-effect hover:glass-card text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  <DesignIcon className="h-3 w-3 mr-1.5" />
                  {design.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Design Display */}
      <div className="transition-all duration-500 ease-in-out">
        {currentSkillsDesign.component}
      </div>

      {/* Footer with Design Info */}
      <div className="border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Design Features</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                {currentDesign === 0 && (
                  <>
                    <div>• Glass morphism cards</div>
                    <div>• Skill categorization</div>
                    <div>• Hover animations</div>
                  </>
                )}
                {currentDesign === 1 && (
                  <>
                    <div>• Interactive filtering</div>
                    <div>• Animated progress bars</div>
                    <div>• Proficiency levels</div>
                  </>
                )}
                {currentDesign === 2 && (
                  <>
                    <div>• Hexagonal layout</div>
                    <div>• Technology connections</div>
                    <div>• Interactive hover states</div>
                  </>
                )}
                {currentDesign === 3 && (
                  <>
                    <div>• Chronological progression</div>
                    <div>• Milestone tracking</div>
                    <div>• Expandable timeline</div>
                  </>
                )}
                {currentDesign === 4 && (
                  <>
                    <div>• Network visualization</div>
                    <div>• Skill relationships</div>
                    <div>• Interactive connections</div>
                  </>
                )}
                {currentDesign === 5 && (
                  <>
                    <div>• Tag cloud layout</div>
                    <div>• Advanced filtering</div>
                    <div>• Detailed tooltips</div>
                  </>
                )}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Best For</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                {currentDesign === 0 && (
                  <>
                    <div>• Clean presentation</div>
                    <div>• Easy scanning</div>
                    <div>• Professional look</div>
                  </>
                )}
                {currentDesign === 1 && (
                  <>
                    <div>• Detailed exploration</div>
                    <div>• Interactive engagement</div>
                    <div>• Skill assessment</div>
                  </>
                )}
                {currentDesign === 2 && (
                  <>
                    <div>• Tech stack overview</div>
                    <div>• Ecosystem visualization</div>
                    <div>• Modern aesthetics</div>
                  </>
                )}
                {currentDesign === 3 && (
                  <>
                    <div>• Career progression</div>
                    <div>• Storytelling</div>
                    <div>• Growth demonstration</div>
                  </>
                )}
                {currentDesign === 4 && (
                  <>
                    <div>• Complex relationships</div>
                    <div>• Technical depth</div>
                    <div>• System architecture</div>
                  </>
                )}
                {currentDesign === 5 && (
                  <>
                    <div>• Quick overview</div>
                    <div>• Flexible filtering</div>
                    <div>• Comprehensive details</div>
                  </>
                )}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Navigation</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>Use the arrow buttons or click design pills to switch</div>
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronLeft className="h-4 w-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsShowcase;

