import React from "react";
import AboutSection from "../sections/AboutSection";
import AboutServices from "../sections/AboutServices";

const AboutUs = () => {
  return (
    <div className="my-4 flex flex-col md:flex-col lg:flex-row mx-2 ">
      <div className="w-full lg:w-1/2 flex-grow">
        <AboutSection />
      </div>
      <div className="w-full lg:w-1/2 flex-grow">
        <AboutServices />
      </div>
    </div>
  );
};

export default AboutUs;
