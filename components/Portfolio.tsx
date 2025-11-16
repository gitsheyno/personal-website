'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  color: string;
  img: string;
  description: {
    name: string;
    title: string;
  };
  technologies: string[];
  link: string[];
  category: 'web-app' | 'mobile-app' | 'package' | 'service';
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'knime',
    color: 'from-blue-500 to-cyan-500',
    description: {
      name: 'KNIME',
      title: 'Open-source analytics platform',
    },
    img: '/knime.png',
    technologies: ['VueJS', 'Nuxt3', 'TS', 'SCSS'],
    link: [
      'https://www.knime.com/downloads',
      'https://github.com/orgs/knime/repositories',
    ],
    category: 'web-app',
  },
  {
    id: 'low-carb',
    color: 'from-green-500 to-emerald-500',
    description: {
      name: 'Low-Carb Recipes',
      title: 'Light, guilt-free recipes',
    },
    img: '/image.png',
    technologies: ['React', 'NodeJS', 'TailwindCSS', 'SQLITE'],
    link: [
      'https://low-carb-diet-tan.vercel.app/',
      'https://github.com/gitsheyno/low-carb-diet',
    ],
    category: 'web-app',
  },
  {
    id: 'LMOS',
    color: 'from-orange-500 to-red-500',
    description: {
      name: 'last-mile-os',
      title: 'Organize your events effortlessly',
    },
    img: '/lmos.png',
    technologies: [
      'ReactJS',
      'TS',
      'NodeJS',
      'Docker',
      'NextJS',
      'TailwindCSS',
    ],
    link: ['https://lastmile-os.com/'],
    category: 'web-app',
  },
  {
    id: 'DriverBuddy',
    color: 'from-indigo-500 to-blue-500',
    description: {
      name: 'DriverBuddy',
      title: 'City-Logistic',
    },
    img: '/driver.png',
    technologies: ['React-Native', 'NodeJS', 'TS', 'Redux-Toolkit'],
    link: ['https://pickshare.app/'],
    category: 'mobile-app',
  },

  {
    id: 'FitMentor-AI',
    color: 'from-lime-500 to-green-500',
    description: {
      name: 'FitMentor AI',
      title: 'AI assistence as a Fitness Coach',
    },
    img: '/gym.png',
    technologies: ['NextJS', 'PostgreSQL', 'Typescript', 'TailwindCSS'],
    link: ['https://coach-ai-khaki.vercel.app/'],
    category: 'web-app',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Globe },
  { id: 'web-app', label: 'Web Apps', icon: Globe },
  { id: 'mobile-app', label: 'Mobile Apps', icon: Smartphone },
] as const;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8" id="works">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-blue-100/70 max-w-xl mx-auto">
            A selection of web and mobile applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'ghost'}
                onClick={() => setActiveCategory(category.id)}
                size="sm"
                className={`transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                    : 'text-blue-100 hover:bg-blue-500/20 hover:text-blue-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-1.5" />
                {category.label}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group h-full"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="relative h-full flex flex-col bg-blue-500/10 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-400/30 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Image
                    src={project.img}
                    alt={project.description.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex-1 p-5 flex flex-col space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {project.description.name}
                    </h3>
                    <p className="text-xs text-blue-100/70">
                      {project.description.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium bg-blue-500/20 text-blue-100 border-blue-400/30 hover:bg-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-blue-500/10 text-blue-100 border-blue-400/30"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.link[0] && (
                      <Button
                        variant="default"
                        size="sm"
                        className="h-8 text-xs flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                        asChild
                      >
                        <Link
                          href={project.link[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.link[1] ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs flex-1 bg-blue-500/10 text-blue-100 border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-400/50"
                        asChild
                      >
                        <Link
                          href={project.link[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="h-8 text-xs flex-1 bg-blue-500/10 text-blue-200 border-blue-400/20 cursor-not-allowed opacity-50"
                      >
                        Private Repo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-sm text-blue-100/70">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
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
