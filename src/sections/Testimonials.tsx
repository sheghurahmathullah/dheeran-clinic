import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

import { useState } from "react";

const COLORS = {
  primary: "#22578c", // Blue
  accent: "#5e8f1e", // Green
  black: "#000000",
  white: "#ffffff",
  grayText: "#444", // Minimalist gray for body
  border: "#e6e9ef", // Light border for minimal look
};

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 45,
    condition: "Diabetes Management",
    rating: 5,
    text: "Dr. Karthick transformed my diabetes management completely. His personalized approach and continuous monitoring helped me achieve better blood sugar control than I've had in years. Highly recommended!",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Michael Chen",
    age: 52,
    condition: "Diabetic Foot Care",
    rating: 5,
    text: "I was struggling with diabetic foot ulcers for months. Dr. Karthick's expert care and advanced treatment methods healed my condition completely. His knowledge in podiatry is exceptional.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Priya Sharma",
    age: 38,
    condition: "Skin Treatment",
    rating: 5,
    text: "The skin whitening treatment I received exceeded my expectations. Dr. Karthick explained every step of the process and the results were amazing. Very professional and caring doctor.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Robert Williams",
    age: 60,
    condition: "General Healthcare",
    rating: 5,
    text: "Dr. Karthick provides comprehensive care that goes beyond just treating symptoms. He takes time to understand your lifestyle and creates treatment plans that actually work. Excellent doctor!",
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollStep = 1; // reduced speed for smoother scrolling
    const delay = 30; // increased delay for better performance

    const scrollContent = () => {
      if (container) {
        // If we're near the end, jump back to start
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }
    };

    const intervalId = setInterval(scrollContent, delay);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="testimonials-section"
      className="py-24"
      style={{ background: COLORS.white }}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Patients <span className="text-[#22578c]">Testimonials</span>
            <br />
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: COLORS.grayText, fontWeight: 400 }}
          >
            Hear from our patients about their experience with Dr. Karthick
            Palanisamy's compassionate and expert medical care
          </p>
        </div>

        {/* Modified Horizontal scroll container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "hidden", // Changed from auto to hidden
              gap: "2rem",
              paddingBottom: "1rem",
              width: "100%",
              WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS
              scrollbarWidth: "none", // Hide scrollbar in Firefox
              msOverflowStyle: "none", // Hide scrollbar in IE/Edge
            }}
            className="no-scrollbar" // Add this class for hiding the scrollbar
          >
            {/* Double the testimonials array for continuous scroll */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  flex: "0 0 auto",
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.white,
                  borderRadius: "16px",
                  boxShadow: "0 4px 18px rgba(34, 87, 140, 0.05)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-lg object-cover mr-4 border"
                    style={{ borderColor: COLORS.border }}
                  />
                  <div>
                    <h4
                      className="font-semibold text-base"
                      style={{ color: COLORS.black }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: COLORS.primary }}
                    >{`Age ${testimonial.age}`}</p>
                  </div>
                </div>

                {/* Ratings */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 mr-1"
                      style={{ color: COLORS.accent, fill: COLORS.accent }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-4 flex-1">
                  <Quote
                    className="h-6 w-6 absolute -top-2 -left-2"
                    style={{ color: COLORS.primary, opacity: 0.18 }}
                  />
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: COLORS.grayText, paddingLeft: 32 }}
                  >
                    {testimonial.text}
                  </p>
                </div>

                {/* Condition */}
                <div
                  className="pt-4 mt-4"
                  style={{
                    borderTop: `1px solid ${COLORS.border}`,
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: COLORS.primary, letterSpacing: ".11em" }}
                  >
                    {testimonial.condition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div
            className="rounded-xl p-10 max-w-xl mx-auto border"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
              boxShadow: "0 6px 28px rgba(34, 87, 140, 0.08)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.black, letterSpacing: "-0.01em" }}
            >
              Take Control of Diabetes Today
            </h3>
            <p className="text-base mb-8" style={{ color: COLORS.grayText }}>
              Get expert care for general diabetes and diabetic foot health from
              trusted specialists who put your well-being first.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("consultation");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none"
              style={{
                background: COLORS.primary,
                color: COLORS.white,
                boxShadow: "0 2px 8px rgba(34, 87, 140, 0.10)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = COLORS.accent)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = COLORS.primary)
              }
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
