import React, { useState } from 'react';
import { Calendar, Clock, Video, Home, User, Phone, Mail, MessageCircle, CheckCircle, Stethoscope, ArrowRight } from 'lucide-react';

const AppointmentBookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Appointment booking submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (2:00 PM - 5:00 PM)' },
    { value: 'evening', label: 'Evening (5:00 PM - 7:00 PM)' }
  ];

  const consultationTypes = [
    { value: 'in-clinic', label: 'In-Clinic Visit', icon: Stethoscope },
    { value: 'home-visit', label: 'Home Visit', icon: Home },
    { value: 'online', label: 'Online Consultation', icon: Video }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointment Request Received!</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Thank you for booking your appointment. Our team will contact you shortly to confirm the details.
              </p>
              
              <div className="bg-teal-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-teal-800 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 w-2 h-2 rounded-full"></div>
                    <p className="text-teal-700">Our team will review your appointment request</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 w-2 h-2 rounded-full"></div>
                    <p className="text-teal-700">We'll call you within 2-4 hours to confirm the time</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 w-2 h-2 rounded-full"></div>
                    <p className="text-teal-700">You'll receive appointment details via SMS/email</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-4">
                  For urgent medical concerns, please call us directly:
                </p>
                <a 
                  href="tel:+91-XXXXXXXXXX" 
                  className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91-XXXXXXXXXX</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Book an <span className="text-[#22578c]">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards better health. Use the form below to schedule a consultation with Dr. Karthick Palanisamy. We'll get in touch to confirm your appointment shortly.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#22578c]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Same Day</h3>
              <p className="text-gray-600 text-sm">Appointments Available</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#22578c]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Within 2-4 Hours</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-[#22578c]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm">11+ Years Experience</p>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#22578c]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Schedule Your Consultation</h2>
                <p className="text-gray-600">Fill out the form below and we'll confirm your appointment</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Appointment Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Consultation Type *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {consultationTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <label
                          key={type.value}
                          className={`relative cursor-pointer rounded-lg border-2 p-4 text-center transition-all hover:border-[#22578c] ${
                            formData.consultationType === type.value
                              ? 'border-[#22578c] bg-teal-50'
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="consultationType"
                            value={type.value}
                            checked={formData.consultationType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                            formData.consultationType === type.value
                              ? 'bg-teal-100'
                              : 'bg-gray-100'
                          }`}>
                            <IconComponent className={`h-6 w-6 ${
                              formData.consultationType === type.value
                                ? 'text-teal-600'
                                : 'text-[#22578c]'
                            }`} />
                          </div>
                          <p className={`font-semibold text-sm ${
                            formData.consultationType === type.value
                              ? 'text-teal-800'
                              : 'text-gray-800'
                          }`}>
                            {type.label}
                          </p>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    Message or Symptoms (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your symptoms or any specific concerns you'd like to discuss..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-[#22578c] text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mx-auto group"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-gray-500 text-sm mt-4">
                    By booking an appointment, you agree to our terms and privacy policy
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Clinic Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                  </div>
                 
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-800">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent medical concerns that can't wait for an appointment, please call us directly.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+91-7871122232"
                    className="flex items-center space-x-3 text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">+91-7871122232</span>
                  </a>
                  <a 
                    href="https://wa.me/917871122232"
                    className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBookingPage;