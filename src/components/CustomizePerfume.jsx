import React from "react";

const CustomizePerfume = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left Side - Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-serif">
            Design Your Signature Scent
          </h2>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Inspired by iconic brands like Chanel, Dior, Gucci, and more. Craft your own unique fragrance blend with notes that match your personality. Create a bottle that's exclusively yours.
          </p>
        </div>

        {/* Right Side - Customization Form */}
        <div className="w-full md:w-1/2 bg-white text-black rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Customize Your Perfume</h3>

          <form className="space-y-4">
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
              <label className="block text-sm font-medium mb-1">Fragrance Notes:</label>
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

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomizePerfume;
