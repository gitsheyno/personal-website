import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/shared/PageSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import type { PortfolioCategory, PortfolioItem, ProjectFilter } from "@/types";

interface PortfolioViewProps {
  projects: PortfolioItem[];
  categories: PortfolioCategory[];
  activeCategory: ProjectFilter;
  onCategoryChange: (category: ProjectFilter) => void;
}

export function PortfolioView({
  projects,
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioViewProps) {
  return (
    <PageSection id="works">
      <SectionHeader
        compact
        title="Featured Projects"
        description="A selection of web and mobile applications"
      />

      <div className="mt-12 flex flex-wrap justify-start gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "ghost"}
              onClick={() => onCategoryChange(category.id)}
              size="sm"
              className={`rounded-none border px-4 transition-colors duration-200 ${
                isActive
                  ? "border-cyan-300 bg-cyan-300 text-zinc-950 hover:bg-white"
                  : "border-white/10 bg-transparent text-zinc-400 hover:border-white/25 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="mr-1.5 h-4 w-4" />
              {category.label}
            </Button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="py-10 text-left text-sm text-zinc-500">
          No projects found in this category.
        </p>
      )}
    </PageSection>
  );
}
