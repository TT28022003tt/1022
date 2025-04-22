'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Footer1 = () => (
  <footer className="bg-gradient-to-b from-[#2563EB]/90 to-[#A78BFA]/90 text-white p-4 sm:p-6 lg:p-8">
  <div className="max-w-6xl mx-auto flex flex-col gap-4">
    {/* Tiêu đề */}
    <div className="pb-2 text-center">
      <p className="font-bold uppercase text-xl sm:text-2xl lg:text-3xl .custom-outline-text-Footer">
        Bản quyền thuộc Trung tâm Thông tin và Giám sát, Điều hành Thông minh Đà Nẵng
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      {/* Thông tin */}
      <div className="space-y-2 text-xs sm:text-sm lg:text-base">
        <p>📜 Giấy phép: số 167/GGP-STTTT do Sở Thông tin và Truyền thông cấp ngày 03/03/2017</p>
        <p>🏛️ Địa chỉ: Tầng 11 - Công viên phần mềm, số 02 Quang Trung, TP Đà Nẵng</p>
        <p>👤 Người chịu trách nhiệm: <strong>Nguyễn Văn Quốc - Giám đốc Trung tâm</strong></p>
        <p>☎️ Tel: (0236) 1022 - (0236) 3881 888, (0236) 396 777</p>
        <motion.p
          whileHover={{ scale: 1.05, color: '#F472B6', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95, color: '#A78BFA' }}
          transition={{ type: 'spring', stiffness: 250 }}
        >
          📧 Email: <a href="mailto:1022@danang.gov.vn" className="hover:underline">1022@danang.gov.vn</a>
        </motion.p>
        <p>📠 Fax: (0236) 3996 777</p>
      </div>
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(167, 139, 250, 0.3)' }}
        whileTap={{ scale: 0.9, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 hidden sm:block"
      >
        <Image
          src="/Footer.png"
          alt="1022 Đà Nẵng"
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  </div>
</footer>
  );
  export default Footer1;