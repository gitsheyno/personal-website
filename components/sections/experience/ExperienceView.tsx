import { Briefcase } from "lucide-react";
import { PageSection } from "@/components/shared/PageSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import type { Experience } from "@/types";

interface ExperienceViewProps {
  experiences: Experience[];
  expandedId: string | null;
  onToggle: (id: string) => void;
}

export function ExperienceView({
  experiences,
  expandedId,
  onToggle,
}: ExperienceViewProps) {
  const achievementCount = experiences.reduce(
    (sum, experience) => sum + experience.achievements.length,
    0
  );
  const technologyCount = experiences.reduce(
    (sum, experience) => sum + experience.technologies.length,
    0
  );

  return (
    <PageSection id="experiences">
      <SectionHeader
        eyebrow="Work Experience"
        icon={Briefcase}
        title="Professional Journey"
        description="A timeline of my career growth and key contributions at leading companies"
      />

      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-8 hidden w-1 bg-gradient-to-b from-cyan-400 via-blue-400/50 to-transparent md:block" />
        <div className="space-y-6 md:space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isExpanded={expandedId === experience.id}
              onToggle={() => onToggle(experience.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-blue-400/30 pt-12">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <Stat value={`${experiences.length}+`} label="Companies" />
          <Stat value={`${achievementCount}+`} label="Achievements" />
          <Stat
            value={`${technologyCount}+`}
            label="Technologies"
            className="col-span-2 md:col-span-1"
          />
        </dl>
      </div>
    </PageSection>
  );
}

function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className ?? ""}`}>
      <dd className="mb-2 text-3xl font-bold text-cyan-400 md:text-4xl">
        {value}
      </dd>
      <dt className="text-sm text-blue-100/70">{label}</dt>
    </div>
  );
}
