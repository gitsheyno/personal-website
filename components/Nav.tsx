'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const navigationItems = [
  { label: 'Services', href: '#skills' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Works', href: '#works' },
  { label: 'Contacts', href: '#contacts' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-blue-950/80 backdrop-blur-md shadow-lg shadow-blue-900/20 border-b border-blue-400/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="#" className="flex-shrink-0 group">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                  Shayan
                </span>
              </div>
            </Link>

            <ul className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-md text-blue-100 hover:text-cyan-300 hover:bg-blue-500/20 transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="tel:+4917621701815"
                  className="px-4 py-2 text-blue-100 hover:text-cyan-300 transition-colors font-medium text-sm"
                >
                  +49 176 217 01815
                </a>
                <div className="w-px h-6 bg-blue-400/30" />
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="group p-2 hover:bg-blue-500/20 text-blue-100"
                >
                  <a href="tel:+4917621701815">
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </a>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-10 w-10 hover:bg-blue-500/20 text-blue-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navigationItems}
      />
    </>
  );
};

export default NavBar;
