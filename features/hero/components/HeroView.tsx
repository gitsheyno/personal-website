import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "../hero.types";

interface HeroViewProps {
  content: HeroContent;
  currentRoleIndex: number;
}

export function HeroView({ content, currentRoleIndex }: HeroViewProps) {
  return (
    <section id="hero" className="relative scroll-mt-20">
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-site-accent uppercase">
              <span className="h-2 w-2 rounded-full bg-site-accent" />
              Available for thoughtful product work
            </div>

            <p className="mb-3 text-base text-site-muted">{content.greeting}</p>
            <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-site-text">
              {content.name}
            </h1>

            <div className="relative mt-5 min-h-9 overflow-hidden sm:min-h-10">
              <p className="text-lg font-medium leading-snug tracking-[-0.02em] text-site-text sm:text-2xl">
                {content.roles.map((role, index) => (
                  <span
                    key={role}
                    aria-hidden={index !== currentRoleIndex}
                    className={`absolute left-0 transition-all duration-500 motion-reduce:transition-none ${
                      index === currentRoleIndex
                        ? "translate-y-0 opacity-100"
                        : index < currentRoleIndex
                        ? "-translate-y-8 opacity-0"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </p>
            </div>

            <p className="mt-7 max-w-[62ch] text-base leading-7 text-site-muted sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#experiences"
                className="group inline-flex min-h-12 items-center justify-center bg-site-accent px-6 text-sm font-semibold text-site-background transition-colors hover:bg-white"
              >
                Explore my work
                <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <div className="flex items-center gap-1">
                {content.socialLinks.github && (
                  <SocialButton
                    href={content.socialLinks.github}
                    label="View GitHub profile"
                  >
                    <Github className="h-4 w-4" />
                  </SocialButton>
                )}
                {content.socialLinks.linkedin && (
                  <SocialButton
                    href={content.socialLinks.linkedin}
                    label="View LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </SocialButton>
                )}
                {content.socialLinks.email && (
                  <SocialButton
                    href={content.socialLinks.email}
                    label="Send an email"
                  >
                    <Mail className="h-4 w-4" />
                  </SocialButton>
                )}
              </div>
            </div>
          </div>

          <aside className="border-l border-white/20 pl-6 lg:mb-2">
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
              <div>
                <p className="mb-2 text-xs tracking-[0.12em] text-site-subtle uppercase">
                  Experience
                </p>
                <p className="text-3xl font-semibold text-site-text">
                  {content.yearsExperience}+
                </p>
                <p className="mt-1 text-sm text-site-subtle">
                  years shipping products
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.12em] text-site-subtle uppercase">
                  Currently
                </p>
                <a
                  href={content.currentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-site-text hover:text-site-accent"
                >
                  {content.currentCompany}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.12em] text-site-subtle uppercase">
                  Based in
                </p>
                <p className="text-sm font-medium text-site-text">Germany</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-12 w-12 rounded-none border border-white/15 text-site-muted transition-colors hover:border-white/30 hover:bg-white/5 hover:text-site-text"
      asChild
    >
      <a
        href={href}
        aria-label={label}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </Button>
  );
}
