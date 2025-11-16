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
    location: 'Dortmund',
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
    period: 'JANUARY 2024 - FEBRUARY 2025',
    color: '#f7a440',
    achievements: [
      'Led migration from Vue2 to Vue3 and TypeScript, improving application performance by 15% and modernizing the overall frontend architecture.',
      'Collaborated closely with a cross-functional Scrum team—including Product Owners, Designers, and Backend Engineers—to deliver iterative improvements, ensure seamless user experiences, and actively contributed through retrospective meetings and Pair Programming sessions.',
      'Implemented rigorous automated testing with 98% Jest coverage integrated into CI/CD pipelines, reducing critical bugs by 35% and significantly increasing deployment confidence.',
      'Led technical development of 4 KNIME Analytics Platform widgets using Vue3, NuxtJS, TypeScript, SCSS, and Java Spring Framework (Desktop/Eclipse), enhancing search functionality, optimizing performance, and improving the design system.',
      'Designed, implemented, and maintained a multi-file upload widget with drag-and-drop support, built from scratch and translated from Figma into a pixel-perfect Vue3 + Pinia implementation, shared across open-source and SaaS platforms.',
      'Integrated an LLM-powered chatbot with real-time text streaming to enhance in-app support, improving user guidance and overall product usability.',
    ],
    technologies: [
      'Vue.JS',
      'Nuxt.JS',
      'TypeScript',
      'Jest',
      'Monorepo',
      'Java',
      'Component Design',
      'LLM',
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
      'Owned the full lifecycle of multiple user-centric, mobile-first web applications, including SPAs and SSR/CSR platforms built with ReactJS and NextJS, with a strong focus on accessibility, performance, and scalable architecture.',
      'Applied Clean Coding principles and Test-Driven Development practices, reducing bug reports by 17% and decreasing customer-reported issues by 20% within the first quarter.',
      'Implemented automated testing pipelines using Playwright and Jest for both unit and end-to-end coverage, fully integrated into CI/CD workflows to ensure reliable deployments and maintain high code quality.',
      'Owned technical decisions for reusable, scalable UI components using ReactJS, TypeScript, TailwindCSS, and Framer Motion, applying state-management best practices and design patterns such as Compound Components with a strong focus on UI/UX.',
      'Designed and integrated multiple API paradigms including REST, GraphQL, and tRPC using ReactJS and NodeJS, enabling efficient, end-to-end client–server communication and improving data flow consistency across applications.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'REST APIs',
      'State-Management',
      'Git',
      'Vitest',
      'Docker',
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>('pickshare');

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-4" id="experiences">
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
