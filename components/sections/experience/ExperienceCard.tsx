import { Calendar, ChevronDown, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ExperienceCard({
  experience,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  return (
    <article className="relative">
      <div className="absolute top-6 left-0 hidden md:block">
        <div
          className="h-4 w-4 rounded-full border-4 border-blue-950 ring-4 ring-cyan-400/30"
          style={{ backgroundColor: experience.color }}
        />
      </div>

      <div className="md:ml-24">
        <Card className="overflow-hidden border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
          <div
            className="h-1 w-full"
            style={{ backgroundColor: experience.color }}
          />
          <CardContent className="p-6 md:p-8">
            <button
              type="button"
              onClick={onToggle}
              className="group w-full text-left"
              aria-expanded={isExpanded}
              aria-controls={`${experience.id}-details`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-lg"
                      style={{ backgroundColor: experience.color }}
                    >
                      {experience.img ? (
                        <Image
                          src={experience.img}
                          width={100}
                          height={100}
                          alt={`${experience.company} logo`}
                          className={`h-full w-full rounded-lg ${
                            experience.imageFit === "contain"
                              ? "bg-white object-contain p-1"
                              : "object-cover"
                          }`}
                        />
                      ) : (
                        <span>{experience.company.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
                        {experience.company}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 md:text-base">
                        {experience.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-blue-100/70 sm:flex-row sm:gap-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
                <span className="mt-2 flex-shrink-0 rounded-lg bg-blue-500/20 p-2 transition-colors group-hover:bg-cyan-400/20">
                  <ChevronDown
                    className={`h-5 w-5 transition-all duration-500 ease-out group-hover:text-cyan-400 motion-reduce:transition-none ${
                      isExpanded
                        ? "rotate-180 text-cyan-400"
                        : "rotate-0 text-blue-100/70"
                    }`}
                  />
                </span>
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out motion-reduce:transition-none ${
                isExpanded
                  ? "mt-6 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={!isExpanded}
            >
              <div className="overflow-hidden">
                <div
                  id={`${experience.id}-details`}
                  className="space-y-6 border-t border-blue-400/30 pt-6"
                >
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white md:text-base">
                      <Star
                        className="h-4 w-4"
                        style={{ color: experience.color }}
                      />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm text-blue-100/80 md:text-base"
                        >
                          <span
                            className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: experience.color }}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold text-white md:text-base">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="border-blue-400/30 bg-blue-500/10 text-blue-100 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-md"
                          style={{
                            borderColor: experience.color,
                            color: experience.color,
                          }}
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
