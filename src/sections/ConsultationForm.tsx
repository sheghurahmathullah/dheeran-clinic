import React, { useState } from "react";
import {
  Calendar,
  Phone,
  Mail,
  User,
  MessageCircle,
  CheckCircle,
  Clock,
  MapPin,
} from "lucide-react";

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#5e8f1e] to-[#4a7318] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-light text-[#22578c] mb-6">
                Request Submitted
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Thank you for choosing our care. We'll contact you within 24
                hours to confirm your consultation.
              </p>
              <div className="bg-gradient-to-r from-[#22578c]/5 to-[#5e8f1e]/5 rounded-2xl p-6 border border-slate-100">
                <p className="text-[#22578c] font-medium">
                  For urgent matters:{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-[#5e8f1e] hover:underline font-semibold"
                  >
                    +1 (234) 567-8900
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#22578c] to-[#1e4a73] rounded-2xl mb-6">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-[#22578c]">Consultation</span>
            <br />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience personalized healthcare with Dr. Karthick Palanisamy.
            Book your consultation and take the first step towards better
            health.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-[#22578c] mb-8">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50">
                      <div className="bg-gradient-to-br from-[#22578c] to-[#1e4a73] p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 mb-1">Phone</p>
                        <a
                          href="tel:+91 7871122232"
                          className="text-[#5e8f1e] font-semibold hover:underline"
                        >
                          +91 7871122232
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50">
                      <div className="bg-gradient-to-br from-[#22578c] to-[#1e4a73] p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 mb-1">Email</p>
                        <a
                          href="mailto:info@drkarthick.com"
                          className="text-[#5e8f1e] font-semibold hover:underline"
                        >
                          info@drkarthick.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50">
                      <div className="bg-gradient-to-br from-[#22578c] to-[#1e4a73] p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 mb-1">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/917871122232"
                          className="text-[#5e8f1e] font-semibold hover:underline"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Hours Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-[#22578c] mb-6">
                  Clinic Hours
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      days: "Monday - Friday",
                      hours: "9:00 AM - 6:00 PM",
                      active: true,
                    },
                    {
                      days: "Saturday",
                      hours: "9:00 AM - 2:00 PM",
                      active: true,
                    },
                    { days: "Sunday", hours: "Closed", active: false },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-xl ${
                        schedule.active
                          ? "bg-gradient-to-r from-[#5e8f1e]/5 to-transparent"
                          : "bg-slate-50"
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          schedule.active ? "text-slate-800" : "text-slate-500"
                        }`}
                      >
                        {schedule.days}
                      </span>
                      <span
                        className={`font-semibold ${
                          schedule.active ? "text-[#5e8f1e]" : "text-slate-400"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-[#22578c] to-[#1e4a73] rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6" />
                  <h3 className="text-xl font-light">Visit Our Clinic</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Experience world-class healthcare in our modern, comfortable
                  facility designed with your wellbeing in mind.
                </p>
              </div>
            </div>

            {/* Consultation Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold.0205+3+1.
                  0++9 text-[#22578c] mb-2">
                    Book Your Appointment
                  </h3>
                  <p className="text-gray-600">
                    Fill in your details and we'll get back to you shortly
                  </p>
                </div>
                <div className="space-y-8">
                  {/* Name and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800 placeholder-slate-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800 appearance-none bg-white"
                        >
                          <option value="">Select time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 text-slate-800 appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="diabetes">Diabetes Management</option>
                      <option value="podiatry">Podiatry Services</option>
                      <option value="skincare">Skin Care Treatment</option>
                      <option value="general">General Healthcare</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#5e8f1e] focus:border-[#5e8f1e] transition-all duration-300 resize-none text-slate-800 placeholder-slate-400"
                      placeholder="Tell us about your health concerns or any specific questions you have..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      handleSubmit(
                        e as unknown as React.FormEvent<HTMLFormElement>
                      )
                    }
                    className="w-full bg-[#22578c] text-white py-5 px-8 rounded-2xl text-lg font-medium hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Schedule Your Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
