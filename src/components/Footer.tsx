import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Services", to: "/services" },
  { label: "Past Performance", to: "/past-performance" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t-4 border-gold bg-navy text-white">
      <div className="site-container py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.75fr_1fr] md:gap-12">
          <div>
            <h2 className="text-xl font-bold">SunLife Facility Solutions</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">
              Facility maintenance, remediation, pavement, elevator, roofing,
              protective, and specialty services.
            </p>
            <p className="mt-4 text-xs leading-5 text-gray-400">
              Legal company name: SunLife Corporate Housing LLC
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <a
                href="tel:+17544322302"
                className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
              >
                <Phone className="h-4 w-4 flex-none" aria-hidden="true" />
                (754) 432-2302
              </a>
              <a
                href="mailto:admin@sunlifehousingcorp.com"
                className="flex items-start gap-3 break-all transition-colors duration-200 hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
                admin@sunlifehousingcorp.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-none" aria-hidden="true" />
                Tampa, Florida
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} SunLife Corporate Housing LLC. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
