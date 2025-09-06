import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, FileText, Zap, Shield, Search, ArrowRight, Sparkles, Bot, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Automatic summaries, smart tagging, and intelligent search powered by advanced AI"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration with activity feeds and seamless document sharing"
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Find exactly what you need with AI-powered semantic search across all documents"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based access control with admin and user permissions"
    },
    {
      icon: Clock,
      title: "Version History",
      description: "Complete document versioning with timeline and change tracking"
    },
    {
      icon: Bot,
      title: "AI Q&A Assistant",
      description: "Ask questions and get answers from your knowledge base using natural language"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-primary shadow-md">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold">KnowledgeHub</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link to="/register">
                <Button className="gradient-primary shadow-md hover:shadow-lg transition-smooth">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl gradient-primary shadow-glow">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              AI-Powered Knowledge Hub
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your team's knowledge management with intelligent document creation, 
              AI-powered search, and seamless collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="gradient-primary shadow-lg hover:shadow-glow transition-smooth group text-lg px-8">
                  Start Building Knowledge
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything your team needs for effective knowledge management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card shadow-elegant border-0 hover:shadow-glow transition-smooth group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Knowledge Management?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join teams already using AI to organize, search, and collaborate on their knowledge base.
            </p>
            <Link to="/register">
              <Button size="lg" className="gradient-primary shadow-lg hover:shadow-glow transition-smooth group text-lg px-8">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6 bg-card/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 KnowledgeHub. Built with AI-powered intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
