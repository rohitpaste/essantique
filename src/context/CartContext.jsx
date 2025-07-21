// ✅ CartContext.js (Firebase + React Context integration)
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;
    const cartRef = collection(db, "users", user.uid, "cart");
    const unsub = onSnapshot(cartRef, (snapshot) => {
      setCartItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, [user]);

  const addToCart = async (item) => {
    if (!user) return alert("Please login to add items to cart");
    await addDoc(collection(db, "users", user.uid, "cart"), item);
  };

  const removeFromCart = async (id) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "cart", id));
  };

  const clearCart = async () => {
    if (!user) return;
    const cartRef = collection(db, "users", user.uid, "cart");
    const snap = await getDocs(cartRef);
    snap.forEach((docu) => deleteDoc(docu.ref));
  };

  const placeOrder = async (items) => {
    if (!user) return;
    const orderRef = collection(db, "users", user.uid, "orders");
    await addDoc(orderRef, {
      createdAt: new Date(),
      items,
      status: "Placed",
    });
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
