import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="h-[753px]  w-full mt-32 text-white px-6 sm:px-12 md:px-[180px]">
      <div className="py-16 w-full">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Why Choose Us?</h1>

          <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl mb-8 sm:mb-12 text-white/60">
            <li className="flex items-start">
              <span className="mr-2 sm:mr-3 mt-1.5">•</span>
              <span>
                <strong>Reliable Performance</strong> – High-speed servers ensure fast load times and minimal downtime.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 sm:mr-3 mt-1.5">•</span>
              <span>
                <strong>Secure Hosting</strong> – Regular backups, SSL encryption, and robust security measures.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 sm:mr-3 mt-1.5">•</span>
              <span>
                <strong>Scalable Plans</strong> – Flexible pricing to accommodate startups, growing businesses, and
                enterprises.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 sm:mr-3 mt-1.5">•</span>
              <span>
                <strong>Professional Support</strong> – Dedicated support team ready to assist you with any issues.
              </span>
            </li>
          </ul>

          <p className="text-lg sm:text-xl text-white/60 mb-6 sm:mb-8">
            Take your business to the next level with our Managed CMS & Website Hosting Services. Get started today!
          </p>

          <p className="text-lg text-white/60 sm:text-xl">
            <Link href="/contact" className="text-accent hover:underline">
              [Contact Us]
            </Link>{" "}
            to find the perfect plan for your business.
          </p>
        </div>
      </div>
    </div>
  );
}