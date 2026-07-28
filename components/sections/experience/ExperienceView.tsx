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
        <div className="absolute top-0 bottom-0 left-5 hidden w-px bg-white/10 md:block" />
        <div className="space-y-3">
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

      <div className="mt-20 border-t border-white/10 pt-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
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
    <div className={`bg-[#0b0b0d] p-6 text-left md:p-8 ${className ?? ""}`}>
      <dd className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
        {value}
      </dd>
      <dt className="text-xs tracking-[0.12em] text-zinc-500 uppercase">
        {label}
      </dt>
    </div>
  );
}
