import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="/images/brand_logo.svg" alt="Brand Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex align-center space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">MENU</a>
                  <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">LOCATION</a>
                  <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">ABOUT</a>
                  <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CONTACT</a>
                </div>
              </div>
            </div>
            <div className="loginBtn">
              <button type="button" className='py-1 px-3 bg-red-600 text-white'>Login</button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white  block rounded-md px-3 py-2 text-base font-medium">MENU</a>
            <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">LOCATION</a>
            <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">ABOUT</a>
            <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">CONTACT</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
