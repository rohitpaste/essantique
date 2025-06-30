import React, { useState, useEffect } from "react";
import image1 from "../assets/h1.png";
import image2 from "../assets/h2.png";
import image3 from "../assets/h3.png";

const HeroSection = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-black relative overflow-hidden">

      {/* Image Section - On top for mobile */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative mb-10 md:mb-0">
        {/* Yellow Background Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-56 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[26rem] rounded-lg -z-10 shadow-lg"></div>

        {/* Product Image */}
        <img
          src={images[currentImage]}
          alt={`Product ${currentImage + 1}`}
          className="w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-[28rem] object-cover rounded-lg shadow-2xl z-10"
        />

        {/* Top-Left Tag */}
        <div className="absolute top-2 left-2 bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md z-20">
          Organic Product 🌿
        </div>

        {/* Bottom-Right Tag */}
        <div className="absolute bottom-2 right-2 bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md z-20">
          Natural Product 🌱
        </div>

        {/* Top-Left Arrow */}
        <svg
          className="absolute top-10 left-12 w-12 h-12 text-yellow-600 hidden sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 50 50"
        >
          <path
            d="M35 35 C 10 30, 5 10, 15 5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Bottom-Right Arrow */}
        <svg
          className="absolute bottom-10 right-12 w-12 h-12 text-yellow-600 hidden sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 50 50"
        >
          <path
            d="M15 15 C 30 20, 40 35, 45 45"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <p className="text-yellow-500 font-semibold uppercase text-sm tracking-wider mb-2 flex items-center gap-1">
          🌿 100% Organic
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white">
          ESSENTIQUE
        </h2>

        <p className="text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
          Experience the captivating allure of Essentique perfumes—crafted to evoke elegance, confidence, and unforgettable moments with every spray.
        </p>

        <button
          style={{ backgroundColor: "#fff", color: "#000" }}
          className="px-6 py-2 rounded-full hover:brightness-110 transition duration-300 text-sm sm:text-base"
        >
          View Products ✨
        </button>

        {/* Dot Navigation */}
        <div className="flex items-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition ${
                index === currentImage ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
