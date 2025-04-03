"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const images = [
  "/banner/image1.jpg",
  "/banner/image2.jpg",
  "/banner/image3.jpg",
  "/banner/image4.jpg",
  "/banner/image5.jpg",
  "/banner/image6.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // Mặc định là desktop
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Lắng nghe thay đổi kích thước màn hình
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Tự động chuyển slide
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-[450px] flex justify-center items-center gap-8 p-4 overflow-hidden w-full bg-[linear-gradient(to_bottom,#10203F_50%,white_50%)]">
      {/* Social Media Icons */}
      <div className="absolute top-3 transform translate-x-85 flex gap-4 text-white text-2xl z-10">
        <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-blue-500" />
        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-pink-500" />
        <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-400" />
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 text-5xl text-[#3498db] p-2 z-10">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Carousel Images */}
      <div className="flex items-center justify-center w-full relative">
        <AnimatePresence mode="popLayout">
          {images.map((img, index) => {
            const position = index - current;
            const isActive = position === 0;

            // Xử lý hiển thị ảnh theo kích thước màn hình
            const width = windowWidth >= 768 ? (isActive ? 450 : 300) : 800;
            const height = windowWidth >= 768 ? 200 : 350;
            const scale = windowWidth >= 768 ? (isActive ? 1.8 : 1.2) : 1;
            const opacity = windowWidth >= 768 ? 1 : isActive ? 1 : 0;
            const xValue = windowWidth >= 768 ? position * 620 : position * 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, x: xValue }}
                animate={{ opacity, scale, x: xValue }}
                exit={{ opacity: 0, scale: 0.8, x: position > 0 ? 200 : -200 }}
                transition={{ duration: 0.5 }}
                className="absolute rounded-lg overflow-hidden"
                style={{ width, height }}
              >
                <Image src={img} alt={`Slide ${index}`} width={width} height={height} className="object-cover w-full h-full" />
                {!isActive && <div className="absolute inset-0 bg-black opacity-50" />}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button onClick={nextSlide} className="absolute right-4 text-5xl text-[#3498db] p-2 z-10">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
