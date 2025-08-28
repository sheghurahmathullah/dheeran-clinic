import {
  Droplet,
  Utensils,
  Clock3,
  Scale,
  Eye,
  Badge,
  Activity,
} from "lucide-react";

import { useState, useEffect } from "react";

const SymptomsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#symptoms-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const symptoms = [
    {
      id: 1,
      title: "Excessive Thirst",
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Excessive Hunger",
      icon: <Utensils className="w-8 h-8 text-green-500" />,
    },
    {
      id: 3,
      title: "Frequent Urination",
      icon: <Clock3 className="w-8 h-8 text-purple-500" />,
    },
    {
      id: 4,
      title: "Unexplained Weight Loss",
      icon: <Scale className="w-8 h-8 text-orange-500" />,
    },
    {
      id: 5,
      title: "Blurred Vision",
      icon: <Eye className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 6,
      title: "Slow Healing",
      icon: <Badge className="w-8 h-8 text-red-500" />,
    },
    {
      id: 7,
      title: "Fatigue & Body Aches",
      icon: <Activity className="w-8 h-8 text-pink-500" />,
    },
  ];

  return (
    <section id="symptoms-section" className="py-16 bg-gray-50">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#22578c]">Signs</span>&nbsp;
            <span className="text-gray-900">&</span>&nbsp;
            <span className="text-[#22578c]">Symptoms</span>
          </h2>
          <p className="text-lg text-gray-600">
            Early recognition of these symptoms can lead to better management
            and treatment outcomes
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.slice(0, 6).map((symptom) => (
            <div
              key={symptom.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4">
                {symptom.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {symptom.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Centered 7th item */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-full max-w-sm">
              <div className="flex items-center space-x-4">
                {symptoms[6].icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {symptoms[6].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
