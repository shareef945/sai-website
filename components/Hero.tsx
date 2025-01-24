import { Button } from "@/components/ui/button";
import MailtoLink from "./ui/mailto";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center h-[calc(100vh-80px)] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h1 className="text-white text-5xl lg:text-[4.375rem] font-bold leading-tight">
        We design and build solutions
      </h1>
      <p className="text-gray-300 text-lg max-w-xl">
        Accelerate your digital transformation and stay ahead of the
        competition with our proven expertise in delivering cutting-edge
        solutions for a wide range of industries.
      </p>
      <Button
        variant="destructive"
        className="bg-[#E65722] hover:bg-[#E65722]/90 rounded-none"
      >
        <MailtoLink />
      </Button>
    </div>
    <div className="relative h-[515px]">
      <Image
        src="/hero-art.svg"
        alt="Decorative spiral"
        fill
        className="object-contain"
        priority
      />
    </div>
        </div>
      </div>
    </section>
  );
}
