import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities in data science, 
                machine learning, and AI. Whether you're looking for a dedicated team member 
                or want to collaborate on exciting projects, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">neel.shah@email.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Available for Remote & On-site</span>
                </div>
              </div>
            </div>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-primary">Open to Opportunities</CardTitle>
                <CardDescription>Currently seeking positions in:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <span className="px-3 py-2 text-sm bg-primary/20 text-primary rounded-lg text-center">Data Scientist</span>
                  <span className="px-3 py-2 text-sm bg-primary/20 text-primary rounded-lg text-center">ML Engineer</span>
                  <span className="px-3 py-2 text-sm bg-primary/20 text-primary rounded-lg text-center">AI Engineer</span>
                  <span className="px-3 py-2 text-sm bg-primary/20 text-primary rounded-lg text-center">Data Analyst</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    className="glass-effect border-primary/30 focus:border-primary/50" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email"
                    className="glass-effect border-primary/30 focus:border-primary/50" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  className="glass-effect border-primary/30 focus:border-primary/50" 
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  className="glass-effect border-primary/30 focus:border-primary/50 min-h-[120px] resize-none" 
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full glass-effect hover:glow-effect transition-all duration-300 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;