import React, { useState, useEffect } from "react";

const HealthCheckupPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Popup appears 2s after page load
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(false);
    // Replace link with your appointment booking / form link
    window.open("https://your-booking-link.com", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-8">
      <div
        className="
          relative rounded-lg mx-2
          w-full max-w-[320px]
          sm:max-w-[350px]
          md:max-w-[400px]
          shadow-2xl overflow-auto p-4
        "
        style={{
          maxHeight: "90vh",
          backgroundColor: "white",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Popup Content */}
        <div className="text-center">
          {/* Title */}
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold mb-3"
            style={{ color: "#22578c" }}
          >
            MASTER HEALTH CHECKUP
          </h2>

          {/* Offer Details */}
          <div
            className="rounded-lg p-3 mb-3 text-sm sm:text-base"
            style={{ backgroundColor: "#f1f5f9", color: "black" }}
          >
            <p className="mb-2">
              <strong>Includes:</strong> Vitamin D3 + Vitamin B12 + ABI Test
              (Foot) + Biothesiometry Test (Foot) + ECG + FREE CONSULTATION
              (Family Physician / Diabetologist)
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-3">
            <p className="text-base sm:text-lg font-bold">
              <span className="line-through text-red-600">₹7000/-</span>{" "}
              <span style={{ color: "#5e8f1e" }}>₹999/-</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Offer valid: Aug. 15th to Sep. 15th
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleButtonClick}
            className="w-full font-bold py-2 rounded-lg text-white"
            style={{ backgroundColor: "#22578c" }}
          >
            YES, I WANT THIS OFFER
          </button>

          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            Prioritize your health today for a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckupPopup;
