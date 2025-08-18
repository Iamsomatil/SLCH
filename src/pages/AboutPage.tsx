import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building, Clock, Shield, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Properties Managed', icon: Building },
    { number: '10K+', label: 'Satisfied Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '99%', label: 'Client Satisfaction', icon: Award }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery, from initial consultation to ongoing support.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.',
      icon: Shield
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our processes and services to stay ahead of industry trends and client needs.',
      icon: Building
    },
    {
      title: 'Care',
      description: 'We genuinely care about our clients\' success and work tirelessly to exceed their expectations.',
      icon: Heart
    }
  ];

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
            About SunLife Housing Corp
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been the trusted partner for corporations and individuals 
            seeking premium housing solutions and comprehensive facility management services.
          </p>
        </motion.div>

        {/* Hero Image and Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern corporate housing complex"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-navy">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2009, SunLife Housing Corp emerged from a simple observation: 
              business travelers and relocating employees deserved better than generic hotel stays 
              and impersonal service. Our founder, Sarah Johnson, recognized the need for a 
              company that could provide home-like comfort with professional-grade service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a small operation managing a handful of furnished apartments 
              has grown into a comprehensive service provider managing hundreds of properties 
              across multiple states. Our success is built on the foundation of understanding 
              that every client has unique needs and deserves personalized attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to innovate and expand our services while maintaining the 
              personal touch that has made us a trusted partner for Fortune 500 companies, 
              healthcare systems, educational institutions, and individual professionals.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-navy rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These numbers represent more than statistics – they represent relationships, 
              trust, and the success of our clients across the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gold/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide exceptional corporate housing and facility management services that 
              enable our clients to focus on their core business objectives while we handle 
              their property and accommodation needs with unmatched professionalism and care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that everyone deserves a comfortable, safe, and well-maintained 
              environment, whether it's a temporary corporate housing assignment or a 
              permanent facility management partnership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To be the leading provider of corporate housing and facility management services, 
              recognized for our innovation, reliability, and commitment to exceeding client 
              expectations in every interaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where businesses can seamlessly expand into new markets, 
              employees can relocate with confidence, and property owners can trust their 
              investments to professional management that truly cares about results.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Choose SunLife Housing Corp?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on delivering results that matter to our clients. 
              Here's what sets us apart in the corporate housing and facility management industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Every client receives customized solutions tailored to their specific needs and preferences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Over 15 years of consistent service delivery with industry-leading satisfaction rates.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock availability for emergencies and immediate assistance when needed.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure consistent excellence across all properties.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">Technology Integration</h3>
              <p className="text-gray-600">
                Modern technology solutions for seamless booking, communication, and service delivery.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">Flexible Solutions</h3>
              <p className="text-gray-600">
                Adaptable services that scale with your business needs and changing requirements.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;