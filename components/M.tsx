"use client";
import VerticalSlider from "./Carousel";
import SkillsTabs from "./Skills";
import Image from "next/image";
import NavBar from "./Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../public/shayan5.png";
import Link from "next/link";

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <NavBar />

      <div className="container mx-auto px-6">
        <main id="nav" className="pt-24">
          {/* Hero Section - Asymmetric Design */}
          <section className="relative min-h-[90vh] flex items-center">
            {/* Background Element */}
            <div className="absolute top-20 right-0 w-1/2 h-3/4 bg-blue-500/10 rounded-l-full blur-3xl -z-10"></div>

            {/* Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">
                    Welcome to my portfolio
                  </h2>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
                    Hey There,
                    <br />
                    I&apos;m
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      Shayan
                    </span>
                  </h1>

                  <div className="h-16 mt-2 text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                    <VerticalSlider
                      slides={[
                        "Frontend Engineer",
                        "FullStack Developer",
                        "Problem Solver",
                      ]}
                    />
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                  A seasoned developer with expertise in both frontend and
                  backend technologies. I craft responsive, user-centered
                  digital experiences with clean, efficient code.
                </p>

                {/* Experience and Social Container */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                  {/* Experience Badge */}
                  <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg w-fit">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900">
                      <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                        3.5
                      </span>
                    </div>
                    <div className="text-sm uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300">
                      Years
                      <br />
                      Experience
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 items-center">
                    <Link
                      href="https://github.com/gitsheyno"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg text-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      href="https://de.linkedin.com/in/shayan-heidary"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg text-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaLinkedin />
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-6 flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contacts"
                    className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-yellow-400 blur-md -z-10"></div>

                  {/* Image Frame */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      className="w-full h-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                      >
                        <circle cx="250" cy="250" r="200" fill="#f0f4ff" />
                        <circle cx="180" cy="180" r="120" fill="#e8f0fe" />

                        <rect
                          x="100"
                          y="150"
                          width="300"
                          height="220"
                          rx="10"
                          fill="#2d3748"
                        />
                        <rect
                          x="100"
                          y="150"
                          width="300"
                          height="25"
                          rx="10"
                          fill="#4a5568"
                        />

                        <circle cx="115" cy="162.5" r="5" fill="#fc8181" />
                        <circle cx="135" cy="162.5" r="5" fill="#f6ad55" />
                        <circle cx="155" cy="162.5" r="5" fill="#68d391" />

                        <rect
                          x="120"
                          y="195"
                          width="120"
                          height="8"
                          rx="2"
                          fill="#805ad5"
                        />
                        <rect
                          x="120"
                          y="215"
                          width="200"
                          height="8"
                          rx="2"
                          fill="#4299e1"
                        />
                        <rect
                          x="150"
                          y="235"
                          width="170"
                          height="8"
                          rx="2"
                          fill="#38b2ac"
                        />
                        <rect
                          x="150"
                          y="255"
                          width="140"
                          height="8"
                          rx="2"
                          fill="#ed8936"
                        />
                        <rect
                          x="120"
                          y="275"
                          width="180"
                          height="8"
                          rx="2"
                          fill="#4299e1"
                        />
                        <rect
                          x="120"
                          y="295"
                          width="160"
                          height="8"
                          rx="2"
                          fill="#805ad5"
                        />
                        <rect
                          x="150"
                          y="315"
                          width="130"
                          height="8"
                          rx="2"
                          fill="#38b2ac"
                        />
                        <rect
                          x="120"
                          y="335"
                          width="90"
                          height="8"
                          rx="2"
                          fill="#ed8936"
                        />

                        <circle
                          cx="380"
                          cy="140"
                          r="25"
                          fill="#4c51bf"
                          opacity="0.8"
                        />
                        <rect
                          x="360"
                          y="340"
                          width="45"
                          height="45"
                          rx="8"
                          fill="#2b6cb0"
                          transform="rotate(15)"
                        />
                        <polygon
                          points="80,320 110,290 140,320 110,350"
                          fill="#c53030"
                          opacity="0.8"
                        />

                        <path
                          d="M70,200 Q50,250 70,300"
                          stroke="#f6ad55"
                          stroke-width="8"
                          fill="none"
                        />
                        <path
                          d="M430,200 Q450,250 430,300"
                          stroke="#f6ad55"
                          stroke-width="8"
                          fill="none"
                        />

                        <circle cx="380" cy="100" r="8" fill="#4299e1" />
                        <circle cx="410" cy="130" r="6" fill="#38b2ac" />
                        <circle cx="390" cy="160" r="10" fill="#805ad5" />
                        <line
                          x1="380"
                          y1="100"
                          x2="410"
                          y2="130"
                          stroke="#a0aec0"
                          stroke-width="2"
                        />
                        <line
                          x1="410"
                          y1="130"
                          x2="390"
                          y2="160"
                          stroke="#a0aec0"
                          stroke-width="2"
                        />

                        <rect
                          x="50"
                          y="130"
                          width="30"
                          height="30"
                          rx="4"
                          fill="#2c5282"
                          opacity="0.7"
                        />
                        <rect
                          x="45"
                          y="125"
                          width="30"
                          height="30"
                          rx="4"
                          fill="#2b6cb0"
                          opacity="0.7"
                        />
                        <rect
                          x="40"
                          y="120"
                          width="30"
                          height="30"
                          rx="4"
                          fill="#3182ce"
                          opacity="0.7"
                        />
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-sm uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 mb-2">
                  My Expertise
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  Professional Skills
                </h3>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                <SkillsTabs />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
