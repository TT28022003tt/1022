"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const menuItems = [
	"GIỚI THIỆU",
	"DỊCH VỤ CÔNG TRỰC TUYẾN",
	"BỘ THỦ TỤC HÀNH CHÍNH",
	"VĂN BẢN PHÁP QUY",
	"HƯỚNG DẪN SỬ DỤNG",
];

interface HamburgerMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg p-4 z-50"
		>
			<button onClick={onClose} className="absolute top-4 right-4 text-gray-800">
				<X size={24} />
			</button>
			<ul className="mt-8 space-y-4 text-gray-800">
				{menuItems.map((item, index) => (
					<li key={index} className="hover:text-blue-500 cursor-pointer">
						{item}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default HamburgerMenu;
