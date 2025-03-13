import Image from "next/image";

const GDPRSection = () => {
    return (
      <div className="w-full max-w-[57rem] mx-auto text-white py-16 px-6 md:px-20">
        {/* GDPR Title */}
        <h1 className="text-4xl font-bold mb-12">GDPR</h1>
  
        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Certifications</h2>
          <p className="text-gray-400 mb-6">
            SAI Technology is committed to meeting the highest standards for data
            security and privacy. Below are the certifications that reflect our
            commitment:
          </p>
  
          <div className="bg-[#191919] p-8 rounded-lg border border-gray-700 flex flex-col items-center text-center">
            <Image
              src="/logos/gdr.svg"
              height={85}
              width={65}
              alt="GDPR Compliant"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">GDPR Compliant</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-lg">
              We adhere to the EU&#39;s General Data Protection Regulation, ensuring
              the privacy and security of personal data.
            </p>
          </div>
        </section>
  
        {/* Policies Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Policies</h2>
          <p className="text-gray-400 mb-4">
            Learn more about how we protect your data and ensure compliance with
            global standards:
          </p>
          <ul className="text-blue-400 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Data Security Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default GDPRSection;
  