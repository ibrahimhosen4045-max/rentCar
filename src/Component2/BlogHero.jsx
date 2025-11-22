import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const BlogHero = () => {
  return (
    <div 
    className=" bg-cover bg-bottom"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg')" }}
    >
      <div className='lg:w-full lg:h-[70vh] bg-black/70  backdrop-blur-xs'>
        <div className='flex justify-start lg:pl-30 items-center h-full'>
            <div className='flex flex-col gap-10'>
                <h1 className=' text-6xl font-bold font-jalano text-yellow-500 '>
                Our Blog page
            </h1>
            <p className='text-5xl font-bold text-white'>
                Home
            </p>
            <div className='md:flex lg:flex lg:gap-6 hidden'>
                <Link to="/">
                <button className='text-xl text-white py-2 px-6 bg-yellow-500 rounded-full flex gap-2 items-center'><FaArrowLeftLong /> Home</button>
                </Link>
                <button className='text-xl text-white py-2 px-6 bg-yellow-500 rounded-full flex gap-2 items-center'>View More <FaArrowRightLong /></button>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero
