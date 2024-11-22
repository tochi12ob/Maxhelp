import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const ProductSidebar = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/products/water")
    },[])
    const handleLogout = () => {
        
        localStorage.removeItem("userToken"); 
        navigate("/"); // Redirect to home page
      };
    
  return (
    <div className='overflow-scroll-y sticky max-h-screen'>
        <Link to={"/"} className='cursor-pointer font-semibold'>MaxHelp</Link>
        <div className='mt-16 flex flex-col gap-8'>
                <NavLink to={"/products/water"}>
                    Water
                </NavLink>
                <NavLink to={"/products/resturants"}>
                    Resturants
                </NavLink>
                <NavLink to={"/products/books"}>
                    Books
                </NavLink>
                <NavLink to={"/products/Groceries"}>
                    Groceries
                </NavLink>

        </div>
        {/* Push Logout Button to the Very Bottom */}
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

export default ProductSidebar