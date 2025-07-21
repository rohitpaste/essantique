import { useCart } from "../context/CartContext";
import { useState } from "react";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CustomizePerfume = () => {
  const { addToCart } = useCart();
  const [user] = useAuthState(auth);

  const [brand, setBrand] = useState("Chanel");
  const [notes, setNotes] = useState("");
  const [size, setSize] = useState("20ml");

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to customize and add to cart.");

    const price = size === "20ml" ? 500 : size === "50ml" ? 1200 : 2000;
    const newItem = {
      title: `${brand} Custom Perfume`,
      selectedSize: size,
      price,
      img: "https://via.placeholder.com/100x100.png?text=Perfume",
      fragranceNotes: notes,
      quantity: 1,
      isCustom: true,
      createdAt: serverTimestamp(),
    };

    // 1. Add to cart
    await addToCart(newItem);

    // 2. (Optional) Store in customPerfumes collection
    await addDoc(collection(db, "users", user.uid, "customPerfumes"), newItem);

    alert("Custom perfume added to cart!");
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold mb-6">Design Your Signature Scent</h2>
          <p className="text-gray-400 mb-6">Craft your own unique fragrance blend inspired by top brands.</p>
        </div>
        <div className="w-full md:w-1/2 bg-white text-black rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Customize Your Perfume</h3>
          <form onSubmit={handleAddToCart} className="space-y-4">
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full border rounded p-2">
              <option>Chanel</option>
              <option>Dior</option>
              <option>Gucci</option>
              <option>Versace</option>
              <option>Tom Ford</option>
            </select>
            <input
              type="text"
              placeholder="Fragrance Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded p-2"
            />
            <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full border rounded p-2">
              <option>20ml</option>
              <option>50ml</option>
              <option>100ml</option>
            </select>
            <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded">Add to Cart</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomizePerfume;
