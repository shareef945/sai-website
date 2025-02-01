export default function CirclesBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-screen z-20 pointer-events-none overflow-hidden">
        {/* Concentric circles */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.05) 50.5%, transparent 51%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 60%, rgba(255, 255, 255, 0.05) 60.5%, transparent 61%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%, rgba(255, 255, 255, 0.05) 70.5%, transparent 71%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 80%, rgba(255, 255, 255, 0.05) 80.5%, transparent 81%),
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 90%, rgba(255, 255, 255, 0.05) 90.5%, transparent 91%)
            `,
            backgroundSize: "200% 200%",
            backgroundPosition: "center",
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
    </>
  )
}

