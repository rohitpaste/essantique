import React from "react";
import perfume1 from "../assets/2.png";
import perfume2 from "../assets/1.png";
import perfume4 from "../assets/6.png";

const categories = [
  {
    name: "Men's Fragrances",
    image: perfume2,
  },
  {
    name: "Women's Fragrances",
    image: perfume1,
  },
  {
    name: "Fragrance Sets",
    image: perfume4,
  },
];

const PerfumeCollection = () => {
  return (
    <section
      id="collections"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold font-serif">Shop by Category</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition duration-300"
            style={{
              width: "clamp(200px, 30%, 320px)",
              aspectRatio: "4 / 5",
              flex: "1 1 clamp(200px, 30%, 320px)",
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-gray-900 z-10">
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-4 right-4 z-10">
              <div className="w-8 h-8 border-2 border-gray-900 rounded-full flex items-center justify-center text-sm group-hover:bg-gray-900 group-hover:text-white transition duration-300">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfumeCollection;
