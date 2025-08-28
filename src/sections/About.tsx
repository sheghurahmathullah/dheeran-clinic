import React from "react";
import CountUp from "react-countup";

import { useState, useEffect } from "react";

const DiabeticsFootClinicAbout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="about-section" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-[#22578c] font-semibold text-sm uppercase tracking-wide mb-4">
                ABOUT DIABETIC FOOT CLINIC
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We Provide Finest Patient's{" "}
                <span className="text-gray-900">Care & Amenities</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Embrace a world of comprehensive diabetic foot healthcare where
                your well-being takes center stage. At our clinic, we're
                dedicated to providing you with personalized and compassionate
                medical services for diabetic foot complications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">Seamless Care</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Patient-Centered Care
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Warm and Welcoming Environment
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Personalized Approach
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Comprehensive Care
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Cutting-Edge Technology
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Expert Doctors
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                <span className="text-gray-800 font-medium">
                  Positive Reviews
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Our specialized diabetic foot clinic focuses on preventing and
              treating foot complications in diabetic patients. We provide
              comprehensive wound care, infection management, vascular
              assessments, and preventive education to help maintain optimal
              foot health and prevent amputations.
            </p>

            {/* Button */}
            <div>
              <button className="bg-[#22578c] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full flex items-center space-x-2 transition duration-300">
                <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>More About Us</span>
              </button>
            </div>
          </div>

          {/* Right Content - Images and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about.jpg"
                alt="Diabetic foot examination"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Stats Cards */}
            {/* Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-purple-100 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  <CountUp end={15} duration={2} />+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  TREATMENTS
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-green-100 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  <CountUp end={500} duration={2} />+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  PATIENT'S
                  <br />
                  REVIEWS
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-green-100 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  PATIENT'S
                  <br />
                  REVIEWS
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/home-about-1.webp"
                alt="Doctor consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabeticsFootClinicAbout;
