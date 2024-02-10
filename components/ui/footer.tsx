import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="bg-[#741f28] text-white py-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-0">
        <p className="text-xl sm:text-2xl font-semibold border-r  pr-4">
          Amor Fati
        </p>
        <div className="flex flex-col">
          <div className="flex gap-4">
          <p>About</p>
          <a href="https://api.saitechnology.co/">Developer</a>
          </div>
          <p className="font-extralight text-xs sm:text-sm">
           2023 All rights reserved. Powered by SAI Technology  © 
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between sm:justify-between mb-4 sm:mb-0">
          <FaLinkedin size={24} />
          <FaInstagram size={24} />
          <RiTwitterFill size={24} />
        </div>
        <div className="text-center sm:text-right">
          <a
            href="mailto:info@saitechnology.co"
            className="font-extralight text-xs sm:text-sm"
          >
            info@saitechnology.co
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
