import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Home } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Past Performance", path: "/past-performance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Sunlife Corporate Housing home"
          >
            <img
              src="/Sunlife-Logo.jpg"
              alt="Sunlife Corporate Housing logo"
              className="h-10 w-auto object-contain bg-transparent"
              style={{ mixBlendMode: 'multiply' }}
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">Sunlife Corporate Housing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  location.pathname === item.path ? "text-gold" : "text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center px-4 py-2 bg-gold text-white rounded-lg text-sm font-semibold hover:bg-brand-orange-700 transition-colors"
              aria-label="Request a Service Quote"
            >
              Request Service Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-gold transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-gold ${
                    location.pathname === item.path ? "text-gold" : "text-navy"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block px-3 py-2 bg-gold text-white rounded-lg text-base font-semibold text-center"
                aria-label="Request Government Housing Quote"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
