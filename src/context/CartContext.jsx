// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from Firestore when user logs in
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "users", currentUser.uid, "cart")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const addToCart = async (item) => {
    if (!currentUser) return alert("Please log in first!");

    try {
      await addDoc(collection(db, "users", currentUser.uid, "cart"), item);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!currentUser) return;

    try {
      await deleteDoc(doc(db, "users", currentUser.uid, "cart", itemId));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const clearCart = async () => {
    if (!currentUser) return;

    const q = query(collection(db, "users", currentUser.uid, "cart"));
    const snapshot = await onSnapshot(q, () => {});
    snapshot.docs.forEach(async (docSnap) => {
      await deleteDoc(doc(db, "users", currentUser.uid, "cart", docSnap.id));
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
