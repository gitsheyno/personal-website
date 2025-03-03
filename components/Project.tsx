"use client";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

// Define the portfolio item type
interface PortfolioItem {
  id: string;
  image: string;
  description: {
    name: string;
    title: string;
  };
  technologies: string[];
  link: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: "knime",
    image: "/knime2.png",
    description: {
      name: "KNIME",
      title: "Open-source analytics platform",
    },
    technologies: [
      "VueJS",
      "Nuxt3",
      "TS",
      "SCSS",
      "Vitest",
      "CI-CD Pipelines",
      "Docker",
    ],
    link: [
      "https://www.knime.com/downloads",
      "https://github.com/orgs/knime/repositories",
    ],
  },
  {
    id: "UV-Simulator",
    image: "/ev.png",
    description: {
      name: "UV-Simulator",
      title: "simulator for UV stations",
    },
    technologies: ["React", "TS", "TailwindCSS"],
    link: [
      "https://ev-simulation.vercel.app",
      "https://github.com/gitsheyno/EV-simulation",
    ],
  },
  {
    id: "low-carb",
    image: "/Diet.png",
    description: {
      name: "Low-Carb Recipes",
      title: "Deliciously Light, Guilt-Free Recipes",
    },
    technologies: [
      "React",
      "NodeJS",
      "TailwindCSS",
      "Material UI",
      "React Router",
      "TanstackQuery",
      "SQLITE",
    ],
    link: [
      "https://low-carb-diet-tan.vercel.app/",
      "https://github.com/gitsheyno/low-carb-diet",
    ],
  },
  {
    id: "events",
    image: "/Event.png",
    description: {
      name: "EventGalore",
      title: "Effortlessly organize your events",
    },
    technologies: [
      "VueJS",
      "TS",
      "NodeJS",
      "Tailwind CSS",
      "vitest",
      "CI-CD Pipelines",
      "Docker",
      "Nginx",
    ],
    link: [
      "https://festivals-nine.vercel.app",
      "https://github.com/gitsheyno/code-challenge",
    ],
  },
  {
    id: "chatbot",
    image: "/Bot.png",
    description: {
      name: "ChatBot",
      title: "Chat with AI and upload files with your prompts",
    },
    technologies: ["NextJS", "OpenAI", "Tailwind", "Langchain"],
    link: [
      "https://german-dictionary-llm.vercel.app/",
      "https://github.com/gitsheyno/German-dictionary-llm",
    ],
  },
  {
    id: "learnly",
    image: "/learnly.png",
    description: {
      name: "Learnly",
      title: "Effortlessly find your tutor, Or become one",
    },
    technologies: ["NextJS", "Prisma", "Tailwind CSS", "Shadcn"],
    link: [
      "https://learnly-iota.vercel.app/",
      "https://github.com/gitsheyno/Learnly",
    ],
  },
];

const ProjectCarousel: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass="custom-dot-list-style"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {portfolioData.map((project) => (
        <div key={project.id} className="px-3 py-4">
          <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[420px] flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.description.name}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {project.description.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description.title}
              </p>

              <div className="flex flex-wrap  gap-2 mt-auto mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href={project.link[0]}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm font-medium">Live Demo</span>
                </Link>

                <Link
                  href={project.link[1]}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <FaCode />
                  <span className="text-sm font-medium">Code</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
