"use client"

import Link from "next/link";

const DynLink = () => {
  const cards = [
    { name: "CỔNG THÔNG TIN DỊCH VỤ CÔNG", logo: "/Logo1022.png" },
    { name: "CỔNG GÓP Ý THÀNH PHỐ", logo: "/Logo1022.png" },
    { name: "HỆ THỐNG THÔNG TIN CHÍNH QUYỀN ĐIỆN TỬ", logo: "/Logo1022.png" },
  ];
  return (
    <div className='flex p-4 text-white'>
      <Link href="/" className="flex justify-center items-center bg-[#3498db] shadow-md rounded-lg w-64 p-3 mx-4 active:scale-95 transition-transform duration-200">
        <img src="/1022.png" alt="" className="w-12 h-12 object-contain mr-2" />
        <span className="text-xs font-semibold">CỔNG THÔNG TIN DỊCH VỤ CÔNG</span>
      </Link>
      <Link href="/" className="flex justify-center items-center bg-[#2ecc71] shadow-md rounded-lg w-64 p-3 mx-4 active:scale-95 transition-transform duration-200">
        <img src="/tp.png" alt="" className="w-12 h-12 object-contain mr-2" />
        <span className="text-xs font-semibold">CỔNG GÓP Ý THÀNH PHỐ</span>
      </Link>
      <Link href="/" className="flex justify-center items-center bg-[#e67e22] shadow-md rounded-lg p-3 w-64 mx-4 active:scale-95 transition-transform duration-200">
        <img src="/dt.png" alt="" className="w-12 h-12 object-contain mr-2" />
        <span className="text-xs font-semibold">HỆ THỐNG THÔNG TIN CHÍNH QUYỀN ĐIỆN TỬ</span>
      </Link>
    </div>
  );
};

export default DynLink;