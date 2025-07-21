import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

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
import CustomizePerfume from "./components/CustomizePerfume";

// Newly added pages
import OrderDetails from "./components/OrderDetails";
import NotFound from "./components/NotFound";
import SearchResults from "./components/SearchResults"; // ✅ Added this import

// ✅ Home Page Composition
const HomePage = () => (
  <div className="max-w-7xl mx-auto pt-20 px-4">
    <HeroSection />
    <Gallery />
    <PerfumeCollection />
    <CustomizePerfume />
  </div>
);

// ✅ Layout Wrapper to Show Footer Only on Home Page
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
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/customize" element={
          <div className="max-w-7xl mx-auto pt-20 px-4">
            <CustomizePerfume />
          </div>
        } />
        <Route path="/search" element={<SearchResults />} /> {/* ✅ SearchResults route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

// ✅ Main App Entry Point with Context Providers
const App = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <Router>
          <Layout />
        </Router>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
