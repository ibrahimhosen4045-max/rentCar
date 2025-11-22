import React, { useEffect, useState } from 'react';
import { FaGasPump, FaCogs, FaUsers, FaCalendarAlt, FaRoad } from "react-icons/fa";
import { PiSteeringWheelLight } from 'react-icons/pi';
import img1 from '../assets/card/avater.jpg'
import { Link } from 'react-router';

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // FILTER STATES
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch('/CarCard.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch cars.json');
        return res.json();
      })
      .then((data) => setCars(data))
      .catch((err) => {
        console.error(err);
        setCars([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // GET UNIQUE BRAND LIST
  const brands = ["All", ...new Set(cars.map(car => car.brand))];

  // FILTER BY BRAND + SEARCH
  const filteredCars = cars
    .filter(car =>
      selectedBrand === "All" ? true : car.brand === selectedBrand
    )
    .filter(car =>
      car.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      car.model.toLowerCase().includes(searchText.toLowerCase())
    );

  const toggleShowMore = () => {
    if (expanded) {
      setVisibleCount(8);
      setExpanded(false);
    } else {
      setVisibleCount(filteredCars.length);
      setExpanded(true);
    }
  };

  if (loading) return <div className="p-6 text-center">Loading cars...</div>;
  if (!cars.length) return <div className="p-6 text-center">No cars found.</div>;

  return (
    <div className="container mx-auto">

      {/* 🔥 BRAND FILTER + SEARCH BAR */}
      <div className="flex flex-wrap items-center justify-between mb-7 gap-3 py-10">

        {/* BRAND FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3">
          {brands.map((brand, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedBrand(brand);
                setVisibleCount(8);
                setExpanded(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition 
              ${selectedBrand === brand
                  ? "bg-amber-400 text-white border-amber-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* 🔍 SEARCH BAR */}
        <div className='flex items-center justify-center gap-3'>
        <input
          type="text"
          placeholder="🔍 Search car..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setVisibleCount(8);
            setExpanded(false);
          }}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-sm"
        />
        <div className=' rounded-full overflow-hidden border-2 border-amber-500 size-9'><img src={img1} alt="" className=' object-cover w-full h-full '/></div>
        </div>
      </div>
      <h1 className='lg:text-4xl font-bold font-jalano pb-3'>Choice your car</h1>
      <hr className='text-gray-300'/>

      {/* CAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-5">
        {filteredCars.slice(0, visibleCount).map((car, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="h-50 w-full relative">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image'; }}
              />
              <button className=' absolute top-6 left-6 text-white bg-yellow-500/50 px-2  rounded-full z-50'>{car.discout}</button>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-jalano font-bold">{car.brand} — {car.model}</h3>

                {/* DETAILS */}
                <div className="mt-4 grid grid-cols-3 gap-4 py-4">
                  {car.details?.map((d, i) => {
                    let style = "text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 text-gray-600";
                    let icon = null;

                    switch (d) {
                      case "Manual":
                        icon = <FaCogs className="w-3 h-3" />;
                        break;
                      case "Diesel":
                        icon = <FaGasPump className="w-3 h-3" />;
                        break;
                      case "25 KM":
                        icon = <FaRoad className="w-3 h-3" />;
                        break;
                      case "Basic":
                        icon = <PiSteeringWheelLight />;
                        break;
                      case "Age 25":
                        icon = <FaCalendarAlt className="w-3 h-3" />;
                        break;
                      case "5 Persons":
                        icon = <FaUsers className="w-3 h-3" />;
                        break;
                      default:
                        style += " bg-gray-100 text-gray-800";
                    }

                    return (
                      <span key={i} className={style}>
                        {icon} {d}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-3 flex items-center justify-between">
                <div className="text-md font-medium">{car.price}</div>
                <div className='flex gap-2'>
                  <button className='px-3 py-1 text-md rounded-lg bg-amber-400 font-semibold text-white hover:bg-[#c9a60c] transition'>
                    Details
                  </button>
                  <a href="#1234">
                  <button className="px-3 py-1 text-md rounded-lg bg-amber-400 font-semibold text-white hover:bg-[#c7a612] transition">
                    Book Now
                  </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* SHOW MORE / SHOW LESS */}
      {filteredCars.length > 8 && (
        <div className="text-center mt-6">
          <button
            onClick={toggleShowMore}
            className="px-5 py-2 bg-amber-400 text-white rounded-lg text-sm hover:bg-black transition"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
