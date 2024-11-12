import React, { useState } from "react";
import { operations } from "../utils/operations";
import OperationCard from "../components/OperationCard";

// Main Component to Render All Cards
const AreasOfOperation = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };
  return (
    <section id="operation" className="bg-white py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Area of Operation
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {operations.map((operation, index) => (
            // <div
            //   key={index}
            //   className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full px-2 mb-4"
            // >
            <OperationCard
              key={index}
              title={operation.title}
              description={operation.description}
              scope={operation.scope}
              image={operation.image}
              isOpen={openCardIndex === index}
              onToggle={() => handleToggle(index)}
            />
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfOperation;
