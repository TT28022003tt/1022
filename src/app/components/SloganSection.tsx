"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SloganSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fixed top-100 left-0 right-0 transform -translate-y-1/2 flex justify-between px-10 z-50">
        {/* SỨ MỆNH */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#00B3FF] pl-4 w-[300] flex flex-col justify-center"
        >
          <h2 className="text-[#00B3FF] font-extrabold text-3xl uppercase tracking-wide mb-2 ">
            SỨ MỆNH
          </h2>
          <p className="text-black text-lg leading-loose ">
            Thay mặt chính quyền chăm sóc công dân, doanh nghiệp
          </p>
        </motion.div>

        {/* TẦM NHÌN */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-r-4 border-[#E51717] pr-4 text-right w-[300px]"
        >
          <h2 className="text-[#E51717] font-extrabold text-3xl uppercase tracking-wide mb-2 ">
            TẦM NHÌN
          </h2>
          <p className="text-black text-lg leading-loose">
            Tham gia có hiệu quả vào chương trình xây dựng chính quyền điện tử
            và chương trình cải cách hành chính thành phố Đà Nẵng
          </p>
        </motion.div>

      {/* Hiệu ứng ánh sáng nhẹ nhàng */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B3FF40] to-transparent opacity-20 blur-lg"></div>
    </section>
  );
};

export default SloganSection;
