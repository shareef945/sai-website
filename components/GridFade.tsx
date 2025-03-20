"use client"

interface GridProps {
  size?: "sm" | "md" | "lg"
  variant?: "viewport" | "fullPage" | "fullScreen"
}

export function GridFade({ size = "md", variant = "viewport" }: GridProps) {
  const gridSizes = {
    sm: 30,
    md: 120,
    lg: 240,
  }

  const gridSize = gridSizes[size]

  // Simplified positioning class based on variant
  const positioningClass =
    variant === "viewport"
      ? "fixed inset-0 h-screen"
      : variant === "fullScreen"
      ? "fixed inset-0"
      : "absolute inset-0 min-h-screen"

  return (
    <div className={`${positioningClass} z-0`} style={{ backgroundColor: "#151515" }}>
      {/* Base grid pattern - without any fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #383838 1px, transparent 1px),
            linear-gradient(to bottom, #383838 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    </div>
  )
}