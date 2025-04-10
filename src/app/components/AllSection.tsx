"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const articles = [
	{ title: "Khóa học Thạc sĩ Nghệ thuật", image: "/banner/image1.jpg" },
	{ title: "Khóa học Thạc sĩ Nghệ thuật", image: "/banner/image2.jpg" },
	{ title: "Điện và Từ Tính", image: "/banner/image3.jpg" },
	{ title: "Hóa học trường học phiên bản beta", image: "/banner/image4.jpg" },

];
type NewsSectionProps = {
	title: string;
};

const AllSection: React.FC<NewsSectionProps> = ({ title }) => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const handleScroll = (direction: "left" | "right") => {
		if (containerRef.current) {
			const scrollAmount = 300;
			containerRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth"
			});
			setScrollPosition(containerRef.current.scrollLeft || 0);
		}
	};


	return (
		<div className="py-10">
			{/* Tiêu đề */}
			<div className="flex justify-center items-center px-6 mb-4">
				<h2 className="text-3xl font-bold text-blue-500 uppercase tracking-wide custom-outline-text">
					{title}
				</h2>
			</div>

			<div className="relative px-6">
				{/* Nút trái */}
				<button
					onClick={() => handleScroll("left")}
					className="absolute left-[-30px] top-1/3 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-200 transition-all"
				>
					&larr;
				</button>

				{/* Danh sách bài viết */}
				<div ref={containerRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">
					{articles.map((article, index) => (
						<div key={index} className="w-40 flex-shrink-0">
							<div className="w-40 h-40 relative">
								<Image
									src={article.image}
									alt={article.title}
									layout="fill"
									objectFit="cover"
									className="rounded-lg"
								/>
							</div>
							<a href="#" className="font-semibold text-black hover:text-blue-500 hover:underline block mt-2">
								{article.title}
							</a>
						</div>
					))}
				</div>

				{/* Nút phải */}
				<button
					onClick={() => handleScroll("right")}
					className="absolute right-[-30px] top-1/3 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-200 transition-all"
				>
					&rarr;
				</button>
			</div>
			<div className="w-full flex justify-end">
				<a href="#" className="text-blue-500 hover:underline ">See all</a>
			</div>
		</div>
	);
};
export default AllSection;
