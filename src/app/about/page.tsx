"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { sections } from "../components/sections";


const AboutPage = () => {
  const [currentSection, setCurrentSection] = useState("intro");
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  
    return () => clearInterval(interval);
  }, [instanceRef]);
  

  const selectedSection = sections.find((section) => section.id === currentSection);

  return (
    <div className="w-full py-3 sm:py-6 md:py-10 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề chính */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#003294] to-[#00B3FF] uppercase tracking-wide mb-4 p-2"
        >
          GIỚI THIỆU
        </motion.h1>

        {/* Thanh điều hướng cố định */}
        <div className="sticky top-0 z-10 bg-white shadow-md rounded-lg p-4 mb-8">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`text-sm sm:text-base font-semibold rounded-lg transition-all p-1 ${
                  currentSection === section.id
                    ? "bg-[#00B3FF] text-white"
                    : "text-[#003294] hover:text-[#00B3FF] hover:bg-gray-100"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Nội dung section được chọn */}
        <AnimatePresence mode="wait">
          {selectedSection && (
            <motion.div
              key={selectedSection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FontAwesomeIcon icon={selectedSection.icon} className="text-2xl sm:text-3xl text-[#00B3FF]" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003294] uppercase">
                  {selectedSection.title}
                </h2>
              </div>
              {selectedSection.id === "clients" ? (
                <div ref={sliderRef} className="keen-slider">
                  {selectedSection.content}
                </div>
              ) : (
                selectedSection.content
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutPage;