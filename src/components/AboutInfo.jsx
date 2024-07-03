function AboutInfo() {
  return (
    <div className="flex flex-col md:gap-40 md:flex-row items-start py-20">
      <h2 className="font-Unna text-[40px] md:text-[48px] lg:text-[72px] leading-[1.3] text-darkness mb-5 mt-[-20px]">
        About
      </h2>
      <div className="md:max-w-[550px] relative">
        <span className="about-line"></span>
        <h4 className="font-Unna text-[24px] md:text-[28px] lg:text-[32px] text-darkness mb-4 mt-5">
          We provide fresh and healthy plants for your space
        </h4>
        <p className="text-gray text-[14px] md:text-[16px]">
          Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris
          semper platea urna, sapien fermentum venenatis etiam enim ullamcorper
          phasellus tortor justo sapien faucibus in adipiscing risus adipiscing
          bibendum nec eget tincidunt sed
        </p>
      </div>
    </div>
  );
}

export default AboutInfo;
