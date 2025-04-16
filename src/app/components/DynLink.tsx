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
          className={`group flex justify-center items-center shadow-md rounded-lg w-20 sm:w-48 md:w-60 lg:w-64 p-3 active:scale-95 transition-all duration-300 hover:w-64 relative ${
            expanded === index ? "sm:w-72 md:w-80 z-50" : ""
          }`}
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
            className={`w-8 sm:w-10 md:w-12 object-contain absolute left-3 sm:left-4 transition-opacity duration-300`}
          />
          <span
            className={`text-xs sm:text-sm font-semibold absolute left-12 sm:left-16 md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              expanded === index ? "opacity-100" : ""
            }`}
          >
            {card.name}
          </span>
          {expanded === index && window.innerWidth < 640 && (
            <button
              onClick={() => setExpanded(null)}
              className="absolute right-2 top-2 text-white text-xl"
              aria-label="Close expanded card"
            >
              ✕
            </button>
          )}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(DynLink);