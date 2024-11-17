import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSection = ({ title, CurrentProjectList }) => {
  return (
    // <section id="project" className="bg-white py-10">
    //   <div className="container mx-auto px-4">
    //     <h3 className="text-3xl font-bold text-center text-amber-500 mb-8 bg-slate-900 py-2">
    //       {title}
    //     </h3>
    //     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //       {projects.map((project, index) => (
    //         <ProjectCard key={index} project={project} />
    //         // <Carousal key={index} project={project} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="project" className="bg-white py-10 ">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-amber-500 mb-8 bg-slate-900 py-2">
          {title}
        </h3>
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {CurrentProjectList.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
