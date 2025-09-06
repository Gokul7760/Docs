import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DocumentGrid } from "./DocumentGrid";
import { SearchBar } from "./SearchBar";
import { CreateDocumentDialog } from "./CreateDocumentDialog";
import { Button } from "@/components/ui/button";
import { Plus, Brain, Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-primary shadow-md">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold">KnowledgeHub</h1>
            </div>
            
            {/* Quick Stats */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <Badge variant="secondary" className="text-xs">
                24 Documents
              </Badge>
              <Badge variant="outline" className="text-xs">
                8 Team Members
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="hidden md:block w-80">
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery}
                placeholder="Ask AI about your documents..." 
              />
            </div>

            {/* Create Button */}
            <Button 
              onClick={() => setShowCreateDialog(true)}
              className="gradient-primary shadow-md hover:shadow-lg transition-smooth group"
            >
              <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-smooth" />
              New Document
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-6 pb-4">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            placeholder="Search or ask AI..." 
          />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold">Documents</h2>
              <div className="flex items-center space-x-2">
                {["all", "recent", "shared", "archived"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className="capitalize transition-smooth"
                  >
                    {filter === "all" && <Search className="h-3 w-3 mr-1" />}
                    {filter}
                  </Button>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Document Grid */}
          <DocumentGrid searchQuery={searchQuery} filter={selectedFilter} />
        </main>
      </div>

      {/* Create Document Dialog */}
      <CreateDocumentDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog} 
      />
    </div>
  );
};

export default Dashboard;