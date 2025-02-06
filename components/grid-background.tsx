export function GridBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(38 38 38 / 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(38 38 38 / 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    )
  }
  
  