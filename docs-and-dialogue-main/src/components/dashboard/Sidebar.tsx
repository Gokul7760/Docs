import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Clock, 
  Users, 
  Settings, 
  Activity,
  Star,
  Archive,
  User
} from "lucide-react";

const recentActivity = [
  { user: "Sarah Chen", action: "updated", doc: "API Documentation", time: "2 hours ago", avatar: "SC" },
  { user: "Mike Johnson", action: "created", doc: "Project Roadmap", time: "4 hours ago", avatar: "MJ" },
  { user: "Emma Davis", action: "commented on", doc: "User Research", time: "6 hours ago", avatar: "ED" },
  { user: "Alex Wilson", action: "shared", doc: "Design System", time: "1 day ago", avatar: "AW" },
  { user: "Lisa Park", action: "archived", doc: "Q1 Report", time: "2 days ago", avatar: "LP" },
];

export const Sidebar = () => {
  return (
    <aside className="w-80 border-r bg-card/30 backdrop-blur-sm min-h-screen p-6">
      {/* Navigation */}
      <nav className="space-y-2 mb-8">
        <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
          <FileText className="h-4 w-4 mr-3" />
          All Documents
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Clock className="h-4 w-4 mr-3" />
          Recent
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Star className="h-4 w-4 mr-3" />
          Favorites
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="h-4 w-4 mr-3" />
          Shared with me
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Archive className="h-4 w-4 mr-3" />
          Archived
        </Button>
        
        <div className="border-t pt-4 mt-4">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-3" />
            Settings
          </Button>
        </div>
      </nav>

      {/* Team Activity Feed */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Team Activity</h3>
        </div>
        
        <div className="space-y-3 scrollbar-thin max-h-96 overflow-y-auto">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-smooth">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                {activity.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-muted-foreground"> {activity.action} </span>
                  <span className="font-medium">{activity.doc}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};