import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex mx-8 py-4 mb-16 justify-between items-center'>
        <h3 className='font-semibold'>MaxHelp</h3>
        <ul className='flex items-center gap-4'>
            <li>
                <Link to={"/login"} className='opacity-60'>Login</Link>
            </li>
            <li className='bg-teal-900 text-white hover:bg-teal-800 px-3 py-1 rounded'>
                <Link to={"/signup"}>Signup</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar