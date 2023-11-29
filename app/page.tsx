import { Navbar } from "@/components/main-nav";
import Image from "next/image";
import brain from "../public/brain.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex custom-height items-center px-20">
        <div className="gap-10">
          <p className="text-5xl font-extralight">
            We <span className="font-bold text-[#741f28]">design</span> and{" "}
            <span className="font-bold text-[#741f28]">build</span> solutions
          </p>{" "}
          <p>
            Accelerate your digital transformation and stay ahead of the
            competition with our proven expertise in delivering cutting-edge
            solutions for a wide range of industries.
          </p>
          <Button>Submit a request</Button>
        </div>
        <div>
          <Image src={brain} width={800} height={800} alt="picture of brain" />
        </div>
      </main>
    </>
  );
}
