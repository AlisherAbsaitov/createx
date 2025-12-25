import React from 'react'

export default function Header() {
  return (
    <header className="bg-[#FFE3D7] px-10 py-4 flex items-center justify-between">
      

    <div className="flex items-center gap-2 font-bold text-xl">
      <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center">
        C
      </div>
      <span>CR</span>
    </div>

  
    <nav className="flex gap-6 text-gray-800 font-medium">
      <a href="#" className="hover:text-orange-600">About Us</a>
      <a href="#" className="hover:text-orange-600">Courses</a>
      <a href="#" className="hover:text-orange-600">Events</a>
      <a href="#" className="hover:text-orange-600">Blog</a>
      <a href="#" className="hover:text-orange-600">Contacts</a>
    </nav>

  
    <div className="flex items-center gap-5">
      <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition">
        Get consultation
      </button>
      <a href="#" className="font-medium text-gray-800 hover:text-orange-600">
        Log in / Register
      </a>
    </div>

  </header>
  )
}
