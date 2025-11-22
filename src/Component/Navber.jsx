import React, { useContext } from 'react'
import img from '../assets/nlogo.png'
import { Link, NavLink } from 'react-router'
import { UserContext } from '../UserContext'
import { GiCarKey } from 'react-icons/gi'

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
    <div className="navbar z-50 bg-white backdrop-blur-sm">
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

              <ul className="dropdown-content bg-white p-3 shadow rounded-lg w-40 mt-2">
                <li className="mb-2">{user.email}</li>
                <li>
                  <button onClick={logout}
                    className="w-full text-left text-red-600">
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
