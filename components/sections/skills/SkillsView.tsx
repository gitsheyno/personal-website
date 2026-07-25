import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageSection } from "@/components/shared/PageSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SkillCategoryPanel } from "./SkillCategoryPanel";
import type { SkillCategory } from "@/types";

interface SkillsViewProps {
  categories: SkillCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function SkillsView({
  categories,
  activeCategory,
  onCategoryChange,
}: SkillsViewProps) {
  return (
    <PageSection id="skills">
      <SectionHeader
        eyebrow="Skills & Expertise"
        icon={TrendingUp}
        title="Technical Proficiency"
        description="A comprehensive overview of my technical skills across different domains"
      />

      <Tabs
        value={activeCategory}
        onValueChange={onCategoryChange}
        className="mt-16 w-full"
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 md:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="h-auto border-2 border-blue-400/20 px-4 py-4 text-blue-100 transition-all duration-300 hover:bg-blue-500/10 data-[state=active]:border-blue-400/50 data-[state=active]:bg-blue-500/20 data-[state=active]:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-lg bg-gradient-to-br p-2 ${category.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{category.name}</span>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <SkillCategoryPanel category={category} />
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              aria-label={`Show ${category.name} skills`}
              className="text-left"
            >
              <Card className="group cursor-pointer border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20">
                <CardContent className="p-6 text-center">
                  <div
                    className={`mb-3 inline-flex rounded-full bg-gradient-to-br p-3 transition-transform duration-300 group-hover:scale-110 ${category.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mb-1 text-2xl font-bold text-white">
                    {category.skills.length}
                  </div>
                  <div className="text-sm text-blue-200/70">Technologies</div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </PageSection>
  );
}
