import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info - Removed logo */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">About Us</h3>
            <p className="text-gray-300 text-sm">
              Providing facility maintenance, remediation, pavement, elevator,
              and specialty services across multiple states.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+17542070982"
                  className="hover:text-gold transition-colors"
                >
                  (+1) 754-207-0982
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="mailto:Hosea@sunlifehousingcorp.com"
                    className="hover:text-gold transition-colors"
                  >
                    Hosea@sunlifehousingcorp.com
                  </a>
                  <a
                    href="mailto:Troy@sunlifehousingcorp.com"
                    className="hover:text-gold transition-colors"
                  >
                    Troy@sunlifehousingcorp.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Multiple Locations</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Sunlife Corporate Housing. All rights reserved. Government-focused
            corporate housing services. No claims made regarding specific
            contract vehicles until verified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
