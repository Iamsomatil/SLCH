import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import NProgress from 'nprogress';
import { MotionConfig } from "framer-motion";
import 'nprogress/nprogress.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PastPerformancePage from "./pages/PastPerformancePage";
import PrivacyCompliancePage from "./pages/PrivacyCompliancePage";
import AccessibilityPage from "./pages/AccessibilityPage";
import GovernmentContractingPage from "./pages/GovernmentContractingPage";
import PartnershipsPage from "./pages/PartnershipsPage";

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
      <div className="min-h-screen bg-white text-gray-800">
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
          >
            Skip to main content
          </a>
          <TopProgressBar />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/government-contracting"
                element={<GovernmentContractingPage />}
              />
              <Route
                path="/corporate-housing"
                element={<Navigate to="/services" replace />}
              />
              <Route
                path="/services/government-housing"
                element={<Navigate to="/services" replace />}
              />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route
                path="/contract-vehicles"
                element={<Navigate to="/government-contracting" replace />}
              />
              <Route path="/past-performance" element={<PastPerformancePage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/locations" element={<Navigate to="/contact" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<Navigate to="/about" replace />} />
              <Route path="/faq" element={<Navigate to="/contact" replace />} />
              <Route
                path="/resources/capability-statement"
                element={<Navigate to="/government-contracting" replace />}
              />
              <Route path="/privacy" element={<PrivacyCompliancePage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
            </Routes>
          </main>
          <Footer />
        </MotionConfig>
      </div>
    </Router>
  );
}

export default App;
