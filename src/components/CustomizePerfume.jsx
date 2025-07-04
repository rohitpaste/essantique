import React from "react";

const CustomizePerfume = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 font-serif">
        Customize Your Perfume
      </h2>

      <form className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Choose Brand:</label>
          <select className="w-full border rounded p-2">
            <option>Chanel</option>
            <option>Dior</option>
            <option>Gucci</option>
            <option>Versace</option>
            <option>Tom Ford</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Choose Fragrance Notes:</label>
          <input
            type="text"
            placeholder="e.g., Rose, Jasmine, Vanilla"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bottle Size:</label>
          <select className="w-full border rounded p-2">
            <option>20ml</option>
            <option>50ml</option>
            <option>100ml</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Create My Perfume
        </button>
      </form>
    </section>
  );
};

export default CustomizePerfume;
