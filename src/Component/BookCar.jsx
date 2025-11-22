import React from 'react';
import { FaMapMarkerAlt, FaCarSide, FaCalendarAlt } from 'react-icons/fa';

const BookCar = () => {
  return (
    <div className="relative flex items-center justify-center bg-black bg-opacity-90 rounded-xl overflow-hidden my-20" id='123'>
    
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1470&q=80')" }}
      />
      
      <div className="relative flex max-w-6xl w-full py-10 px-6 md:px-20 bg-transparent">

        
        <div className="hidden md:flex flex-col items-center justify-center relative w-1/2 pr-10">
         
          <svg 
            className="absolute top-32 left-40 w-40 h-40 stroke-white" 
            fill="none" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            viewBox="0 0 64 64"
          >
            <path d="M10 40 L40 10" />
            <path d="M26 10 L40 10 L40 24" />
          </svg>
        </div>
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2">
          
          <div className="bg-yellow-500 rounded-t-lg p-6">
            <h2 className="text-3xl font-bold text-black">BOOK A CAR</h2>
          </div>
          <form className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
              <div>
                <label htmlFor="pickup" className="flex items-center text-gray-900 text-sm font-semibold mb-2">
                  <FaMapMarkerAlt className="mr-2" /> Pickup
                </label>
                <select
                  id="pickup" 
                  className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  defaultValue=""
                >
                  <option value="" disabled>Enter a Location</option>
                  <option>Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="dropoff" className="flex items-center text-gray-900 text-sm font-semibold mb-2">
                  <FaMapMarkerAlt className="mr-2" /> Drop of
                </label>
                <select
                  id="dropoff" 
                  className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  defaultValue=""
                >
                  <option value="" disabled>Enter a Location</option>
                  <option>Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="carType" className="flex items-center text-gray-900 text-sm font-semibold mb-2">
                  <FaCarSide className="mr-2" /> Your car type
                </label>
                <select
                  id="carType" 
                  className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  defaultValue=""
                >
                  <option value="" disabled>Your Car Type</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Sports</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="flex items-center text-gray-900 text-sm font-semibold mb-2">
                  <FaCalendarAlt className="mr-2" /> Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg flex items-center justify-center w-full sm:w-auto px-8"
            >
              Book Now <span className="ml-2">→</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookCar;
