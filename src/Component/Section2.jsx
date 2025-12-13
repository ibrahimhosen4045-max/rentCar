import React, { useEffect, useState } from 'react';
import { FaGasPump, FaCogs, FaUsers, FaCalendarAlt, FaRoad } from "react-icons/fa";
import { PiSteeringWheelLight } from 'react-icons/pi';
import img5 from '../assets/carlogo.png'
import { Link } from 'react-router';

export default function Section2() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState(false); // NEW

  useEffect(() => {
    fetch('/HomeCard.json')
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

  const toggleShowMore = () => {
    if (expanded) {
      // Show Less → back to 8 items
      setVisibleCount(8);
      setExpanded(false);
    } else {
      // Show More → show all
      setVisibleCount(cars.length);
      setExpanded(true);
    }
  };

  if (loading) return <div className="p-6 text-center">Loading cars...</div>;
  if (!cars.length) return <div className="p-6 text-center">No cars found.</div>;

  return (
    <div className="container mx-auto ">
      <div className='py-15'>
        <div className='text-lg uppercase font-semibold font-jalano text-amber-400 text-center flex gap-3 items-center justify-center'>
                    <div><img src={img5} alt=""  className='w-20'/></div>
                    <h1>what we're offering</h1>
                </div>
                <h1 className='text-5xl font-bold font-jalano text-center uppercase'>explore most popular cars</h1>
      </div>

      {/* CAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
        {cars.slice(0, visibleCount).map((car) => (
          <div key={car.id} className=" rounded-2xl shadow-lg overflow-hidden flex flex-col ">
            <div className="h-50 w-full relative">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image'; }}
              />
              
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-jalano  font-bold leading-tight">{car.brand} — {car.model}</h3>
                <div className="mt-4 grid grid-cols-3 gap-4 py-4">
  {car.details?.map((d, i) => {
    let style = "text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 text-gray-600";
    let icon = null;

    // আলাদা আলাদা icon + color
    switch (d) {
      case "Manual":
        style += " ";
        icon = <FaCogs className="w-3 h-3" />;
        break;
      case "Diesel":
        style += " ";
        icon = <FaGasPump className="w-3 h-3" />;
        break;
      case "25 KM":
        style += "";
        icon = <FaRoad className="w-3 h-3 " />;
        break;
      case "Basic":
        style += " ";
        icon = <PiSteeringWheelLight />;
        break;
      case "Age 25":
        style += " ";
        icon = <FaCalendarAlt className="w-3 h-3" />;
        break;
      case "5 Persons":
        style += " ";
        icon = <FaUsers className="w-3 h-3" />;
        break;
      default:
        style += " bg-gray-100 text-gray-800";
        icon = null;
    }

    return (
      <span key={i} className={style}>
        {icon} {d}
      </span>
    );
  })}
</div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-md font-medium">{car.price}</div>
                <div className='flex gap-2'>
                  <Link
                  to={`/cars/${cars.id}`}
                  >
                  <button className='px-3 py-1 text-md rounded-lg bg-amber-400 font-semibold text-white hover:bg-[#c9a60c] transition'>
                  Details
                  </button>
                  </Link>
                  <a href="#123">
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

      {/* SHOW MORE / SHOW LESS BUTTON */}
      {cars.length > 8 && (
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
