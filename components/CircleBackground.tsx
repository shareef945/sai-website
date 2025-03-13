"use client"

export default function CirclesBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Grid pattern - 6x3 grid with sharp lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100vw / 6) calc(100vh / 3)",
        }}
      />

      {/* Semi-circular lines - spanning the whole width */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle 200vw at 50% 200%, 
              transparent calc(200vw - 100vw), 
              rgba(255, 255, 255, 0.1) calc(200vw - 100vw), 
              transparent calc(200vw - 100vw + 1px)
            ),
            radial-gradient(circle 200vw at 50% 200%, 
              transparent calc(200vw - 133vw), 
              rgba(255, 255, 255, 0.1) calc(200vw - 133vw), 
              transparent calc(200vw - 133vw + 1px)
            ),
            radial-gradient(circle 200vw at 50% 200%, 
              transparent calc(200vw - 166vw), 
              rgba(255, 255, 255, 0.1) calc(200vw - 166vw), 
              transparent calc(200vw - 166vw + 1px)
            )
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Orange/brown gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, 
              rgba(234, 88, 12, 0.4) 0%,
              rgba(234, 88, 12, 0.15) 25%,
              transparent 40%
            ),
            radial-gradient(circle at 100% 100%, 
              rgba(234, 88, 12, 0.4) 0%,
              rgba(234, 88, 12, 0.15) 25%,
              transparent 40%
            )
          `,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.7) 75%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `,
        }}
      />
    </div>
  )
}

