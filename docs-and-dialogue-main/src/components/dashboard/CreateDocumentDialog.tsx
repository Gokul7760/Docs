import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, FileText, X, Plus } from "lucide-react";

interface CreateDocumentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateDocumentDialog = ({ open, onOpenChange }: CreateDocumentDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [] as string[]
  });
  const [newTag, setNewTag] = useState("");
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle document creation here (will need Supabase integration)
    console.log("Creating document:", formData);
    onOpenChange(false);
    // Reset form
    setFormData({ title: "", content: "", tags: [] });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const generateAISummary = async () => {
    if (!formData.content.trim()) return;
    
    setIsGeneratingSummary(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI-generated tags based on content
    const aiTags = ["documentation", "important", "team"];
    setFormData(prev => ({
      ...prev,
      tags: [...new Set([...prev.tags, ...aiTags])]
    }));
    
    setIsGeneratingSummary(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gradient-card border-0 shadow-glow">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>Create New Document</span>
          </DialogTitle>
          <DialogDescription>
            Create a new knowledge document with AI-powered tagging and summarization
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Document Title</Label>
            <Input
              id="title"
              placeholder="Enter document title..."
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="transition-smooth focus:shadow-glow"
              required
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="content">Content</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={generateAISummary}
                disabled={!formData.content.trim() || isGeneratingSummary}
                className="text-xs"
              >
                <Sparkles className={`h-3 w-3 mr-1 ${isGeneratingSummary ? 'animate-spin' : ''}`} />
                {isGeneratingSummary ? 'Generating...' : 'AI Enhance'}
              </Button>
            </div>
            <Textarea
              id="content"
              placeholder="Start writing your document content..."
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              className="min-h-[200px] transition-smooth focus:shadow-glow"
              required
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex space-x-2">
              <Input
                id="tags"
                placeholder="Add a tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 transition-smooth"
              />
              <Button type="button" variant="outline" size="sm" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Display Tags */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-destructive transition-smooth"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="gradient-primary shadow-md hover:shadow-lg transition-smooth"
              disabled={!formData.title.trim() || !formData.content.trim()}
            >
              Create Document
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};