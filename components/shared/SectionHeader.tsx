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
        <div className="col-span-full flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          {Icon && <Icon className="h-4 w-4" />}
          <span>{eyebrow}</span>
          <span className="h-px w-10 bg-cyan-300/50" />
        </div>
      )}
      <h2
        className={cn(
          "max-w-3xl font-semibold tracking-[-0.04em] text-white",
          compact ? "text-4xl md:text-5xl" : "text-4xl md:text-6xl"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "max-w-xl leading-7 text-zinc-400 md:justify-self-end",
          compact ? "text-sm" : "text-base md:text-lg"
        )}
      >
        {description}
      </p>
    </header>
  );
}
