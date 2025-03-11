"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
]

const techStacks = {
  backend: [
    { name: "Node.js", image: "/tech-stack/node.png" },
    { name: "Express", image: "/tech-stack/express.png" },
    { name: "Python", image: "/tech-stack/python.png" },
    { name: "Django", image: "/tech-stack/django.png" },
    { name: "Flask", image: "/tech-stack/flask.png" },
    { name: "NestJS", image: "/tech-stack/nest.png" },
  ],
  frontend: [
    { name: "React", image: "/tech-stack/react.png" },
    { name: "Next.js", image: "/tech-stack/nextjs.png" },
  ],
  databases: [
    { name: "MongoDB", image: "/tech-stack/mongo.png" },
    { name: "MySQL", image: "/tech-stack/mysql.png" },
    { name: "Redis", image: "/tech-stack/redis.png" },
    { name: "Supabase", image: "/tech-stack/supabase.png" },
  ],
  cloud: [
    { name: "Google Cloud", image: "/tech-stack/googlecloud.png" },
    { name: "Digital Ocean", image: "/tech-stack/digitalocean.png" },
    { name: "Vercel", image: "/tech-stack/vercel.png" },
  ],
  devops: [
    { name: "Docker", image: "/tech-stack/docker.png" },
    { name: "Firebase", image: "/tech-stack/firebase.png" },
    { name: "GitHub", image: "/tech-stack/github.png" },
    { name: "Linux", image: "/tech-stack/linux.png" },
  ],
}

const TechCard = ({
  tech,
  index,
  shouldAnimate,
}: {
  tech: { name: string; image: string }
  index: number
  shouldAnimate: boolean
}) => {
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative group bg-[#151515] border border-white border-opacity-60 p-4 md:p-6 transition-all duration-300 hover:bg-white/10  md:w-[170px] w-[104px] h-[104px] aspect-square md:h-[170px] flex items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <Image
          src={tech.image || "/placeholder.svg"}
          alt={tech.name}
          width={170}
          height={170}
          className="w-[9.0625rem] h-[6rem] object-contain opacity-50  transition-opacity grayscale "
        />
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentCategory, setCurrentCategory] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const animationInProgress = useRef(false)
  const lastScrollTime = useRef<number>(Date.now())
  const originalOverflow = useRef<string>("")

  const handleScroll = useCallback(
    (deltaY: number) => {
      if (!shouldAnimate || animationInProgress.current || !isLocked) return

      const now = Date.now()
      if (now - lastScrollTime.current < 400) return
      lastScrollTime.current = now

      const direction = deltaY > 0 ? 1 : -1
      const nextCategory = currentCategory + direction

      if (nextCategory >= 0 && nextCategory < categories.length) {
        animationInProgress.current = true
        setIsTransitioning(true)

        requestAnimationFrame(() => {
          setCurrentCategory(nextCategory)
        })

        if (nextCategory === 0 || nextCategory === categories.length - 1) {
          setIsLocked(false)
          document.body.style.overflow = originalOverflow.current
        } else {
          setIsLocked(true)
          document.body.style.overflow = "hidden"
        }

        setTimeout(() => {
          animationInProgress.current = false
          setIsTransitioning(false)
        }, 500)
      }
    },
    [currentCategory, isLocked, shouldAnimate],
  )

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (isLocked) {
        e.preventDefault()
        handleScroll(e.deltaY)
      }
    },
    [isLocked, handleScroll],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isActive = entry.isIntersecting
        setShouldAnimate(isActive)

        if (isActive) {
          originalOverflow.current = document.body.style.overflow
          document.body.style.overflow = "hidden"
          setIsLocked(true)
        } else {
          document.body.style.overflow = originalOverflow.current
          setIsLocked(false)
        }
      },
      {
        threshold: 1.0,
        rootMargin: "0px",
      },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  const handleCategoryClick = (index: number) => {
    if (animationInProgress.current) return
    animationInProgress.current = true
    setIsTransitioning(true)

    requestAnimationFrame(() => {
      setCurrentCategory(index)
    })

    if (index === categories.length - 1) {
      setIsLocked(false)
      document.body.style.overflow = originalOverflow.current
    } else {
      setIsLocked(true)
      document.body.style.overflow = "hidden"
    }

    setTimeout(() => {
      animationInProgress.current = false
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <section ref={sectionRef} className="h-[653px] w-full px-4 md:px-[180px] relative bg-[#151515] overflow-hidden">
      <div className="h-full flex flex-col md:flex-row items-center justify-center">
        <div className="mx-auto max-w-7xl w-full px-4 space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <nav className="w-full md:w-96 overflow-x-auto md:overflow-visible md:space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-white whitespace-nowrap">
                Our Tech Stack
              </h2>
              <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 pb-4 md:pb-0">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(index)}
                    className={cn(
                      "whitespace-nowrap md:w-full text-left px-4 py-2 rounded-lg transition-colors relative",
                      currentCategory === index ? "text-white" : "text-white/40 hover:text-white/60",
                    )}
                  >
                    {currentCategory === index && (
                      <motion.div
                        layoutId="indicator"
                        className="absolute md:left-0 left-0 right-0 md:top-1/2 bottom-0 md:-translate-y-1/2 md:w-1 w-full md:h-4 h-0.5 bg-orange-500 rounded-full"
                      />
                    )}
                    {category.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="relative w-full h-[653px]">
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
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="relative"
                  >
                    <div className=" grid grid-cols-3 overflow-x-auto overflow-hidden gap-3 md:gap-4 p-0 md:p-4">
                      {techStacks[categories[currentCategory].id as keyof typeof techStacks].map((tech, index) => (
                        <TechCard key={tech.name} tech={tech} index={index} shouldAnimate={shouldAnimate} />
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
  )
}

