import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="min-h-[20rem]  z-10 relative md:h-[25rem] bg-[#151515] w-full  md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8 h-full md:pt-20 px-0 md:px-0">
        {/* Logo section - Order changed for mobile */}
        <div className="col-span-1 md:col-span-6 relative min-h-[20rem] order-last md:order-first before:absolute before:inset-0 before:content-[''] before:pointer-events-none before:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] before:bg-[size:2rem_2rem]">
          <div className="p-4 md:p-10 flex  items-end justify-center md:justify-start h-full">
            <Image
              src="/sai-footer.svg"
              alt="Footer logo"
              width={600}
              height={800}
              className="w-auto h-[100px] md:h-[100px] object-contain"
            />
          </div>
        </div>

        {/* Links and social section */}
        <div className="col-span-1 md:col-span-4 p-4 md:p-2 flex flex-col justify-between h-full gap-8 md:gap-0 text-white order-first md:order-last">
          <div className="flex flex-col order-last md:order-first">
            <Link
              href="/ventures"
              className="no-underline pb-2 text-sm md:text-base hover:opacity-60 cursor-pointer"
            >
              Ventures
            </Link>
            <Link
              href="/privacy"
              className="no-underline pb-2 text-sm md:text-base hover:opacity-60 cursor-pointer"
            >
              Data Privacy and Security Policy
            </Link>
            <Link
              href="/certifications"
              className="no-underline pb-2 text-sm md:text-base hover:opacity-60 cursor-pointer"
            >
              Compliance and Certification
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-4 order-first md:order-last">
            <a
              href="mailto:info@saitechnology.co"
              className="no-underline pb-2 text-sm md:text-base hover:opacity-60 cursor-pointer"
            >
              info@saitechnology.co
            </a>
            <div className="flex gap-4 md:gap-8">
              {/* Social icons */}
              <Link href={"https://x.com/saitechnology_"}>
                <Image
                  src="/logos/x.png"
                  alt="X (Twitter) logo"
                  width={30}
                  height={30}
                  className="w-6 h-6 md:w-[30px] md:h-[30px] hover:opacity-60 cursor-pointer"
                />
              </Link>
              <Link href={"https://www.instagram.com/saitechnology_/"}>
                <Image
                  src="/logos/ig.png"
                  alt="Instagram logo"
                  width={30}
                  height={30}
                  className="w-6 h-6 md:w-[30px] md:h-[30px] hover:opacity-60 cursor-pointer"
                />
              </Link>
              <Image
                src="/logos/linkedin.png"
                alt="LinkedIn logo"
                width={30}
                height={30}
                className="w-6 h-6 md:w-[30px] md:h-[30px] hover:opacity-60 cursor-pointer"
              />
              <Image
                src="/logos/whatsapp.png"
                alt="WhatsApp logo"
                width={30}
                height={30}
                className="w-6 h-6 md:w-[30px] md:h-[30px] hover:opacity-60 cursor-pointer"
              />
            </div>
            <a
              className="pb-2 hover:opacity-60 text-secondary text-sm md:text-base"
              href="https://saitechnology.co"
            >
              {year} All rights reserved. Powered by SAI Technology ©
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;