"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TraCuuHoSo = () => {
  const [maHoSo, setMaHoSo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate mã hồ sơ (15 số)
    if (!/^\d{15}$/.test(maHoSo)) {
      setError("Mã hồ sơ phải gồm 15 số.");
      setIsLoading(false);
      return;
    }

    // Giả lập gọi API (thay thế bằng API thực nếu có)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API delay
      alert(`Tra cứu thành công cho mã hồ sơ: ${maHoSo}`);
      setMaHoSo("");
    } catch {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Tiêu đề */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003294] to-[#00B3FF] uppercase tracking-wide mb-6"
      >
        TRA CỨU HỒ SƠ
      </motion.h1>

      {/* Form tra cứu */}
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mã hồ sơ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            maxLength={15}
            placeholder="Nhập mã biên nhận gồm 15 số"
            value={maHoSo}
            onChange={(e) => {
              setMaHoSo(e.target.value.replace(/\D/g, "")); // Chỉ cho phép số
              setError("");
            }}
            className={`w-full px-4 py-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3FF] transition-all`}
            disabled={isLoading}
          />
          {error && (
            <p className="mt-1 text-sm text-red-500">{error}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-4 font-semibold text-white bg-gradient-to-r from-[#003294] to-[#00B3FF] rounded-lg hover:from-[#00B3FF] hover:to-[#003294] transition-all ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Đang tra cứu..." : "TRA CỨU"}
        </motion.button>
      </form>
    </div>
  );
};

export default TraCuuHoSo;