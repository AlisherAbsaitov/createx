import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-[#FFE3D7] py-4">
      <div className="container mx-auto px-10 flex items-center justify-between">
        
       
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Creatix Logo"
            className="h-9 w-auto"
          />
        </div>

        <nav className="flex gap-6 text-gray-800 font-medium">
          <Link to={'/about'} className="hover:text-orange-600">About Us</Link>
          <Link to={'/course'} className="hover:text-orange-600">Courses</Link>
          <Link to={'/blog'} className="hover:text-orange-600">Blog</Link>
          <Link to={'/contact'} className="hover:text-orange-600">Contacts</Link>
        </nav>

        
        <div className="flex items-center gap-5">
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition">
            Get consultation
          </button>
          <a href="#" className="font-medium text-gray-800 hover:text-orange-600">
            Log in / Register
          </a>
        </div>

      </div>
    </header>
  )
}
