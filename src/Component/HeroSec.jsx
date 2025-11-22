/*
HeroSec (React + Tailwind + Swiper)

This version includes: Slider images now use w-full and h-[80%]
*/

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Replace these imports with your images
import img1 from '../assets/rolls.jpg';
import img2 from '../assets/eston2.jpg';
import img3 from '../assets/benth1.jpg';
import img4 from '../assets/supra.jpg';
import img5 from '../assets/mustang.jpg';

export default function HeroSec() {
  const sliderData = [
    {
      img: img1,
      title: 'Rolls Royce Cullinan',
      desc: 'Luxury SUV — comfort and performance combined.',
      price: '$900 / day',
    },
    {
      img: img2,
      title: 'Aston Martin Vantage',
      desc: 'Sporty and stylish — drives like a dream.',
      price: '$750 / day',
    },
    {
      img: img3,
      title: 'Bentley Continental GT',
      desc: 'Grand touring with absolute refinement.',
      price: '$850 / day',
    },
    {
      img: img4,
      title: 'Toyota Supra',
      desc: 'Iconic sports car with modern engineering.',
      price: '$400 / day',
    },
    {
      img: img5,
      title: 'Mustang GT',
      desc: 'American muscle — bold and loud.',
      price: '$500 / day',
    },
  ];

  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full">
      <div className="relative w-full mx-auto px-4">
        <div className="relative w-screen -ml-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center overflow-hidden">

          {/* Slider */}
          <div className="lg:w-full lg:col-span-full">
            <div className="rounded-xl shadow-xl">
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) => setActive(s.activeIndex)}
                pagination={{ dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="h-[420px] sm:h-[480px] lg:h-[90vh] "
              >
                {sliderData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-full w-full overflow-hidden">
                      
                      {/* >>> Updated image height = 80% <<< */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[100%] object-cover object-center "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>

                      <div className="absolute top-4 left-4 bg-white/10 text-white px-3 py-1 rounded-md backdrop-blur-sm text-sm">
                        Featured
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:absolute left-10 z-50 lg:col-span-4  ">
            <div className="flex flex-col gap-6 ">
              <div className="bg-black/15  lg:w-110 flex flex-col gap-5 p-8 rounded-xl backdrop-blur-[5px] border border-white/10 shadow-sm">
                <h3 className="text-[34px] font-bold text-[#EDC305]">{sliderData[active].title}</h3>
                <p className="mt-2 text-md text-white/80">{sliderData[active].desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#EDC305]">{sliderData[active].price}</div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
                      className="px-3 py-2 bg-white/10 text-white rounded-md hover:bg-white/20"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => swiperRef.current && swiperRef.current.slideNext()}
                      className="px-3 py-2 bg-[#EDC305] text-black rounded-md font-semibold hover:opacity-90"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex items-center gap-3">
                  {sliderData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => swiperRef.current && swiperRef.current.slideTo(i)}
                      className={`w-10 h-10 rounded-lg overflow-hidden border-2 ${
                        i === active ? 'border-yellow-300' : 'border-white/20'
                      }`}
                    >
                      <img
                        src={sliderData[i].img}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Small Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-black/15 rounded-xl border border-white/6">
                  <h4 className="text-sm text-white/90 font-medium">Free Delivery</h4>
                  <p className="text-xs text-white/70">On bookings over $1000</p>
                </div>
                <div className="p-4 bg-black/15 rounded-xl border border-white/6">
                  <h4 className="text-sm text-white/90 font-medium">24/7 Support</h4>
                  <p className="text-xs text-white/70">Live chat & hotline</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
