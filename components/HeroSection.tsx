'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface HeroConfig {
  greeting: string;
  name: string;
  nameGradient: string;
  roles: string[];
  description: string;
  yearsExperience: string;
  currentCompany: string;
  currentCompanyUrl: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const heroConfig: HeroConfig = {
  greeting: 'Welcome to my portfolio',
  name: 'Shayan',
  nameGradient: 'from-blue-600 to-purple-600',
  roles: ['Frontend Engineer', 'FullStack Developer', 'Problem Solver'],
  description:
    'A seasoned developer with expertise in both frontend and backend technologies. I craft responsive, user-centered digital experiences with clean, efficient code.',
  yearsExperience: '3.5',
  currentCompany: 'Pickshare GmbH',
  currentCompanyUrl: 'https://pickshare.app/',
  socialLinks: {
    github: 'https://github.com/gitsheyno',
    linkedin: 'https://de.linkedin.com/in/shayan-heidary',
    email: 'mailto:your-email@example.com',
  },
};

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % heroConfig.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div />

      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen flex-col items-center justify-center pt-24 pb-20">
            <div
              className={`max-w-5xl text-center transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100">
                  {heroConfig.greeting}
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {heroConfig.name}
                </span>
              </h1>

              <div className="mb-8 h-12 sm:h-14 md:h-16">
                <p className="text-2xl font-semibold text-blue-200 sm:text-3xl md:text-4xl">
                  {heroConfig.roles.map((role, index) => (
                    <span
                      key={role}
                      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                        index === currentRoleIndex
                          ? 'translate-y-0 opacity-100'
                          : index < currentRoleIndex
                          ? '-translate-y-8 opacity-0'
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </p>
              </div>

              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-100/80 sm:text-xl">
                {heroConfig.description}
              </p>

              <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 rounded-lg bg-blue-500/20 px-4 py-2 shadow-sm backdrop-blur-sm border border-blue-400/30">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="font-medium text-blue-100">
                    {heroConfig.yearsExperience}+ years experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-200/70">Currently at</span>
                  <a
                    href={heroConfig.currentCompanyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    {heroConfig.currentCompany}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <div className="flex gap-3">
                  {heroConfig.socialLinks.github && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="group h-12 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-400/50 hover:bg-blue-500/20"
                      asChild
                    >
                      <a
                        href={heroConfig.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-blue-100 transition-transform group-hover:rotate-12" />
                      </a>
                    </Button>
                  )}
                  {heroConfig.socialLinks.linkedin && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="group h-12 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-400/50 hover:bg-blue-500/20"
                      asChild
                    >
                      <a
                        href={heroConfig.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 text-blue-100 transition-transform group-hover:rotate-12" />
                      </a>
                    </Button>
                  )}
                  {heroConfig.socialLinks.email && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="group h-12 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-400/50 hover:bg-blue-500/20"
                      asChild
                    >
                      <a href={heroConfig.socialLinks.email}>
                        <Mail className="h-5 w-5 text-blue-100 transition-transform group-hover:rotate-12" />
                      </a>
                    </Button>
                  )}
                </div>

                <Button
                  size="lg"
                  className="group h-12 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:from-cyan-400 hover:to-blue-400"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="mt-20">
                <div className="flex items-center justify-center gap-8 opacity-60">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/50" />
                  <p className="text-sm text-blue-200/70">Scroll to explore</p>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400/50" />
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="h-8 w-5 animate-bounce rounded-full border-2 border-blue-400/50">
                    <div className="mx-auto mt-1 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
