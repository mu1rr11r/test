import React, { useState, useContext } from 'react' // 1. استيراد useState لتغير حالة القائمة
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { AouthContext } from '../../context/AoutContext'

export default function Userlayout() {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate()
  const { token, logout } = useContext(AouthContext)

  return (
    <div className="min-h-screen bg-gray-50"> 
      
      <nav className="bg-white border-b border-gray-200 shadow-sm px-8 py-3 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-200">
              S
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-wide">
              SocialApp
            </span>
          </div>

          <div className="bg-gray-100 border border-gray-200/60 rounded-2xl px-6 py-2">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/Home"
                  className="flex items-center gap-2 text-blue-600 font-semibold transition-colors text-sm"
                >
                  <i className="fa-solid fa-house"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Profile"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  <i className="fa-regular fa-user"></i>
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-all"
            >
              <img
                src="https://i.pravatar.cc/150?img=33" 
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
              />
              <div className="hidden md:flex flex-col items-start leading-tight">
              </div>
              <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs text-gray-400 ml-1 transition-transform`}></i> 
            </div>

            {isOpen && (
              <div className="absolute right-0 top-14 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 transform origin-top-right transition-all">
                <div className="border-b border-gray-100 pb-3 mb-3">
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => {
                      if (logout) logout()
                      navigate('/login')
                    }}
                    className="flex items-center gap-2 w-full text-left px-2 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket text-gray-400"></i> 
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </nav>

      <main className="container mx-auto px-8 py-6">
        <Outlet /> 
      </main>
    </div>
  )
}