import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-teal-900 rounded-full"></div>
              <span className="ml-2 text-xl font-semibold text-teal-900">YourBrand</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                {navItems.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    className="text-gray-600 hover:text-teal-900 px-3 py-2 text-sm font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="text" size="small">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" size="small">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;