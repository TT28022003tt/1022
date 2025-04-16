"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTasks,
  faServer,
  faBriefcase,
  faFileContract,
  faUsers,
  faPhone,
  faEnvelope,
  faGlobe,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const sections = [
  {
    id: "intro",
    title: "Giới thiệu chung",
    icon: faInfoCircle,
    content: (
      <div className="space-y-4 text-gray-700">
        <p>
          Trung tâm Thông tin và Giám sát, Điều hành thông minh Đà Nẵng được thành lập từ việc hợp nhất Trung tâm Giao dịch Công nghệ Thông tin và Truyền thông (2011) và Trung tâm Thông tin Dịch vụ công (2016). Là đơn vị đầu mối giám sát và vận hành các hệ thống đô thị thông minh, Trung tâm thu thập, phân tích dữ liệu để hỗ trợ lãnh đạo thành phố trong công tác chỉ đạo, điều hành, đồng thời cung cấp thông tin và tư vấn cho công dân, tổ chức.
        </p>
      </div>
    ),
  },
  {
    id: "tasks",
    title: "Nhiệm vụ, chức năng chính",
    icon: faTasks,
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Vận hành các ứng dụng và dịch vụ đô thị thông minh.</li>
        <li>Giám sát, phân tích dữ liệu để hỗ trợ quyết định của lãnh đạo.</li>
        <li>Tư vấn và triển khai các giải pháp chuyển đổi số.</li>
        <li>Thực hiện các nhiệm vụ do UBND thành phố và Sở Thông tin và Truyền thông giao.</li>
        <li>Cung cấp thông tin, hướng dẫn cho công dân và doanh nghiệp.</li>
      </ul>
    ),
  },
  {
    id: "infrastructure",
    title: "Hạ tầng kỹ thuật",
    icon: faServer,
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Hệ thống tổng đài IP với 100 bàn tiếp nhận và giải đáp thông tin.</li>
        <li>Cổng nhắn tin SMS Gateway để gửi thông báo nhanh chóng.</li>
        <li>Cổng thông tin dịch vụ công (http://1022.vn) hỗ trợ truy cập thông tin và dịch vụ công trực tuyến.</li>
        <li>Hệ thống máy chủ và cơ sở dữ liệu hiện đại đảm bảo vận hành liên tục.</li>
      </ul>
    ),
  },
  {
    id: "services",
    title: "Dịch vụ cung cấp cho doanh nghiệp, tổ chức",
    icon: faBriefcase,
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Tư vấn và triển khai giải pháp chuyển đổi số.</li>
        <li>Cung cấp dữ liệu kinh tế - xã hội phục vụ nghiên cứu và phát triển.</li>
        <li>Hỗ trợ đăng ký và xử lý hồ sơ trực tuyến.</li>
        <li>Dịch vụ giám sát và phân tích dữ liệu theo yêu cầu.</li>
      </ul>
    ),
  },
  {
    id: "contracts",
    title: "Hợp đồng dịch vụ đã triển khai",
    icon: faFileContract,
    content: (
      <div className="space-y-6">
        {[
          { year: 2018, desc: "Triển khai hệ thống tổng đài IP cho UBND thành phố Đà Nẵng." },
          { year: 2020, desc: "Phát triển Cổng thông tin dịch vụ công 1022.vn." },
          { year: 2022, desc: "Tích hợp SMS Gateway cho thông báo tự động." },
          { year: 2024, desc: "Triển khai hệ thống phân tích dữ liệu đô thị thông minh." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <span className="text-[#00B3FF] font-semibold text-lg">{item.year}</span>
            <div className="flex-1">
              <p>{item.desc}</p>
              <div className="h-1 w-12 bg-[#00B3FF] mt-2 rounded" />
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "clients",
    title: "Khách hàng tiêu biểu",
    icon: faUsers,
    content: (
      <div className="relative w-full">
        <div className="keen-slider">
          {["UBND TP Đà Nẵng", "Sở TTTT", "Sở Kế hoạch & Đầu tư", "Doanh nghiệp A", "Tổ chức B"].map((client, index) => (
            <div key={index} className="keen-slider__slide">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <p className="text-sm sm:text-base font-semibold text-[#003294]">{client}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "channels",
    title: "Kênh giao tiếp",
    icon: faPhone,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: faPhone, title: "Tổng đài", desc: "1022 (Hỗ trợ 24/7)", url: "tel:1022" },
          { icon: faGlobe, title: "Website", desc: "1022.vn", url: "http://1022.vn" },
          { icon: faEnvelope, title: "Email", desc: "hotro@1022.vn", url: "mailto:hotro@1022.vn" },
          { icon: faComment, title: "Mạng xã hội", desc: "Fanpage 1022 Đà Nẵng", url: "#" },
        ].map((channel, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <FontAwesomeIcon icon={channel.icon} className="text-2xl text-[#00B3FF] mb-2" />
            <p className="font-semibold text-[#003294]">{channel.title}</p>
            <a href={channel.url} className="text-sm text-gray-600 hover:text-[#00B3FF]">{channel.desc}</a>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutPage = () => {
  const [currentSection, setCurrentSection] = useState("intro");
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  
    return () => clearInterval(interval);
  }, [instanceRef]);
  

  const selectedSection = sections.find((section) => section.id === currentSection);

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề chính */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#003294] to-[#00B3FF] uppercase tracking-wide mb-12"
        >
          VỀ CHÚNG TÔI
        </motion.h1>

        {/* Thanh điều hướng cố định */}
        <div className="sticky top-0 z-10 bg-white shadow-md rounded-lg p-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all ${
                  currentSection === section.id
                    ? "bg-[#00B3FF] text-white"
                    : "text-[#003294] hover:text-[#00B3FF] hover:bg-gray-100"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Nội dung section được chọn */}
        <AnimatePresence mode="wait">
          {selectedSection && (
            <motion.div
              key={selectedSection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FontAwesomeIcon icon={selectedSection.icon} className="text-2xl sm:text-3xl text-[#00B3FF]" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003294] uppercase">
                  {selectedSection.title}
                </h2>
              </div>
              {selectedSection.id === "clients" ? (
                <div ref={sliderRef} className="keen-slider">
                  {selectedSection.content}
                </div>
              ) : (
                selectedSection.content
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutPage;