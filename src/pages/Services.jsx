import React from "react";
import bgservice from "../assets/bgservice.jpg";
import Service from "../components/Service";
import AreasOfOperation from "../sections/AreaOfOperation";

const Services = () => {
  return (
    <div className=" w-screen overflow-hidden">
      {/* <div className="absolute inset-0"> */}
      <div className="absolute w-full h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh] inset-0">
        <img
          className="w-full h-[40vh] object-cover md:h-[50vh] sm:h-[40vh] lg:h-[70vh]"
          //   className="w-full h-full object-cover"
          src={bgservice}
          alt="bg-img"
        />
      </div>
      <section
        id="about"
        className="relative bg-slate-600 bg-opacity-80 h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh]"
      >
        <div className="container mx-auto text-center py-[130px] sm:py-[130px] md:py-[150px] lg:py-[170px]">
          <h2 className="text-7xl font-bold text-white">Services</h2>
        </div>
      </section>

      <div className="container mx-2 py-4">
        <AreasOfOperation />
      </div>

      <div className="container mx-2 py-4">
        <Service />
      </div>
    </div>
  );
};

export default Services;
