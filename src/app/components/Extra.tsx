"use client";

import TraCuuHoSo from "./Hoso";
import SelectDropdown from "./SelectDropdown";
import VideoWidget from "./VideoWidget";

const Extra = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <TraCuuHoSo />
          <div className="mt-10">
            <SelectDropdown />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <VideoWidget />
        </div>
      </div>
    </div>
  );
};

export default Extra;