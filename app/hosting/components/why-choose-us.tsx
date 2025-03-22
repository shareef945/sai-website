import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Reliable Performance",
      description:
        "High-speed servers ensure fast load times and minimal downtime.",
    },
    {
      title: "Secure Hosting",
      description:
        "Regular backups, SSL encryption, and robust security measures.",
    },
    {
      title: "Scalable Plans",
      description:
        "Flexible pricing to accommodate startups, growing businesses, and enterprises.",
    },
    {
      title: "Professional Support",
      description:
        "Dedicated support team ready to assist you with any issues.",
    },
  ];

  return (
    <div className="w-full mt-0 text-white px-6 sm:px-12 md:px-[180px]">
      <div className="py-16 w-full">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Why Choose Us?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#898989]">
                  {benefit.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl text-[#898989] mb-6 sm:mb-8">
              Take your business to the next level with our Managed CMS &
              Website Hosting Services. Get started today!
            </p>

            <Button
              asChild
              className="bg-[#E65722] hover:bg-[#E65722]/90 text-white px-12 py-6"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
