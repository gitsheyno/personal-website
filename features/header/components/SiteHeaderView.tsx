import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./BrandLogo";
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
            ? "border-b border-white/10 bg-[rgb(var(--site-background-rgb)/0.94)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="#hero"
              className="group flex-shrink-0"
              aria-label={`${company.brandName} — back to top`}
            >
              <BrandLogo name={company.brandName} />
            </Link>

            <DesktopNavigation items={items} />

            <div className="flex items-center space-x-4">
              <div className="hidden items-center space-x-3 lg:flex">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-site-muted transition-colors hover:text-site-text"
                >
                  {phoneDisplay}
                </a>
                <div className="h-5 w-px bg-white/15" />
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="group h-11 w-11 rounded-none p-2 text-site-text hover:bg-white/5 hover:text-site-text"
                >
                  <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
                    <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </a>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-none text-site-text hover:bg-white/5 lg:hidden"
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
