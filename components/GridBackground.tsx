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
    <div className={`${positioningClass} z-0 overflow-hidden`}>
      {/* Crisp grid pattern using SVG for pixel-perfect rendering */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern 
            id="grid" 
            width={gridSize} 
            height={gridSize} 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.15)" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          fill="url(#grid)"
        />
      </svg>

      {/* Original gradient overlay */}
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