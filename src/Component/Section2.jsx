import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import {
  FaGasPump,
  FaCogs,
  FaUsers,
  FaCalendarAlt,
  FaRoad
} from "react-icons/fa";
import { PiSteeringWheelLight } from "react-icons/pi";

import img5 from "../assets/carlogo.png";

import "swiper/css";
import { Link } from "react-router";

export default function Section2() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/CarCard.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="w-full mx-auto px-10 py-10">
      {/* TITLE */}
      <div className="py-16">
        <div className="text-lg uppercase font-semibold font-jalano text-amber-400 text-center flex gap-3 items-center justify-center">
          <img src={img5} alt="logo" className="w-20" />
          <h1>what we're offering</h1>
        </div>

        <h1 className="text-5xl font-bold font-jalano text-center uppercase">
          explore most popular cars
        </h1>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },        // mobile
          640: { slidesPerView: 1 },      // sm
          768: { slidesPerView: 2 },      // md
          1024: { slidesPerView: 3 },     // lg
          1280: { slidesPerView: 4 },     // xl
          1536: { slidesPerView: 5 },     // 2xl (large screen)
        }}

      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="rounded-2xl shadow-lg overflow-hidden flex flex-col bg-white">
              {/* IMAGE */}
              <div className="h-[200px] w-full relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://placehold.co/600x400?text=No+Image")
                  }
                />
                <span className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                  ⭐ {car.rating}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-jalano font-bold">
                    {car.brand} — {car.model}
                  </h3>

                  {/* DETAILS */}
                  <div className="mt-4 grid grid-cols-3 gap-3 py-4">
                    {car.details?.map((d, i) => {
                      let icon = null;

                      switch (d) {
                        case "Manual":
                          icon = <FaCogs />;
                          break;
                        case "Diesel":
                          icon = <FaGasPump />;
                          break;
                        case "25 KM":
                          icon = <FaRoad />;
                          break;
                        case "Basic":
                          icon = <PiSteeringWheelLight />;
                          break;
                        case "Age 25":
                          icon = <FaCalendarAlt />;
                          break;
                        case "5 Persons":
                          icon = <FaUsers />;
                          break;
                        default:
                          icon = null;
                      }

                      return (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 bg-gray-100 text-gray-700"
                        >
                          {icon} {d}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-md font-semibold">{car.price}</span>

                  <div className="flex gap-2">
                    <Link to={`/cars/${car.id}`}>
                      <button className="px-3 py-1 rounded-lg bg-amber-400 text-white font-semibold hover:bg-amber-500 transition">
                        Details
                      </button>
                    </Link>

                    <button className="px-3 py-1 rounded-lg bg-amber-400 text-white font-semibold hover:bg-amber-500 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
