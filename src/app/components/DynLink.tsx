"use client"

import Link from "next/link";
import { useState } from "react";

const DynLink = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const cards = [
    { name: "CỔNG THÔNG TIN DỊCH VỤ CÔNG", logo: "/Logo1022.png", bg: "#3498db", href: "/home" },
    { name: "CỔNG GÓP Ý THÀNH PHỐ", logo: "/tp.png", bg: "#2ecc71", href: "/" },
    { name: "HỆ THỐNG THÔNG TIN CHÍNH QUYỀN ĐIỆN TỬ", logo: "/dt.png", bg: "#e67e22", href: "/" },
  ];

  return (
    <div className="flex p-3 text-white h-[100px] justify-center gap-3 w-full relative ">
      {cards.map((card, index) => (
        <Link
          key={index}
          href={card.href}
          className={`group flex justify-center items-center shadow-md rounded-lg w-22 md:w-64 p-3 active:scale-95 transition-all duration-300 hover:w-64 relative 
            ${expanded === index ? 'w-screen fixed z-50' : ''}`}
          onMouseEnter={() => setExpanded(index)}
          onMouseLeave={() => setExpanded(null)}
          onClick={() => window.innerWidth < 640 && setExpanded(index)}
          style={{ backgroundColor: card.bg }}
        >
          <img
            src={card.logo}
            alt=""
            className={`w-12 h-12 object-contain absolute left-5 transition-opacity duration-300 ${expanded === index}`}
          />
          <span className={`text-xs font-semibold absolute left-18 md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${expanded === index}`}>
            {card.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default DynLink;
