import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
  const handleLogout = () => {
        
    localStorage.removeItem("userToken"); 
    navigate("/"); // Redirect to home page
  };
  return (
    <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
        <Link to={"/"} className='cursor-pointer font-semibold'>MaxHelp</Link>
        <div className='mt-16 flex flex-col gap-8'>
                <NavLink to={"/dashboard/admin"}>
                    Admin
                </NavLink>
                <NavLink to={"/dashboard/management"}>
                    Management
                </NavLink>
        </div>
        <div className="mt-auto absolute bottom-10">
        <button
          onClick={handleLogout}
          className="w-full bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar