'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  icon: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#2257BF] flex justify-items-start md:justify-center items-center cursor-pointer rounded-2xl p-4 min-w-[130px] h-full group"
    >
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className="mr-2"
      />
      <h1 className="text-base sm:text-lg text-white font-semibold my-2 sm:my-4">{title}</h1>
    </motion.div>
  );
};

export default Card;