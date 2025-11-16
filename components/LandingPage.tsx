'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
} from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  color: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'pickshare',
    company: 'Pickshare GmbH',
    location: 'Germany',
    position: 'Frontend Engineer',
    period: 'SEPTEMBER 2025 - PRESENT',
    color: '#4fa6ff',
    achievements: [
      'Improved KPI accuracy by redesigning delivery reliability metrics to include failed and cancelled tours, resulting in a more realistic view of service performance and a 20% increase in KPI accuracy using ReactJS and TypeScript.',
      'Enhanced reporting dashboard by ensuring data consistency, accurate visualizations using charts, and alignment with daily operational reports using TypeScript, ReactJS/Native, and Recharts, while taking key architectural decisions.',
      'Implemented secure authentication and session handling using TypeScript, NextJS, Shadcn, NodeJS, and MongoDB, managing JWT tokens for the new version of the product.',
      'Refactored legacy form components in ReactJS and Redux Toolkit with TypeScript-based validation using Zod and Formik, improving performance, reducing unnecessary re-renders, and enhancing overall user experience.',
      'Set up Docker Compose and Nginx for secure, reproducible deployment of the Pickshare platform.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Recharts',
      'Zod',
      'Formik',
      'Redux Toolkit',
      'Node.js',
      'MongoDB',
      'Docker',
      'Nginx',
      'Shadcn UI',
    ],
  },
  {
    id: 'knime',
    company: 'KNIME',
    location: 'BERLIN',
    position: 'Frontend Developer',
    period: 'JANUARY 2024 - DECEMBER 2024',
    color: '#f7a440',
    achievements: [
      'Led migration from Options API to Composition API and TypeScript, improving performance by 15%.',
      'Migrated all KNIME packages to a monorepo ecosystem in collaboration with frontend developers, resulting in a 25% performance boost.',
      'Introduced and maintained 5 reusable components using VueJS and Typescript deployed across all projects to enhance development.',
      'Implemented rigorous testing protocols using Jest for components, attaining 98% code coverage and ensuring system reliability, which led to a 35% decrease in critical bugs.',
      'Restructured 4 KNIME widgets, adding search functionality, abstraction, TypeScript and built a multi-file upload widget from scratch, shared across open-source and business hub platforms, leading to 10% improved system performance and 20% increased data accuracy.',
      'Established a suite of utility functions to eliminate code duplication and enhance component abstraction, achieving an 8% reduction in redundant code and significantly improving maintainability.',
    ],
    technologies: [
      'Vue.js',
      'TypeScript',
      'Jest',
      'Monorepo',
      'Component Design',
    ],
  },
  {
    id: 'programmers-house',
    company: 'Programmers House',
    location: 'Tehran',
    position: 'Frontend Developer',
    period: 'APRIL 2020 - AUGUST 2022',
    color: '#5ba374',
    achievements: [
      'Applied rigorous Clean Coding standards and Test-Driven Development practices, cutting bug reports by 17% and decreasing customer-reported issues by 20% within the first quarter of implementation.',
      'Developed 4 websites using Next.js, leveraging its server-side rendering capabilities.',
      'Boosted mobile user engagement by 35% by ensuring mobile responsiveness of web applications.',
      'Maintained 100% code integrity across multiple projects by managing source code versioning with Git.',
      'Engineered React Router migration to v6+, Achieved a 15% reduction in bundle size and resolved path-matching issues, improving overall application performance.',
      'Leveraged workflow automation and build processes with Gulp, Webpack, and GitHub Actions to streamline development and enhance efficiency.',
      'Utilized GraphQL to optimize resulted in boosting overall web applications performance by 10%.',
      'Developed RESTful API integration within React.js Library and Typescript and NextJS to facilitate seamless data exchange collaborating with backend Team.',
      'Led successful migration of state management, Transitioned from Redux toolkit to Tanstack Query, resulting in a 12% increase in code maintainability and readability.',
      'Collaborated seamlessly alongside cross-functional teams including back-end engineers and design professionals.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'TanStack Query',
      'Git',
      'Webpack',
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>('pickshare');

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400/30"
          >
            <Briefcase className="w-3 h-3 mr-2" />
            Work Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Professional Journey
          </h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            A timeline of my career growth and key contributions at leading
            companies
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400/50 to-transparent hidden md:block" />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="hidden md:block absolute left-0 top-6">
                  <div
                    className="w-4 h-4 rounded-full border-4 border-blue-950 ring-4 ring-cyan-400/30"
                    style={{ backgroundColor: experience.color }}
                  />
                </div>

                <div className="md:ml-24">
                  <button
                    onClick={() => toggleExpanded(experience.id)}
                    className="w-full text-left group"
                  >
                    <Card className="border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm overflow-hidden hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: experience.color }}
                      />

                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
                                style={{ backgroundColor: experience.color }}
                              >
                                {experience.company.charAt(0)}
                              </div>
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                  {experience.company}
                                </h3>
                                <p className="text-cyan-400 font-semibold text-sm md:text-base">
                                  {experience.position}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-blue-100/70">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex-shrink-0 mt-2">
                            <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-cyan-400/20 transition-colors">
                              {expandedId === experience.id ? (
                                <ChevronUp className="w-5 h-5 text-cyan-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-blue-100/70 group-hover:text-cyan-400 transition-colors" />
                              )}
                            </div>
                          </div>
                        </div>

                        {expandedId === experience.id && (
                          <div
                            className="mt-6 pt-6 border-t border-blue-400/30 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300"
                            style={{
                              animation: 'expandDown 0.3s ease-out',
                            }}
                          >
                            <div>
                              <h4 className="font-semibold text-sm md:text-base mb-4 flex items-center gap-2 text-white">
                                <Star
                                  className="w-4 h-4"
                                  style={{ color: experience.color }}
                                />
                                Key Achievements
                              </h4>
                              <ul className="space-y-3">
                                {experience.achievements.map(
                                  (achievement, idx) => (
                                    <li
                                      key={idx}
                                      className="flex gap-3 text-sm md:text-base text-blue-100/80"
                                      style={{
                                        animation: `fadeInUp 0.4s ease-out ${
                                          idx * 0.05
                                        }s both`,
                                      }}
                                    >
                                      <span
                                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                                        style={{
                                          backgroundColor: experience.color,
                                        }}
                                      />
                                      <span>{achievement}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-sm md:text-base mb-4 text-white">
                                Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="hover:shadow-md hover:bg-blue-500/20 transition-all duration-300 bg-blue-500/10 text-blue-100 border-blue-400/30"
                                    style={{
                                      borderColor: experience.color,
                                      color: experience.color,
                                    }}
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-blue-400/30">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {experiences.length}+
              </div>
              <div className="text-sm text-blue-100/70">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {experiences.reduce(
                  (sum, exp) => sum + exp.achievements.length,
                  0
                )}
                +
              </div>
              <div className="text-sm text-blue-100/70">Achievements</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {experiences.reduce(
                  (sum, exp) => sum + exp.technologies.length,
                  0
                )}
                +
              </div>
              <div className="text-sm text-blue-100/70">Technologies</div>
            </div>
          </div>
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

        @keyframes expandDown {
          from {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
          }
          to {
            opacity: 1;
            max-height: 1000px;
            overflow: visible;
          }
        }
      `}</style>
    </section>
  );
}
