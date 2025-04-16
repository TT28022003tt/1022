"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Image from "next/legacy/image";

interface CardProps {
  icon: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="bg-[#2257BF] flex justify-items-start md:justify-center items-center cursor-pointer rounded-2xl p-4 flex-1 min-w-[130px]">
      <Image src={icon} alt="" width={40} height={40} className="text-xl mr-2"/>
      <h1 className="text-lg text-white font-semibold my-4">{title}</h1>
    </div>
  );
};

export default Card;
