import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";

const ContactPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Contact | SunLife Facility Solutions"
        description="Contact SunLife Facility Solutions about service requirements, capabilities, partnerships, or teaming opportunities."
        canonicalPath="/contact"
      />
      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Start a Conversation</h1>
            <p className="page-intro">
              Contact SunLife to discuss a service requirement, selected
              capability, partnership, or teaming opportunity.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <h2 className="text-2xl font-bold text-navy">SunLife Facility Solutions</h2>
            <div className="mt-7 border-t border-gray-300">
              <a
                href="tel:+17544322302"
                className="flex gap-4 border-b border-gray-300 py-5 text-gray-700 hover:text-navy"
              >
                <Phone className="mt-0.5 h-5 w-5 flex-none text-gold" aria-hidden="true" />
                <span><strong className="accent-small block text-sm">Phone</strong>(754) 432-2302</span>
              </a>
              <a
                href="mailto:admin@sunlifehousingcorp.com"
                className="flex gap-4 border-b border-gray-300 py-5 text-gray-700 hover:text-navy"
              >
                <Mail className="mt-0.5 h-5 w-5 flex-none text-gold" aria-hidden="true" />
                <span className="min-w-0 break-all"><strong className="accent-small block text-sm">Email</strong>admin@sunlifehousingcorp.com</span>
              </a>
              <p className="flex gap-4 border-b border-gray-300 py-5 text-gray-700">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-gold" aria-hidden="true" />
                <span><strong className="accent-small block text-sm">Headquarters</strong>Tampa, Florida</span>
              </p>
            </div>
          </aside>

          <div>
            <h2 className="text-2xl font-bold text-navy">Send a message</h2>
            <p className="mt-3 mb-7 max-w-xl leading-7 text-gray-600">
              Provide enough detail for the team to route your inquiry appropriately.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
