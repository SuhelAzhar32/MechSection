import React from "react";
import Sustainable from "../sections/Sustainable";
import BestPractice from "../sections/BestPractice";

const BestWork = () => {
  return (
    <div className="my-4 flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/2">
        <Sustainable />
      </div>
      <div className="w-full lg:w-1/2">
        <BestPractice />
      </div>
    </div>
  );
};

export default BestWork;
