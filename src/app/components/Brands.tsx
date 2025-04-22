'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';

const BrandSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    initial: 0,
    renderMode: 'performance',
    slides: {
      perView: 5,
      spacing: 12,
      origin: 'center',
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: { perView: 1.5, spacing: 8, origin: 'center' },
      },
      '(min-width: 641px) and (max-width: 1024px)': {
        slides: { perView: 2.5, spacing: 10, origin: 'center' },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    const handleResize = () => {
      instanceRef.current?.update();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [instanceRef]);

  const brands = Array.from({ length: 21 }, (_, index) => `/anh/anh${index + 1}.jpg`);

  return (
    <div className=" w-screen h-[100px] md:h-[200px] m-4 flex flex-col justify-center items-center">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full px-4">
          {brands.map((image, index) => (
            <div key={index} className="keen-slider__slide min-w-[160px] sm:min-w-[200px] md:min-w-[220px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center group"
              >
                <Image
                  src={image}
                  alt={`Thương hiệu ${index + 1}`}
                  width={128}
                  height={128}
                  className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 object-contain group-hover:border-2 group-hover:border-[#F472B6] rounded-md"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BrandSlider;