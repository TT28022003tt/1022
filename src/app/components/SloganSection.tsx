"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const SloganSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });
  const isVisionInView = useInView(visionRef, { once: true });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fixed top-[100px] left-0 right-0 flex justify-between px-10 z-50">
      {/* SỨ MỆNH */}
      <motion.div
        ref={missionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="border-l-4 border-[#00B3FF] pl-4 w-[300px] flex flex-col justify-center"
      >
        <h2 className="text-[#00B3FF] font-extrabold text-3xl uppercase tracking-wide mb-2">
          SỨ MỆNH
        </h2>
        <p className="text-black text-lg leading-loose">
          Thay mặt chính quyền chăm sóc công dân, doanh nghiệp
        </p>
      </motion.div>

      {/* TẦM NHÌN */}
      <motion.div
        ref={visionRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-r-4 border-[#E51717] pr-4 text-right w-[300px]"
      >
        <h2 className="text-[#E51717] font-extrabold text-3xl uppercase tracking-wide mb-2">
          TẦM NHÌN
        </h2>
        <p className="text-black text-lg leading-loose">
          Tham gia có hiệu quả vào chương trình xây dựng chính quyền điện tử
          và chương trình cải cách hành chính thành phố Đà Nẵng
        </p>
      </motion.div>

      {/* Hiệu ứng ánh sáng nhẹ nhàng */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B3FF40] to-transparent opacity-30 blur-xl"></div>
    </section>
  );
};

export default SloganSection;
