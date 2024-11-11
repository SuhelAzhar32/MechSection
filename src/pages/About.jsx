import React from "react";
import bgaboutus from "../assets/bgaboutus.jpg";
import AboutUs from "../components/AboutUs";
import OurTeamSection from "../sections/OurTeamSection";

const About = () => {
  return (
    <div className=" w-screen overflow-hidden">
      {/* <div className="absolute inset-0"> */}
      <div className="absolute w-full h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh] inset-0">
        <img
          className="w-full h-[40vh] object-cover md:h-[50vh] sm:h-[40vh] lg:h-[70vh]"
          //   className="w-full h-full object-cover"
          src={bgaboutus}
          alt="bg-img"
        />
      </div>
      <section
        id="about"
        className="relative bg-slate-700 bg-opacity-80 h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh]"
      >
        <div className="container mx-auto text-center py-[130px] sm:py-[130px] md:py-[150px] lg:py-[170px]">
          <h2 className="text-7xl font-bold text-white">About Us</h2>
        </div>
      </section>
      <div className="container mx-2 py-4">
        <AboutUs />
      </div>
      <div className="container mx-2 py-4">
        <OurTeamSection />
      </div>
    </div>
  );
};

export default About;
