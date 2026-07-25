import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  compact?: boolean;
}

export function SectionHeader({
  eyebrow,
  icon: Icon,
  title,
  description,
  compact = false,
}: SectionHeaderProps) {
  return (
    <header className={cn("text-center", compact ? "space-y-3" : "space-y-4")}>
      {eyebrow && (
        <Badge
          variant="secondary"
          className="mb-4 border-blue-400/30 bg-blue-500/20 text-blue-100"
        >
          {Icon && <Icon className="mr-2 h-3 w-3" />}
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "font-bold tracking-tight text-white",
          compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mx-auto max-w-2xl text-blue-100/70",
          compact ? "text-sm" : "text-lg"
        )}
      >
        {description}
      </p>
    </header>
  );
}
