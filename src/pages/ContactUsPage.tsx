import React, { useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Send,
  CheckCircle,
  User,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const contactFormRef = useRef(null);
  const socialRef = useRef(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
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
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Thank You!
                </h1>
                <p className="text-gray-600 mb-6">
                  We'll get back to you shortly. Your message has been received
                  and we appreciate you reaching out to us.
                </p>
                <div className="bg-teal-50 rounded-xl p-6">
                  <p className="text-teal-800 font-semibold">
                    For urgent matters, please call us directly at{" "}
                    <a href="tel:+91-XXXXXXXXXX" className="underline">
                      +91-XXXXXXXXXX
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="bg-gradient-to-br from-white via-teal-50 to-blue-100 py-28 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="flex items-center justify-center bg-white/80 rounded-full px-4 py-2 shadow-lg mb-6">
            <HelpCircle className="h-5 w-5 text-[#22578c] mr-2" />
            <span className="uppercase tracking-wider text-[#22578c] font-semibold text-xs">
              Contact Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Get in <span className="text-[#22578c]">Touch</span>
            <br className="hidden md:block" />
            With Us
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? We're here to
            help. Reach out to us via the form below or contact us directly.
          </p>
          <button className="inline-flex items-center bg-[#22578c] hover:bg-[#5e8f1e] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
            <BookOpen className="h-5 w-5 mr-2" />
            Schedule Appointment
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Subtle decorative shapes/background */}
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-br from-teal-100 to-transparent rounded-bl-full blur-2xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-tr-full blur-2xl opacity-50 pointer-events-none"></div>
      </motion.section>

      {/* Contact Form and Information */}
      <motion.section
        ref={contactFormRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Send className="h-6 w-6 text-[#22578c]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    Message / Query *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your health concerns or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22578c] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information and Map */}
            <div className="space-y-8">
              {/* Clinic Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#22578c]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Clinic Address
                  </h3>
                </div>
                <div className="space-y-2 text-gray-700 mb-6">
                  <p className="font-semibold">Dr. Karthick Palanisamy</p>
                  <p>No.394, MTH Road (Off Old ESI Road)</p>
                  <p>Opp to BSV Mahal Near Old Bharat School</p>
                  <p>Ramapuram, Ambattur</p>
                  <p>Chennai - 600053</p>
                </div>

                {/* Google Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.840264813465!2d80.14989027454867!3d13.109303811845328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52630012130307%3A0xe0bbc2ddf73a70b9!2sDheeran%20health%20clinic!5e0!3m2!1sen!2sin!4v1755932851815!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Karthick Palanisamy Clinic Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Phone</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-teal-600" />
                        <a
                          href="tel:+91-7871122232"
                          className="text-teal-600 hover:underline"
                        >
                          +91-7871122232
                        </a>
                        <a
                          href="tel:+91-7871122232"
                          className="text-teal-600 hover:underline"
                        >
                          +91-6374311501
                        </a>
                      </div>
                      {/* <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">WhatsApp: </span>
                        <a href="https://wa.me/91XXXXXXXXXX" className="text-green-600 hover:underline">+91-XXXXXXXXXX</a>
                      </div> */}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Email</h4>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <a
                        href="mailto:drkarthick@example.com"
                        className="text-blue-600 hover:underline"
                      >
                        drkarthick@example.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Clinic Hours
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="flex justify-between w-full">
                          <span>Monday - Saturday</span>
                          <span className="font-semibold">
                            9:00 AM - 6:00 PM
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="flex justify-between w-full">
                          <span>Sunday</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Social Media Links */}
      <motion.section
        ref={socialRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Connect with Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Follow us on social media for health tips, updates, and medical
              insights
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com/drkarthick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22578c] text-white p-4 rounded-full hover:bg-blue-700 transition-colors group"
              >
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/drkarthick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22578c] text-white p-4 rounded-full hover:bg-pink-700 transition-colors group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/drkarthick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22578c] text-white p-4 rounded-full hover:bg-blue-900 transition-colors group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Immediate Medical Attention?
              </h3>
              <p className="text-gray-600 mb-6">
                For medical emergencies, please call 911 immediately or visit
                your nearest emergency room. For urgent but non-emergency
                medical concerns, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+91-XXXXXXXXXX"
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call for Urgent Care</span>
                </a>
                <a
                  href="https://wa.me/917871122232"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsPage;
