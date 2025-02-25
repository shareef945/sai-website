export default function Results() {
    return (
      <div className="bg-[#151515] py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#ffffff] text-4xl md:text-5xl font-normal text-center mb-16">Results</h2>
  
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="h-0.5 w-full bg-[#ea5c1c]" />
                <h3 className="text-[#ffffff] text-4xl lg:text-5xl font-normal">{stat.value}</h3>
                <p className="text-[#ffffff]/60 text-lg leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  const stats = [
    {
      value: "20% Reduction",
      description: "in passenger ticket booking time.",
    },
    {
      value: "35% Improvement",
      description: "in operational efficiency for transit operators.",
    },
    {
      value: "50% Increase",
      description: "in platform engagement due to the real-time tracking feature.",
    },
  ]
  
  