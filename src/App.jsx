import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

// Pages
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import PerfumeCollection from "./components/PerfumeCollection";
import Footer from "./components/Footer";
import OrderPage from "./components/OrderPage";
import Cartpage from "./components/Cartpage";
import CheckoutPage from "./components/CheckoutPage";
import BuyNowPage from "./components/BuyNowPage";
import MyOrder from "./components/MyOrder";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AutoScrolling from "./components/AutoScrolling";
import CustomizePerfume from "./components/CustomizePerfume"; // ✅ New Page

// ✅ HomePage includes CustomizePerfume section
const HomePage = () => (
  <div className="max-w-7xl mx-auto pt-20 px-4">
    <HeroSection />
    <Gallery />
    <PerfumeCollection />
    <CustomizePerfume />
  </div>
);

// App Layout
const Layout = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/buynow" element={<BuyNowPage />} />
        <Route path="/orders" element={<MyOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scroll" element={<AutoScrolling />} />

        {/* ✅ Separate Page */}
        <Route path="/customize" element={<div className="max-w-7xl mx-auto pt-20 px-4"><CustomizePerfume /></div>} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
};

export default App;
