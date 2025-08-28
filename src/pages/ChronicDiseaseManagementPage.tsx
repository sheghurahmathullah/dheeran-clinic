import {
  Activity,
  Heart,
  Target,
  TrendingUp,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Award,
} from "lucide-react";

const ChronicDiseaseManagementPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const conditions = [
    {
      icon: Heart,
      title: "Cardiovascular Diseases",
      description:
        "Comprehensive management for heart conditions, including hypertension, coronary artery disease, and heart failure",
    },
    {
      icon: TrendingUp,
      title: "Respiratory Disorders",
      description:
        "Specialized care for chronic respiratory conditions like COPD, asthma, and pulmonary fibrosis",
    },
    {
      icon: AlertTriangle,
      title: "Autoimmune Conditions",
      description:
        "Holistic approach to managing rheumatoid arthritis, lupus, and other complex autoimmune disorders",
    },
  ];

  const services = [
    "Personalized treatment plans tailored to individual health needs",
    "Comprehensive medication management",
    "Regular health monitoring and diagnostic testing",
    "Lifestyle and dietary counseling",
    "Pain management strategies",
    "Psychological support and mental health resources",
    "Rehabilitation and physical therapy guidance",
    "Preventive care and complication management",
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "15+ Years of Experience",
      description:
        "Extensive expertise in managing complex chronic disease cases with proven results",
    },
    {
      icon: TrendingUp,
      title: "Multidisciplinary Approach",
      description:
        "Integrated care involving specialists from various medical disciplines",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Compassionate approach focusing on your individual needs and quality of life",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 mx-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Comprehensive{" "}
                <span className="text-[#22578c]">Chronic Disease</span>{" "}
                Management & Care
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take control of your chronic condition with personalized,
                holistic treatment plans. Our comprehensive approach helps you
                manage symptoms and improve quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Chronic Disease Consultation</span>
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
                    <p className="font-bold text-gray-800">15+ Years</p>
                    <p className="text-sm text-gray-600">Medical Expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Proven</p>
                    <p className="text-sm text-gray-600">Treatment Approach</p>
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
                    src="/chronic-disease/chronic.jpg"
                    alt="Chronic disease management consultation"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Comprehensive Chronic Disease Care
                    </h3>
                    <p className="text-[#22578c] font-semibold mb-4">
                      Advanced Treatment & Monitoring
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Symptom Management</span>
                      <span>•</span>
                      <span>Lifestyle Guidance</span>
                      <span>•</span>
                      <span>Holistic Care</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#22578c] text-white p-4 rounded-full shadow-lg">
                  <Activity className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Chronic Disease Management */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Column */}
              <div className="space-y-8">
                <div>
                  <span className="bg-teal-50 text-[#22578c] text-sm font-semibold px-1 py-2 rounded-full">
                    Understanding Chronic Disease Management
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  A Holistic Approach to <br />
                  <span className="text-[#22578c]">Chronic Disease Care</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Chronic disease management is more than just treating
                  symptoms. It's a comprehensive approach that encompasses
                  medication, lifestyle modifications, ongoing medical
                  supervision, and personalized support to ensure optimal health
                  outcomes and improved quality of life.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      80%
                    </div>
                    <p className="text-gray-600">
                      of chronic conditions can be effectively managed with
                      proper care and lifestyle changes
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      15+
                    </div>
                    <p className="text-gray-600">
                      years of experience in helping patients achieve better
                      health outcomes
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="relative flex justify-center items-center">
                <div className="bg-white rounded-3xl shadow-lg p-1 w-full">
                  <img
                    src="/chronic-disease/about.jpg"
                    alt="Doctor explaining chronic disease management"
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
                      Personalized Care
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Every patient receives a customized treatment plan tailored
                    to their specific needs and lifestyle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What <span className="text-[#22578c]"> We Treat</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive chronic disease care addressing complex medical
                conditions and their multifaceted challenges
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
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our{" "}
                <span className="text-[#22578c]">Chronic Disease Services</span>{" "}
                Include
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive care designed to help you manage chronic
                conditions and improve your overall quality of life
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
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our{" "}
                <span className="text-[#22578c]">Chronic Disease Care</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experience the difference that specialized, compassionate
                chronic disease management can make
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
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: "#f7f9fa" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#22578c" }}
            >
              Ready to Manage Your Chronic Condition Effectively?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed opacity-90"
              style={{ color: "#000000" }}
            >
              Don't let chronic diseases control your life. Take the first step
              towards better health with our expert chronic disease management
              program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Chronic Disease Consultation</span>
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
      </section>
    </div>
  );
};

export default ChronicDiseaseManagementPage;
