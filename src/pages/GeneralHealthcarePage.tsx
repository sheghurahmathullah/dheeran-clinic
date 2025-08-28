import {
  Stethoscope,
  Heart,
  Shield,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Footprints,
  Sun,
  ShieldCheck,
  Award,
  Home,
  Microscope,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const GeneralHealthcarePage = () => {
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
      icon: Stethoscope,
      title: "Common Illnesses",
      description:
        "Treatment for fever, flu, infections, and other acute medical conditions",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Health Issues",
      description:
        "Urgent care for non-life-threatening emergencies and acute health problems",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description:
        "Comprehensive wellness checkups and health screening programs",
    },
  ];

  const services = [
    "Comprehensive physical examinations",
    "Acute illness diagnosis and treatment",
    "Chronic disease management and monitoring",
    "Preventive health screenings",
    "Vaccination and immunization services",
    "Health risk assessments",
    "Laboratory test coordination",
    "Specialist referrals when needed",
    "Health education and counseling",
    "Emergency consultation services",
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "11+ Years of Experience",
      description:
        "Extensive experience in handling diverse health issues across all age groups",
    },
    {
      icon: Stethoscope,
      title: "Quick & Accurate Diagnosis",
      description:
        "Efficient evaluation and treatment to get you back to optimal health quickly",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Compassionate approach focusing on your individual health needs and wellness goals",
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
                Comprehensive <span className="text-[#22578c]">General</span>{" "}
                Healthcare <span className="text-[#22578c]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From routine checkups to emergency care, we offer dependable
                medical services for your entire family's health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book General Consultation</span>
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
                    <p className="font-bold text-gray-800">11+ Years</p>
                    <p className="text-sm text-gray-600">Medical Expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Preventive</p>
                    <p className="text-sm text-gray-600">Healthcare Focus</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Family</p>
                    <p className="text-sm text-gray-600">Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/healthcare-checkup/1.jpg"
                    alt="General healthcare consultation"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Complete Healthcare Solutions
                    </h3>
                    <p className="text-[#22578c] font-semibold mb-4">
                      General Medicine & Family Care
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Preventive Care</span>
                      <span>•</span>
                      <span>Emergency Care</span>
                      <span>•</span>
                      <span>Health Screenings</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#22578c] text-white p-4 rounded-full shadow-lg">
                  <Stethoscope className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About General Healthcare */}
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
              {/* Content Column */}
              <div className="space-y-8">
                <div>
                  <span className="bg-teal-50 text-[#22578c] text-sm font-semibold px-1 py-2 rounded-full">
                    Understanding General Healthcare
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  A Comprehensive Approach to <br />
                  <span className="text-[#22578c]">Your Health & Wellness</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  General healthcare is the foundation of a healthy life. Our
                  approach encompasses regular health screenings, preventive
                  care, and prompt treatment of acute conditions to ensure your
                  overall well-being. We focus on building long-term
                  relationships with our patients to provide personalized care
                  that evolves with their health needs.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      95%
                    </div>
                    <p className="text-gray-600">
                      of health issues can be managed effectively with early
                      detection and proper care
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      11+
                    </div>
                    <p className="text-gray-600">
                      years of experience in providing comprehensive family
                      healthcare services
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="relative flex justify-center items-center">
                <div className="bg-white rounded-3xl shadow-lg p-1 w-full">
                  <img
                    src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Doctor providing healthcare consultation"
                    className="w-full rounded-2xl object-cover h-[500px]"
                  />
                </div>
                {/* Overlay Card */}
                <div className="absolute -bottom-1 -left-8 bg-white p-6 rounded-2xl shadow-lg max-w-[280px]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <svg
                        className="h-6 w-6 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M8 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Family Care
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive healthcare services for every member of your
                    family, at every stage of life
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
                What <span className="text-[#22578c]">We Treat</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive medical care for a wide range of health conditions
                and concerns
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
                Our <span className="text-[#22578c]">Healthcare Services</span>{" "}
                Include
              </h2>
              <p className="text-xl text-gray-600">
                Complete medical care designed to keep you and your family
                healthy
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
                Why Choose Our{" "}
                <span className="text-[#22578c]">Healthcare</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experience healthcare that prioritizes your individual needs and
                well-being
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
              Ready to Take Control of Your Health?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed opacity-90"
              style={{ color: "#000000" }}
            >
              Don't wait for health issues to escalate. Take the first step
              towards comprehensive, compassionate healthcare today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book General Consultation</span>
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

export default GeneralHealthcarePage;
