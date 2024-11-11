import React from "react";
import { FaBuilding, FaUniversity, FaChartLine } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex flex-col space-y-8 px-4 lg:px-16 py-20 max-w-screen-lg mx-auto">
      {/* Building Staff Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0">
          <FaBuilding className="text-white text-xl lg:text-xl" />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 pb-2">
            Experienced Building Staff
          </h3>
          <p className="text-gray-600 text-sm lg:text-base">
            Our team consists of certified engineers and skilled builders who
            are dedicated to delivering quality workmanship on every project,
            ensuring each detail meets industry standards.
          </p>
        </div>
      </div>

      {/* History Emphasis Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0">
          <FaUniversity className="text-white text-xl lg:text-xl" />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 pb-2">
            Strong Foundation in Industry Knowledge
          </h3>
          <p className="text-gray-600 text-sm lg:text-base">
            With over 5 years in the construction industry, we bring a wealth of
            knowledge and expertise to every project, helping us tackle
            challenges and innovate to meet client needs.
          </p>
        </div>
      </div>

      {/* Economic Outcomes Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0">
          <FaChartLine className="text-white text-xl lg:text-xl" />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 pb-2">
            Positive Economic Outcomes
          </h3>
          <p className="text-gray-600 text-sm lg:text-base">
            We focus on sustainable building practices that enhance community
            welfare and provide long-term economic benefits, making our projects
            valuable for both clients and the wider society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
