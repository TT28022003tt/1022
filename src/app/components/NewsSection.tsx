"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { articles } from "../constants/articles";
import { useEffect, useState } from "react";

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(8);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateArticlesPerPage = () => {
      const width = window.innerWidth;
      let newArticlesPerPage = 8;
      if (width < 640) newArticlesPerPage = 3;
      else if (width < 1024) newArticlesPerPage = 6;

      setArticlesPerPage((prev) => {
        if (prev !== newArticlesPerPage) {
          setCurrentPage(1); // chỉ reset page khi số lượng bài thay đổi
        }
        return newArticlesPerPage;
      });
    };

    updateArticlesPerPage();
    window.addEventListener("resize", updateArticlesPerPage);
    return () => window.removeEventListener("resize", updateArticlesPerPage);
  }, []);

  if (!isClient) return null;

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-6">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center">
        <h2 className="custom-outline-text">TIN TỨC MỚI</h2>
        <a href="#" className="text-blue-500 hover:underline">See all</a>
      </div>

      {/* Danh sách bài viết */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {visibleArticles.map((article, index) => (
          <motion.div
            key={index}
            className="space-y-2 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <a href="#" className="font-semibold text-black hover:text-blue-500 hover:underline text-sm sm:text-base">
              {article.title}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Phân trang */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-6 sm:py-8 md:py-10"
      >
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-gray-500 hover:text-black disabled:opacity-50"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              className={`w-6 h-6 flex items-center justify-center rounded ${num === currentPage ? "bg-blue-500 text-white" : "text-gray-500"}`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-500 hover:text-black disabled:opacity-50"
          >
            →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsSection;
