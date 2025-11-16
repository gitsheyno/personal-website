'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string }>;
}

const MobileMenu = ({ isOpen, onClose, items }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-16 right-0 z-30 w-full max-w-xs bg-blue-950/95 backdrop-blur-md border-b border-blue-400/30 shadow-2xl shadow-blue-900/50 md:hidden transition-all duration-300 transform ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-blue-200/70 uppercase tracking-wider">
              Navigation
            </p>
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg text-blue-100 hover:text-cyan-300 hover:bg-blue-500/20 font-medium transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-blue-400/30 pt-6">
            <p className="text-xs font-semibold text-blue-200/70 uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-blue-400/30 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50"
              >
                <a href="tel:+4917621701815" className="group">
                  <Phone className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                  +49 176 217 01815
                </a>
              </Button>

              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex-1 border-blue-400/30 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50"
                >
                  <a
                    href="https://github.com/gitsheyno"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex-1 border-blue-400/30 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50"
                >
                  <a
                    href="https://de.linkedin.com/in/shayan-heidary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex-1 border-blue-400/30 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400/50"
                >
                  <a href="mailto:your-email@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400/30 pt-6">
            <p className="text-xs font-semibold text-blue-200/70 uppercase tracking-wider mb-4">
              Company
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <a
                href="https://pickshare.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Pickshare GmbH
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
