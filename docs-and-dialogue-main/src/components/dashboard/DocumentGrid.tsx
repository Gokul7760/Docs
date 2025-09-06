import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Clock, 
  User, 
  MoreHorizontal, 
  Star,
  Share2,
  Eye,
  Bot
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DocumentGridProps {
  searchQuery: string;
  filter: string;
}

const mockDocuments = [
  {
    id: 1,
    title: "API Documentation v2.0",
    content: "Comprehensive guide covering all endpoints, authentication methods, and best practices for our RESTful API...",
    summary: "Complete API reference with authentication, endpoints, and examples for developers.",
    tags: ["api", "documentation", "development", "backend"],
    author: "Sarah Chen",
    lastUpdated: "2 hours ago",
    views: 45,
    isStarred: true,
    isShared: false
  },
  {
    id: 2,
    title: "Product Roadmap Q1 2024",
    content: "Strategic planning document outlining key features, milestones, and deliverables for the first quarter...",
    summary: "Q1 product strategy focusing on user experience improvements and new features.",
    tags: ["product", "roadmap", "planning", "strategy"],
    author: "Mike Johnson",
    lastUpdated: "4 hours ago",
    views: 32,
    isStarred: false,
    isShared: true
  },
  {
    id: 3,
    title: "User Research Findings",
    content: "Analysis of user interviews, surveys, and behavioral data collected over the past quarter...",
    summary: "Key insights from user research showing preferences for mobile-first design and faster load times.",
    tags: ["research", "users", "analytics", "insights"],
    author: "Emma Davis",
    lastUpdated: "6 hours ago",
    views: 28,
    isStarred: true,
    isShared: false
  },
  {
    id: 4,
    title: "Design System Guidelines",
    content: "Comprehensive style guide including colors, typography, components, and usage patterns...",
    summary: "Complete design system with components, colors, and typography guidelines for consistent UI.",
    tags: ["design", "ui", "components", "guidelines"],
    author: "Alex Wilson",
    lastUpdated: "1 day ago",
    views: 67,
    isStarred: false,
    isShared: true
  },
  {
    id: 5,
    title: "Security Best Practices",
    content: "Essential security guidelines for development, deployment, and data handling...",
    summary: "Security protocols covering authentication, data encryption, and vulnerability management.",
    tags: ["security", "development", "protocols", "guidelines"],
    author: "Lisa Park",
    lastUpdated: "2 days ago",
    views: 41,
    isStarred: false,
    isShared: false
  },
  {
    id: 6,
    title: "Team Onboarding Process",
    content: "Step-by-step guide for new team members including setup, tools, and workflows...",
    summary: "Complete onboarding checklist with setup instructions and team introduction process.",
    tags: ["onboarding", "process", "team", "hr"],
    author: "David Kim",
    lastUpdated: "3 days ago",
    views: 23,
    isStarred: true,
    isShared: false
  }
];

export const DocumentGrid = ({ searchQuery, filter }: DocumentGridProps) => {
  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = searchQuery === "" || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    switch (filter) {
      case "recent":
        return matchesSearch && doc.lastUpdated.includes("hours");
      case "shared":
        return matchesSearch && doc.isShared;
      case "archived":
        return false; // No archived docs in mock data
      default:
        return matchesSearch;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredDocuments.map((doc) => (
        <Card key={doc.id} className="gradient-card shadow-elegant border-0 hover:shadow-glow transition-smooth group cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
                  {doc.title}
                </CardTitle>
              </div>
              <div className="flex items-center space-x-1">
                {doc.isStarred && (
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-smooth">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="h-4 w-4 mr-2" />
                      {doc.isStarred ? "Unstar" : "Star"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* AI Summary */}
            <div className="p-3 rounded-lg bg-accent/30 border-l-2 border-primary/50">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-primary">AI Summary</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {doc.summary}
              </p>
            </div>

            {/* Content Preview */}
            <CardDescription className="line-clamp-3">
              {doc.content}
            </CardDescription>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {doc.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {doc.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{doc.tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-2">
                <User className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{doc.author}</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{doc.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{doc.lastUpdated}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};