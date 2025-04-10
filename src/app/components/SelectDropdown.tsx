"use client"

import React from "react"

const departments = [
  "Ban QL các KCNC và các KCN",
  "Bảo hiểm xã hội thành phố Đà Nẵng",
  "Cục Hải quan",
  "Cục Thống kê",
  "Sở Công thương",
  "Sở Du lịch",
  "Sở Giao thông Vận tải",
  "Sở Giáo dục và Đào tạo",
  "Sở Khoa học và Công nghệ",
  "Sở Lao động Thương binh Xã hội",
  "Sở Kế hoạch và Đầu tư",
  "Sở Ngoại vụ",
  "Sở Nông nghiệp Phát triển Nông thôn",
  "Sở Nội vụ",
  "Sở Thông tin và Truyền thông",
  "Sở Tài chính",
  "Sở Tài nguyên và Môi trường",
  "Sở Tư pháp",
  "Sở Văn hóa và Thể thao"
]

const SelectDropdown = () => {
  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center max-w-xs  p-4 space-y-2">
      <h2 className="custom-outline-text text-center">LIÊN KẾT WEB</h2>

      <select className="w-full border border-gray-400 rounded p-2 text-sm">
        <option disabled className="font-semibold text-gray-700">Các Sở Ban Ngành</option>
        {departments.map((dept, idx) => (
          <option key={idx} value={dept}>{dept}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectDropdown
