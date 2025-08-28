import {
  Sun,
  Droplet,
  Heart,
  Footprints,
  ShieldCheck,
  Target,
  TrendingUp,
  Calendar,
  Microscope,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  Award,
  Home,
} from "lucide-react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const SkinCarePage = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const treatRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const serviceCardsRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll animation variants
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "easeOut",
      },
    },
  } as const;

  // Service Cards for Carousel
  const serviceCards = [
    {
      icon: Stethoscope,
      title: "General Healthcare",
      description: "Specialized treatment for diabetic foot wounds",
      link: "general-services/general-healthcare",
    },
    {
      icon: Footprints,
      title: "Podiatry Services",
      description: "Targeted therapies to control and eliminate infections",
      link: "general-services/podiatry",
    },
    {
      icon: Sun,
      title: "Skin Care",
      description: "Relief from nerve pain and numbness in feet",
      link: "general-services/skin-care",
    },
    {
      icon: ShieldCheck,
      title: "Diabetes Management",
      description: "Corrective care for structural foot problems",
      link: "general-services/diabetes-management",
    },
    {
      icon: Home,
      title: "Home Treatment Care",
      description:
        "Personalized medical care provided in the comfort of your home",
      link: "general-services/home-treatment",
    },
    {
      icon: Microscope,
      title: "Lab and Diagnostics",
      description:
        "Comprehensive diagnostic services and advanced medical testing",
      link: "general-services/lab-diagnostics",
    },
  ];


  const conditions = [
    {
      icon: Sun,
      title: "Skin Whitening Treatments",
      description:
        "Safe and effective solutions to brighten your complexion and enhance skin radiance.",
    },
    {
      icon: AlertCircle,
      title: "Treatment for Various Skin Problems",
      description:
        "Targeted care for acne, pigmentation, scars, eczema, and other common skin concerns.",
    },
    {
      icon: Droplet,
      title: "Personalized Skin Health Solutions",
      description:
        "Customized skin care plans designed to meet your unique skin type and lifestyle.",
    },
  ];

  const services = [
    "Advanced skin whitening therapies and peels",
    "Acne treatment and scar reduction",
    "Pigmentation management and correction",
    "Hydration and anti-aging therapies",
    "Nutritional and lifestyle counseling for skin health",
    "Comprehensive skin analysis and diagnostics",
    "Sun protection guidance and products",
    "Routine follow-ups and skin monitoring",
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "10+ Years of Experience",
      description:
        "Skilled dermatologists with a proven track record in skin care excellence.",
    },
    {
      icon: TrendingUp,
      title: "Visible Results",
      description:
        "Clinically proven treatments that improve your skin’s appearance and health.",
    },
    {
      icon: Heart,
      title: "Patient-Focused Care",
      description:
        "Caring professionals committed to your individual skin health goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 mx-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Expert <span className="text-[#22578c]">Skin Care</span>{" "}
                Treatments & Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reveal your best skin with personalized care and advanced
                treatments designed for lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Skin Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+1234567890"
                  className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
                >
                  Call for Urgent Care
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-[#22578c]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">10+ Years</p>
                    <p className="text-sm text-gray-600">Skin Care Expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Proven</p>
                    <p className="text-sm text-gray-600">Effective Results</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Personalized</p>
                    <p className="text-sm text-gray-600">Care Plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/skincare/banner.jpg"
                    alt="Skin consultation"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Comprehensive Skin Care
                    </h3>
                    <p className="text-[#22578c] font-semibold mb-4">
                      Personalized Treatments & Expert Guidance
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Skin Whitening</span>
                      <span>•</span>
                      <span>Problem Treatment</span>
                      <span>•</span>
                      <span>Healthy Skin Solutions</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#22578c] text-white p-4 rounded-full shadow-lg">
                  <Sun className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Skin Care */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="bg-teal-50 text-[#22578c] text-sm font-semibold px-1 py-2 rounded-full">
                    Understanding Skin Care
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  A Holistic Approach to <br />
                  <span className="text-[#22578c]">Skin Health</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Skin care includes treatments, lifestyle and nutrition
                  guidance, and medical supervision to enhance your skin’s
                  natural beauty and health.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      95%
                    </div>
                    <p className="text-gray-600">
                      of skin concerns can be improved with professional care
                      and customized treatments
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      10+
                    </div>
                    <p className="text-gray-600">
                      years of experience helping clients achieve vibrant skin
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="bg-white rounded-3xl shadow-lg p-1 w-full">
                  <img
                    src="/skincare/about.jpg"
                    alt="Skin care consultation"
                    className="w-full rounded-2xl object-cover h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-1 -left-8 bg-white p-6 rounded-2xl shadow-lg max-w-[280px]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Personalized Care
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    We customize every treatment plan to your unique skin type
                    and goals for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What We Treat */}
      <motion.section
        ref={treatRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What <span className="text-[#22578c]"> We Treat</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive skin care addressing all your concerns with
                effective treatments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-[#22578c] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Services */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-[#22578c]">Skin Care Services</span>{" "}
                Include
              </h2>
              <p className="text-xl text-gray-600">
                Extensive range of treatments and care plans for healthy,
                glowing skin
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#22578c] rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        ref={whyChooseRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our <span className="text-[#22578c]">Skin Care</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experience personalized, expert care focused on your skin health
                and confidence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-[#22578c]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Cards Carousel */}
      <motion.section
        ref={serviceCardsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 bg-gradient-to-br from-[#f4f7fa] to-white"
      >
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our <span className="text-[#22578c]">Comprehensive</span> Services
            </h2>
            <p className="text-lg md:text-xl text-[#4c5663] max-w-2xl mx-auto">
              Holistic care tailored to your comprehensive health and wellness
              needs
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Section: Service Cards */}
            <div className="space-y-4">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeServiceIndex === index
                      ? "bg-[#22578c] text-white shadow-xl"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-lg ${
                        activeServiceIndex === index
                          ? "bg-white/20"
                          : "bg-[#22578c]/10"
                      }`}
                    >
                      <card.icon
                        className={`h-6 w-6 ${
                          activeServiceIndex === index
                            ? "text-white"
                            : "text-[#22578c]"
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className={`text-lg font-semibold leading-tight ${
                          activeServiceIndex === index
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-xs leading-snug mt-1 ${
                          activeServiceIndex === index
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section: Preview Area */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-6 mt-8 shadow-xl">
                <img
                  src={
                    serviceCards[activeServiceIndex].title ===
                    "General Healthcare"
                      ? "/healthcare-checkup/1.jpg"
                      : serviceCards[activeServiceIndex].title ===
                        "Podiatry Services"
                      ? "/Podiatry/banner.jpg"
                      : serviceCards[activeServiceIndex].title === "Skin Care"
                      ? "/skincare/banner.jpg"
                      : serviceCards[activeServiceIndex].title ===
                        "Diabetes Management"
                      ? "/diabetes-banner.jpg"
                      : serviceCards[activeServiceIndex].title ===
                        "Home Treatment Care"
                      ? "/home-treatment/banner.jpg"
                      : serviceCards[activeServiceIndex].title ===
                        "Lab and Diagnostics"
                      ? "/lab-diagnostics/banner.jpg"
                      : "/healthcare-checkup/1.jpg"
                  }
                  alt={serviceCards[activeServiceIndex].title}
                  className="w-full h-[320px] object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {serviceCards[activeServiceIndex].title}
                  </h3>
                  <a
                    href={serviceCards[activeServiceIndex].link}
                    className="text-[#5e8f1e] font-medium hover:underline text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
        style={{ background: "#f7f9fa" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#22578c" }}
            >
              Ready to Enhance Your Skin’s Health?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed opacity-90"
              style={{ color: "#000000" }}
            >
              Don’t wait to reveal glowing, healthy skin. Book your personalized
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Skin Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+1234567890"
                className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
              >
                Call for Urgent Care
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SkinCarePage;
