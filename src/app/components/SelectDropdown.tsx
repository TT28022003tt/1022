"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const departments = [
  { name: "Ban QL các KCNC và các KCN", url: "https://example.com/kcnc" },
  { name: "Bảo hiểm xã hội thành phố Đà Nẵng", url: "https://example.com/bhxh" },
  { name: "Cục Hải quan", url: "https://example.com/haiquan" },
  { name: "Cục Thống kê", url: "https://example.com/thongke" },
  { name: "Sở Công thương", url: "https://example.com/congthuong" },
  { name: "Sở Du lịch", url: "https://example.com/dulich" },
  { name: "Sở Giao thông Vận tải", url: "https://example.com/giaothong" },
  { name: "Sở Giáo dục và Đào tạo", url: "https://example.com/giaoduc" },
  { name: "Sở Khoa học và Công nghệ", url: "https://example.com/khoahoc" },
  { name: "Sở Lao động Thương binh Xã hội", url: "https://example.com/laodong" },
  { name: "Sở Kế hoạch và Đầu tư", url: "https://example.com/kehoach" },
  { name: "Sở Ngoại vụ", url: "https://example.com/ngoaivu" },
  { name: "Sở Nông nghiệp Phát triển Nông thôn", url: "https://example.com/nongnghiep" },
  { name: "Sở Nội vụ", url: "https://example.com/noivu" },
  { name: "Sở Thông tin và Truyền thông", url: "https://example.com/thongtin" },
  { name: "Sở Tài chính", url: "https://example.com/taichinh" },
  { name: "Sở Tài nguyên và Môi trường", url: "https://example.com/tainuyen" },
  { name: "Sở Tư pháp", url: "https://example.com/tuphap" },
  { name: "Sở Văn hóa và Thể thao", url: "https://example.com/vanhoa" },
];

const SelectDropdown = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    setSelected(url);
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003294] to-[#00B3FF] uppercase tracking-wide mb-4"
      >
        LIÊN KẾT WEB
      </motion.h2>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3FF] text-sm sm:text-base transition-all"
      >
        <option value="" disabled>
          Chọn Sở Ban Ngành
        </option>
        {departments.map((dept, idx) => (
          <option key={idx} value={dept.url}>
            {dept.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;