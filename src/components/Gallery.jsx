import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import perfume1 from "../assets/7.png";
import perfume2 from "../assets/7.png";
import perfume3 from "../assets/7.png";

const perfumes = [
  {
    id: 1,
    img: perfume1,
    title: "Guerlain",
    subtitle: "Shalimar Parfum",
    basePrice: 800,
    sizes: [
      { label: "20ml", price: 800 },
      { label: "50ml", price: 1200 },
      { label: "100ml", price: 1800 },
    ],
  },
  {
    id: 2,
    img: perfume2,
    title: "Prada",
    subtitle: "Candy Eau de Parfum",
    basePrice: 950,
    sizes: [
      { label: "20ml", price: 950 },
      { label: "50ml", price: 1300 },
      { label: "100ml", price: 1850 },
    ],
  },
  {
    id: 3,
    img: perfume3,
    title: "Chanel",
    subtitle: "No. 5 Parfum",
    basePrice: 1020,
    sizes: [
      { label: "20ml", price: 1020 },
      { label: "50ml", price: 1400 },
      { label: "100ml", price: 2000 },
    ],
  },
  {
    id: 4,
    img: perfume1,
    title: "Versace",
    subtitle: "Bright Crystal",
    basePrice: 850,
    sizes: [
      { label: "20ml", price: 850 },
      { label: "50ml", price: 1250 },
      { label: "100ml", price: 1700 },
    ],
  },
  {
    id: 5,
    img: perfume2,
    title: "Calvin Klein",
    subtitle: "Euphoria",
    basePrice: 880,
    sizes: [
      { label: "20ml", price: 880 },
      { label: "50ml", price: 1280 },
      { label: "100ml", price: 1750 },
    ],
  },
  {
    id: 6,
    img: perfume3,
    title: "Dior",
    subtitle: "J'adore Parfum",
    basePrice: 1100,
    sizes: [
      { label: "20ml", price: 1100 },
      { label: "50ml", price: 1500 },
      { label: "100ml", price: 2100 },
    ],
  },
  {
    id: 7,
    img: perfume1,
    title: "Tom Ford",
    subtitle: "Black Orchid",
    basePrice: 1200,
    sizes: [
      { label: "20ml", price: 1200 },
      { label: "50ml", price: 1600 },
      { label: "100ml", price: 2200 },
    ],
  },
  {
    id: 8,
    img: perfume2,
    title: "YSL",
    subtitle: "Libre Intense",
    basePrice: 980,
    sizes: [
      { label: "20ml", price: 980 },
      { label: "50ml", price: 1350 },
      { label: "100ml", price: 1900 },
    ],
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    setIsHovered(false);  // 👈 Mark as not hovered
  };

  const handleMouseEnter = () => {
    setIsHovered(true);   // 👈 Mark as hovered
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftHandler = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRightHandler = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // ✅ Only apply horizontal scroll when hovered
  const handleWheelScroll = (e) => {
    if (isHovered) {
      e.preventDefault();
      scrollRef.current.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="bg-white text-black-900 py-20 px-6 md:px-16 relative">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 font-serif">
        You may also like
      </h2>

      {/* Scroll Arrows */}
      <button
        onClick={scrollLeftHandler}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-3xl hover:text-[#d4af37] z-10"
      >
        &#8592;
      </button>

      <button
        onClick={scrollRightHandler}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-3xl hover:text-[#d4af37] z-10"
      >
        &#8594;
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheelScroll}
      >
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="min-w-[280px] md:min-w-[300px] h-[360px] flex-shrink-0 bg-white rounded-2xl shadow-md border border-gray-700 p-4 text-center relative overflow-hidden"
          >
            {/* Image Hover Zoom */}
            <div className="w-full h-3/5 flex items-center justify-center overflow-hidden">
              <img
                src={perfume.img}
                alt={perfume.title}
                className="h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="mt-4 text-white space-y-1">
              <h3 className="text-xl font-semibold">{perfume.title}</h3>
              <p className="text-yellow-500 text-sm">{perfume.subtitle}</p>
              <p className="text-[#d4af37] font-bold">
                Starting at ₹{perfume.basePrice}
              </p>

              <Link
                to="/order"
                state={{
                  img: perfume.img,
                  title: perfume.title,
                  subtitle: perfume.subtitle,
                  basePrice: perfume.basePrice,
                  sizes: perfume.sizes,
                }}
                className="mt-2 inline-block w-full h-9 text-sm border border-black rounded-md text-black text-center leading-9 hover:text-[#d4af37] transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
