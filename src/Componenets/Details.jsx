import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adduser } from '../store/Slice'


function Details() {

  const [username, setusername] = useState("")
  const [fname, setfname] = useState("")
  const [email, setemail] = useState("")

  const dispatch = useDispatch()

  const handle = (e) => {
    e.preventDefault();
    console.log(username)
    dispatch(adduser({ username, fname }));


  }

  return (
    <div>
      <section>
  <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border-2 p-6 rounded-lg shadow-xl">
      <div className="mb-2 flex justify-center">
      <img src={logo} alt="logo" className=' w-10'/>

      </div>
      <h2 className="text-center text-2xl font-bold leading-tight text-black">
        Enter Details To <p className=' text-yellow-300 font-bold'>Tweet</p>
      </h2>

      <form action="#" method="POST" className="mt-8" >
        <div className="space-y-5">
          <div className="flex items-start flex-col w-full" >
            <label htmlFor="name" className="text-base font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2 w-full">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
                id="name"
                onChange={(e) => setfname(e.target.value)}
              />
            </div>
          </div>
          <div  className="flex items-start flex-col w-full">
            <label htmlFor="email" className="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
            </label>
            <div className="mt-2 w-full">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}

                id="email"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                {" "}
                Username{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="@Username"
                id="password"
                onChange={(e) => setusername(e.target.value)}

              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handle}
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>

    </div>
  </div>
</section>

    </div>
  )
}

export default Details
