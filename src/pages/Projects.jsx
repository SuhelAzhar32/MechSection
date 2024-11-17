import React from "react";
import bgaboutus from "../assets/bgaboutus.jpg"
import CompletedProject from "../sections/CompletedProject";
import CurrentProject from "../sections/CurrentProject";
import { projects } from "../utils/projectData";

const Projects = () => {
  const completedProjectList = projects.filter(
    (project) => project.status === "Completed"
  );
  const CurrentProjectList = projects.filter(
    (project) => project.status === "Current"
  );
  return (
    <div className=" w-screen overflow-hidden">
      {/* <div className="absolute inset-0"> */}
      <div className="absolute w-full h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh] inset-0">
        <img
          className="w-full h-[40vh] object-cover md:h-[50vh] sm:h-[40vh] lg:h-[70vh]"
          //   className="w-full h-full object-cover"
          src={bgaboutus}
          alt="bg-img"
        />
      </div>
      <section
        id="about"
        className="relative bg-slate-600 bg-opacity-80 h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh]"
      >
        <div className="container mx-auto text-center py-[130px] sm:py-[130px] md:py-[150px] lg:py-[170px]">
          <h2 className="text-7xl font-bold text-white">Our Projects</h2>
        </div>
      </section>
      <h3 className="text-3xl font-bold text-center text-gray-800 mt-8">
        Project Portfolio
      </h3>
      <div className="container mx-2 py-4">
        <CompletedProject
          title="Completed Projects"
          completedProjectList={completedProjectList}
        />
      </div>
      <div className="container mx-2 py-4">
        <CurrentProject
          title="Current Projects"
          CurrentProjectList={CurrentProjectList}
        />
      </div>
    </div>
  );
};

export default Projects;
