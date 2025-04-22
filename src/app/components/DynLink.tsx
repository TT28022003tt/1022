"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { dynLinks } from "../constants/dynLinks";

const DynLink = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex p-3 sm:p-4 text-white h-[80px] sm:h-[100px] justify-center gap-2 sm:gap-3 w-full max-w-7xl mx-auto relative">
      {dynLinks.map((card, index) => (
        <Link
          key={index}
          href={card.href}
          aria-label={`Visit ${card.name}`}
          className={`group 
            flex justify-center items-center 
            rounded-lg 
            w-20 sm:w-48 md:w-60 lg:w-64 
            p-3 
            transition-transform duration-200 ease-in-out
            hover:scale-[1.03] 
            active:scale-95 
            relative`}
          onMouseEnter={() => setExpanded(index)}
          onMouseLeave={() => setExpanded(null)}
          onClick={() => window.innerWidth < 640 && setExpanded(index)}
          style={{ backgroundColor: card.bg }}
        >
          <Image
            src={card.logo}
            alt={card.name}
            width={48}
            height={48}
            className={`w-8 sm:w-10 md:w-12 object-contain absolute left-6 sm:left-4 transition-opacity duration-300`}
          />
          <span
            className={`text-xs sm:text-sm font-semibold absolute left-12 pl-2 sm:left-16 md:opacity-100 opacity-0 `}
          >
            {card.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(DynLink);