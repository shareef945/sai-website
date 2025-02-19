interface GridFadeProps {
  size?: "sm" | "md" | "lg"
  variant?: "viewport" | "fullPage" | "fullScreen"
}

export function GridFade({ size = "md", variant = "viewport" }: GridFadeProps) {
  const gridSizes = {
    sm: 30,
    md: 120,
    lg: 240,
  }

  const gridSize = gridSizes[size]

  const positioningClass =
    variant === "viewport"
      ? "absolute inset-0"
      : variant === "fullScreen"
        ? "fixed inset-0"
        : "absolute inset-0 min-h-screen"

  return (
    <div className={positioningClass} style={{ backgroundColor: "#151515" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #383838 1px, transparent 1px),
            linear-gradient(to bottom, #383838 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          WebkitMaskImage: `
            radial-gradient(
              circle at top left,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.8) 30%,
              rgba(0, 0, 0, 0.4) 60%,
              rgba(0, 0, 0, 0) 80%
            )
          `,
          maskImage: `
            radial-gradient(
              circle at top left,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.8) 30%,
              rgba(0, 0, 0, 0.4) 60%,
              rgba(0, 0, 0, 0) 80%
            )
          `,
        }}
      />
    </div>
  )
}

