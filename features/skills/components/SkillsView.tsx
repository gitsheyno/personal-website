import { TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageSection } from "@/components/shared/PageSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SkillCategoryPanel } from "./SkillCategoryPanel";
import type { SkillCategory } from "../skills.types";

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
        className="mt-10 w-full md:mt-12"
      >
        <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-0 border-b border-white/20 bg-transparent p-0">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="min-h-11 rounded-none border-0 border-b-2 border-transparent px-4 py-3 text-site-muted shadow-none transition-colors hover:text-site-text data-[state=active]:border-site-accent data-[state=active]:bg-transparent data-[state=active]:text-site-text data-[state=active]:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
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
    </PageSection>
  );
}
