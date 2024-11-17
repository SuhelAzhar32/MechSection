import React from 'react'

const ProjectCard = ({project,index}) => {
  return (
    <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden  shadow-lg">
      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} img`}
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start text-center p-8">
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base mt-2">
          {project.location}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard
