'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import { usePathname } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="bg-[#003294]/10">
      {isHome ? <Footer1 /> : <Footer2 />}
    </div>
  );
};

export default Footer;
