// Navbar.jsx
import { Menu, X, ShoppingBag, User, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../constants/index";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
    setMobileDrawerOpen(false);
  };

  const handleLinkClick = () => setMobileDrawerOpen(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">Essentique</Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-orange-700 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setSearchOpen(true)} className="text-black hover:text-orange-600">
              <Search size={22} />
            </button>
            <Link to="/orders" className="text-black hover:text-orange-600"><ShoppingBag size={22} /></Link>
            <Link to="/cart" className="text-black hover:text-orange-600"><ShoppingCart size={22} /></Link>
            <Link to="/profile" className="text-black hover:text-orange-600"><User size={22} /></Link>
            <button onClick={toggleNavbar} className="lg:hidden">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-16 left-0 right-0 z-50 bg-white w-full p-8 shadow-md flex flex-col items-center lg:hidden space-y-6">
            <ul className="w-full space-y-4 text-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} onClick={handleLinkClick} className="text-lg block text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/orders" onClick={handleLinkClick}>My Orders</Link></li>
              <li><Link to="/cart" onClick={handleLinkClick}>Cart</Link></li>
              <li><Link to="/profile" onClick={handleLinkClick}>Profile</Link></li>
            </ul>
            {user && (
              <button onClick={handleLogout} className="block w-full text-center py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Logout
              </button>
            )}
            <Link to="#collections" onClick={handleLinkClick} className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-800 py-2 text-white rounded">
              Explore
            </Link>
          </div>
        )}

        
      </div>
    </nav>
  );
};

export default Navbar;
