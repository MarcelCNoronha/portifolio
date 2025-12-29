import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [];

function TestimonialsCarousel() {
  return (
    <section className="py-12 bg-metallic-purple">
      <div className="container mx-auto px-4 text-justify">

        <div className="max-w-3xl mx-auto">
          <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={6000}>
            {testimonials.map((t) => (
              <div key={t.id} className="p-6 rounded-xl flex flex-col items-center justify-center min-h-[300px] bg-metallic-purple-dark text-gray-100"> 
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
