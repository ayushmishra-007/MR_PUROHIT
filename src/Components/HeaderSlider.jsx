import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "../assets/slider1.png";
import image2 from "../assets/slider2.webp";
import image3 from "../assets/slider3.webp";

const   HeaderSlider = ({ autoSlide = false, autoSlideInterval = 1000 }) => {
  const slides = [image1, image2, image3]; // Import images here

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  // Auto-slide logic using setTimeout
  useEffect(() => {
    if (!autoSlide) return;

    const timeout = setTimeout(() => {
      next();
    }, autoSlideInterval);

    return () => clearTimeout(timeout); // Clear timeout on component unmount or dependency change
  }, [curr, autoSlide=true, autoSlideInterval]); // Dependencies include curr

  return (
    <div className="overflow-hidden relative w-full">
      {/* Slides Container */}
      <div
        className="flex transition-transform  ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <FaChevronRight size={40} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === curr ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurr(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
