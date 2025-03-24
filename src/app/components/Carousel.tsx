"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const images = [
	'/image1.jpg',
	'/image2.jpg',
	'/image3.jpg',
	'/image4.jpg',
];


const Carousel = () => {
	const [current, setCurrent] = useState(1);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(interval);
	}, [current]);
	return (
		<div className="relative h-[450] flex justify-center items-center gap-8 p-4 overflow-hidden w-full bg-[linear-gradient(to_bottom,#10203F_50%,white_50%)]">
			<button onClick={prevSlide} className="absolute left-4 text-5xl text-[#3498db] p-2 rounded-full z-10">
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<div className="flex items-center justify-center w-full relative">
				<AnimatePresence mode="popLayout">
					{images.map((img, index) => {
						const position = index - current;
						let xValue = position * 620;
						let scaleValue = position === 0 ? 1.8 : 1.2;
						let scaleXValue = position === 0 ? 1.8 : 1.2;
						let scaleYValue = position === 0 ? 1.2 : 1.2;
						let opacityValue = position === 0 ? 1 : 1;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8, x: xValue }}
								animate={{ opacity: opacityValue, scale: scaleValue, scaleX: scaleXValue, scaleY: scaleYValue, x: xValue }}
								exit={{ opacity: 0, scale: 0.8, x: position > 0 ? 200 : -200 }}
								transition={{ duration: 0.5 }}
								className="absolute rounded-lg overflow-hidden "
							>
								<Image src={img} alt={`Slide ${index}`} width={256} height={320} className="object-cover" />
								{position !== 0 && (
									<div className="absolute inset-0 bg-black opacity-50" />
								)}
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
			<button onClick={nextSlide} className="absolute right-4 text-5xl text-[#3498db] p-2 rounded-full">
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
};

export default Carousel;