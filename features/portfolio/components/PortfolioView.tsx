import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/shared/PageSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import type {
  PortfolioCategory,
  PortfolioItem,
  ProjectFilter,
} from "../portfolio.types";

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
        description="A selection of web, mobile, and e-commerce products"
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
              size="default"
              aria-pressed={isActive}
              className={`rounded-none border px-4 transition-colors duration-200 ${
                isActive
                  ? "border-site-accent bg-site-accent text-site-background hover:bg-white"
                  : "site-control bg-transparent text-site-text hover:border-white/60 hover:bg-white/5 hover:text-site-text"
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
        <p className="py-10 text-left text-sm text-site-muted">
          No projects found in this category.
        </p>
      )}
    </PageSection>
  );
}
