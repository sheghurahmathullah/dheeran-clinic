import React from "react";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const scrollToSection = (sectionId: string) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#22578c] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Clinic Information */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Karthick Palanisamy</h3>
                <p className="text-[#aad6ff]">
                  Diabetes Care & Podiatry Expert
                </p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Providing comprehensive healthcare services with over 11 years{" "}
              <br /> of experience in diabetes management, podiatry, and skin{" "}
              <br /> treatments. Your health and well-being are our top
              priorities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/drkarthick"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://twitter.com/drkarthick"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://instagram.com/drkarthick"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/drkarthick"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#aad6ff] mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>No.394, MTH Road (Off Old ESI Road)</p>
                  <p>Opp to BSV Mahal Near Old Bharat School</p>
                  <p>Ramapuram, Ambattur</p>
                  <p>Chennai - 600053</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#aad6ff]" />
                <a
                  href="tel:+91-7871122232"
                  className="text-white/80 hover:text-[#aad6ff] transition-colors"
                >
              +91 7871122232
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#aad6ff]" />
                <a
                  href="mailto:drkarthick@example.com"
                  className="text-white/80 hover:text-[#aad6ff] transition-colors"
                >
                  drkarthick@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours & Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6">Clinic Hours</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#aad6ff]" />
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Mon - Sat</span> &nbsp;
                    <span className="text-white"> 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#aad6ff]" />
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Sunday</span> &nbsp;
                    <span className="text-white"> Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <div className="space-y-2">
              <button
                onClick={() => navigateToPage("about-page")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                About Dr. Karthick
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Our Services
              </button>
              <button
                onClick={() =>
                  navigateToPage("general-services/diabetes-management")
                }
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Diabetes Management
              </button>
              <button
                onClick={() => navigateToPage("general-services/podiatry")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Podiatry Services
              </button>
              <button
                onClick={() => navigateToPage("general-services/skin-care")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Skin Care Treatments
              </button>
              <button
                onClick={() =>
                  navigateToPage("general-services/general-healthcare")
                }
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                General Healthcare
              </button>
              <button
                onClick={() =>
                  navigateToPage("general-services/home-visit-care")
                }
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Home Visit Care
              </button>
              <button
                onClick={() => navigateToPage("patient-resources")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Patient Resources
              </button>
              <button
                onClick={() => navigateToPage("contact-us")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigateToPage("book-appointment")}
                className="block text-white/80 hover:text-[#aad6ff] transition-colors text-sm text-left"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    
    {/* LEFT: Powered by Logo */}
    <div className="flex items-center text-sm text-white/60 space-x-2 mb-4 md:mb-0">
      <span>Powered by</span>
      <img src="/realmrook.png" alt="Realmrook Logo" className="h-10" />
    </div>

    {/* CENTER: Copyright */}
    <div className="text-sm text-white/60 text-center mb-4 md:mb-0">
      <p>&copy; 2025 Dr. Karthick Palanisamy Medical Practice. All rights reserved.</p>
    </div>

    {/* RIGHT: Footer Links */}
    <div className="flex space-x-6 text-sm">
      <a
        href="#"
        className="text-white/60 hover:text-[#aad6ff] transition-colors"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="text-white/60 hover:text-[#aad6ff] transition-colors"
      >
        Terms of Service
      </a>
      <a
        href="#"
        className="text-white/60 hover:text-[#aad6ff] transition-colors"
      >
        Medical Disclaimer
      </a>
    </div>
    
  </div>
</div>

      </div>

      {/* Emergency Notice */}
      <div className="bg-red-600 overflow-hidden">
        <div className="marquee-container py-4">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
            </div>
            <div className="marquee-content" aria-hidden="true">
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
              <span className="mx-4">
                🚨 For Medical Emergencies, call 911 immediately or visit your
                nearest emergency room
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Updated style block */}
      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-wrapper {
          display: flex;
        }

        .marquee-content {
          flex-shrink: 0;
          display: flex;
          justify-content: space-around;
          min-width: 100%;
          animation: scroll 20s linear infinite;
          white-space: nowrap;
          font-weight: 600;
          color: white;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
