import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import type { HeaderIdentity, NavigationItem } from "../header.types";

interface SiteHeaderViewProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  items: NavigationItem[];
  phoneDisplay: string;
  phoneHref: string;
  company: HeaderIdentity;
}

export function SiteHeaderView({
  isScrolled,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  items,
  phoneDisplay,
  phoneHref,
  company,
}: SiteHeaderViewProps) {
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="#hero" className="group flex-shrink-0">
              <span className="text-base font-semibold tracking-[-0.02em] text-white md:text-lg">
                {company.name}<span className="text-cyan-300">.</span>
              </span>
            </Link>

            <DesktopNavigation items={items} />

            <div className="flex items-center space-x-4">
              <div className="hidden items-center space-x-3 md:flex">
                <a
                  href={phoneHref}
                  className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {phoneDisplay}
                </a>
                <div className="h-5 w-px bg-white/15" />
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="group rounded-none p-2 text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
                    <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </a>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none text-zinc-200 hover:bg-white/5 md:hidden"
                onClick={onToggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        items={items}
        phoneDisplay={phoneDisplay}
        phoneHref={phoneHref}
        company={company}
      />
    </>
  );
}
