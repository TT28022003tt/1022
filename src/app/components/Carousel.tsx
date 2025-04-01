"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative h-[450px] flex justify-center items-center gap-8 p-4 overflow-hidden w-full bg-[linear-gradient(to_bottom,#10203F_50%,white_50%)]">
      {/* Social Media Icons (Fixed Outside Banner) */}
      <div className="absolute top-3 transform translate-x-85 flex gap-4 text-white text-2xl z-10">
        <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-blue-500" />
        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-pink-500" />
        <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-400" />
      </div>
	  
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 text-5xl text-[#3498db] p-2 z-10">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex items-center justify-center w-full relative">
      <AnimatePresence mode="popLayout">
    {images.map((img, index) => {
      const position = index - current;
      // Cấu hình responsive
      let width = 800; // Mặc định là 100% khi trên thiết bị di động
      let height =350; // Chiều cao tự động cho ảnh
      let scaleValue = position === 0 ? 1 : 0.8; // Tăng scale của ảnh hiện tại, giảm scale các ảnh khác
      let opacityValue = position === 0 ? 1 : 0; // Giảm opacity cho ảnh không phải ảnh trung tâm
      let xValue = position * 100; // Di chuyển ảnh

      // Khi màn hình lớn hơn, áp dụng kiểu cũ
      if (window.innerWidth >= 768) {
        let width = position === 0 ? 450 : 300; // Kích thước ảnh khi màn hình lớn
        let height = position === 0 ? 200 : 200;
        scaleValue = position === 0 ? 1.8 : 1.2; // Tăng scale cho ảnh trung tâm
        opacityValue = 1; // Không giảm opacity nữa
        xValue = position * 620; // Điều chỉnh khoảng cách di chuyển ảnh
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, x: xValue }}
            animate={{ opacity: opacityValue, scale: scaleValue, x: xValue }}
            exit={{ opacity: 0, scale: 0.8, x: position > 0 ? 200 : -200 }}
            transition={{ duration: 0.5 }}
            className="absolute rounded-lg overflow-hidden"
            style={{ width: width, height: height }}
          >
                  <Image src={img} alt={`Slide ${index}`} width={width} height={height} className="object-cover w-full h-full" />
                  {position !== 0 && (
                    <div className="absolute inset-0 bg-black opacity-50" />
                  )}
                </motion.div>
              );
      }

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, x: xValue }}
          animate={{ opacity: opacityValue, scale: scaleValue, x: xValue }}
          exit={{ opacity: 0, scale: 0.8, x: position > 0 ? 200 : -200 }}
          transition={{ duration: 0.5 }}
          className="absolute rounded-lg overflow-hidden"
          style={{ width: width, height: height }}
        >
                <Image src={img} alt={`Slide ${index}`} width={width} height={height} className="object-cover w-full h-full" />
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
