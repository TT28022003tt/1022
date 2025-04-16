"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const videoList = [
  {
    title: "Hướng dẫn cấp phiếu lý lịch tư pháp",
    url: "https://www.youtube.com/embed/NMdTd9e-LEI",
  },
  {
    title: "Hướng dẫn thủ tục cấp bản sao văn bằng chứng chỉ",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    title: "Video hướng dẫn đăng ký tài khoản công trực tuyến",
    url: "https://www.youtube.com/embed/3t6hM5tR3A4", // Placeholder
  },
  {
    title: "Quy trình xử lý hồ sơ trực tuyến cấp độ 3, 4",
    url: "https://www.youtube.com/embed/9bZkp7q19f0", // Placeholder
  },
  
  {
    title: "Quy trình xử lý hồ sơ trực tuyến cấp độ 3, 4",
    url: "https://www.youtube.com/embed/9bZkp7q19f0", // Placeholder
  },
  
  {
    title: "Quy trình xử lý hồ sơ trực tuyến cấp độ 3, 4",
    url: "https://www.youtube.com/embed/9bZkp7q19f0", // Placeholder
  },
  
  {
    title: "Quy trình xử lý hồ sơ trực tuyến cấp độ 3, 4",
    url: "https://www.youtube.com/embed/9bZkp7q19f0", // Placeholder
  },
];

const VideoWidget = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoList[0].url);
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoSelect = (url: string) => {
    setIsLoading(true);
    setSelectedVideo(url);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003294] to-[#00B3FF] uppercase tracking-wide mb-4"
      >
        QUẢN LÝ VIDEO
      </motion.h2>
      <div className="w-full">
        {/* Video hiển thị chính */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
          )}
          <iframe
            src={selectedVideo}
            title="Video hướng dẫn"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        {/* Danh sách tiêu đề */}
        <div className="mt-4 max-h-[150px] overflow-y-auto p-2 space-y-2 text-sm">
          {videoList.map((video, idx) => (
            <motion.p
              key={idx}
              whileHover={{ x: 5 }}
              className={`cursor-pointer text-[#003294] hover:text-[#00B3FF] hover:underline ${
                selectedVideo === video.url ? "font-semibold" : ""
              }`}
              onClick={() => handleVideoSelect(video.url)}
            >
              {video.title}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoWidget;