import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/types";

interface ProjectCardProps {
  project: PortfolioItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
          <Image
            src={project.img}
            alt={project.description.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col space-y-3 p-5">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {project.description.name}
            </h3>
            <p className="text-xs text-blue-100/70">
              {project.description.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="border-blue-400/30 bg-blue-500/20 text-xs font-medium text-blue-100 hover:bg-blue-500/30"
              >
                {technology}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-500/10 text-xs text-blue-100"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          <div className="mt-auto flex gap-2 pt-2">
            {project.links.demo && (
              <Button
                size="sm"
                className="h-8 flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs hover:from-cyan-400 hover:to-blue-400"
                asChild
              >
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Demo
                  <span className="sr-only">
                    {" "}
                    of {project.description.name}
                  </span>
                </Link>
              </Button>
            )}
            {project.links.source ? (
              <Button
                variant="outline"
                size="sm"
                className="h-8 flex-1 border-blue-400/30 bg-blue-500/10 text-xs text-blue-100 hover:border-blue-400/50 hover:bg-blue-500/20"
                asChild
              >
                <Link
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1 h-3 w-3" />
                  Code
                  <span className="sr-only">
                    {" "}
                    for {project.description.name}
                  </span>
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="h-8 flex-1 cursor-not-allowed border-blue-400/20 bg-blue-500/10 text-xs text-blue-200 opacity-50"
              >
                Private Repo
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
