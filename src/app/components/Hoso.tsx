"use client";

import React, { useState } from "react";

const TraCuuHoSo = () => {
  const [maHoSo, setMaHoSo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý tra cứu ở đây
    alert(`Mã hồ sơ: ${maHoSo}`);
  };

  return (
    <div className="flex flex-col items-center justify-center   px-4">
      {/* Tiêu đề */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text  stroke-blue-500 text-stroke text-center mb-6 uppercase">
        <span className="custom-outline-text drop-shadow-md">TRA CỨU HỒ SƠ</span>
      </h1>

      {/* Form tra cứu */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Mã hồ sơ <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          maxLength={15}
          placeholder="Nhập mã biên nhận gồm 15 số"
          value={maHoSo}
          onChange={(e) => setMaHoSo(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-500 rounded hover:from-blue-500 hover:to-blue-600 transition"
        >
          TRA CỨU
        </button>
      </form>
    </div>
  );
};

export default TraCuuHoSo;
