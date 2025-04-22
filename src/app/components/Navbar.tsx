"use client"

import { faBars, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const menuItems = [
  { name: "GIỚI THIỆU", link: "/about" },
  { name: "DỊCH VỤ CÔNG TRỰC TUYẾN", link: "/dich-vu" },
  { name: "BỘ THỦ TỤC HÀNH CHÍNH", link: "/thu-tuc" },
  { name: "VĂN BẢN PHÁP QUY", link: "/van-ban" },
  { name: "HƯỚNG DẪN SỬ DỤNG", link: "/huong-dan" },
];
const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#hamburger-menu")) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen };
};
const Navbar = () => {
  const pathname = usePathname();
  const hideHamburger = pathname.endsWith("/");
  const { isMenuOpen, setIsMenuOpen } = useHamburgerMenu();

  return (
    <nav className="bg-[#10203F] text-white md:w-[90%] w-full py-2 px-4 flex items-center justify-center sm:justify-between relative flex-wrap">
      {/* LOGO */}
      <div className="flex items-center gap-2 pt-6">
        <Link href="/" className="flex flex-col items-center gap-4">
          <Image
            src="/Logo1022.png"
            alt="Logo 1022"
            width={150}
            height={80}
            className="w-24 sm:w-32 md:w-40 lg:w-48"
            priority
          />
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
      <div className="relative flex items-center justify-between gap-4 sm:flex-nowrap pt-4 sm:pt-0">
        <div className="relative w-full max-w-xs sm:max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered rounded-full w-full pr-10 text-black"
          />
          <button aria-label="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex items-center space-x-4 md:pl-4 sm:pr-4 shrink-0">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" />
          {!hideHamburger && (
            <button
              aria-label="Toggle menu"
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
            className="absolute top-26 right-8 mt-2 w-64 bg-white text-black shadow-lg rounded-lg py-2 z-50"
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
