import React from "react";

const Objectives = () => {
  return (
    <div className="flex flex-col space-y-8 px-4 lg:px-16 max-w-screen-lg mx-auto">
      <h3 className="text-amber-500 text-xl font-bold px-4 text-left sm:text-xl md:text-2xl md:text-left sm:pt-4 sm:px-2">
        Projects in the field of
      </h3>
      {/* Building Staff Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0"></div>
        <div>
          <p className="text-gray-600 text-sm lg:text-base">
            Construction & Infrastructure
          </p>
        </div>
      </div>

      {/* History Emphasis Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0"></div>
        <div>
          <p className="text-gray-600 text-sm lg:text-base">
            Mega township development projects in various parts of the country.
            Mass housing by affordable & time saving means of construction.
          </p>
        </div>
      </div>

      {/* Economic Outcomes Section */}
      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0"></div>
        <div>
          <p className="text-gray-600 text-sm lg:text-base">
            MEP services catering to the requirements of Residential, Commercial
            & Industrial sectors.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4 lg:space-x-6">
        <div className="bg-amber-500 rounded-full p-2 lg:p-4 flex-shrink-0"></div>
        <div>
          <p className="text-gray-600 text-sm lg:text-base">
            Industrial, Commercial and Residential Fire Protection, Detection,
            Plumbing, Drainage and Rain harvesting. All MEP services, Industrial
            Utilities / Plant piping and allied work on turnkey basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
