// components/OrderDetails.jsx
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { orderId } = useParams();

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Order Details</h1>
      <p className="mt-4">Order ID: {orderId}</p>
      {/* Later: Fetch order data from Firestore using orderId */}
    </div>
  );
}
