import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-16 py-10 mt-16">
      {/* Top Features Section */}
      <div className="bg-[#fff] text-center py-8">
        <h2 className="text-3xl mb-6 font-serif">Why Trust Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center text-sm">
          {/* Icons and Labels */}
          <div>
            <div className="text-yellow-500 text-3xl mb-2">💎</div>
            <p>Premium Quality</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">🐰</div>
            <p>Cruelty Free</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">⏳</div>
            <p>Long Lasting</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">🌸</div>
            <p>Variety of Fragrances</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">🧪</div>
            <p>Derma Tested</p>
          </div>
          <div>
            <div className="text-yellow-500 text-3xl mb-2">🌿</div>
            <p>100% Vegan</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-sm">
        {/* About */}
        <div>
          <h3 className="font-bold mb-2">ABOUT OUR STORE</h3>
          <p>
            At Essantique, we believe that everyone deserves to experience the luxury of a great fragrance.
          </p>
          <p className="mt-2">
            That’s why we offer a vast collection of scents inspired by some of the world's best and most legendary perfumes, all at affordable prices.
          </p>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-bold mb-2">CUSTOMER SERVICES</h3>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-2">NEWSLETTER</h3>
          <p>Subscribe to unlock members-only discounts and the latest news!</p>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button type="submit" className="bg-yellow-600 px-4 rounded-r hover:bg-yellow-500">
              →
            </button>
          </form>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <p>Stay connected and updated! Join us on our social media platforms for the latest news and updates.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-xs text-gray-400">
        Copyright ©2025 Essantique All Rights Reserved. Developed By Rohit.
      </div>
    </footer>
  );
};

export default Footer;
