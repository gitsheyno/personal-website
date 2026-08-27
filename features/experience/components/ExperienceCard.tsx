import { Calendar, ChevronDown, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "../experience.types";

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
      <div className="absolute top-8 left-[1.05rem] hidden md:block">
        <div
          className="h-2.5 w-2.5 rounded-full border-2 border-[#0b0b0d]"
          style={{ backgroundColor: experience.color }}
        />
      </div>

      <div className="md:ml-14">
        <Card className="overflow-hidden rounded-none border border-white/10 bg-[#101013] transition-colors duration-300 hover:border-white/20">
          <CardContent className="p-6 md:p-8">
            <button
              type="button"
              onClick={onToggle}
              className="group w-full text-left"
              aria-expanded={isExpanded}
              aria-controls={`${experience.id}-details`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm border border-white/10 text-lg font-bold text-white"
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
                              ? "bg-white object-contain p-1.5"
                              : "object-cover"
                          }`}
                        />
                      ) : (
                        <span>{experience.company.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
                        {experience.company}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-400 md:text-base">
                        {experience.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs tracking-wide text-zinc-500 sm:flex-row sm:gap-6">
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
                <span className="mt-1 flex-shrink-0 border border-white/10 p-2 transition-colors group-hover:border-white/25">
                  <ChevronDown
                    className={`h-5 w-5 transition-all duration-500 ease-out group-hover:text-cyan-400 motion-reduce:transition-none ${
                      isExpanded
                        ? "rotate-180 text-cyan-300"
                        : "rotate-0 text-zinc-500"
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
                  className="space-y-8 border-t border-white/10 pt-7"
                >
                  <div>
                    <h4 className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-zinc-400 uppercase">
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
                          className="flex gap-3 text-sm leading-7 text-zinc-300 md:text-[0.95rem]"
                        >
                          <span
                            className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: experience.color }}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] text-zinc-400 uppercase">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="rounded-none border-white/15 bg-transparent px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-white/30 hover:bg-white/5"
                          style={{
                            borderLeftColor: experience.color,
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
