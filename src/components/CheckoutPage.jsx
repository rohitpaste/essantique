import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { img, title, selectedSize, price } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handlePlaceOrder = () => {
    alert(`Order Placed Successfully with ${paymentMethod} payment!`);
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Contact, Delivery, Payment */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder();
          }}
          className="md:col-span-2 space-y-6"
        >
          {/* Contact */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <input
              type="email"
              placeholder="Email or Mobile Number"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Delivery */}
          <div className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Delivery Address</h2>
            <input
              type="text"
              placeholder="Address"
              className="w-full border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border rounded p-2"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="City"
                className="w-1/3 border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="State"
                className="w-1/3 border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="PIN Code"
                className="w-1/3 border rounded p-2"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Payment */}
          <div className="bg-white p-6 rounded shadow">
  <h2 className="text-lg font-semibold mb-2">Payment Method</h2>

  <select
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-full border rounded p-2"
    required
  >
    <option value="COD">Cash on Delivery (COD)</option>
    <option value="UPI">UPI Payment</option>
    <option value="Credit/Debit Card">Credit / Debit Card</option>
  </select> 

  <button
    type="submit"
    className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
  >
    Place Order
  </button>

  <button
    type="button"
    onClick={() => navigate("/")}
    className="mt-2 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition duration-300"
  >
    Cancel
  </button>
</div>

        </form>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          {img && (
            <div className="flex space-x-4">
              <img
                src={img}
                alt={title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-medium">{title}</p>
                {selectedSize && (
                  <p className="text-sm text-gray-500">{selectedSize}</p>
                )}
                <p>₹{price}</p>
              </div>
            </div>
          )}

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{price}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Enter shipping address</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
