"use client"

import { useEffect, useRef, useState } from "react"
import { CircleIcon, PencilRulerIcon, Settings2Icon, WrenchIcon } from "lucide-react"

export default function Development() {
  const [activeSection, setActiveSection] = useState("consultation")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
      },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="bg-[#151515] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">How development with SAI works</h1>

        <div className="flex gap-8">
          {/* Left side navigation */}
          <nav className="hidden lg:block w-64 sticky top-16 h-fit">
            <div className="space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeSection === section.id ? "bg-orange-600/20 text-orange-500" : "hover:bg-white/5"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {section.icon}
                  <span className="font-medium">{section.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Right side content */}
          <div className="flex-1 h-[1000px] overflow-y-auto pr-4 space-y-32">
            <section id="consultation" data-section className="min-h-[400px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                  <Settings2Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">Consultation & Strategy</h2>
              </div>
              <div className="aspect-video bg-white/5 rounded-xl" />
              <p className="text-gray-400 leading-relaxed">
                Initial consultation to understand your project requirements, goals, and vision. We develop a
                comprehensive strategy tailored to your specific needs and objectives, ensuring alignment with your
                business goals.
              </p>
            </section>

            <section id="design" data-section className="min-h-[400px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <PencilRulerIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">Design & User Experience</h2>
              </div>
              <div className="aspect-video bg-white/5 rounded-xl" />
              <p className="text-gray-400 leading-relaxed">
                Designing engaging and intuitive interfaces for web and mobile applications. Crafting user experiences
                that are not only visually appealing but also user-friendly, ensuring your audience enjoys every
                interaction with your product.
              </p>
            </section>

            <section id="development" data-section className="min-h-[400px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <WrenchIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">Development & Implementation</h2>
              </div>
              <div className="aspect-video bg-white/5 rounded-xl" />
              <p className="text-gray-400 leading-relaxed">
                Transforming designs into fully functional applications using cutting-edge technologies and best
                practices. Our development process ensures scalable, maintainable, and high-performance solutions.
              </p>
            </section>

            <section id="testing" data-section className="min-h-[400px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <CircleIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">Testing & Deployment</h2>
              </div>
              <div className="aspect-video bg-white/5 rounded-xl" />
              <p className="text-gray-400 leading-relaxed">
                Rigorous testing procedures to ensure quality and reliability. Smooth deployment process with continuous
                monitoring and support to ensure optimal performance in production.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

const sections = [
  {
    id: "consultation",
    label: "Consultation & Strategy",
    icon: <Settings2Icon className="w-5 h-5" />,
  },
  {
    id: "design",
    label: "Design & User Experience",
    icon: <PencilRulerIcon className="w-5 h-5" />,
  },
  {
    id: "development",
    label: "Development & Implementation",
    icon: <WrenchIcon className="w-5 h-5" />,
  },
  {
    id: "testing",
    label: "Testing & Deployment",
    icon: <CircleIcon className="w-5 h-5" />,
  },
]

