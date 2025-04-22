'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2563EB]/90 to-[#A78BFA]/90 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Giới thiệu + Logo */}
        <div className="flex flex-col items-center sm:items-start gap-4">

          <motion.div
            whileTap={{ scale: 0.9, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-full h-16 sm:w-full sm:h-full rounded-lg overflow-hidden"
          >
            <Link href="/home">
              <Image
                src="/logofooter2.jpg"
                alt="Logo Trung tâm"
                fill
                className="object-contain w-full h-full"
                priority
              />
            </Link>
          </motion.div>
          <p className="text-xs sm:text-sm lg:text-base text-center sm:text-left">
            Trung tâm được UBND TP Đà Nẵng thành lập tại Quyết định số 534/QĐ-UBND ngày 23/03/2023. Là cơ quan đầu mối cung cấp giải pháp và hướng dẫn thông tin qua các kênh điện tử, giám sát đô thị thông minh.
          </p>
        </div>

        {/* Danh mục */}
        <div className="space-y-2">
          <motion.p
            className="font-bold text-xl sm:text-2xl lg:text-3xl custom-outline-text-Footer"
            whileHover={{ scale: 1.05, color: '#F472B6', boxShadow: '0 4px 12px rgba(167, 139, 250, 0.3)' }}
            whileTap={{ scale: 0.95, color: '#A78BFA' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            DOANH MỤC
          </motion.p>
          <ul className="space-y-1 text-xs sm:text-sm lg:text-base">
            {[
              "Dịch vụ công trực tuyến",
              "Bộ thủ tục hành chính",
              "Đăng ký nhận tin",
              "Chính sách mới",
              "Hệ thống CNTT - VT",
              "Liên hệ",
            ].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, color: '#F472B6', y: -1 }}
                whileTap={{ scale: 0.95, color: '#A78BFA', rotate: 5 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <a href="#" className="hover:underline">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Liên hệ */}
        <div className="space-y-2">
          <motion.p
            className="font-bold text-xl sm:text-2xl lg:text-3xl custom-outline-text-Footer"
            whileHover={{ scale: 1.05, color: '#F472B6', boxShadow: '0 4px 12px rgba(167, 139, 250, 0.3)' }}
            whileTap={{ scale: 0.95, color: '#A78BFA' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            LIÊN HỆ
          </motion.p>
          <div className="space-y-1 text-xs sm:text-sm lg:text-base">
            <motion.p whileHover={{ scale: 1.05, color: '#F472B6' }} whileTap={{ scale: 0.95, rotate: 5 }} transition={{ type: 'spring', stiffness: 250 }}>
              ☎️ Hotline: (0236) 1022 - (0236) 3881 888
            </motion.p>
            <motion.p whileHover={{ scale: 1.05, color: '#F472B6' }} whileTap={{ scale: 0.95, rotate: 5 }} transition={{ type: 'spring', stiffness: 250 }}>
              👤 Giám đốc: Nguyễn Văn Quốc - 0903257085
            </motion.p>
            <motion.p whileHover={{ scale: 1.05, color: '#F472B6', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)' }} whileTap={{ scale: 0.95, color: '#A78BFA', rotate: 5 }} transition={{ type: 'spring', stiffness: 250 }}>
              📧 Thư điện tử: <a href="mailto:1022@danang.gov.vn" className="hover:underline">1022@danang.gov.vn</a>
            </motion.p>
            <motion.p whileHover={{ scale: 1.05, color: '#F472B6' }} whileTap={{ scale: 0.95, rotate: 5 }} transition={{ type: 'spring', stiffness: 250 }}>
              🏛️ Địa chỉ: Tầng 11 - Công viên phần mềm, 02 Quang Trung, TP Đà Nẵng
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
