import React from 'react'
//https://preview.themeforest.net/item/gorent-car-rental-php-template/full_screen_preview/60515273
import img from '../assets/logofo.png'

const Footer = () => {
  return (
    <div className='bg-cover bg-center ' style={{ backgroundImage: `url('https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg')` }}>
      <div className='w-full h-full bg-gray-950/95'>
      <footer className="footer container mx-auto sm:footer-horizontal  text-base-content py-30 "
      
      >
  <nav className='h-full relative flex items-center'>
    <img src={img} alt="" className='w-40 lg:absolute -top-20'/>
    <p className='text-gray-400 font-semibold text-lg'>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </nav>
  <nav className=' flex flex-col gap-5 text-[18px] font-semibold text-gray-400'>
    <h6 className="text-3xl font-bold font-jalano text-white">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className=' flex flex-col gap-5 text-[18px] font-semibold text-gray-400'>
    <h6 className="text-3xl font-bold font-jalano text-white">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className=' flex flex-col gap-5 text-[18px] font-semibold text-gray-400'>
    <h6 className="text-3xl font-bold font-jalano text-white">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
      </footer>
      <hr className='text-white '/>
      <div className='flex container mx-auto justify-between text-gray-400 py-8 text-lg'>
        <p>© 2025 Gorent By Dreamlayout. All Rights Reserved.</p>
        <p>Terms of Service &nbsp; &nbsp; Privacy policy</p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
