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
      <div className="relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#101013] transition-colors duration-300 hover:border-white/25">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
          <Image
            src={project.img}
            alt={project.description.name}
            fill
            className="object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
            sizes="(max-width: 768px) calc(100vw - 2.5rem), 560px"
            quality={80}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                {project.description.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                {project.description.title}
              </p>
            </div>
            <span className="mt-1 text-xs tracking-[0.12em] text-zinc-600 uppercase">
              {project.category.replace("-", " ")}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap gap-x-3 gap-y-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="text-xs font-medium text-zinc-400"
              >
                {technology}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-zinc-600">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="mt-auto flex gap-5 border-t border-white/10 pt-5">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:text-cyan-300"
              >
                Live project
                <ExternalLink className="ml-1.5 h-3 w-3" />
                <span className="sr-only"> of {project.description.name}</span>
              </Link>
            )}
            {project.links.source ? (
              <Link
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold tracking-wide text-zinc-500 uppercase transition-colors hover:text-white"
              >
                Source
                <Github className="ml-1.5 h-3 w-3" />
                <span className="sr-only"> for {project.description.name}</span>
              </Link>
            ) : (
              <span className="text-xs font-semibold tracking-wide text-zinc-700 uppercase">
                Private Repo
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
