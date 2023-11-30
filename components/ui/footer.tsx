import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[200px] bg-[#BF212E] w-full flex-col bg-opacity-5 border-t border-b border-[#741F26] flex items-center py-8 gap-12 justify-center">
          <p className="font-bold">Contact Us</p>
          <p>+233243945815</p>
          <p>info@saitechnology.co</p>
        </div>
      </div>
      <div className="h-[30px] bg-[#741f28] items-center justify-center flex">
        <p className="text-white text-center font-extralight text-sm">
          © Powered by SAI Technology
        </p>
      </div>
    </>
  );
};

export default Footer;
