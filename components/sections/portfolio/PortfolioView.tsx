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
    <PageSection id="works" contentClassName="max-w-6xl">
      <SectionHeader
        compact
        title="Featured Projects"
        description="A selection of web and mobile applications"
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "ghost"}
              onClick={() => onCategoryChange(category.id)}
              size="sm"
              className={`transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                  : "text-blue-100 hover:bg-blue-500/20 hover:text-blue-50"
              }`}
            >
              <Icon className="mr-1.5 h-4 w-4" />
              {category.label}
            </Button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="py-10 text-center text-sm text-blue-100/70">
          No projects found in this category.
        </p>
      )}
    </PageSection>
  );
}
