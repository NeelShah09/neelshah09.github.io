import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      toast({
        title: "Email service not configured",
        description: "Add VITE_FORMSPREE_ENDPOINT to your .env with your Formspree form URL.",
      });
      return;
    }
    if (!form.email || !form.message) {
      toast({ title: "Please fill required fields", description: "Email and message are required." });
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        toast({ title: "Message sent", description: "Thanks! I'll get back to you soon." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Failed to send", description: "Please try again later or email me directly." });
      }
    } catch (err) {
      toast({ title: "Network error", description: "Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <section id="contact" className="py-20 relative">
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold subsection-heading mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities in data science, 
                machine learning, and AI. Whether you're looking for a dedicated team member 
                or want to collaborate on exciting projects, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:shahneelsachin@gmail.com"
                  className="block"
                  aria-label="Email Neel"
                >
                  <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">shahneelsachin@gmail.com</span>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+1 (930) 215-9133</span>
                </div>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">United States</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6">
                <a
                  href="https://linkedin.com/in/neel-shah1901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-effect hover:glow-effect transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://github.com/NeelShah09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-effect hover:glow-effect transition"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="mailto:shahneelsachin@gmail.com"
                  className="p-2 rounded-lg glass-effect hover:glow-effect transition"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
            
            {/* Moved opportunities section below Experience */}
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-semibold subsection-heading mb-4">Send a Message</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input 
                    className="glass-effect border-primary/30 focus:border-primary/50" 
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input 
                    type="email"
                    className="glass-effect border-primary/30 focus:border-primary/50" 
                    placeholder="your.email@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  className="glass-effect border-primary/30 focus:border-primary/50" 
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  className="glass-effect border-primary/30 focus:border-primary/50 min-h-[120px] resize-none" 
                  placeholder="Tell me about your project or opportunity..."
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: (e.target as HTMLTextAreaElement).value }))}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full glass-effect hover:glow-effect transition-all duration-300 group"
                disabled={submitting}
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;