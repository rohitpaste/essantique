import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase"; // Adjust the path as needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const BuyNowPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    email: "",
    country: "India",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to place an order.");
      return;
    }

    const orderData = {
      ...formData,
      createdAt: serverTimestamp(),
      totalAmount: 599, // Replace with actual total if needed
      productTitle: "GLITCH IN THE MATRIX",
      productQuantity: 4,
      productSize: "20ml",
      productPrice: 599,
    };

    try {
      await addDoc(collection(db, "users", user.uid, "orders"), orderData);
      alert("Order placed successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Contact */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Delivery */}
          <div className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Delivery</h2>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>

            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 border rounded p-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 border rounded p-2"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />

            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />

            <div className="flex space-x-2">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-1/3 border rounded p-2"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-1/3 border rounded p-2"
              />
              <input
                type="text"
                name="pinCode"
                placeholder="PIN Code"
                value={formData.pinCode}
                onChange={handleChange}
                className="w-1/3 border rounded p-2"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Payment */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Payment Method</h2>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="COD">Cash on Delivery (COD)</option>
              <option value="UPI">UPI Payment</option>
              <option value="Credit/Debit Card">Credit / Debit Card</option>
            </select>

            <div className="mt-4 space-x-4">
              <button
                type="submit"
                className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              >
                Place Order
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="mt-2 px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Product"
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p>GLITCH IN THE MATRIX</p>
              <p className="text-sm text-gray-500">20ml x4</p>
              <p>₹599.00</p>
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Discount code"
              className="w-full border rounded p-2"
            />
            <button className="mt-2 w-full bg-gray-800 text-white py-1 rounded">
              Apply
            </button>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹599.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Enter shipping address</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹599.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
