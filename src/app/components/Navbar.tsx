"use client";

import { faBars, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "GIỚI THIỆU", link: "/gioi-thieu" },
  { name: "DỊCH VỤ CÔNG TRỰC TUYẾN", link: "/dich-vu" },
  { name: "BỘ THỦ TỤC HÀNH CHÍNH", link: "/thu-tuc" },
  { name: "VĂN BẢN PHÁP QUY", link: "/van-ban" },
  { name: "HƯỚNG DẪN SỬ DỤNG", link: "/huong-dan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const hideHamburger = pathname.endsWith("/1022");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#hamburger-menu")) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#10203F] text-white md:w-[90%] w-full py-2 px-4 flex items-center justify-between relative flex-wrap">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image src="/Logo1022.png" alt="Logo 1022" width={200} height={200} />
          <div className="text-sm flex flex-col justify-center items-center">
            <p className="font-bold text-center">CỔNG THÔNG TIN DỊCH VỤ CÔNG ĐÀ NẴNG</p>
            <p>
              Gọi: <span className="font-bold text-[#E51717]">*1022</span> hoặc{" "}
              <span className="font-bold text-[#E51717]">0236.1022</span>
            </p>
          </div>
        </Link>
      </div>
  
      {/* SEARCH BAR & MENU BUTTON */}
      <div className="relative flex items-center flex-wrap gap-4 sm:flex-nowrap">
        <p className="uppercase text-sm font-bold mr-2 text-[#00b3ff94] text-right">
          Search<br />Anything
        </p>
        <div className="relative w-full sm:w-64">
          <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full pr-10 text-black" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex items-center space-x-4 md:pl-4 pr-4">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" />
          {!hideHamburger && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl relative z-30 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>
      </div>
  
      {/* HAMBURGER MENU */}
      {isMenuOpen && (
        <>
          {/* Hiệu ứng nền mờ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-10"
          ></motion.div>
  
          {/* Menu chính */}
          <motion.div
            id="hamburger-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-23 right-4 mt-2 w-64 bg-white text-black shadow-lg rounded-lg py-2 z-20"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)} // Đóng menu khi click vào mục
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </nav>
  );
  
};

export default Navbar;
