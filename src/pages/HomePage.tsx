import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GovernmentContractingInfo from "../components/GovernmentContractingInfo";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { serviceCapabilities } from "../data/services";

const HomePage: React.FC = () => {
  const introductionVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = introductionVideoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let hasStarted = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;
        video.muted = true;
        void video.play().catch(() => {
          // Native controls remain available if the browser blocks autoplay.
        });
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Seo
        title="SunLife Facility Solutions | Government Facility Services"
        description="SunLife Facility Solutions provides facility maintenance, remediation, pavement, elevator, roofing, protective, and specialty services."
        canonicalPath="/"
      />
      <HeroSection />

      <section
        className="border-b border-gray-200 bg-gray-50 py-12 md:py-16"
        aria-labelledby="video-introduction-heading"
      >
        <div className="site-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Company introduction</p>
            <h2 id="video-introduction-heading" className="section-title">
              Operational support with a clear point of contact
            </h2>
            <p className="section-copy">
              SunLife coordinates facility and specialty services around
              documented requirements, project communication, and accountable
              delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-5">
              <Link to="/about" className="text-link">
                About SunLife <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="text-link">
                Contact the team <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden border border-gray-300 bg-navy shadow-sm">
            <video
              ref={introductionVideoRef}
              className="block aspect-video w-full bg-navy object-contain"
              controls
              muted
              playsInline
              preload="none"
              poster="/videos/misson-poster.png"
              aria-label="SunLife Facility Solutions company introduction video"
            >
              <source src="/videos/mission-720.webm" type="video/webm" />
              <source src="/videos/mission-720.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </section>

      <section className="section-block bg-gray-50" aria-labelledby="capabilities-heading">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow">Core capabilities</p>
              <h2 id="capabilities-heading" className="section-title">
                Services aligned to facility and operational needs
              </h2>
            </div>
            <p className="leading-7 text-gray-600 md:justify-self-end">
              Explore SunLife&apos;s approved service capabilities and contact the
              team to discuss project-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCapabilities.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="site-container">
          <GovernmentContractingInfo />
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="site-container grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2">
          <article className="bg-white p-7 md:p-9">
            <p className="eyebrow">Government experience</p>
            <h2 className="text-2xl font-bold text-navy">Selected Contract Awards</h2>
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Review selected government awards organized by agency, project,
              and location.
            </p>
            <Link to="/past-performance" className="text-link mt-6">
              View Past Performance <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </article>

          <article className="bg-white p-7 md:p-9">
            <p className="eyebrow">Business relationships</p>
            <h2 className="text-2xl font-bold text-navy">Partnerships</h2>
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Learn how SunLife approaches teaming, subcontracting, and service
              collaboration opportunities.
            </p>
            <Link to="/partnerships" className="text-link mt-6">
              Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
