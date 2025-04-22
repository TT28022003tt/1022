'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faBell,
  faGlobe,
  faCommentDots,
  faServer,
  faDiagramProject,
  faShieldHalved,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import 'keen-slider/keen-slider.min.css';

const items = [
  { icon: faScrewdriverWrench, text: 'Tiện Ích Số' },
  { icon: faBell, text: 'Thông Báo' },
  { icon: faGlobe, text: 'Chuyển Đổi Số Tp Đà Nẵng' },
  { icon: faCommentDots, text: 'Cổng Góp Ý Đà Nẵng' },
  { icon: faServer, text: 'Cổng Dịch Vụ Dữ Liệu' },
  { icon: faDiagramProject, text: 'Thông Tin Dự Án' },
  { icon: faShieldHalved, text: 'An Toàn VSTP' },
];

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    initial: 0,
    renderMode: 'performance',
    slides: {
      perView: 5,
      spacing: 12,
      origin: 'center',
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: { perView: 2, spacing: 8, origin: 'center' },
      },
      '(min-width: 641px) and (max-width: 1024px)': {
        slides: { perView: 3.5, spacing: 10, origin: 'center' },
      },
    },
  });

  // Auto-play và xử lý resize
  useEffect(() => {
    // Auto-play
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    // Cập nhật slider khi resize
    const handleResize = () => {
      instanceRef.current?.update();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [instanceRef]);

  // Nút điều hướng
  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="w-screen h-[110px] md:h-[210px] m-4 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-[90%] max-w-[1300px] h-[90%] flex flex-col justify-center items-center mx-auto">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full px-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide min-w-[200px] sm:min-w-[240px] md:min-w-[260px]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#2563EB]/90 to-[#A78BFA]/90 flex flex-col justify-center items-center cursor-pointer rounded-2xl p-4 shadow-md group h-[100px] sm:h-[120px]"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl sm:text-3xl text-[#A78BFA] mb-2 group-hover:text-[#F472B6] transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                />
                <p className="text-base sm:text-lg text-white font-semibold line-clamp-2 text-center">
                  {item.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Nút lùi */}
      <motion.button
        onClick={handlePrev}
        className="absolute -left-12 sm:-left-16 lg:-left-20 bg-gradient-to-r from-[#2563EB]/50 to-[#A78BFA]/50 text-white p-3 sm:p-4 rounded-full shadow-md hover:from-[#2563EB]/90 hover:to-[#A78BFA]/90 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-lg sm:text-xl" />
      </motion.button>
      {/* Nút tiến */}
      <motion.button
        onClick={handleNext}
        className="absolute -right-12 sm:-right-16 lg:-right-20 bg-gradient-to-r from-[#2563EB]/50 to-[#A78BFA]/50 text-white p-3 sm:p-4 rounded-full shadow-md hover:from-[#2563EB]/90 hover:to-[#A78BFA]/90 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-lg sm:text-xl" />
      </motion.button>
    </div>
  );
};

export default Carousel;