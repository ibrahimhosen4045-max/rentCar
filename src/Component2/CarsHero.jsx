import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const CarsHero = () => {
  return (
    <div
      className="bg-cover bg-bottom pt-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="w-full min-h-[60vh] lg:min-h-[70vh] bg-black/70 backdrop-blur-sm flex items-center">
        
        {/* Content Wrapper */}
        <div className="w-full px-6 sm:px-10 lg:px-30">
          <div className="flex flex-col gap-6 lg:gap-10 text-center lg:text-left max-w-2xl">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-jalano text-yellow-500">
              Choice Your Cars
            </h1>

            {/* Breadcrumb */}
            <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
              Home
            </p>

            {/* Buttons */}
            <div className="flex  sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <div>
                <Link to="/">
                <button className="text-base sm:text-lg lg:text-xl text-white py-2 px-6 bg-yellow-500 rounded-full flex gap-2 items-center justify-center">
                  <FaArrowLeftLong /> Home
                </button>
              </Link>
              </div>

              <div>
                <button className="text-base sm:text-lg lg:text-xl text-white py-2 px-6 bg-yellow-500 rounded-full flex gap-2 items-center justify-center">
                View More <FaArrowRightLong />
              </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsHero
