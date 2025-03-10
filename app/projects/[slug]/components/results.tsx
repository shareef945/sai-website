interface ProjectProps {
  project: any
}

export default function ProjectResults({ project }: ProjectProps) {
  const results = [
    project.result1,
    project.result2,
    project.result3
  ].map(result => {
    const [percentage, ...description] = result.split(' ');
    return {
      percentage,
      description: description.join(' ')
    };
  });

  return (
    <div className="w-full text-white border-b bg-[#151515] border-neutral-800">
      <div className="w-full py-16 md:py-24 px-[20px] md:px-[180px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-1 bg-[#ea5c1c] mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">{result.percentage}</h3>
              <p className="text-neutral-400">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}