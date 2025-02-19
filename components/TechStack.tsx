"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
];
const techStacks = {
  backend: [
    {
      name: "Node.js",
      image: "/tech-stack/node-dot-js.png",
    },
    {
      name: "Express",
      image: "/tech-stack/express.png",
    },
    {
      name: "Python",
      image: "/tech-stack/python.png",
    },
    {
      name: "Django",
      image: "/tech-stack/django.png",
    },
    {
      name: "Flask",
      image: "/tech-stack/flask.png",
    },
    {
      name: "NestJS",
      image: "/tech-stack/nest.png",
    },
  ],
  frontend: [
    {
      name: "React",
      image: "/tech-stack/react.png",
    },

    {
      name: "Angular",
      image: "/tech-stack/angular.png",
    },
    {
      name: "Svelte",
      image: "/tech-stack/svelte.png",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      image: "/tech-stack/mongo.png",
    },
    {
      name: "PostgreSQL",
      image: "/tech-stack/postgresql.png",
    },
    {
      name: "MySQL",
      image: "/tech-stack/mysql.png",
    },
    {
      name: "Redis",
      image: "/tech-stack/redis.png",
    },
  ],
  cloud: [
    {
      name: "AWS",
      image: "/tech-stack/amazonaws.png",
    },
    {
      name: "GCP",
      image: "/tech-stack/googlecloud.png",
    },
    {
      name: "Azure",
      image: "/tech-stack/microsoftazure.png",
    },
    {
      name: "Vercel",
      image: "/tech-stack/vercel.png",
    },
  ],
  devops: [
    {
      name: "Docker",
      image: "/tech-stack/docker.png",
    },
    {
      name: "Firebase",
      image: "/tech-stack/firebase.png",
    },
    {
      name: "Jenkins",
      image: "/tech-stack/jenkins.png",
    },
    {
      name: "GitLab",
      image: "/tech-stack/gitlab.png",
    },
  ],
};

const TechCard = ({
  tech,
  index,
  shouldAnimate,
}: {
  tech: { name: string; image: string };
  index: number;
  shouldAnimate: boolean;
}) => {
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group bg-[#151515] border border-white border-opacity-60 p-6 transition-all duration-300 hover:bg-white/10 w-[170px] h-[170px]"
    >
      <div className="flex items-center justify-center h-24">
        <Image
          src={tech.image}
          alt={tech.name}
          width={170}
          height={170}
          className="w-16 h-16 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
};
export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationInProgress = useRef(false);
  const lastScrollTime = useRef<number>(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-50% 0% -50% 0%",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWheel = (e: WheelEvent) => {
    if (!shouldAnimate) return;

    // Only prevent default if we're handling the scroll
    e.preventDefault();
    handleScroll(e.deltaY);
  };

  const handleScroll = (deltaY: number) => {
    if (!shouldAnimate || animationInProgress.current) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 150) return;
    lastScrollTime.current = now;

    const direction = deltaY > 0 ? 1 : -1;
    const nextCategory = currentCategory + direction;

    if (nextCategory >= 0 && nextCategory < categories.length) {
      animationInProgress.current = true;
      setIsTransitioning(true);
      setCurrentCategory(nextCategory);

      setTimeout(() => {
        animationInProgress.current = false;
        setIsTransitioning(false);
      }, 400);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentCategory, shouldAnimate]);

  const handleCategoryClick = (index: number) => {
    if (animationInProgress.current) return;
    animationInProgress.current = true;
    setIsTransitioning(true);
    setCurrentCategory(index);

    setTimeout(() => {
      animationInProgress.current = false;
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      ref={sectionRef}
      className="h-[653px] relative bg-[#151515] overflow-hidden"
    >
      <div className="h-full flex items-center justify-center">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="flex items-center justify-between">
            <nav className="space-y-2 w-48">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Our Tech stack
              </h2>
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(index)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg transition-colors relative",
                    currentCategory === index
                      ? "text-white"
                      : "text-white/40 hover:text-white/60"
                  )}
                >
                  {currentCategory === index && (
                    <motion.div
                      layoutId="indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-orange-500 rounded-full"
                    />
                  )}
                  {category.label}
                </button>
              ))}
            </nav>

            <div className="relative w-[40.5rem] h-[653px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />

              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                      {!isTransitioning &&
                        techStacks[
                          categories[currentCategory]
                            .id as keyof typeof techStacks
                        ].map((tech, index) => (
                          <TechCard
                            key={tech.name}
                            tech={tech}
                            index={index}
                            shouldAnimate={shouldAnimate}
                          />
                        ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
