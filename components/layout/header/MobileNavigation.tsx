"use client";

import { useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeroContent, NavigationItem } from "@/types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  phoneDisplay: string;
  phoneHref: string;
  company: Pick<
    HeroContent,
    "currentCompany" | "currentCompanyUrl" | "socialLinks"
  >;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  phoneDisplay,
  phoneHref,
  company,
}: MobileNavigationProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed top-16 right-0 z-30 w-full max-w-xs transform border-b border-blue-400/30 bg-blue-950/95 shadow-2xl shadow-blue-900/50 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="space-y-6 p-6">
          <nav className="space-y-3" aria-label="Mobile navigation">
            <p className="text-xs font-semibold tracking-wider text-blue-200/70 uppercase">
              Navigation
            </p>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 font-medium text-blue-100 transition-all duration-200 hover:bg-blue-500/20 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-blue-400/30 pt-6">
            <p className="mb-4 text-xs font-semibold tracking-wider text-blue-200/70 uppercase">
              Connect
            </p>
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-blue-400/30 bg-blue-500/10 text-blue-100 hover:border-blue-400/50 hover:bg-blue-500/20"
              >
                <a href={phoneHref} className="group">
                  <Phone className="mr-3 h-5 w-5 transition-transform group-hover:rotate-12" />
                  {phoneDisplay}
                </a>
              </Button>
              <div className="flex gap-3">
                {company.socialLinks.github && (
                  <SocialButton
                    href={company.socialLinks.github}
                    label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </SocialButton>
                )}
                {company.socialLinks.linkedin && (
                  <SocialButton
                    href={company.socialLinks.linkedin}
                    label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </SocialButton>
                )}
                {company.socialLinks.email && (
                  <SocialButton href={company.socialLinks.email} label="Email">
                    <Mail className="h-5 w-5" />
                  </SocialButton>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400/30 pt-6">
            <p className="mb-4 text-xs font-semibold tracking-wider text-blue-200/70 uppercase">
              Company
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <a
                href={company.currentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {company.currentCompany}
              </a>
            </Button>
          </div>
        </div>
      </aside>
    </>
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
      asChild
      variant="outline"
      size="icon"
      className="flex-1 border-blue-400/30 bg-blue-500/10 text-blue-100 hover:border-blue-400/50 hover:bg-blue-500/20"
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
