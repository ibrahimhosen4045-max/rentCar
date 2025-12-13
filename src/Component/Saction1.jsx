import React from 'react'
import img1 from '../assets/logo1.png'
import img2 from '../assets/logo2.png'
import img3 from '../assets/logo3.png'
import img4 from '../assets/logo4.png'
import img5 from '../assets/carlogo.png'

const Saction1 = () => {
  return (
    <div className='py-10'>
      <div className='pb-10'>
        <div className='text-lg uppercase font-semibold font-jalano text-[#EDC305] text-center flex gap-3 items-center justify-center'>
            <div><img src={img5} alt=""  className='w-20'/></div>
            <h1>what we're offering</h1>
        </div>
        <h1 className='text-5xl font-bold font-jalano text-center'>services we're provding <br /> to customers</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 container mx-auto gap-8 '>
        <div className='bg-gray-900 py-8 px-5 flex flex-col gap-3 rounded-2xl  relative overflow-hidden'>
            <div className='pb-10'><img src={img3} alt="" className=''/></div>
            <h1 className='text-2xl font-bold font-jalano text-[#EDC305]'>Car tental with driver</h1>
            <p className='text-[18px] text-gray-400 font-semibold'>Open multipy a green form lesser their from in made herb multiply</p>
            <div className=' text-2xl py-4  bg-white w-15 text-center font-bold text-gray-800 absolute right-0 top-15 rounded-bl-2xl rounded-tl-2xl'>
                1
            </div>
            <div className='w-full h-3 bg-[#EDC305] absolute bottom-0 left-0'></div>
        </div>
        <div className='bg-gray-900 py-8 px-5 flex flex-col gap-3 rounded-2xl  relative overflow-hidden'>
            <div className='pb-10'><img src={img4} alt="" /></div>
            <h1 className='text-2xl font-bold font-jalano text-[#EDC305]'>Airport transfer</h1>
            <p className='text-[18px] text-gray-400 font-semibold'>Open multipy a green form lesser their from in made herb multiply</p>
            <div className=' text-2xl py-4  bg-white w-15 text-center font-bold text-gray-800 absolute right-0 top-15 rounded-bl-2xl rounded-tl-2xl'>
                2
            </div>
            <div className='w-full h-3 bg-[#EDC305] absolute bottom-0 left-0'></div>
        </div>
        <div className='bg-gray-900 py-8 px-5 flex flex-col gap-3 rounded-2xl  relative overflow-hidden'>
            <div className='pb-10'><img src={img1} alt="" className='w-18'/></div>
            <h1 className='text-2xl font-bold font-jalano text-[#EDC305]'>Fleet leasing</h1>
            <p className='text-[18px] text-gray-400 font-semibold'>Open multipy a green form lesser their from in made herb multiply</p>
            <div className=' text-2xl py-4  bg-white w-15 text-center font-bold text-gray-800 absolute right-0 top-15 rounded-bl-2xl rounded-tl-2xl'>
                3
            </div>
            <div className='w-full h-3 bg-[#EDC305] absolute bottom-0 left-0'></div>
        </div>
        <div className='bg-gray-900 py-8 px-5 flex flex-col gap-3 rounded-2xl  relative overflow-hidden'>
            <div className='pb-10'><img src={img2} alt="" /></div>
            <h1 className='text-2xl font-bold font-jalano text-[#EDC305]'>Corporate car rental</h1>
            <p className='text-[18px] text-gray-400 font-semibold'>Open multipy a green form lesser their from in made herb multiply</p>
            <div className=' text-2xl py-4  bg-white w-15 text-center font-bold text-gray-800 absolute right-0 top-15 rounded-bl-2xl rounded-tl-2xl'>
                4
            </div>
            <div className='w-full h-3 bg-[#EDC305] absolute bottom-0 left-0'></div>
        </div>
      </div>
    </div>
  )
}

export default Saction1
