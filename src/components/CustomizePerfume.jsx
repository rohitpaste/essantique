// src/pages/CustomizePerfume.jsx

import React, { useState } from "react";

const CustomizePerfume = () => {
  const [brand, setBrand] = useState("");
  const [fragrance, setFragrance] = useState("");
  const [intensity, setIntensity] = useState("Moderate");
  const [size, setSize] = useState("50ml");
  const [customName, setCustomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const customPerfume = {
      brand,
      fragrance,
      intensity,
      size,
      customName,
    };

    console.log("Customized Perfume:", customPerfume);

    // You could add this to cart context, or navigate to checkout
    alert("Perfume customized successfully!");
  };

  return (
    <div className="p-8 text-black">
      <h2 className="text-3xl font-bold mb-6">Customize Your Perfume</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Select Brand:</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="border p-2 w-full">
            <option value="">--Choose--</option>
            <option value="Chanel">Chanel</option>
            <option value="Tom Ford">Tom Ford</option>
            <option value="Dior">Dior</option>
            <option value="YSL">YSL</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Fragrance Type:</label>
          <select value={fragrance} onChange={(e) => setFragrance(e.target.value)} className="border p-2 w-full">
            <option value="">--Choose--</option>
            <option value="Floral">Floral</option>
            <option value="Woody">Woody</option>
            <option value="Citrus">Citrus</option>
            <option value="Oriental">Oriental</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Intensity:</label>
          <div className="flex gap-4">
            <label><input type="radio" name="intensity" value="Mild" checked={intensity === "Mild"} onChange={(e) => setIntensity(e.target.value)} /> Mild</label>
            <label><input type="radio" name="intensity" value="Moderate" checked={intensity === "Moderate"} onChange={(e) => setIntensity(e.target.value)} /> Moderate</label>
            <label><input type="radio" name="intensity" value="Strong" checked={intensity === "Strong"} onChange={(e) => setIntensity(e.target.value)} /> Strong</label>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Bottle Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)} className="border p-2 w-full">
            <option value="20ml">20ml</option>
            <option value="50ml">50ml</option>
            <option value="100ml">100ml</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Custom Name (Optional):</label>
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="border p-2 w-full"
            placeholder="e.g., My Signature Scent"
          />
        </div>

        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Add Customized Perfume
        </button>
      </form>
    </div>
  );
};

export default CustomizePerfume;
