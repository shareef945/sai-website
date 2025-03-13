"use client"

interface GridBackgroundProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'viewport' | 'fullPage' | 'fullScreen'
}

export function GridBackground({ 
  size = 'md',
  variant = 'viewport' 
}: GridBackgroundProps) {
  // Define grid sizes in pixels
  const gridSizes = {
    sm: 30,    // Original size
    md: 120,   // 4x the small size
    lg: 240    // 8x the small size
  }

  const gridSize = gridSizes[size]
  
  // Define positioning based on variant
  const positioningClass = variant === 'viewport' 
    ? "fixed inset-0 h-screen" 
    : variant === 'fullScreen'
    ? "fixed inset-0"
    : "absolute inset-0 min-h-screen"

  return (
    <div className={`${positioningClass} z-0`}>
      {/* Base grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent ${gridSize}px),
            repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent ${gridSize}px)
          `,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.8) 60%, rgba(17, 17, 17, 1) 100%)",
        }}
      />
    </div>
  )
}