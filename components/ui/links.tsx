"use client";

import React, { useState } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import Link from "next/link";

const Links = () => {
  const [activeSection, setActiveSection] = useState("");

  const links = [{ section: "services", name: "Services" }];

  React.useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <div className="flex">
      <Link href="/" className="px-4">
        Home
      </Link>
      {links.map((link) => (
        <ScrollLink
          key={link.name}
          to={link.section}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={() => setActiveSection(link.section)}
          className={`px-4 cursor-pointer ${
            activeSection === link.section
              ? "text-[#741F26] font-bold"
              : "text-black"
          }`}
        >
          {link.name}
        </ScrollLink>
      ))}
      <Link href="/projects" className="px-4">
        Projects
      </Link>
    </div>
  );
};

export default Links;
