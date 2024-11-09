import React from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div key={index} className="p-5 shadow-lg rounded-md">
      <img
        src={service.image}
        alt={`${service.title} img`}
        className="w-full h-40 object-cover rounded-md "
      />
      <h3 className="text-lg md:text-2xl font-bold text-black py-2">
        {service.title}
      </h3>

      <p className="text-gray-600 line-clamp-3">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
