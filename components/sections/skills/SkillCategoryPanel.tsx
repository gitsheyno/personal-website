import { Card, CardContent } from "@/components/ui/card";
import type { SkillCategory } from "@/types";

interface SkillCategoryPanelProps {
  category: SkillCategory;
}

export function SkillCategoryPanel({ category }: SkillCategoryPanelProps) {
  const Icon = category.icon;

  return (
    <Card className="overflow-hidden border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
      <div className={`h-2 bg-gradient-to-r ${category.color}`} />
      <CardContent className="p-6 md:p-8">
        <div className="mb-8 flex items-start gap-4">
          <div
            className={`rounded-xl bg-gradient-to-br p-4 shadow-lg ${category.color}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              {category.name}
            </h3>
            <p className="text-blue-100/70">{category.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {category.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 rounded-lg border border-blue-400/20 bg-blue-500/10 p-4 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/20">
                <div
                  className={`h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <span className="text-sm font-medium text-blue-100 transition-colors group-hover:text-cyan-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
