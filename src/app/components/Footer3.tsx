'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Footer3 = () => {
  return (
    <div className=''>
        <footer className="bg-gradient-to-b from-[#2563EB]/90 to-[#A78BFA]/90 text-white p-4 sm:p-6 lg:p-8">
    <div className="max-w-6xl mx-auto flex flex-col gap-4">
      {/* Tiêu đề */}
      <div className="pb-2 text-center">
        <p className="font-bold uppercase text-xl sm:text-2xl lg:text-3xl custom-outline-text">
          Trung tâm Thông tin và Giám sát, Điều hành Thông minh Đà Nẵng
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Thông tin */}
        <div className="space-y-2 text-xs sm:text-sm lg:text-base">
          <p>📜 Giấy phép: số 167/GP-STTTT do Sở Thông tin và Truyền thông cấp ngày 03/03/2017</p>
          <p>👤 Người chịu trách nhiệm: Nguyễn Văn Quốc</p>
          <p>© 2023 Trung tâm Thông tin và Giám sát, Điều hành Thông minh Đà Nẵng</p>
        </div>
        {/* Thống kê */}
        <div className="space-y-2 text-xs sm:text-sm lg:text-base">
          <p className="font-semibold">Thống kê truy cập</p>
          <motion.p
            whileHover={{ scale: 1.05, color: '#2563EB' }}
            whileTap={{ scale: 0.95, color: '#A78BFA' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            Tổng: 115,294,820
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05, color: '#2563EB' }}
            whileTap={{ scale: 0.95, color: '#A78BFA' }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            Hôm nay: 6,079
          </motion.p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
};

export default Footer3;