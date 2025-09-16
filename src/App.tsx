import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GovernmentHousingPage from "./pages/GovernmentHousingPage";
import ContractVehiclesPage from "./pages/ContractVehiclesPage";
import PastPerformancePage from "./pages/PastPerformancePage";
import FAQPage from "./pages/FAQPage";
import CapabilityStatementPage from "./pages/CapabilityStatementPage";
import PrivacyCompliancePage from "./pages/PrivacyCompliancePage";
import AccessibilityPage from "./pages/AccessibilityPage";
import GovernmentContractingPage from "./pages/GovernmentContractingPage";
import CorporateHousingPage from "./pages/CorporateHousingPage";

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 300,
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
});

// Custom hook to handle route changes
const useNProgress = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Start progress bar when location changes
    NProgress.start();
    
    // Simulate loading time
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.key, navType]);

  return null;
};

// Progress bar component
const TopProgressBar = () => {
  useNProgress();
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <TopProgressBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/government-contracting"
              element={<GovernmentContractingPage />}
            />
            <Route
              path="/corporate-housing"
              element={<CorporateHousingPage />}
            />
            <Route
              path="/services/government-housing"
              element={<GovernmentHousingPage />}
            />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route
              path="/contract-vehicles"
              element={<ContractVehiclesPage />}
            />
            <Route path="/past-performance" element={<PastPerformancePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/resources/capability-statement"
              element={<CapabilityStatementPage />}
            />
            <Route path="/privacy" element={<PrivacyCompliancePage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
