import {
  HelpCircle,
  BookOpen,
  Calendar,
  ArrowRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const PatientResourcesPage = ({
  onAskQuestion,
}: {
  onAskQuestion: () => void;
}) => {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Refs for scroll animations
  const heroRef = useRef(null);
  const faqRef = useRef(null);
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

  const faqs = [
    {
      question:
        "What are the consultation fees charged by Dr. Karthick Palanisamy?",
      answer:
        "The consultation fees charged by a doctor depend on several factors, such as their experience level, mode of consultation you select and clinic location. The consultation charges of Dr. Karthick Palanisamy start from 500.",
    },
    {
      question: "Where does Dr. Karthick Palanisamy practice?",
      answer:
        "Dr. Karthick Palanisamy practices in No.394, MTH Road, Off Old ESI Road, Varadharajapuram, Ambattur, Kanchipuram. The doctor has 5 years of experience and is well known in Kanchipuram for providing expert medical care. You can easily book a consultation through the Bajaj Finserv Health platform.",
    },
    {
      question: "How can I book an appointment with Dr. Karthick Palanisamy?",
      answer:
        "For booking a consultation with Dr. Karthick Palanisamy, simply go to the top of the page. Here, you will see the available slots for Video Consultation and In-clinic Consultation. Choose your preferred mode, date and time slot. Once you click on the desired slot, you will be taken to the payment page. Select your payment mode and confirm your appointment.",
    },
    {
      question: "Does Dr. Karthick Palanisamy do video consultation?",
      answer:
        "After the COVID-19 pandemic, several doctors have started offering teleconsultation and video consultation options to their patients. This is a safe and effective way of providing medical care. Dr. Karthick Palanisamy is available for video consultation and in-clinic consultation.",
    },
    {
      question:
        "What are the educational qualifications of Dr. Karthick Palanisamy?",
      answer:
        "Dr. Karthick Palanisamy has the following educational qualifications: Fellowship in Diabetes Mellitus, MBBS. The doctor is equipped to deal with all minor and major health issues pertaining to their field of medicine.",
    },
  ];

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "5 Ways to Control Uncontrolled Diabetes Naturally",
  //     category: "Diabetes",
  //     excerpt:
  //       "Learn effective lifestyle tips and habits that support long-term diabetes control and improve your overall health.",
  //     image:
  //       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     author: "Dr. Karthick Palanisamy",
  //     date: "March 15, 2025",
  //     readTime: "5 min read",
  //   },
  //   {
  //     id: 2,
  //     title: "How to Spot and Treat a Diabetic Foot Ulcer Early",
  //     category: "Podiatry",
  //     excerpt:
  //       "Early signs of foot ulcers can be subtle—learn how to catch them before they become serious complications.",
  //     image:
  //       "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     author: "Dr. Karthick Palanisamy",
  //     date: "March 12, 2025",
  //     readTime: "7 min read",
  //   },
  //   {
  //     id: 3,
  //     title: "Is Skin Whitening Safe? Myths vs Medical Facts",
  //     category: "Skincare",
  //     excerpt:
  //       "Bust the myths and understand how medically approved treatments actually work for safe, effective results.",
  //     image:
  //       "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     author: "Dr. Karthick Palanisamy",
  //     date: "March 10, 2025",
  //     readTime: "6 min read",
  //   },
  //   // {
  //   //   id: 4,
  //   //   title: "The Benefits of Home Healthcare for Elderly Patients",
  //   //   category: "Home Care",
  //   //   excerpt:
  //   //     "Discover why home visit care is becoming the preferred choice for elderly patients and their families.",
  //   //   image:
  //   //     "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   //   author: "Dr. Karthick Palanisamy",
  //   //   date: "March 8, 2025",
  //   //   readTime: "4 min read",
  //   // },
  //   // {
  //   //   id: 5,
  //   //   title: "Preventive Healthcare: Your First Line of Defense",
  //   //   category: "General Health",
  //   //   excerpt:
  //   //     "Learn how regular checkups and preventive care can help you avoid serious health complications.",
  //   //   image:
  //   //     "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   //   author: "Dr. Karthick Palanisamy",
  //   //   date: "March 5, 2025",
  //   //   readTime: "8 min read",
  //   // },
  //   // {
  //   //   id: 6,
  //   //   title: "Understanding Blood Sugar Levels: A Complete Guide",
  //   //   category: "Diabetes",
  //   //   excerpt:
  //   //     "Everything you need to know about monitoring and maintaining healthy blood glucose levels.",
  //   //   image:
  //   //     "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   //   author: "Dr. Karthick Palanisamy",
  //   //   date: "March 3, 2025",
  //   //   readTime: "10 min read",
  //   // },
  // ];

  // const getCategoryColor = (category: string) => {
  //   const colorMap: { [key: string]: string } = {
  //     Diabetes: "bg-teal-100 text-teal-800",
  //     Podiatry: "bg-blue-100 text-blue-800",
  //     Skincare: "bg-purple-100 text-purple-800",
  //     "Home Care": "bg-orange-100 text-orange-800",
  //     "General Health": "bg-green-100 text-green-800",
  //   };
  //   return colorMap[category] || "bg-gray-100 text-gray-800";
  // };

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
              Patient Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Your <span className="text-[#22578c]">Health</span>
            <br className="hidden md:block" />
            Companion Portal
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Trusted guidance, tailored answers, and reliable medical education.
            Feel empowered to make the best decisions for your health journey,
            every step of the way.
          </p>
          <button
            onClick={onAskQuestion}
            className="inline-flex items-center bg-[#22578c] hover:bg-[#5e8f1e] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Ask a Health Question
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Subtle decorative shapes/background */}
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-br from-teal-100 to-transparent rounded-bl-full blur-2xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-tr-full blur-2xl opacity-50 pointer-events-none"></div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <HelpCircle className="h-8 w-8 text-teal-600" />
                <h2 className="text-4xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions? Here are answers to some of the most common
                questions our patients have.
              </p>
            </div>

            {/* FAQ Layout - Left FAQs, Right Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* FAQ Dropdown Section - Left Side */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-teal-100 p-2 rounded-full flex-shrink-0">
                          <span className="text-teal-600 font-bold text-sm">
                            Q{index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-teal-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Dropdown Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-12">
                          <div className="border-l-4 border-teal-200 pl-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image Section - Right Side */}
              {/* Image Section - Right Side */}
              <div className="lg:sticky lg:top-8">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8 shadow-lg">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      {/* Insert Image */}
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src="/faqs.jpg" // replace with actual image path
                          alt="Medical Consultation"
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      {/* Or keep your existing placeholder below if you want both */}
                      {/* <div className="mt-6 text-center">
          <div className="w-24 h-24 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="h-12 w-12 text-teal-600" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Need More Help?
          </h4>
          <p className="text-gray-600 text-sm">
            Our medical team is here to assist you
          </p>
        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Educational Blog Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-800">
                  Educational Blog
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest health insights, tips, and medical
                knowledge from Dr. Karthick Palanisamy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                          post.category
                        )}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>

                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center space-x-2 group">
                      <span>Read More</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto">
                <BookOpen className="h-5 w-5" />
                <span>View All Articles</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for the latest health insights, tips, and updates from Dr. Karthick Palanisamy
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm mt-4 opacity-75">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Have More Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact us or book a consultation—we're here to help with
              personalized medical guidance and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+1234567890"
                className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
              >
                Call for Immediate Help
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PatientResourcesPage;
