import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import type { HeroContent, NavigationItem } from "@/types";

interface SiteHeaderViewProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  items: NavigationItem[];
  phoneDisplay: string;
  phoneHref: string;
  company: Pick<
    HeroContent,
    "currentCompany" | "currentCompanyUrl" | "socialLinks"
  >;
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
            ? "border-b border-blue-400/20 bg-blue-950/80 shadow-lg shadow-blue-900/20 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="#hero" className="group flex-shrink-0">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-blue-300 md:text-3xl">
                Shayan
              </span>
            </Link>

            <DesktopNavigation items={items} />

            <div className="flex items-center space-x-4">
              <div className="hidden items-center space-x-3 md:flex">
                <a
                  href={phoneHref}
                  className="px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:text-cyan-300"
                >
                  {phoneDisplay}
                </a>
                <div className="h-6 w-px bg-blue-400/30" />
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="group p-2 text-blue-100 hover:bg-blue-500/20"
                >
                  <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
                    <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </a>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-blue-100 hover:bg-blue-500/20 md:hidden"
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
