'use client';

import { useState, useEffect } from 'react';
import CardPage from './CardPage';

const InfoUneed = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(8); 

  useEffect(() => {
    const updatePerPage = () => {
      if (window.matchMedia('(max-width: 640px)').matches) {
        setPerPage(3); 
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        setPerPage(4); 
      } else {
        setPerPage(8); 
      }
      setCurrentPage(0); 
    };

    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);

  const cards = [
    { icon: '/vector/Vector1.png', title: 'Hệ Thống Danh Bạ' },
    { icon: '/vector/Vector2.png', title: 'Số Liệu Kinh Tế Xã Hội' },
    { icon: '/vector/Vector3.png', title: 'Lịch Tạm Ngừng Cung Cấp Điện' },
    { icon: '/vector/Vector4.png', title: 'Lịch Tạm Ngừng Cấp Nước' },
    { icon: '/vector/Vector5.png', title: 'Lịch Truyền Hình' },
    { icon: '/vector/Vector6.png', title: 'Lịch Tàu Xe' },
    { icon: '/vector/Vector7.png', title: 'Số Điện Thoại Khẩn Cấp' },
    { icon: '/vector/Vector8.png', title: 'Lịch Sự kiện' },
  ];

  const totalPages = Math.ceil(cards.length / perPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedCards = cards.slice(currentPage * perPage, (currentPage + 1) * perPage);

  return (
    <div className="bg-[#003294] w-screen h-[550px] md:h-[400px] m-4 flex flex-col justify-center items-center">
      <div className="w-[80%] h-[90%] flex flex-col justify-center items-center">
        {/* Tiêu đề */}
        <div className="mb-4 md:mb-10">
          <h2 className="uppercase tracking-wide custom-outline-text-InfoUneed">
            Thông tin cần biết
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-center px-4 w-full">
          {displayedCards.map((card, index) => (
            <div key={index} className="w-full h-[100px] mx-auto ">
              <CardPage icon={card.icon} title={card.title} />
            </div>
          ))}
        </div>
        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={handlePrevPage}
              className="px-4 py-2 bg-[#2257BF] text-white rounded-lg hover:bg-[#F472B6] transition"
            >
              Trước
            </button>
            <span className="text-white">
              Trang {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-[#2257BF] text-white rounded-lg hover:bg-[#F472B6] transition"
            >
              Sau
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoUneed;