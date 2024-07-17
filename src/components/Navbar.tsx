'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <a href="#" className='font-black text-2xl text-blue-900'>Abu Bakar</a>
        <button 
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <a href="/" className='block md:inline-block font-bold text-blue-500 hover:text-blue-950 transition mb-2 md:mb-0 mx-2'>Home</a>
          <a href="/" className='block md:inline-block font-bold text-blue-500 hover:text-blue-950 transition mb-2 md:mb-0 mx-2'>About</a>
          <a href="/" className='block md:inline-block font-bold text-blue-500 hover:text-blue-950 transition mb-2 md:mb-0 mx-2'>Skills</a>
          <a href="/" className='block md:inline-block font-bold text-blue-500 hover:text-blue-950 transition mb-2 md:mb-0 mx-2'>Projects</a>
          <a href="/" className='block md:inline-block font-bold text-blue-500 hover:text-blue-950 transition mb-2 md:mb-0 mx-2'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
