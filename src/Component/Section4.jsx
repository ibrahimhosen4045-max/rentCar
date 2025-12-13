import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img5 from '../assets/carlogo.png'

export default function Section4() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/fidback.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);

  return (
    <div className="w-full pb-20 ">
      <div className='py-15 container mx-auto'>
        <div className='text-lg uppercase font-semibold font-jalano text-[#EDC305]  flex gap-3 items-center '>
          <div><img src={img5} alt=""  className='w-20'/></div>
            <h1>Our Testimonial</h1>
         </div>
          <h1 className='text-5xl font-bold font-jalano  uppercase'>What Peoples Say <br />about Gorent</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
      >
        {reviews.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="shadow-md border border-gray-300 rounded-b-2xl rounded-tl-2xl p-6 relative bg-white h-70 overflow-hidden">
              
              <div className="absolute top-0 right-0 bg-yellow-400  py-4 px-8 rounded-b-full rounded-tl-full text-3xl">
                ❝
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={item.profile_image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold capitalize">
                    {item.name}
                  </h3>
                  <p className="text-[16px] text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {item.review_text}
              </p>

              <div className="flex gap-1 mt-4 text-2xl text-yellow-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
