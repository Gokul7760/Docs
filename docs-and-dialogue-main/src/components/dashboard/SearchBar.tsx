import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Search documents..." }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10 transition-smooth focus:shadow-glow"
      />
      <div className="absolute right-3 top-2.5">
        <Sparkles className="h-5 w-5 text-primary animate-pulse" />
      </div>
    </div>
  );
};