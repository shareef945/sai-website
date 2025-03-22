"use client"

interface BGProps {
  variant?: "viewport" | "fullPage" | "fullScreen"
}

export function BG({ variant = "viewport" }: BGProps) {
  // Simplified positioning class based on variant
  const positioningClass =
    variant === "viewport"
      ? "fixed inset-0 h-screen"
      : variant === "fullScreen"
      ? "fixed inset-0"
      : "absolute inset-0 min-h-screen"

  return (
    <div className={`${positioningClass} z-0 bg-[#151515]`}>
      {/* Empty div with just the background color */}
    </div>
  )
}