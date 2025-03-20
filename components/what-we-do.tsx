"use client"

import { useEffect, useRef, useState } from "react"

export default function WhatWeDo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Listen for resize events
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)

      // Reset styles after resize
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      drawSemicircle()
    }

    // Draw the semicircle and boxes
    const drawSemicircle = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Center point (bottom center of canvas)
      const centerX = width / 2
      // Move the center point to ensure the entire semicircle is visible
      const centerY = height * 0.95

      // Fixed card dimensions
      const boxWidth = 249
      const boxHeight = 110

      // Calculate radii to evenly distribute the three lines across the viewport
      // The lines should take up the full 100vh
      const maxRadius = Math.min(width * 0.7, height *0.82)
      const innerRadius = maxRadius * 0.33
      const middleRadius = maxRadius * 0.66
      const outerRadius = maxRadius

      // Draw title - moved above the lines, 50px size
      ctx.font = "bold 50px Arial"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.fillText("What We Do", centerX, height * 0.3)

      // Draw background semicircular lines - exactly 3 lines
      // Inner line
      ctx.beginPath()
      ctx.arc(centerX, centerY, innerRadius, Math.PI, 0, false)
      ctx.strokeStyle = "#333333"
      ctx.lineWidth = 1
      ctx.stroke()

      // Middle line - orange
      ctx.beginPath()
      ctx.arc(centerX, centerY, middleRadius, Math.PI, 0, false)
      ctx.strokeStyle = "#d87d4a" // Orange/copper color
      ctx.lineWidth = 1
      ctx.stroke()

      // Outer line
      ctx.beginPath()
      ctx.arc(centerX, centerY, outerRadius, Math.PI, 0, false)
      ctx.strokeStyle = "#333333"
      ctx.lineWidth = 1
      ctx.stroke()

      // Calculate positions along the middle orange semicircle
      const positions = [
        { angle: Math.PI * 0.5, label: "center" }, // Top center
        { angle: Math.PI * 0.75, label: "left" }, // Left
        { angle: Math.PI * 0.25, label: "right" }, // Right
        { angle: Math.PI * 0.9, label: "far-left" }, // Far left
        { angle: Math.PI * 0.1, label: "far-right" }, // Far right
      ]

      // Define the boxes with their content
      const boxContents = [
        {
          title: "Cloud Computing and",
          subtitle: "Edge Technologies",
          position: "center",
        },
        {
          title: "Internet of Things (IoT)",
          subtitle: "Solutions",
          position: "left",
        },
        {
          title: "Advanced Data Analytics",
          subtitle: "",
          position: "right",
        },
        {
          title: "Artificial Intelligence and",
          subtitle: "Machine Learning",
          position: "far-left",
        },
        {
          title: "Customized Technology",
          subtitle: "Integration",
          position: "far-right",
        },
      ]

      // Map positions to coordinates
      const positionMap = positions.reduce(
        (map, pos) => {
          const x = centerX + Math.cos(pos.angle) * middleRadius
          const y = centerY - Math.sin(pos.angle) * middleRadius
          map[pos.label] = { x: x - boxWidth / 2, y: y - boxHeight / 2 }
          return map
        },
        {} as Record<string, { x: number; y: number }>,
      )

      // Draw boxes along the middle orange semicircle
      boxContents.forEach((box) => {
        const pos = positionMap[box.position]

        // Draw box
        ctx.fillStyle = "#191919"
        ctx.strokeStyle = "#333333"
        ctx.lineWidth = 1
        ctx.fillRect(pos.x, pos.y, boxWidth, boxHeight)
        ctx.strokeRect(pos.x, pos.y, boxWidth, boxHeight)

        // Draw text with 17px font size
        ctx.fillStyle = "#ffffff"
        ctx.font = "17px Arial"
        ctx.textAlign = "center"
        ctx.fillText(box.title, pos.x + boxWidth / 2, pos.y + boxHeight / 2 - (box.subtitle ? 10 : 0))

        if (box.subtitle) {
          ctx.fillText(box.subtitle, pos.x + boxWidth / 2, pos.y + boxHeight / 2 + 17)
        }
      })
    }

    // Initial draw
    setCanvasDimensions()

    // Handle resize
    window.addEventListener("resize", setCanvasDimensions)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const serviceItems = [
    {
      title: "Internet of Things (IoT) Solutions",
      subtitle: "",
    },
    {
      title: "Cloud Computing and Edge Technologies",
      subtitle: "",
    },
    {
      title: "Advanced Data Analytics",
      subtitle: "",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      subtitle: "",
    },
    {
      title: "Customized Technology Integration",
      subtitle: "",
    },
  ]

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      {isMobile ? (
        <div className="w-full max-w-lg px-4 py-8 flex flex-col space-y-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">What We Do</h2>
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#191919] border border-[#ffffff0a] p-6 flex items-center justify-center"
            >
              <p className="text-white text-center">
                {item.title}
                {item.subtitle && <span className="block mt-2">{item.subtitle}</span>}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <canvas ref={canvasRef} className="w-full h-full" />
      )}
    </div>
  )
}
