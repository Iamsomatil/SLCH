import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Partnerships", path: "/past-performance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/Sunlife-Logo.jpg"
                alt="Sunlife Housing Corp Logo"
                className="h-20 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1 h-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navItems.map((navItem) => (
              <motion.div key={navItem.path} variants={itemVariants}>
                <Link
                  to={navItem.path}
                  className={`relative px-5 py-2.5 text-base font-medium transition-all duration-300 group ${
                    location.pathname === navItem.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-[#0056b3]'
                  }`}
                >
                  {navItem.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ${
                      location.pathname === navItem.path ? 'w-full' : 'group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center
          ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navItems.map((navItem) => (
                <Link
                  key={navItem.path}
                  to={navItem.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === navItem.path
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
