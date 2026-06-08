import React from 'react'
import { Outlet, Link } from 'react-router-dom' 
export default function Authlayout() {
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

        
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all"
            >
              Log In
            </Link>

            <Link 
              to="/register" 
              className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-100 hover:shadow-lg transition-all"
            >
              Register
            </Link>
          </div>

        </div>
      </nav>

      <main className="container mx-auto px-8 py-6">
        <Outlet /> 
      </main>

    </div>
  )
}