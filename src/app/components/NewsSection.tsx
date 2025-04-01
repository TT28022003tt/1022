"use client"

import Image from "next/image";


const articles = [
  {
    title: "Khóa học Thạc sĩ Nghệ thuật Chuyên nghiệp",
    image: "/banner/image1.jpg",
  },
  {
    title: "Khóa học Thạc sĩ Nghệ thuật Chuyên nghiệp",
    image: "/banner/image2.jpg",
  },
  {
    title: "Điện và Từ Tính",
    image: "/banner/image3.jpg",
  },
  {
    title: "Hóa học trường học phiên bản beta",
    image: "/banner/image4.jpg",
  },
  {
    title: "Chủ nghĩa Hiện đại trong Nghệ thuật Phương Đông",
    image: "/banner/image5.jpg",
  },
  {
    title: "Bố cục trong Nghệ thuật Thị giác",
    image: "/banner/image6.jpg",
  },
  {
    title: "Vật lý trung học",
    image: "/banner/image1.jpg",
  },
  {
    title: "Chỉnh màu với Da Vinci",
    image: "/banner/image2.jpg",
  },
];

const NewsSection = () => {
  return (
    <div className="p-6">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center">
        <h2 className="custom-outline-text">TIN TỨC MỚI</h2>
        <a href="#" className="text-blue-500 hover:underline">See all</a>
      </div>

      {/* Danh sách bài viết */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {articles.map((article, index) => (
          <div key={index} className="space-y-2">
            <div className="w-full h-40 relative">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <a href="#" className="font-semibold text-black hover:text-blue-500 hover:underline">
              {article.title}
            </a>
          </div>
        ))}
      </div>


      {/* Phân trang */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="p-2 text-gray-500 hover:text-black">&larr;</button>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            className={`w-6 h-6 flex items-center justify-center rounded ${num === 1 ? "bg-blue-500 text-white" : "text-gray-500"}`}
          >
            {num}
          </button>
        ))}
        <button className="p-2 text-gray-500 hover:text-black">&rarr;</button>
      </div>
    </div>
  );
};

export default NewsSection;