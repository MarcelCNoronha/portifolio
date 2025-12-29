import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectsData from "../data/projectsData";

const ServiceIcon = ({ icon, theme }) => {
  const iconColor = theme === "dark" ? "text-blue-400" : "text-blue-600";
  const iconClass = `w-12 h-12 mb-4 ${iconColor}`;

  switch (icon) {
    case "website":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "ads":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case "seo":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        );
    case "local":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        );
    case "ecommerce":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "email":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "tools":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};


function ServicesCarousel({ theme }) {
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3);
    const [isCenterMode, setIsCenterMode] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsCenterMode(true);
            setCenterSlidePercentage(33.3);
        } else if (window.innerWidth >= 768) {
            setIsCenterMode(true);
          setCenterSlidePercentage(50);
        } else {
            setIsCenterMode(false);
          setCenterSlidePercentage(100);
        }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial value
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div className="max-w-4xl mx-auto text-justify">
      <Carousel
        className="services-carousel"
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        centerMode={isCenterMode}
        centerSlidePercentage={centerSlidePercentage}
      >
        {projectsData.map((service) => (
          <div
            key={service.id}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-justify mx-2 min-h-[300px] ${
              theme === "dark" ? "bg-gray-700" : "bg-white"
            }`}>

            <div className="flex-shrink-0">
              <ServiceIcon icon={service.icon} theme={theme} />
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ServicesCarousel;