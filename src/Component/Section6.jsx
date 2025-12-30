import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../assets/wd1-min.jpg';
import img2 from '../assets/wd2-min.jpg';
import img3 from '../assets/wd3-min.jpg';
import img4 from '../assets/md1-min.jpg';
import img5 from '../assets/md2-min.jpg';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function Section6() {

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        // ✅ Responsive breakpoints
        breakpoints={{
          0: {        // mobile
            slidesPerView: 1,
          },
          640: {      // small devices
            slidesPerView: 3,
          },
          1024: {     // laptop
            slidesPerView: 4,
          },
          1280: {     // desktop
            slidesPerView: 5,
          },
        }}

        modules={[FreeMode, Pagination, Autoplay]}
        className="h-100 w-full mt-40"
      >
        <SwiperSlide><img src="https://i.ibb.co.com/PG0L6BNL/farari1.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/TxgyPt7M/blog1.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/KjkWtVHM/blog2.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img1} className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/PG8KD8ZV/toyta1.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/QjDfbTd2/blog3.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/pB2CZh2d/toyta2.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img2} className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Kjpb7MZ7/blog4.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/LXLzFjhb/w-1-min.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/qYzr5f6t/blog5.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img3} className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/YBZvrXRQ/marsi1.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/PGh1QvVt/m-2-min.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/v44WGNKy/blog6.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img4} className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/d9ZYqNr/w-6-min.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/yJpG29M/blog7.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Xx8f3zt8/bmw.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img5} className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/DPv3Zp8s/w-3-min.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/B2cx51Yt/blog8.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/LDTPhmDK/forsh.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/XrmzXpGp/w-5-min.jpg" className='h-100 object-cover'/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/ZpC6PSYZ/blog9.jpg" className='h-100 object-cover'/></SwiperSlide>
      </Swiper>
    </>
  );
}
