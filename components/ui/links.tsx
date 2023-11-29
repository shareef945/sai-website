import React from "react";

const Links = () => {
  const links = [
    { section: "#", name: "Home" },
    { section: "#links", name: "Services" },
    { section: "#case-studies", name: "Case Studies" },
    { section: "#technology", name: "Technology" },
    { section: "#blog", name: "Blog" },
  ];

  return (
    <div className="flex">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.section}
          className="text-gray-500 px-4"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Links;
