import React, { useContext } from 'react'
import img from '../assets/nlogo.png'
import { Link, NavLink } from 'react-router'
import { UserContext } from '../UserContext'
import { GiCarKey } from 'react-icons/gi'
import img1 from '../assets/user1.png'

const Navber = () => {
  const { user, logout } = useContext(UserContext);

  const menu = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cars">Cars</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </>
  );

  return (
    <div className="navbar z-50 bg-white backdrop-blur-sm absolute fixed  shadow-2xl">
      <div className="flex justify-between w-11/12 mx-auto">

        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-semibold">
              {menu}
            </ul>
          </div>

          <Link to="/">
            <img src={img} alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold">
            {menu}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-5">
          <GiCarKey  className=' text-3xl'/>

          {/* Show Login button when NOT logged in */}
          {!user && (
            <NavLink to="/login">
              <span className="btn">Login</span>
            </NavLink>
          )}

          {/* Show Avatar when logged in */}
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                  {user.email[0].toUpperCase()}
                </div>
              </div>

              <ul className="dropdown-content p-3 shadow text-white rounded-lg w-70 lg:w-80 mt-2 h-screen  absolute -right-8 sm:-right-13 lg:-right-23 z-70 bg-gray-900">
                <li className='flex items-center justify-center '><div className=' p-10 bg-yellow-500 rounded-full'>
                  <img src={img1} alt="" />
                  </div></li>
                  
                <li className="my-2 text-lg font-semibold">{user.email}</li>
                <div className='flex flex-col gap-2'>
                  {menu}
                </div>
                <li>
                  <button onClick={logout}
                    className="w-full text-left text-red-600 my-2 cursor-pointer">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navber
