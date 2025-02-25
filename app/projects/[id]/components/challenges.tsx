export default function ChallengesAndSolutions() {
    return (
      <div className="bg-[#151515] py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#ffffff] text-4xl md:text-5xl font-normal text-center mb-16">Challenges & Solutions</h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="bg-[#191919] p-8 rounded-sm relative">
                <div className="bg-[#ea5c1c] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-6">
                  1
                </div>
  
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#ffffff] text-xl mb-2">Challenge</h3>
                    <p className="text-[#ffffff]/60 text-base">{item.challenge}</p>
                  </div>
  
                  <div>
                    <h3 className="text-[#ffffff] text-xl mb-2">Solution</h3>
                    <p className="text-[#ffffff]/60 text-base">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  const challenges = [
    {
      challenge: "Ensuring real-time updates for vehicle tracking and logistics coordination.",
      solution: "Integrated GPS APIs and optimized server requests for low-latency updates.",
    },
    {
      challenge: "Balancing complex functionality with user-friendly design.",
      solution: "Conducted user testing to refine workflows, ensuring simplicity without compromising features.",
    },
    {
      challenge: "Adapting the platform for diverse devices and networks.",
      solution: "Developed a responsive design with offline support for users in low-connectivity areas.",
    },
  ]
  
  