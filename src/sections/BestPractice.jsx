import React from "react";
import plumberwork from "../assets/plumberwork.jpg";
import {
  FaRecycle,
  FaClock,
  FaLaptop,
  FaDraftingCompass,
} from "react-icons/fa";

const BestPractice = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={plumberwork}
          alt="bg-img"
        />
      </div>
      <section className="relative bg-amber-600 bg-opacity-80 flex flex-col justify-start items-start text-start p-10 w-full sm:p-6 md:justify-start md:items-start md:text-left md:p-8 h-full">
        <h3 className="text-black text-xl font-bold pt-6 px-10 sm:text-xl md:text-2xl md:text-left sm:pt-4 sm:px-2 ">
          We Follow Best Practices
        </h3>
        <p className="mt-4 text-md text-black px-10 sm:text-base md:text-lg lg:text-xl sm:pt-4 sm:px-2">
          We are committed to delivering construction projects with the highest
          standards of quality and responsibility. By embracing eco-friendly
          methods, energy efficiency, and advanced safety protocols, we ensure
          every space is sustainable, safe, and built to last. Our practices
          prioritize both your needs and the environment.
        </p>

        {/* List of Best Practices */}
        <ul className="mt-6 space-y-4 text-lg font-semibold text-black px-10 sm:px-2 md:text-lg lg:text-xl">
          <li className="flex items-center">
            <FaRecycle className="text-xl md:text-2xl lg:text-2xl mr-4 text-black" />
            Sustainability
          </li>
          <li className="flex items-center">
            <FaClock className="text-xl md:text-2xl lg:text-2xl mr-4 text-black" />
            Project On Time
          </li>
          <li className="flex items-center">
            <FaLaptop className="text-xl md:text-2xl lg:text-2xl mr-4 text-black" />
            Modern Technology
          </li>
          <li className="flex items-center">
            <FaDraftingCompass className="text-xl md:text-2xl lg:text-2xl mr-4 text-black" />
            Latest Designs
          </li>
        </ul>
        {/* <button className="mt-6 px-6 py-2 text-white rounded-md hover:bg-amber-500 border sm:px-4 md:px-5 lg:px-6">
      Learn More
    </button> */}
      </section>
    </div>
  );
};

export default BestPractice;
