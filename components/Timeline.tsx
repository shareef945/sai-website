"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDirectusImageUrl } from "@/utils/directus";
import { ProjectsPageError } from "@/components/Loading";
import { useProjects } from "@/hooks/use-projects";


export const TimelineComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { projects, error } = useProjects();

  // Sort projects by date in descending order and take the top 3
  const sortedProjects = [...projects]
    .sort((a, b) => new Date(b.dates).getTime() - new Date(a.dates).getTime())
    .slice(0, 3);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [height]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });
  useEffect(() => {
    // Recalculate height when projects change or after component mounts
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [projects, ref]); // Add projects as a dependency
  

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  if (error) {
    return <ProjectsPageError error={error} />;
  }

  return (
    <div className="w-full bg-[#151515] md:px-[180px] font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-[40px] md:mb-4 mb-1 text-white font-medium">
          Our Recent Projects
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {sortedProjects.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="flex flex-col space-y-4">
                <h3 className="hidden md:block text-xl md:pl-20 text-[20px] font-normal text-white">
                  {item.clientName}
                </h3>
                <div className="hidden md:block md:pl-20">
                  <p className="text-sm text-[#898989] mb-4">{item.shortDescription}</p>
                  <Link
                    href={item.url}
                    className="inline-block px-6 py-2 bg-[#EA5C1C] text-white rounded hover:bg-[#EA5C1C]/90 transition-colors"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative w-full md:pl-4 ">
              <div className="flex items-center justify-center relative md:w-full w-[345px] max-h-[514px] aspect-[16/9] overflow-hidden mx-auto mb-2 md:mb-0">
                <Image
                   src={getDirectusImageUrl(item.landingMedia) || "/placeholder.svg"}
                   alt={item.clientName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:hidden mx-auto max-w-[345px]">
                <h3 className="text-2xl mb-4 text-left  font-normal text-white">
                  {item.clientName}
                </h3>
                <p className="text-sm text-[#898989] mb-4">{item.shortDescription}</p>
                <Link
                  href={item.url}
                  className="inline-block px-6 py-2 mb-6 bg-[#EA5C1C] text-white rounded hover:bg-[#EA5C1C]/90 transition-colors"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:block hidden md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-[#EA5C1C]"
          >
            <motion.div
              className="absolute w-4 h-4 -right-[6px] bg-[#EA5C1C] rounded-full"
              style={{ top: heightTransform }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
