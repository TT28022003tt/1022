"use client"

import React from "react"

const videoList = [
  "Hướng dẫn cấp phiếu lý lịch tư pháp cho công dân Việt Nam, người nước ngoài đang cư trú tại Việt Nam",
  "Hướng dẫn thủ tục cấp bản sao văn bằng chứng chỉ từ sổ gốc",
  "Video hướng dẫn đăng ký tài khoản công trực tuyến",
  "Quy trình xử lý hồ sơ trực tuyến cấp độ 3, 4",
]

const VideoWidget = () => {
  return (
    <div className="w-full max-w-xs ">
      <div className=" px-4 py-2">
        <h2 className="custom-outline-text">QUẢN LÝ VIDEO</h2>
      </div>

      {/* Video hiển thị chính */}
      <div className="relative aspect-video w-full">
        <iframe
          src="https://www.youtube.com/watch?v=NMdTd9e-LEI&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVMNMdTd9e-LEI&start_radio=1&ab_channel=1theK%28%EC%9B%90%EB%8D%94%EC%BC%80%EC%9D%B4%29"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Danh sách tiêu đề */}
      <div className="max-h-[120px] overflow-y-auto p-2 space-y-2 text-sm">
        {videoList.map((title, idx) => (
          <p key={idx} className="text-blue-700 hover:underline cursor-pointer">
            {title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default VideoWidget
