import React from 'react';
import { Home, Heart, Shield, Clock, Calendar, ArrowRight, CheckCircle, Users, Stethoscope, Award, Activity } from 'lucide-react';

const HomeVisitCarePage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Home Visits",
      description: "Comprehensive medical consultations and examinations in the comfort of your home"
    },
    {
      icon: Heart,
      title: "Nursing Services",
      description: "Professional nursing care for post-operative recovery and chronic illness management"
    },
    {
      icon: Shield,
      title: "Wound Care & Dressing",
      description: "Expert wound cleaning, dressing changes, and healing monitoring at home"
    },
    {
      icon: Activity,
      title: "Diabetic Care",
      description: "Regular monitoring, medication management, and foot care for diabetic patients"
    }
  ];

  const homeServices = [
    "Comprehensive medical consultations and examinations",
    "Post-operative care and recovery monitoring",
    "Chronic illness management and support",
    "Wound cleaning, dressing, and healing assessment",
    "Diabetic monitoring and medication management",
    "Elderly care and mobility assistance",
    "Injection administration and IV therapy",
    "Health education and family counseling",
    "Regular follow-up visits and progress tracking",
    "Emergency home consultations"
  ];

  const whoBenefits = [
    {
      icon: Users,
      title: "Elderly Patients",
      description: "Seniors who have difficulty traveling to medical facilities or prefer the comfort of home care"
    },
    {
      icon: Shield,
      title: "Post-Operative Patients",
      description: "Patients recovering from surgery who need professional monitoring and wound care"
    },
    {
      icon: Heart,
      title: "Chronic Illness Patients",
      description: "Individuals with diabetes, heart conditions, or other chronic diseases requiring regular care"
    },
    {
      icon: Home,
      title: "Mobility-Limited Patients",
      description: "Bedridden or mobility-impaired patients who cannot easily visit medical facilities"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "11+ Years of Experience",
      description: "Extensive medical expertise with a proven track record in home healthcare delivery"
    },
    {
      icon: Users,
      title: "Qualified Medical Team",
      description: "Dr. Karthick and certified nurses providing professional, compassionate care"
    },
    {
      icon: Shield,
      title: "Fully Equipped Care",
      description: "Complete medical equipment and supplies for comprehensive at-home treatments"
    },
    {
      icon: Heart,
      title: "Personalized Attention",
      description: "One-on-one care tailored to your specific health needs and family situation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Professional <span className="text-orange-600">Home Visit</span> Medical <span className="text-amber-600">Care</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bringing expert healthcare to your doorstep. Whether you or your loved ones require regular monitoring, wound care, or nurse assistance, we provide high-quality home visit services for complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Request a Home Visit</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Emergency Visit
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Professional</p>
                    <p className="text-sm text-gray-600">Medical Team</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Comfort</p>
                    <p className="text-sm text-gray-600">of Your Home</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Compassionate</p>
                    <p className="text-sm text-gray-600">Care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Home visit medical care"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Home Healthcare Excellence</h3>
                    <p className="text-orange-600 font-semibold mb-4">Dr. Karthick & Qualified Nurses</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Doctor Visits</span>
                      <span>•</span>
                      <span>Nursing Care</span>
                      <span>•</span>
                      <span>Wound Dressing</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-full shadow-lg">
                  <Home className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive home healthcare services delivered by experienced medical professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Home Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Home Healthcare Services</h2>
              <p className="text-xl text-gray-600">
                Complete medical care delivered to your home with the same quality and professionalism as clinic visits
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {homeServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-600 rounded-full p-1 mt-1 flex-shrink-0">
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

      {/* Who Can Benefit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Can Benefit from Home Visit Care</h2>
              <p className="text-xl text-gray-600">
                Our home healthcare services are designed for patients who need professional medical attention in a comfortable, familiar environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Home Care Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Home Care Services</h2>
              <p className="text-xl text-gray-600">
                Experience the difference that professional, compassionate home healthcare can make
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Safety, Hygiene & Continuity of Care</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We maintain the highest standards of medical safety and hygiene in all our home visits, ensuring you receive the same quality care as in a clinical setting.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Strict Hygiene Protocols</h3>
                      <p className="text-gray-600">All equipment is sterilized and our team follows comprehensive infection control measures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">Convenient appointment times that work with your schedule and health needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Continuous Care Coordination</h3>
                      <p className="text-gray-600">Seamless communication with your other healthcare providers for comprehensive treatment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional home healthcare"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Need Medical Attention at Home?</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Let us take care of your health without stepping out. Our professional home visit services bring expert medical care directly to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Request a Home Visit Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 text-center"
              >
                Call for Emergency Home Visit
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-white/30"></div>
                <p className="text-lg font-semibold">Available 7 Days a Week</p>
                <div className="w-16 h-0.5 bg-white/30"></div>
              </div>
              <p className="text-white/80 mt-2">Professional home healthcare when you need it most</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeVisitCarePage;