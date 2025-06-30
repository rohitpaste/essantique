import { ShieldCheck, RotateCcw, Truck, Wallet } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={24} className="text-[#d4af37]" />, text: "Secure Payment" },
  { icon: <RotateCcw size={24} className="text-[#d4af37]" />, text: "20%off" },
  { icon: <Wallet size={24} className="text-[#d4af37]" />, text: "Cash on Delivery" },
  { icon: <Truck size={24} className="text-[#d4af37]" />, text: "CoupleOffer" },
];

const AutoScrolling = () => {
  return (
    <div className="w-full bg-[#fffde7] py-4 overflow-hidden border-t border-yellow-200">
      <div className="animate-scroll flex whitespace-nowrap space-x-16 px-6">
        {Array(3)
          .fill(features)
          .flat()
          .map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 min-w-max">
              {feature.icon}
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AutoScrolling;
