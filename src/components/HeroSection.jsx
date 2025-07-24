import React, { useEffect, useState, useRef } from "react";
import image1 from "../assets/h1.png";
import image2 from "../assets/h2.png";
import image3 from "../assets/h3.png";

const perfumeImages = [
  { img: image1, label: "Woody Essence" },
  { img: image2, label: "Floral Harmony" },
  { img: image3, label: "Citrus Bloom" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const total = perfumeImages.length;
    const index = (newIndex + total) % total;
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const getCardClass = (i) => {
    const total = perfumeImages.length;
    const offset = (i - currentIndex + total) % total;
    if (offset === 0) return "card center";
    if (offset === 1) return "card right-1";
    if (offset === 2) return "card right-2";
    if (offset === total - 1) return "card left-1";
    if (offset === total - 2) return "card left-2";
    return "card hidden";
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      updateCarousel(currentIndex + (diff > 0 ? 1 : -1));
    }
  };

  return (
    <section
      id="home"
      className="hero-carousel-section bg-black text-white py-24 px-4 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="about-title">ESSENTIQUE</h1>

      {/* Carousel container */}
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>
          ‹
        </button>
        <div className="carousel-track">
          {perfumeImages.map((item, i) => (
            <div
              key={i}
              className={getCardClass(i)}
              onClick={() => updateCarousel(i)}
            >
              <img src={item.img} alt={item.label} />
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>
          ›
        </button>
      </div>

      {/* Bottle Info */}
      <div className="member-info">
        <h2 className="member-name">{perfumeImages[currentIndex].label}</h2>
        <p className="member-role">Exclusive Collection</p>
      </div>

      {/* Dots */}
      <div className="dots">
        {perfumeImages.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => updateCarousel(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
