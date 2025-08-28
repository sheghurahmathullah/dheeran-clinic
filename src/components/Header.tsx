import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Footprints,
  ChevronDown,
  Calendar,
  Stethoscope,
  Sun,
  ShieldCheck,
  Home,
  Microscope,
} from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () =>
    setIsServicesDropdownOpen(!isServicesDropdownOpen);

  // Close desktop services dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Services List
  const services = [
    {
      name: "General Healthcare",
      page: "general-services/general-healthcare",
      icon: Stethoscope,
    },
    {
      name: "Podiatry Services",
      page: "general-services/podiatry",
      icon: Footprints,
    },
    {
      name: "Skin Care",
      page: "general-services/skin-care",
      icon: Sun,
    },
    {
      name: "Diabetes Management",
      page: "general-services/diabetes-management",
      icon: ShieldCheck,
    },
    {
      name: "Home Treatment",
      page: "general-services/home-treatment",
      icon: Home,
    },
    {
      name: "Lab and Diagnostics",
      page: "general-services/lab-diagnostics",
      icon: Microscope,
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => navigateToPage("home")}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="Clinic Logo" className="h-14 w-auto" />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            <div className="flex-1 flex items-center justify-center space-x-8">
              <button
                onClick={() => navigateToPage("home")}
                className={`transition-colors font-medium ${
                  currentPage === "home"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => navigateToPage("about-page")}
                className={`transition-colors font-medium ${
                  currentPage === "about-page"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About Dr. Karthick
              </button>

              {/* Services Dropdown (Desktop) */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-[320px] bg-white rounded-2xl shadow-xl border border-gray-200 py-4 z-50 animate-fadeIn">
                    <div className="mt-2 flex flex-col space-y-1">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => navigateToPage(service.page)}
                            className={`flex items-center gap-3 w-full px-5 py-2.5 rounded-lg text-sm transition-all ${
                              currentPage === service.page
                                ? "bg-blue-100 text-blue-700 font-semibold"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                          >
                            <Icon className="h-4 w-4 text-blue-600" />
                            {service.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateToPage("patient-resources")}
                className={`transition-colors font-medium ${
                  currentPage === "patient-resources"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Patient Resources
              </button>

              <button
                onClick={() => navigateToPage("contact-us")}
                className={`transition-colors font-medium ${
                  currentPage === "contact-us"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigateToPage("book-appointment")}
              className="bg-[#22578c] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium shadow-md hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {/* Top-level nav items */}
              <button
                onClick={() => navigateToPage("home")}
                className={`transition-colors text-left ${
                  currentPage === "home"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => navigateToPage("about-page")}
                className={`transition-colors text-left ${
                  currentPage === "about-page"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About Dr. Karthick
              </button>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Reveal services only when expanded */}
                {isServicesDropdownOpen && (
                  <div className="mt-2 flex flex-col space-y-2 pl-4">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => navigateToPage(service.page)}
                          className={`flex items-center gap-2 text-left text-sm transition-colors py-2 ${
                            currentPage === service.page
                              ? "text-blue-600 font-semibold"
                              : "text-gray-600 hover:text-blue-600"
                          }`}
                        >
                          <Icon className="h-4 w-4 text-blue-600 shrink-0" />
                          {service.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateToPage("patient-resources")}
                className={`transition-colors text-left ${
                  currentPage === "patient-resources"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Patient Resources
              </button>

              <button
                onClick={() => navigateToPage("contact-us")}
                className={`transition-colors text-left ${
                  currentPage === "contact-us"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact Us
              </button>

              <button
                onClick={() => navigateToPage("book-appointment")}
                className="bg-[#22578c] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
