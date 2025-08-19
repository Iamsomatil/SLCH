import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import ContactFormGov from "../components/ContactFormGov";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Request a Government Quote
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For agencies, DoD units, and government contractors. Provide mission
            details and per diem constraints; we’ll respond quickly with
            compliant options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-navy mb-6">
              Request Service Quote
            </h2>
            <ContactFormGov />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're available to discuss your needs and provide personalized
                solutions. Choose the contact method that works best for you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Phone</h3>
                  <p className="text-gray-600 mb-2">
                    Call us for immediate assistance
                  </p>
                  <a
                    href="tel:+17542070982"
                    className="text-gold hover:text-gold/80 font-medium"
                  >
                    (+1) 754-207-0982
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">
                    Send us your questions or requests
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:Hosea@sunlifehousingcorp.com"
                      className="text-gold hover:text-gold/80 font-medium"
                    >
                      Hosea@sunlifehousingcorp.com
                    </a>
                    <a
                      href="mailto:Troy@sunlifehousingcorp.com"
                      className="text-gold hover:text-gold/80 font-medium"
                    >
                      Troy@sunlifehousingcorp.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Headquarters</h3>
                  <p className="text-gray-600 mb-2">Visit our main office</p>
                  <p className="text-navy">Tampa, FL</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We're available during these hours
                  </p>
                  <div className="text-navy">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    24/7 Emergency
                  </h3>
                  <p className="text-gray-600 mb-2">
                    For urgent facility issues
                  </p>
                  <a
                    href="tel:+17542070982"
                    className="text-gold hover:text-gold/80 font-medium"
                  >
                    (+1) 754-207-0982
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1649858372553!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SunLife Housing Corp Location"
            ></iframe>
          </div>
        </motion.section>

        {/* Response Time */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gold/10 rounded-2xl p-8 mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-navy mb-4">
            Quick Response Guarantee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We understand that time is valuable. Our team typically responds to
            all inquiries within 2 hours during business hours and within 24
            hours on weekends. For emergencies, we're available 24/7.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
