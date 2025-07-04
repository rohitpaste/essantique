// src/pages/MyOrders.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const MyOrders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser) return;
      const ordersRef = collection(db, "users", currentUser.uid, "orders");
      const querySnapshot = await getDocs(ordersRef);
      const ordersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersList);
    };

    fetchOrders();
  }, [currentUser]);

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="flex items-center space-x-4">
              <div>
                <p>Total: ₹{order.total}</p>
                <p>Status: {order.status}</p>
                <p>Items: {order.items.map(i => `${i.title} (${i.selectedSize})`).join(", ")}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
