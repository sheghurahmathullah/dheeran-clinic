import React, { useState, useEffect } from "react";
import {
  Calendar,
  Heart,
  Shield,
  Award,
  Stethoscope,
  Activity,
  ArrowRight,
} from "lucide-react";

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bookConsultation = () => {
    if (setCurrentPage) {
      setCurrentPage("consultation");
    }
  };

  const floatingIcons = [
    {
      Icon: Heart,
      delay: 0,
      position: "top-20 left-16",
      color: "text-rose-400",
    },
    {
      Icon: Shield,
      delay: 0.5,
      position: "top-32 right-20",
      color: "text-emerald-400",
    },
    {
      Icon: Stethoscope,
      delay: 1,
      position: "bottom-40 left-12",
      color: "text-blue-400",
    },
    {
      Icon: Activity,
      delay: 1.5,
      position: "bottom-24 right-16",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden py-32 md:py-0"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Minimal geometric shapes */}
        <div className="absolute top-1/4 left-8 w-2 h-20 bg-gradient-to-b from-blue-200 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 right-12 w-2 h-16 bg-gradient-to-b from-orange-200 to-transparent rounded-full opacity-60"></div>
        <div className="absolute top-16 right-1/4 w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="absolute top-24 right-1/4 w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-gray-300 rounded-full"></div>
      </div>

      {/* Floating Medical Icons - Minimal */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-0 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-20" : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: `${delay}s`,
            animation: `gentleFloat 8s ease-in-out infinite ${delay}s`,
          }}
        >
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
      ))}

      <div className="relative container mx-auto px-4 sm:px-6 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Content - Doctor Image */}
          <div
            className={`flex justify-center lg:justify-start order-2 lg:order-1 mt-8 lg:-mt-12 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-[380px] lg:max-w-[480px]">
              {/* Main image container */}
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Dr. Karthick Palanisamy"
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl shadow-xl"
                />
              </div>

              {/* Update floating badges for mobile */}
              <div
                className={`absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-50 rounded-full p-2">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Certified
                    </div>
                    <div className="text-xs text-gray-600">Specialist</div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1.2s", minWidth: "230px" }}
              >
                <div className="space-y-1">
                  <div className="text-gray-900 font-bold text-sm sm:text-base leading-snug">
                    Dr. Karthick Palanisamy
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium leading-snug">
                    M.D., FIDM., FICM., PGDip. pod
                  </div>
                  <div className="text-blue-700 text-xs sm:text-sm font-medium leading-snug">
                    Diabetologist&nbsp;|&nbsp;Podiatrist
                  </div>
                  <div className="text-green-700 text-xs sm:text-sm font-medium leading-snug">
                    Geriatric Home Care Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text and Buttons */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Update availability badge */}
            <div className="inline-flex items-center bg-blue-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-100">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="text-[#22578c] text-xs sm:text-sm font-medium">
                Available for consultation
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] sm:leading-[0.9] tracking-tight">
                Let's{" "}
                <span className="relative">
                  <span className="text-[#22578c]">Beat</span>
                </span>
                <br />
                <span className="relative">
                  <span className="text-[#22578c]">Diabetes.</span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Personalized care for diabetes and foot complications because{" "} <br />
                <span className="text-gray-900 font-medium">
                  Early action leads to a healthier tomorrow.
                </span>
              </p>
            </div>

            {/* Update feature highlights */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <span className="text-gray-700 text-sm font-medium">
                  Expert Care
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-700 text-sm font-medium">
                  Safe Treatment
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-blue-500" />
                <span className="text-gray-700 text-sm font-medium">
                  Quick Results
                </span>
              </div>
            </div>

            {/* Update buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={bookConsultation}
                className="group bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Calendar className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToConsultation}
                className="border-2 border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
