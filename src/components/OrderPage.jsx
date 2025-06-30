import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { img, title, subtitle, basePrice, sizes } = location.state || {};

  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0].label : "");
  const [price, setPrice] = useState(sizes ? sizes[0].price : basePrice);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleSizeChange = (e) => {
    const selected = e.target.value;
    setSelectedSize(selected);
    const selectedSizeObj = sizes.find((size) => size.label === selected);
    setPrice(selectedSizeObj.price);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== "") {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        img,
        title,
        subtitle,
        selectedSize,
        price,
      },
    });
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: Date.now(), // Generate unique id (you can improve this later with actual product id)
      img,
      title,
      subtitle,
      selectedSize,
      price,
      quantity: 1,
    };

    addToCart(productToAdd);
    alert("Product added to cart!");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section className="bg-white text-black py-10 px-6 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img src={img} alt={title} className="w-full max-w-sm object-contain" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-yellow-500 mb-4">{subtitle}</p>

          {/* Size Selector */}
          {sizes && (
            <div className="mb-4">
              <label className="block mb-2 font-medium">Select Size:</label>
              <select
                value={selectedSize}
                onChange={handleSizeChange}
                className="border rounded-md p-2 w-full"
              >
                {sizes.map((size) => (
                  <option key={size.label} value={size.label}>
                    {size.label} - ₹{size.price}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Price */}
          <p className="text-xl font-semibold mb-4">Price: ₹{price}</p>

          {/* Buttons */}
          <div className="space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-[#d4af37] text-white px-4 py-2 rounded hover:bg-[#c49e28] transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        {reviews.length > 0 ? (
          <ul className="space-y-2 mb-6">
            {reviews.map((review, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded">
                {review}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mb-6">No reviews yet. Be the first to review!</p>
        )}

        <form onSubmit={handleReviewSubmit} className="space-y-3">
          <textarea
            rows={3}
            placeholder="Write your review here..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#d4af37] text-white px-4 py-2 rounded hover:bg-[#c49e28] transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderPage;
