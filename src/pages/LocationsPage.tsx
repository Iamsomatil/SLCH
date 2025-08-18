import React from 'react';
import { motion } from 'framer-motion';
import MapComponent from '../components/MapComponent';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    city: 'New York',
    state: 'New York',
    address: '123 Business District Ave, New York, NY 10001',
    phone: '(555) 123-4567',
    email: 'newyork@sunlifehousing.com',
    services: ['Corporate Housing', 'Facility Management', 'Property Management'],
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  },
  {
    city: 'Los Angeles',
    state: 'California',
    address: '456 Corporate Plaza, Los Angeles, CA 90210',
    phone: '(555) 234-5678',
    email: 'losangeles@sunlifehousing.com',
    services: ['Corporate Housing', 'Property Management', 'Relocation Services'],
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  },
  {
    city: 'Chicago',
    state: 'Illinois',
    address: '789 Downtown Circle, Chicago, IL 60601',
    phone: '(555) 345-6789',
    email: 'chicago@sunlifehousing.com',
    services: ['Facility Management', 'Maintenance Services', 'Consulting'],
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  },
  {
    city: 'Houston',
    state: 'Texas',
    address: '321 Energy Corridor Blvd, Houston, TX 77002',
    phone: '(555) 456-7890',
    email: 'houston@sunlifehousing.com',
    services: ['Corporate Housing', 'Consulting Services', 'Relocation Services'],
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  }
];

const coverageAreas = [
  'New York', 'New Jersey', 'Connecticut',
  'California', 'Nevada', 'Arizona',
  'Illinois', 'Indiana', 'Wisconsin',
  'Texas', 'Oklahoma', 'Louisiana',
  'Florida', 'Georgia', 'North Carolina',
  'Washington', 'Oregon', 'Colorado'
];

const LocationsPage: React.FC = () => {
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
            Our Locations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We serve clients across multiple states with regional offices providing localized 
            expertise and 24/7 support for all your corporate housing and facility management needs.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Interactive Coverage Map
          </h2>
          <MapComponent />
        </motion.section>

        {/* Office Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Regional Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={`${location.city}-${location.state}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {location.city}, {location.state}
                    </h3>
                    <div className="flex items-start space-x-2 text-gray-600">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gold" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-navy hover:text-gold transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-gold" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-navy hover:text-gold transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gold" />
                      <span className="text-navy text-sm">{location.hours}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coverage Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Service Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            We provide services across the following states and regions. Don't see your area listed? 
            Contact us to discuss how we can extend our services to your location.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-navy font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-navy rounded-2xl p-8 md:p-12 text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Services in a New Area?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're continuously expanding our service areas. If you need corporate housing or 
            facility management services in a location not currently listed, let us know. 
            We may be able to accommodate your needs through our partner network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LocationsPage;