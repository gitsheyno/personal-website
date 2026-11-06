import type { LucideIcon } from "lucide-react";
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
    <header
      className={cn(
        "grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,30rem)] md:items-end",
        compact && "md:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)]"
      )}
    >
      {eyebrow && (
        <div className="col-span-full flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-site-accent uppercase">
          {Icon && <Icon className="h-4 w-4" />}
          <span>{eyebrow}</span>
          <span className="h-px w-10 bg-[rgb(var(--site-accent-rgb)/0.5)]" />
        </div>
      )}
      <h2
        className={cn(
          "max-w-3xl font-semibold tracking-[-0.04em] text-site-text",
          compact ? "text-3xl leading-tight sm:text-4xl" : "text-3xl leading-tight sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "max-w-xl text-base leading-7 text-site-muted md:justify-self-end"
        )}
      >
        {description}
      </p>
    </header>
  );
}
