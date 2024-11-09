import React from "react";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
import BestWork from "../components/BestWork";
import TestimonialsSection from "../sections/TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BestWork />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
