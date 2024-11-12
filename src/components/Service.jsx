import React from "react";
import { services } from "../utils/constants";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <section id="ourteam" className="bg-white py-2">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-amber-500 mb-6">
          Our Services
        </h3>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Quality Services
        </h2>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
