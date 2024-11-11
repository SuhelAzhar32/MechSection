import React from "react";

const AboutSection = () => {
  return (
    <div className="relative w-full ">
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
        <p className="mt-6 text-[14px] text-gray-700 px-10 sm:pt-4 sm:px-2">
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
