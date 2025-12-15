import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Component/Navber'
import Footer from './Component/Footer'
import { Toaster } from 'react-hot-toast'
import Section6 from './Component/Section6'

const Root = () => {
  return (
    <div>
      <Navber />
      
      {/* FIXED */}
      <Toaster position="top-right" reverseOrder={false} />

      <Outlet />
      <Section6></Section6>
      <Footer />
    </div>
  )
}

export default Root
