import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Component/Navber'
import Footer from './Component/Footer'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
      <Navber />
      
      {/* FIXED */}
      <Toaster position="top-right" reverseOrder={false} />

      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
