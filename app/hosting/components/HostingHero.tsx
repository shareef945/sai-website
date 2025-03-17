const HostingHero = () => {
  return (
    <div>
      <p className="text-[#FFF] md:px-[180px] px-[20px] text-[40px] md:text-[70px] font-bold">
        Managed CMS & Website Hosting Services
      </p>
      <p className="text-[#898989] text-base md:text-lg mt-4 px-[20px] md:px-[180px]">
        At SAI Technology, we offer reliable and scalable hosting solutions
        tailored to businesses of all sizes. Whether you need a managed CMS for
        your existing website or a complete website + CMS package, we have
        flexible plans to suit your needs. Our hosting is secure,
        high-performing, and backed by professional support to ensure your
        digital presence remains seamless.
      </p>
      <img
        className="w-full px-4 md:px-[56px] mt-6 md:mt-12"
        alt="Hosting services"
        src="/hosting.png"
      />
    </div>
  );
};

export default HostingHero;
