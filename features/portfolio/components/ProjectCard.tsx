import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "../portfolio.types";

interface ProjectCardProps {
  project: PortfolioItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full">
      <div className="site-panel relative flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-white/40">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
          <Image
            src={project.img}
            alt={project.imageAlt ?? project.description.name}
            fill
            className="object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transition-none"
            sizes="(max-width: 768px) calc(100vw - 2.5rem), 560px"
            quality={80}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-site-text">
                {project.description.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-site-muted">
                {project.description.title}
              </p>
            </div>
            <span className="mt-1 text-xs tracking-[0.08em] text-site-subtle uppercase">
              {project.category.replace("-", " ")}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap gap-x-3 gap-y-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="text-xs font-medium text-site-subtle"
              >
                {technology}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-site-subtle">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-xs font-semibold tracking-wide text-site-text uppercase transition-colors hover:text-site-accent"
              >
                Live project
                <ExternalLink className="ml-1.5 h-3 w-3" />
                <span className="sr-only"> of {project.description.name}</span>
              </Link>
            )}
            {!project.links.demo && !project.links.source && (
              <span className="inline-flex min-h-11 items-center text-xs font-semibold tracking-wide text-site-subtle uppercase">
                Preview unavailable
              </span>
            )}
            {project.links.source ? (
              <Link
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-xs font-semibold tracking-wide text-site-text uppercase transition-colors hover:text-site-text"
              >
                Source
                <Github className="ml-1.5 h-3 w-3" />
                <span className="sr-only"> for {project.description.name}</span>
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center text-xs font-semibold tracking-wide text-site-subtle uppercase">
                Source private
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
