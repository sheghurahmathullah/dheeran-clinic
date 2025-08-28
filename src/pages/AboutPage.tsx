import {
  GraduationCap,
  Award,
  Users,
  Heart,
  Microscope,
  BookOpen,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const backgroundRef = useRef(null);
  const beliefsRef = useRef(null);
  const researchRef = useRef(null);
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

  const qualifications = [
    {
      icon: GraduationCap,
      title: "General Medicine",
      description:
        "Comprehensive primary care with focus on preventive medicine and chronic disease management",
    },
    {
      icon: Heart,
      title: "Diabetes Management",
      description:
        "Specialized care for uncontrolled diabetes, including advanced monitoring and personalized treatment protocols",
    },
    {
      icon: Users,
      title: "Podiatry",
      description:
        "Expert treatment of diabetic foot ulcers, wound care, and comprehensive foot health management",
    },
    {
      icon: Award,
      title: "Skin Treatments",
      description:
        "Advanced dermatological care including skin whitening treatments and cosmetic procedures",
    },
  ];

  const researchAreas = [
    "Advanced methods in diabetes control and glucose monitoring",
    "Innovative faster recovery methods for diabetic foot ulcers",
    "Wound healing acceleration techniques",
    "Preventive care strategies for diabetic complications",
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
        className="bg-gradient-to-br from-blue-50 to-teal-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About{" "}
              <span className=" text-[#22578c]">Dr. Karthick Palanisamy</span>
            </h1>
            <p className="text-xl text-gray-600">
              General Physician, Diabetologist & Podiatrist
            </p>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        ref={introRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
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
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                A Compassionate Approach to{" "}
                <span className="text-[#22578c]">Healthcare</span>
              </h2>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "With over a decade of experience, I've helped countless
                  patients lead healthier lives by offering precise,
                  compassionate care tailored to their unique needs."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-0.5 bg-teal-600"></div>
                  <p className="ml-4 text-teal-800 font-semibold">
                    Dr. Karthick Palanisamy
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                As a dedicated healthcare professional, I believe that every
                patient deserves personalized attention and care that addresses
                not just their immediate concerns, but their long-term health
                and well-being. My practice is built on the foundation of
                combining cutting-edge medical science with genuine empathy and
                understanding.
              </p>

              <div className="flex items-center space-x-4 text-teal-600">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Board Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">1000+ Patients Treated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Professional Background */}
      <motion.section
        ref={backgroundRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Professional <span className="text-[#22578c]">Background</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise across multiple medical disciplines,
                ensuring comprehensive care for all your health needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-4 rounded-2xl flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-[#22578c]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {qual.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {qual.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Beliefs */}
      <motion.section
        ref={beliefsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Core <span className="text-[#22578c]">Beliefs & Approach </span>
                to Care
              </h2>
              <p className="text-xl text-gray-600">
                My philosophy centers on treating each patient as a whole
                person, not just a condition
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Personalized Care
                </h3>
                <p className="text-gray-600">
                  Every treatment plan is tailored to your unique health
                  profile, lifestyle, and goals
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Scientific Excellence
                </h3>
                <p className="text-gray-600">
                  Combining the latest medical research with proven treatment
                  methodologies
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Preventive Focus
                </h3>
                <p className="text-gray-600">
                  Emphasizing long-term health solutions and preventive care
                  strategies
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  My Commitment to You
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  I believe in building lasting relationships with my patients
                  based on trust, open communication, and mutual respect. Your
                  health journey is unique, and I'm here to guide you every step
                  of the way with expertise, compassion, and unwavering support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research & Innovation */}
      <motion.section
        ref={researchRef}
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
                Research & <span className="text-[#22578c]">Innovation</span>
              </h2>
              <p className="text-xl text-gray-600">
                Continuously advancing medical knowledge to provide better
                patient outcomes
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start space-x-6 mb-8">
                <div className="bg-purple-100 p-4 rounded-2xl flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Current Research Focus
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    My ongoing research contributes to advancing treatment
                    methodologies and improving patient care standards in
                    diabetes management and wound healing.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-teal-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{area}</p>
                  </div>
                ))}
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
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-[#22578c]">Health Journey?</span>
            </h2>

            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Whether you're struggling with uncontrolled diabetes or seeking
              advanced skin treatments, I'm here to help. Let's take the first
              step toward better health together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary Button */}
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1c466f] transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button */}
              <a
                href="tel:+1234567890"
                className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-black/20">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-black/30"></div>
                <p className="text-lg font-semibold">Dr. Karthick Palanisamy</p>
                <div className="w-16 h-0.5 bg-black/30"></div>
              </div>
              <p className="text-black/70 mt-2">
                Your Partner in Health & Wellness
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
