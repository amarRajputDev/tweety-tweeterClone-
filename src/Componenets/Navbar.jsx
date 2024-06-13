import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="relative w-full h-[50px]  bg-[#D2649A] ">
  <div className="mx-auto pt-1 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
      <img src={logo} alt="logo" className=' w-10'/>
      </span>
      <span className="font-bold ">Tweety</span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({isActive}) => `"text-sm font-semibold ${isActive ? " text-yellow-300" : "text-gray-800"} hover:text-gray-900"`}
          >
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
            to="Details"
            className={({isActive}) => `"text-sm font-semibold ${isActive ? "text-yellow-300" : "text-gray-800"} hover:text-gray-900"`}
          >
            Details
          </NavLink>
        </li>
        <li>
        <NavLink
            to="Post"
            className={({isActive}) => `"text-sm font-semibold ${isActive ? "text-yellow-300" : "text-gray-800"} hover:text-gray-900"`}
          >
           Tweets
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
      <button
        type="button"
        className="rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbar
