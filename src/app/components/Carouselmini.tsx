"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faExchangeAlt,
  faComments,
  faDatabase,
  faProjectDiagram,
  faShieldAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { icon: faTools, text: "Tiện Ích Số" },
  { icon: faBullhorn, text: "Thông Báo" },
  { icon: faExchangeAlt, text: "Chuyển Đổi Số Tp Đà Nẵng" },
  { icon: faComments, text: "Cổng Góp Ý Đà Nẵng" },
  { icon: faDatabase, text: "Cổng Dịch Vụ Dữ Liệu" },
  { icon: faProjectDiagram, text: "Thông Tin Dự Án" },
  { icon: faShieldAlt, text: "An Toàn VSTP" },
];

const ICONS_VISIBLE = 5; // Hiển thị 5 icon cùng lúc

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: tiến, -1: lùi

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Chuyển sau mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Lấy 5 icon từ danh sách, nếu vượt quá thì quay lại đầu danh sách
  const visibleIcons = Array.from({ length: ICONS_VISIBLE }, (_, i) =>
    items[(startIndex + i) % items.length]
  );

  return (
    <div className="relative flex justify-center items-center w-[600px] overflow-hidden">
      {/* Nút lùi */}
      <button onClick={handlePrev} className="absolute left-0  text-gray-600">
        ❮
      </button>

      {/* Danh sách icon */}
      <div className="flex space-x-6">
        <AnimatePresence mode="popLayout">
          {visibleIcons.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ x: direction === 1 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-24"
            >
              <FontAwesomeIcon icon={item.icon} className="text-4xl text-blue-600" />
              <p className="text-sm">{item.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Nút tiến */}
      <button onClick={handleNext} className="absolute right-0  text-gray-600">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
