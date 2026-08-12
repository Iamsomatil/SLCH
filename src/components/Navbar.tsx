import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Past Performance", path: "/past-performance" },
  { name: "Partnerships", path: "/partnerships" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === path
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <nav className="site-container" aria-label="Primary navigation">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center rounded-sm"
            aria-label="SunLife Facility Solutions home"
          >
            <img
              src="/Sunlife-Logo.jpg"
              alt="SunLife Facility Solutions"
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-3 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                    active ? "text-navy" : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-1 h-0.5 bg-gold transition-transform duration-200 xl:inset-x-4 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-gray-100 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
          >
            <div className="site-container space-y-1 py-4">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center border-l-2 px-4 text-base font-medium transition-colors duration-200 ${
                      active
                        ? "border-gold bg-gray-50 text-navy"
                        : "border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-navy"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
