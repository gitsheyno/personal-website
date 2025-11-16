'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Code2,
  Server,
  Cloud,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Bot,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    description: 'Building beautiful, responsive user interfaces',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, category: 'frontend' },
      { name: 'Next.js', level: 95, category: 'frontend' },
      { name: 'TypeScript', level: 90, category: 'frontend' },
      { name: 'Javascript', level: 90, category: 'frontend' },
      { name: 'State-Management', level: 80, category: 'frontend' },
      { name: 'Vue.js', level: 80, category: 'frontend' },
      { name: 'Authentication', level: 85, category: 'frontend' },
      { name: 'Nuxt.js', level: 70, category: 'frontend' },
      { name: 'Tailwind CSS', level: 92, category: 'frontend' },
      { name: 'HTML/CSS', level: 95, category: 'frontend' },
      { name: 'Responsive-Design', level: 90, category: 'frontend' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    description: 'Scalable server-side architecture & APIs',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90, category: 'backend' },
      { name: 'API Design', level: 80, category: 'backend' },
      { name: 'Authentication', level: 70, category: 'backend' },
      { name: 'PostgreSQL', level: 70, category: 'backend' },
      { name: 'REST APIs', level: 90, category: 'backend' },
      { name: 'GraphQL', level: 70, category: 'backend' },
      { name: 'MongoDB', level: 70, category: 'backend' },
    ],
  },
  {
    id: 'ai',
    name: 'AI Driven',
    icon: <Bot className="w-5 h-5" />,
    description:
      'Building intelligent apps with LLMs, agents, and vector workflows',
    color: 'from-purple-600 to-indigo-600',
    skills: [
      { name: 'LLMs', level: 80, category: 'ai' },
      { name: 'LangChain', level: 70, category: 'ai' },
      { name: 'Vercel AI SDK', level: 70, category: 'ai' },
      {
        name: 'Vector Databases (Pinecone / Redis / pgvector)',
        level: 70,
        category: 'ai',
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Infrastructure, deployment & monitoring',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Docker', level: 70, category: 'devops' },
      { name: 'AWS', level: 60, category: 'devops' },
      { name: 'CI/CD', level: 80, category: 'devops' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Dev',
    icon: <Smartphone className="w-5 h-5" />,
    description: 'Cross-platform mobile applications',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React Native', level: 80, category: 'mobile' },
      { name: 'Mobile UI/UX', level: 85, category: 'mobile' },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    icon: <CheckCircle2 className="w-5 h-5" />,
    description:
      'Unit testing, component testing, and end-to-end quality assurance',
    color: 'from-yellow-500 to-amber-600',
    skills: [
      { name: 'Vitest', level: 80, category: 'testing' },
      { name: 'Jest', level: 80, category: 'testing' },
      { name: 'React Testing Library', level: 85, category: 'testing' },
      { name: 'Cypress (E2E)', level: 70, category: 'testing' },
      { name: 'Playwright (E2E)', level: 70, category: 'testing' },
      { name: 'Component Testing', level: 90, category: 'testing' },
      { name: 'Unit Testing', level: 80, category: 'testing' },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section>
      <div className="max-w-7xl mx-auto" id="skills">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400/30"
          >
            <TrendingUp className="w-3 h-3 mr-2" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technical Proficiency
          </h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different
            domains
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto gap-2 bg-transparent p-0 mb-8">
            {skillsData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:shadow-lg border-2 border-blue-400/20 data-[state=active]:border-blue-400/50 h-auto py-4 px-4 transition-all duration-300 text-blue-100 hover:bg-blue-500/10"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    {category.icon}
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="font-semibold text-sm">{category.name}</div>
                  </div>
                  <div className="sm:hidden font-semibold text-sm">
                    {category.name}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillsData.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 space-y-6"
            >
              <Card className="border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <CardContent className="p-6 md:p-8">
                  {/* Category header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {category.name}
                      </h3>
                      <p className="text-blue-100/70">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="grid gap-6">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${
                            index * 0.1
                          }s both`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2
                              className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                            />
                            <span className="font-medium text-sm md:text-base text-blue-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-blue-200/70">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative h-3 bg-blue-900/30 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{
                              width: loaded ? `${skill.level}%` : '0%',
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skill badges */}
                  <div className="mt-8 pt-6 border-t border-blue-400/30">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="cursor-default bg-blue-500/10 text-blue-100 border-blue-400/30 hover:bg-blue-500/20"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Summary cards: technologies count */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">
          {skillsData.map((category) => (
            <Card
              key={category.id}
              className="border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer group"
              onClick={() => setActiveTab(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-3 rounded-full bg-gradient-to-br ${category.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <div className="text-2xl font-bold mb-1 text-white">
                  {category.skills.length}
                </div>
                <div className="text-sm text-blue-200/70">Technologies</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
