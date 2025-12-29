import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [];

function TestimonialsCarousel({ theme }) {
  return (
    <section className={`py-12 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 text-center">

        <div className="max-w-3xl mx-auto">
          <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={6000}>
            {testimonials.map((t) => (
              <div key={t.id} className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"}`}> 
                <p className="text-lg italic mb-4">“{t.quote}”</p>
                <p className="text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
