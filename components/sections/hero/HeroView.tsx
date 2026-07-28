import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types";

interface HeroViewProps {
  content: HeroContent;
  currentRoleIndex: number;
}

export function HeroView({ content, currentRoleIndex }: HeroViewProps) {
  return (
    <section id="hero" className="relative scroll-mt-20">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-36">
        <div className="grid items-end gap-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Available for thoughtful product work
            </div>

            <p className="mb-4 text-sm text-zinc-500">{content.greeting}</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.95]">
              {content.name}
            </h1>

            <div className="relative mt-6 h-10 overflow-hidden sm:h-12">
              <p className="text-xl font-medium tracking-[-0.025em] text-zinc-300 sm:text-3xl">
                {content.roles.map((role, index) => (
                  <span
                    key={role}
                    className={`absolute left-0 transition-all duration-500 ${
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

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#experiences"
                className="group inline-flex h-12 items-center justify-center bg-cyan-300 px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
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

          <aside className="border-l border-white/15 pl-6 lg:mb-2">
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs tracking-[0.15em] text-zinc-500 uppercase">
                  Experience
                </p>
                <p className="text-3xl font-semibold text-white">
                  {content.yearsExperience}+
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  years shipping products
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.15em] text-zinc-500 uppercase">
                  Currently
                </p>
                <a
                  href={content.currentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300"
                >
                  {content.currentCompany}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs tracking-[0.15em] text-zinc-500 uppercase">
                  Based in
                </p>
                <p className="text-sm font-medium text-zinc-200">Germany</p>
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
      className="h-12 w-12 rounded-none border border-white/15 text-zinc-300 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
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
