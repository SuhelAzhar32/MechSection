import React from "react";

const AboutSection = () => {
  return (
    <div className="relative w-full">
      <section className="relative flex flex-col justify-left items-start text-left py-10 px-2 w-full sm:p-6 md:justify-start md:items-start md:text-left md:p-8 h-full">
        <h3 className="text-amber-500 text-xl font-bold py-4 px-10 text-left sm:text-xl md:text-2xl md:text-left sm:pt-4 sm:px-2">
          About Us
        </h3>
        <h2 className="text-2xl font-bold text-gray-700 px-10 sm:text-3xl md:text-3xl lg:text-4xl sm:pt-4 sm:px-2">
          We Are Leading Company In The World
        </h2>
        <p className="mt-3 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2">
          To be a major partner in construction & infrastructural growth of our
          country & establish a global presence by striking strategic alliances
          with global leaders.
        </p>
        <h2 className="text-2xl font-bold text-gray-700 px-10 py-4 sm:text-3xl md:text-3xl lg:text-4xl sm:pt-4 sm:px-2">
          Projects in the field of
        </h2>
        <div className="mt-2 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2 flex items-start space-x-4 lg:space-x-6">
          <div className="bg-amber-500 rounded-full p-[7px] flex-shrink-0"></div>
          <div>
            <p className="text-gray-600 text-sm lg:text-base">
              Construction & Infrastructure
            </p>
          </div>
        </div>
        <div className="mt-2 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2 flex items-start space-x-4 lg:space-x-6">
          <div className="bg-amber-500 rounded-full p-[7px] flex-shrink-0"></div>
          <div>
            <p className="text-gray-600 text-sm lg:text-base">
              Mega township development projects in various parts of the
              country. Mass housing by affordable & time saving means of
              construction.
            </p>
          </div>
        </div>
        <div className="mt-2 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2 flex items-start space-x-4 lg:space-x-6">
          <div className="bg-amber-500 rounded-full p-[7px] flex-shrink-0"></div>
          <div>
            <p className="text-gray-600 text-sm lg:text-base">
              MEP services catering to the requirements of Residential,
              Commercial & Industrial sectors.
            </p>
          </div>
        </div>
        <div className="mt-2 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2 flex items-start space-x-4 lg:space-x-6">
          <div className="bg-amber-500 rounded-full p-[7px] flex-shrink-0"></div>
          <div>
            <p className="text-gray-600 text-sm lg:text-base">
              Industrial, Commercial and Residential Fire Protection, Detection,
              Plumbing, Drainage and Rain harvesting. All MEP services,
              Industrial Utilities / Plant piping and allied work on turnkey
              basis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
