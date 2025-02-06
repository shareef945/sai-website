import { GridBackground } from "./grid-background";
import { Globe } from "./ui/globe";

interface ValueProps {
  title: string;
  description: string;
}

function Value({ title, description }: ValueProps) {
  return (
    <div className="mb-8">
      <h3 className="text-white text-lg font-medium mb-2 flex items-center">
        <span className="w-1 h-4 bg-orange-500 mr-2" />
        {title}
      </h3>
      <p className="text-gray-400 ml-3">{description}</p>
    </div>
  );
}

export function OurValues() {
  return (
    <section className="bg-black py-24 relative">
      <GridBackground />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex  justify-between">
            <div>

              <h2 className="text-white text-4xl font-bold mb-12">
                Our Values
              </h2>
              <Value
                title="Innovation"
                description="We believe in the power of creativity and exploration to drive meaningful change."
              />
              <Value
                title="Integrity"
                description="We uphold the highest standards of honesty and transparency in all our endeavors."
              />
              <Value
                title="Collaboration"
                description="We strive on partnerships, both within our team and with our clients, to achieve excellence together."
              />
              <Value
                title="Sustainability"
                description="We are dedicated to creating solutions that benefit the planet and future generations."
              />
            </div>
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
