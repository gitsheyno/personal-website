import { Card, CardContent } from "@/components/ui/card";
import type { SkillCategory } from "../skills.types";

interface SkillCategoryPanelProps {
  category: SkillCategory;
}

export function SkillCategoryPanel({ category }: SkillCategoryPanelProps) {
  const Icon = category.icon;

  return (
    <Card className="overflow-hidden rounded-none border border-white/10 bg-[#101013]">
      <CardContent className="p-6 md:p-10">
        <div className="mb-10 flex items-start gap-5">
          <div className="border border-white/15 p-3 text-cyan-300">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold tracking-[-0.03em] text-white">
              {category.name}
            </h3>
            <p className="text-sm leading-6 text-zinc-400">
              {category.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {category.skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex items-center justify-between border-r border-b border-white/10 p-4 transition-colors hover:bg-white/[0.03]">
                <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {skill.name}
                </span>
                <span className="h-1.5 w-1.5 bg-cyan-300/70" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
