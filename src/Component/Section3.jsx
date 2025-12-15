import React from 'react'
import img5 from '../assets/carlogo.png'
import img1 from '../assets/card/logo1.png'
import img2 from '../assets/card/logo2.png'
import img3 from '../assets/card/logo3.png'
import img4 from '../assets/card/logo4.png'
import img6 from '../assets/card/logo6.png'


const Section3 = () => {
  return (
    <div>
      <div className='py-15'>
        <div className='text-lg uppercase font-semibold font-jalano text-[#EDC305] text-center flex gap-3 items-center justify-center'>
            <div><img src={img5} alt=""  className='w-20'/></div>
            <h1>what we're offering</h1>
        </div>
        <h1 className='text-5xl font-bold font-jalano text-center uppercase'>explore most popular cars</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 container mx-auto gap-8 pb-15 p-3'>
        <div className='flex flex-col gap-4 bg-gray-900 text-white/70 p-5 rounded-2xl'>
            <div className='flex items-center justify-between pb-8'>
                <div className='p-4 rounded-full bg-amber-400'><img src={img1} alt="" />
                
                </div>
                <h1 className='text-[60px]'>01</h1>
            </div>
            <h1 className='text-2xl font-bold text-amber-400 font-jalano'>Choose A Car</h1>
            <p className='text-lg font-semibold '>
                Open multipy a green form lesser <br /> their from in made herb multiply
            </p>
        </div>
        <div className='flex flex-col gap-4 bg-gray-900 text-white/70 p-5 rounded-2xl'>
            <div className='flex items-center justify-between pb-8'>
                <div className='p-4 rounded-full bg-amber-400'><img src={img4} alt="" />
                
                </div>
                <h1 className='text-[60px]'>02</h1>
            </div>
            <h1 className='text-2xl font-bold text-amber-400 font-jalano'>Come In Contact</h1>
            <p className='text-lg font-semibold '>
                Open multipy a green form lesser their from in made herb multiply
            </p>
        </div>
        <div className='flex flex-col gap-4 bg-gray-900 text-white/70 p-5 rounded-2xl'>
            <div className='flex items-center justify-between pb-8'>
                <div className='p-4 rounded-full bg-amber-400'><img src={img2} alt="" />
                
                </div>
                <h1 className='text-[60px]'>03</h1>
            </div>
            <h1 className='text-2xl font-bold text-amber-400 font-jalano'>Pick-Up Locations</h1>
            <p className='text-lg font-semibold '>
                Open multipy a green form lesser their from in made herb multiply
            </p>
        </div>
        <div className='flex flex-col gap-4 bg-gray-900 text-white/70 p-5 rounded-2xl'>
            <div className='flex items-center justify-between pb-8'>
                <div className='p-4 rounded-full bg-amber-400'><img src={img3} alt="" />
                
                </div>
                <h1 className='text-[60px]'>04</h1>
            </div>
            <h1 className='text-2xl font-bold text-amber-400 font-jalano'>Enjoy Driving</h1>
            <p className='text-lg font-semibold '>
                Open multipy a green form lesser their from in made herb multiply
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Section3
