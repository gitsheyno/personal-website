"use client";

import { useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { HeaderIdentity, NavigationItem } from "../header.types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  phoneDisplay: string;
  phoneHref: string;
  company: HeaderIdentity;
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
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed top-16 right-0 z-30 h-[calc(100dvh-4rem)] w-full max-w-sm transform overflow-y-auto border-l border-white/20 bg-site-surface transition-all duration-300 motion-reduce:transition-none md:top-20 md:h-[calc(100dvh-5rem)] lg:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="space-y-6 p-6">
          <nav className="space-y-3" aria-label="Mobile navigation">
            <p className="text-xs font-semibold tracking-[0.12em] text-site-muted uppercase">
              Navigation
            </p>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block border-b border-white/10 py-3 text-lg font-medium text-site-text transition-colors hover:text-site-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-site-muted uppercase">
              Connect
            </p>
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start rounded-none border-white/15 bg-transparent text-site-text hover:border-white/30 hover:bg-white/5"
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

          <div className="border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-site-muted uppercase">
              Company
            </p>
            <Button
              asChild
              className="w-full rounded-none bg-site-accent text-site-background transition-colors hover:bg-white"
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
      className="min-h-11 flex-1 rounded-none border-white/35 bg-transparent text-site-text hover:border-white/60 hover:bg-white/5 hover:text-site-text"
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
