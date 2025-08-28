import React from "react";
import { Stethoscope, Footprints, Info } from "lucide-react";

import { useState, useEffect } from "react";

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#services");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const additionalServices = [
    {
      icon: Footprints,
      title: "PODIATRY SERVICES",
      description:
        "Care for foot and ankle conditions, including ingrown toe nails and fungal infections",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      page: "podiatry-services",
    },
    {
      icon: Stethoscope,
      title: "SKIN TREATMENT",
      description: "All skin conditions and skin whitening treatments",
      bgColor: "bg-purple-100",
      iconColor: "text-[#5e8f1e]",
      page: "skin-treatment",
    },
    {
      icon: Info,
      title: "NUTRITION/DIET COUNSELING",
      description:
        "Personalized guidance on healthy eating and meal planning to support your overall well-being",
      bgColor: "bg-green-100",
      iconColor: "text-[#22578c]",
      page: "nutrition-counseling",
    },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "General Treatments",
      treatments: [
        "General Health Check-ups",
        "Chronic Disease Management",
        "Wound Care",
        "Preventive Care",
        "Diabetes Management",
      ],
      color: "#22578c",
      page: "general-treatments",
    },
    {
      icon: Footprints,
      title: "Diabetic Foot Treatments",
      treatments: [
        "Foot Ulcer Care",
        "Infection Management",
        "Neuropathy Management",
        "Foot Deformity Treatment",
        "Amputation Prevention",
      ],
      color: "#5e8f1e",
      page: "diabetic-foot-treatments",
    },
  ];

  const navigateToPage = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#5e8f1e] font-semibold text-sm uppercase tracking-wide mb-4">
              OUR SERVICES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Serve in Different for our <br />
              <span className="text-[#22578c]">Our Patients</span>
              <br />
            </h2>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => navigateToPage(service.page)}
                  className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-8">
                    <IconComponent className="h-16 w-16 text-[#22578c] group-hover:text-blue-700 transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    {service.title}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {service.treatments.map((treatment, treatmentIndex) => (
                      <li key={treatmentIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-base leading-relaxed">
                          {treatment}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="text-blue-600 font-semibold text-base hover:text-blue-700 transition-colors flex items-center space-x-2 group-hover:translate-x-1">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#22578c]">Additional</span> Service
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigateToPage(service.page)}
                  className={`${service.bgColor} rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-6">
                    <IconComponent
                      className={`h-10 w-10 ${service.iconColor}`}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
