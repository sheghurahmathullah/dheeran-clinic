import { useState } from "react";
import {
  Activity,
  Heart,
  Target,
  TrendingUp,
  Calendar,
  ArrowRight,
 
  AlertTriangle,
  Award,
  Shield,
  Zap,
  Footprints,

  Stethoscope,
  Microscope,
  Thermometer, // for infection
  HeartPulse, // for healing
  Pill, // for pain
} from "lucide-react";

const FootUlcerCarePage = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Benefits/Goals
  const benefits = [
    {
      icon: Thermometer, // replacing InfectionIcon
      title: "Infection Management",
      points: [
        "Stops infection from spreading",
        "Promotes faster wound healing",
        "Prevents severe complications like sepsis",
        "Preserves foot health",
      ],
    },
    {
      icon: HeartPulse, // replacing HealingIcon
      title: "Faster Healing",
      points: [
        "Accelerates tissue regeneration",
        "Minimizes scarring",
        "Reduces patient downtime",
      ],
    },
    {
      icon: Pill, // replacing PainIcon
      title: "Pain Reduction",
      points: [
        "Soothes discomfort",
        "Improves daily quality of life",
        "Enables better mobility",
      ],
    },
    // Add 1-2 more as needed
  ];

  // Service Cards for Carousel
  const serviceCards = [
    {
      icon: Footprints,
      title: "Foot Ulcer Care",
      description: "Specialized treatment for diabetic foot wounds",
      link: "foot-diabetics-treatment/foot-ulcer",
    },
    {
      icon: Shield,
      title: "Infection Management",
      description: "Targeted therapies to control and eliminate infections",
      link: "#",
    },
    {
      icon: Zap,
      title: "Neuropathy Management",
      description: "Relief from nerve pain and numbness in feet",
      link: "#",
    },
    {
      icon: Target,
      title: "Foot Deformity Treatment",
      description: "Corrective care for structural foot problems",
      link: "#",
    },
    {
      icon: Heart,
      title: "Amputation Prevention",
      description: "Proactive strategies to preserve limb integrity",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fa] to-white">
      {/* Premium Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#22578c] to-[#1a4369] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,106.7C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="bg-white/10 px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-medium tracking-wide">
                  Advanced Diabetic Foot Care
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Specialized <br />
                <span className="text-[#5e8f1e]">Foot Ulcer</span> Treatment
              </h1>
              <p className="text-xl opacity-80 leading-relaxed">
                Cutting-edge wound healing techniques that prevent complications
                and restore mobility for diabetic patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#5e8f1e] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group hover:bg-[#4a7318] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Foot Screening</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+1234567890"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#22578c] transition-all duration-300 flex items-center justify-center"
                >
                  Consult Specialists
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#5e8f1e]/20 rounded-3xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/wounds-care/wound.jpg"
                    alt="Advanced Foot Ulcer Treatment"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-[#22578c]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <Stethoscope className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">
                        Precision Care
                      </h3>
                      <p>
                        Tailored treatment plans using advanced medical
                        technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / About the Treatment */}
      <section className="py-24 bg-[#f9fbf5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/wounds-care/about.jpg"
                    alt="Diabetic Foot Ulcer Explanation"
                    className="w-full rounded-2xl object-cover h-[400px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#5e8f1e]/90 text-white p-4 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6" />
                      <span className="font-semibold">
                        Early Detection Matters
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#5e8f1e]/10 px-4 py-2 rounded-full inline-block">
                  <span className="text-[#5e8f1e] font-semibold text-sm">
                    Understanding Foot Ulcers
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  What are{" "}
                  <span className="text-[#5e8f1e]">Diabetic Foot Ulcers?</span>
                </h2>
                <p className="text-lg text-[#4c5663] leading-relaxed">
                  Diabetic foot ulcers are open wounds or sores that develop on
                  the feet of people with diabetes, typically caused by poor
                  circulation, nerve damage, and high blood sugar. These ulcers
                  can quickly become serious if left untreated, potentially
                  leading to severe infections and, in worst cases, amputation.
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#5e8f1e]/10 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-[#5e8f1e]" />
                    </div>
                    <p className="text-[#4c5663] font-medium">
                      Early professional care is crucial to prevent
                      complications and promote healing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Important (Benefits/Goals) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-[#5e8f1e]/10 px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-[#5e8f1e] font-semibold text-sm">
                  Critical Importance
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Foot Ulcer <span className="text-[#5e8f1e]">Treatment</span>{" "}
                Matters
              </h2>
              <p className="text-xl text-[#4c5663] max-w-3xl mx-auto">
                Comprehensive foot ulcer care is essential for preventing
                serious health complications and preserving quality of life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f9fbf5] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="bg-[#5e8f1e]/10 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-[#5e8f1e] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Stops Infection Spread
                </h3>
                <p className="text-[#4c5663]">
                  Prevents bacterial growth and potential systemic infections
                  that can lead to serious health risks.
                </p>
              </div>

              <div className="bg-[#f9fbf5] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="bg-[#5e8f1e]/10 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-[#5e8f1e] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Promotes Healing
                </h3>
                <p className="text-[#4c5663]">
                  Accelerates wound closure through specialized treatments and
                  advanced medical techniques.
                </p>
              </div>

              <div className="bg-[#f9fbf5] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="bg-[#5e8f1e]/10 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10 text-[#5e8f1e] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Prevents Complications
                </h3>
                <p className="text-[#4c5663]">
                  Reduces the risk of severe complications like amputation
                  through proactive and comprehensive care.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-[#5e8f1e]/10 rounded-3xl p-8 text-center">
              <p className="text-xl text-[#4c5663] max-w-3xl mx-auto">
                <span className="font-bold text-[#5e8f1e]">Remember:</span>{" "}
                Early detection and professional treatment are key to managing
                diabetic foot ulcers effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Benefits Section with Animated Icons */}
      <section className="py-28 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold" style={{ color: "#5e8720" }}>
              Why It’s Important
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Expert, patient-centered solutions addressing every phase of wound
              management.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border border-[#edf1eb]"
                >
                  <div className="mb-6 flex items-center justify-center rounded-full w-16 h-16 bg-[#e6efda]">
                    <Icon className="h-7 w-7" style={{ color: "#5e8720" }} />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3 text-center"
                    style={{ color: "#5e8720" }}
                  >
                    {benefit.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 text-left">
                    {benefit.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Services Carousel */}
      <section className="py-24 bg-gradient-to-br from-[#f4f7fa] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#22578c]">Comprehensive</span> Services
            </h2>
            <p className="text-xl text-[#4c5663] max-w-3xl mx-auto">
              Holistic care tailored to your unique diabetic foot health needs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeServiceIndex === index
                      ? "bg-[#22578c] text-white shadow-xl"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div
                      className={`p-4 rounded-xl ${
                        activeServiceIndex === index
                          ? "bg-white/20"
                          : "bg-[#22578c]/10"
                      }`}
                    >
                      <card.icon
                        className={`h-8 w-8 ${
                          activeServiceIndex === index
                            ? "text-white"
                            : "text-[#22578c]"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          activeServiceIndex === index
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-sm ${
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
            <div className="hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src={
                    serviceCards[activeServiceIndex].title === "Foot Ulcer Care"
                      ? "/wounds-care/about.jpg"
                      : "/diabetics.jpg"
                  }
                  alt={serviceCards[activeServiceIndex].title}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {serviceCards[activeServiceIndex].title}
                  </h3>
                  <a
                    href={serviceCards[activeServiceIndex].link}
                    className="text-[#5e8f1e] font-medium hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#f9fbf5]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-[#5e8f1e]/10 px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-[#5e8f1e] font-semibold text-sm">
                  Our Treatment Philosophy
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-[#5e8f1e]">Scientific</span> Approach
              </h2>
              <p className="text-xl text-[#4c5663] max-w-3xl mx-auto">
                We follow a systematic, evidence-based methodology to ensure
                optimal healing outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#5e8f1e]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Microscope className="h-8 w-8 text-[#5e8f1e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  1. Advanced Diagnostics
                </h3>
                <p className="text-[#4c5663]">
                  Comprehensive assessment using state-of-the-art diagnostic
                  tools for accurate treatment planning
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#5e8f1e]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#5e8f1e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  2. Targeted Treatment
                </h3>
                <p className="text-[#4c5663]">
                  Personalized care protocols based on wound characteristics and
                  patient conditions
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#5e8f1e]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-[#5e8f1e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  3. Progress Monitoring
                </h3>
                <p className="text-[#4c5663]">
                  Regular assessment and documentation of healing progress with
                  advanced imaging
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#5e8f1e]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-[#5e8f1e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  4. Prevention Strategy
                </h3>
                <p className="text-[#4c5663]">
                  Long-term care planning and education to prevent recurrence
                  and complications
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <img
                    src="/wounds-care/treatment.jpg"
                    alt="Advanced Treatment Process"
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Evidence-Based Excellence
                  </h3>
                  <p className="text-[#4c5663] leading-relaxed">
                    Our approach combines the latest research in wound healing
                    with decades of clinical experience. We utilize advanced
                    technologies and proven methodologies to ensure the best
                    possible outcomes for our patients.
                  </p>
                  <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 text-[#5e8f1e]" />
                    <span className="text-gray-700 font-medium">
                      Certified specialists with extensive experience in
                      diabetic foot care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#22578c] to-[#1a4369] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 px-4 py-2 rounded-full inline-block mb-6">
              <span className="text-sm font-medium tracking-wide">
                Your Health, Our Priority
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Take Control of Your Foot Health Today
            </h2>
            <p className="text-xl mb-10 opacity-80 max-w-3xl mx-auto">
              Early intervention is key. Our specialized team provides
              compassionate, cutting-edge care to prevent complications and
              restore your mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#5e8f1e] text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center justify-center space-x-4 group hover:bg-[#4a7318] transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Foot Screening</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+1234567890"
                className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-[#22578c] transition-all duration-300 flex items-center justify-center"
              >
                Speak to a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FootUlcerCarePage;
