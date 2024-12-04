import React from "react";
import bgimage from "../assets/bg-main-image.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()

  const handleLearnMore = ()=>{
    navigate("/about")
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={bgimage}
          alt="bg-img"
        />
      </div>
      <section className="relative bg-gray-700 bg-opacity-80 h-full flex flex-col justify-center items-start text-start p-10 w-full sm:p-6 md:justify-center md:items-start md:text-left md:p-8">
        <h3 className="text-amber-500 text-xl font-bold py-4 px-10 sm:text-xl md:text-2xl md:text-left sm:px-4">
          Build Your Dream
        </h3>
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl px-10 sm:px-4">
          Welcome to Mechsection Co.
        </h1>
        <p className="mt-4 text-lg text-white sm:text-base md:text-lg lg:text-xl px-10 sm:px-4">
          Providing customer satisfaction through professional excellence.
        </p>
        <button onClick={handleLearnMore} className="mt-6 mx-10 px-6 py-2 text-white rounded-md hover:bg-amber-500 border sm:px-4 md:px-5 lg:px-6 sm:mx-4">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
