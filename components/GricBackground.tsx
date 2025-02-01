export function GridBackground() {
    return (
      <>
        <div
          className="absolute top-0 left-0 right-0 h-screen z-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 30px),
              repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 30px)
            `,
          }}
        >
          {/* Gradient overlay fading from top-left to bottom-right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.8) 60%, rgba(17, 17, 17, 1) 100%)",
            }}
          />
        </div>
      </>
    )
  }
  
  