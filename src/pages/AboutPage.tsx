import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Building, Clock, Shield, Heart } from "lucide-react";

const AboutPage: React.FC = () => {
  const stats = [
    { number: "500+", label: "Properties Managed", icon: Building },
    { number: "10K+", label: "Satisfied Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "99%", label: "Client Satisfaction", icon: Award },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery, from initial consultation to ongoing support.",
      icon: Award,
    },
    {
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, building trust through transparency and honest communication.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description:
        "We continuously innovate our processes and services to stay ahead of industry trends and client needs.",
      icon: Building,
    },
    {
      title: "Care",
      description:
        "We genuinely care about our clients' success and work tirelessly to exceed their expectations.",
      icon: Heart,
    },
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
            About Sunlife Corporate Housing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sunlife Corporate Housing LLC was founded with one mission: to bring
            clarity, consistency, and excellence to government contracting. We
            specialize in providing facility maintenance and environmental
            services to federal, state, and local agencies nationwide — ensuring
            compliance, safety, and results every time.
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
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Operations and facility services"
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
              Our team has successfully delivered projects in asbestos, mold,
              and lead remediation, preventative maintenance, pavement repair,
              and elevator services, supported by a trusted network of
              subcontractors and partners. With experience across multiple
              states and agencies, SCH combines responsiveness with results,
              giving our government clients confidence that their projects will
              be completed on time and within budget.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our first contract to our multi-million-dollar pursuits
              today, SCH has remained committed to one standard: delivering
              mission-ready solutions that exceed expectations.
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
              These numbers represent more than statistics – they represent
              relationships, trust, and the success of our clients across the
              years.
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
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
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
              To streamline administrative and operational support with
              dependable teams and processes — bringing clarity, consistency,
              and confidence to every contract we touch.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We deliver compliant, responsive, and results-driven solutions
              that help agencies and enterprises meet deadlines, manage
              resources, and exceed expectations.
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
              To be a trusted operational partner known for professionalism,
              responsiveness, and measurable outcomes across multi-state
              engagements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aim to set the standard for reliable contract administration
              and on-the-ground execution for government and commercial clients
              alike.
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
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Meet the Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Hosea Barnwell", title: "Chief Executive Officer" },
              { name: "Troy Austria", title: "Chief Operating Officer" },
              { name: "Samson Akinsanya", title: "Chief Technology Officer" },
              { name: "PJ Carungay", title: "Operations Coordinator" },
              { name: "Maria ", title: "Administrator" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
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
              Why Choose Sunlife Corporate Housing?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on delivering results that matter to
              our clients. Here's what sets us apart in the corporate housing
              and facility management industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Every client receives customized solutions tailored to their
                specific needs and preferences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Over 15 years of consistent service delivery with
                industry-leading satisfaction rates.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock availability for emergencies and immediate
                assistance when needed.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure consistent excellence
                across all properties.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">
                Technology Integration
              </h3>
              <p className="text-gray-600">
                Modern technology solutions for seamless booking, communication,
                and service delivery.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">
                Flexible Solutions
              </h3>
              <p className="text-gray-600">
                Adaptable services that scale with your business needs and
                changing requirements.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
