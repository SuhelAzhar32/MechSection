import React from "react";
import { testimonials } from "../utils/testimonialConstant";

// const testimonials = [
//   {
//     name: "Alice Johnson",
//     feedback: "Amazing service and quality!",
//     image: "/assets/client1.jpg",
//   },
//   {
//     name: "John Doe",
//     feedback: "The team was very professional.",
//     image: "/assets/client2.jpg",
//   },
//   {
//     name: "Karen White",
//     feedback: "Highly recommended for any construction needs!",
//     image: "/assets/client3.jpg",
//   },
// ];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-12 px-4">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-4">
        What Our Clients Say
      </h2>
      <h2 className="text-4xl font-bold text-center text-slate-950">
        Testimonials
      </h2>

      {/* Testimonial Cards */}
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-col bg-slate-800 p-6 shadow-lg transform transition-transform min-h-[280px] border-b-4 border-amber-500"
          >
            {/* Client Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-2 md:mr-6"
            />

            {/* Client Feedback */}
            <div className="flex flex-col justify-start items-start text-left ">
              <h3 className="text-xl font-bold text-amber-500 mb-4">
                {testimonial.title}
              </h3>
              <h3 className="text-xl font-bold text-white">
                {testimonial.name}
              </h3>
              <p className="mt-2 text-white italic">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
