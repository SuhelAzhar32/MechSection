import React from "react";
import firealarmsystem from "../assets/firealarmsystem.jpg";

const Sustainable = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={firealarmsystem}
          alt="bg-img"
        />
      </div>
      <section className="relative bg-gray-700 bg-opacity-80 flex flex-col justify-start items-start text-start p-10 w-full sm:p-6 md:justify-start md:items-start md:text-left md:p-8 h-full">
        <h3 className="text-amber-500 text-xl font-bold py-4 px-10 sm:text-xl md:text-2xl md:text-left sm:pt-4 sm:px-2 ">
          Sustainability
        </h3>
        <h1 className="text-2xl font-bold text-white px-10 sm:text-3xl md:text-3xl lg:text-4xl sm:pt-4 sm:px-2">
          Committed To Keep People Healthy & Safe
        </h1>
        <p className="mt-4 text-md text-white px-10 sm:text-base md:text-lg lg:text-xl sm:pt-4 sm:px-2">
          We are dedicated to building eco-friendly, energy-efficient spaces
          that prioritize safety, health, and environmental responsibility.
        </p>
        {/* <button className="mt-6 px-6 py-2 text-white rounded-md hover:bg-amber-500 border sm:px-4 md:px-5 lg:px-6">
          Learn More
        </button> */}
      </section>
    </div>
  );
};

export default Sustainable;
