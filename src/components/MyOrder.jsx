import { useCart } from "../context/CartContext";

const MyOrders = () => {
  const { orders } = useCart();

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img src={order.img} alt={order.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <p>{order.title}</p>
                {order.selectedSize && <p>Size: {order.selectedSize}</p>}
                <p>₹{order.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
