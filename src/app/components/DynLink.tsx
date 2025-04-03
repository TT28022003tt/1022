"use client"

import Link from "next/link";

const DynLink = () => {
  const cards = [
    { name: "CỔNG THÔNG TIN DỊCH VỤ CÔNG", logo: "/Logo1022.png" },
    { name: "CỔNG GÓP Ý THÀNH PHỐ", logo: "/Logo1022.png" },
    { name: "HỆ THỐNG THÔNG TIN CHÍNH QUYỀN ĐIỆN TỬ", logo: "/Logo1022.png" },
  ];
  return (
    <div className="flex p-4 text-white h-[100px]">
    <Link href="/home" className="group flex justify-center items-center bg-[#3498db] shadow-md rounded-lg w-22 md:w-64 p-3 mx-3 active:scale-95 transition-all duration-300 hover:w-64 relative">
        <img src="/1022.png" alt="" className="w-12 h-12 object-contain absolute left-5 transition-opacity duration-300" />
        <span className="text-xs font-semibold absolute left-18 md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CỔNG THÔNG TIN DỊCH VỤ CÔNG
        </span>
    </Link>

    <Link href="/" className="group flex justify-center items-center bg-[#2ecc71] shadow-md rounded-lg w-22 md:w-64 p-3 mx-3 active:scale-95 transition-all duration-300 hover:w-64 relative">
        <img src="/tp.png" alt="" className="w-12 h-12 object-contain absolute left-5 transition-opacity duration-300" />
        <span className="text-xs font-semibold absolute left-18 md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CỔNG GÓP Ý THÀNH PHỐ
        </span>
    </Link>

    <Link href="/" className="group flex justify-center items-center bg-[#e67e22] shadow-md rounded-lg w-22 md:w-64 p-3 mx-3 active:scale-95 transition-all duration-300 hover:w-64 relative">
        <img src="/dt.png" alt="" className="w-12 h-12 object-contain absolute left-5 transition-opacity duration-300" />
        <span className="text-xs font-semibold absolute left-18 md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            HỆ THỐNG THÔNG TIN CHÍNH QUYỀN ĐIỆN TỬ
        </span>
    </Link>
</div>
  );
};

export default DynLink;