'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Hiển thị nút khi cuộn xuống > 100px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <motion.button
  onClick={scrollToTop}
  className="fixed bottom-12 sm:bottom-14 left-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#2563EB] to-[#A78BFA] rounded-full flex items-center justify-center text-white shadow-xl z-60 scroll-top-btn"
  whileHover={{
    scale: 1.1,
    rotate: 5,
    backgroundColor: '#F472B6',
    boxShadow: '0 6px 16px rgba(167, 139, 250, 0.4)',
    filter: 'brightness(1.1)',
  }}
  whileTap={{
    scale: 0.9,
    rotate: -5,
    backgroundColor: '#A78BFA',
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 300 }}
  aria-label="Lên đầu trang"
>
  <ArrowUpIcon className="w-6 h-6 sm:w-7 sm:h-7" />
</motion.button>

  );
};

export default ScrollToTopButton;