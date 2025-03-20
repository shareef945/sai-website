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
      {/* Base grid pattern - simplified to only show grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Updated gradient overlay with stronger fading */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 0.7) 40%, rgba(21, 21, 21, 1) 70%), linear-gradient(to bottom, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 0.8) 40%, rgba(21, 21, 21, 1) 70%)",
        }}
      />
    </div>
  )
}