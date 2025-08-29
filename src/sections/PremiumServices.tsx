import React, { useState } from "react";
import {
  Stethoscope,
  Droplet,
  Shield,
  Microscope,
  Footprints,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Map service IDs to desired routes
const serviceRouteMap = {
  "diabetes-management": "/general-services/diabetes-management",
  "podiatry-services": "/general-services/podiatry",
  "skin-care": "/general-services/skin-care",
  "general-healthcare": "/general-services/general-healthcare",
  "home-treatment": "/general-services/home-treatment",
  "lab-diagnostics": "/general-services/lab-diagnostics",
};

const services = [
  {
    id: "diabetes-management",
    icon: Droplet,
    title: "Diabetes Management",
    description:
      "Comprehensive care for uncontrolled diabetes with personalized treatment plans",
    items: [
      "Comprehensive diabetes care",
      "Uncontrolled diabetes management",
      "Diabetic foot ulcer treatment",
      "Personalized treatment plans",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
  {
    id: "podiatry-services",
    icon: Footprints,
    title: "Podiatry Services",
    description: "Specialized foot and ankle care for diabetic patients",
    items: [
      "Diabetic foot care",
      "Foot ulcer treatment",
      "Comprehensive foot and ankle care",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
  {
    id: "skin-care",
    icon: Shield,
    title: "Skin Care",
    description:
      "Advanced dermatological treatments for various skin conditions",
    items: [
      "Skin whitening treatments",
      "Treatment for various skin problems",
      "Personalized skin health solutions",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
  {
    id: "general-healthcare",
    icon: Stethoscope,
    title: "General Healthcare",
    description: "Comprehensive medical care and preventive health services",
    items: [
      "General physician consultations",
      "Emergency health issue management",
      "Preventive healthcare services",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
  {
    id: "home-treatment",
    icon: Home,
    title: "Home Treatment Care",
    description: "Personalized healthcare services delivered at your doorstep",
    items: [
      "Doctor and nurse home visits",
      "Medication and injection support",
      "Post-surgery and elderly care",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
  {
    id: "lab-diagnostics",
    icon: Microscope,
    title: "Lab & Diagnostics",
    description:
      "Accurate lab tests and diagnostic services for better treatment decisions",
    items: [
      "Blood and urine tests",
      "X-ray, ECG, and ultrasound",
      "Home sample collection",
    ],
    color: "text-[#22578c]",
    bgColor: "bg-blue-50",
    activeColor: "bg-[#22578c]",
    borderColor: "border-[#22578c]",
  },
];

const PremiumServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
    }, 150);
  };

  const activeService = services[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-[#22578c]/10 rounded-full mb-4">
            <div className="w-3 h-3 bg-[#22578c] rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="text-[#22578c] relative">
              Services
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#22578c] to-blue-400 rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored healthcare solutions designed to address your unique
            medical needs with cutting-edge treatments and personalized care
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 pt-0 lg:pt-4">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="space-y-3">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    const isActive = activeTab === index;

                    return (
                      <button
                        key={service.id}
                        onClick={() => handleTabChange(index)}
                        className={`
                          w-full text-left p-4 rounded-xl transition-all duration-300 ease-out
                          hover:scale-105 hover:shadow-lg group relative overflow-hidden
                          ${
                            isActive
                              ? `${service.activeColor} text-white shadow-lg transform scale-105`
                              : `bg-gray-50 hover:bg-gray-100 text-gray-700`
                          }
                        `}
                      >
                        {/* Animated background */}
                        <div
                          className={`
                            absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300
                            ${
                              isActive ? "opacity-20" : "group-hover:opacity-10"
                            }
                            ${service.activeColor.replace(
                              "bg-",
                              "from-"
                            )} to-transparent
                          `}
                        ></div>

                        <div className="relative flex items-center space-x-4">
                          <div
                            className={`
                              p-2 rounded-lg transition-all duration-300
                              ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : `${service.bgColor} ${service.color}`
                              }
                            `}
                          >
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h4
                              className={`font-semibold transition-colors duration-300 ${
                                isActive ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {service.title}
                            </h4>
                            <div
                              className={`
                                w-0 h-0.5 bg-white/50 transition-all duration-300 mt-1
                                ${isActive ? "w-full" : "group-hover:w-1/2"}
                              `}
                            ></div>
                          </div>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <div className="w-2 h-8 bg-white/30 rounded-full"></div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 pt-3">
            <div
              className={`
                transition-all duration-300 ease-out transform
                ${
                  isTransitioning
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }
              `}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header with gradient background */}
                <div
                  className={`
                    relative p-8 text-white overflow-hidden
                    bg-gradient-to-br ${activeService.activeColor.replace(
                      "bg-",
                      "from-"
                    )} 
                    to-${activeService.color.split("-")[1]}-400
                  `}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <activeService.icon className="w-full h-full" />
                  </div>
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>

                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <activeService.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">
                          {activeService.title}
                        </h3>
                        <div className="w-16 h-1 bg-white/50 rounded-full mt-2"></div>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div
                      className={`w-1 h-6 ${activeService.activeColor} rounded-full mr-3`}
                    ></div>
                    What We Offer
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeService.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start space-x-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105"
                        style={{
                          animationDelay: `${idx * 100}ms`,
                          animation: isTransitioning
                            ? "none"
                            : "slideIn 0.5s ease-out forwards",
                        }}
                      >
                        <div
                          className={`
                            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                            ${activeService.activeColor} group-hover:scale-110 transition-transform duration-300
                          `}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      className={`
                        w-full py-4 px-6 rounded-xl text-white font-semibold
                        ${activeService.activeColor} hover:opacity-90
                        transition-all duration-300 hover:transform hover:scale-105
                        shadow-lg hover:shadow-xl
                      `}
                      onClick={() => {
                        const path =
                          serviceRouteMap[
                            activeService.id as keyof typeof serviceRouteMap
                          ];
                        if (path) {
                          navigate(path);
                          window.scrollTo(0, 0); // Scroll to top after navigating
                        }
                      }}
                    >
                      Learn More About {activeService.title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumServices;
