interface ProjectProps {
  project: any
}

export default function ProjectChallenges({ project }: ProjectProps) {
  const challenges = [
    {
      challenge: project.challenge1,
      solution: project.solution1
    },
    {
      challenge: project.challenge2,
      solution: project.solution2
    },
    {
      challenge: project.challenge3,
      solution: project.solution3
    }
  ]

  return (
    <div className="w-full  text-white ">
      <div className=" md:px-[180px]  py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl px-[20px] font-bold mb-16 text-center">Challenges & Solutions</h2>
        
        <div className="grid grid-cols-1 px-[20px] md:grid-cols-3 gap-[21px]">
          {challenges.map((item, index) => (
            <div key={index} className="bg-[#191919] px-[25px] pt-[40px] pb-[50px] ">
              <div className="flex flex-col gap-8">
                <div className="w-16 h-16 rounded-full bg-[#ea5c1c] flex items-center justify-center">
                  <span className="text-[20px] font-medium text-white">{index+1}</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] font-medium">Challenge</h3>
                  <p className="text-[14px] text-neutral-400 leading-relaxed">{item.challenge}</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] font-medium">Solution</h3>
                  <p className="text-[14px] text-neutral-400 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
