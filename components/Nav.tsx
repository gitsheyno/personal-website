"use client";
import { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { IoCall } from "react-icons/io5";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold">
            <a
              href="#nav"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Shayan
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {["Services", "Experiences", "Works", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Contact Info and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Number - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="tel:+4917621701815"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +4917621701815
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="facetime:+4917621701815"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
              >
                <IoCall className="text-lg" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
