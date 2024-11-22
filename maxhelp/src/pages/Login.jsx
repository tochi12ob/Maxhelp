import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check the state of isAdmin and navigate accordingly
    if (isAdmin) {
      navigate("/dashboard/admin"); // Navigate to admin page if isAdmin is true
    } else {
      navigate("/products"); // Navigate to products page otherwise
    }

    // Uncomment and adapt this code if authentication is needed
    // await login({ isAdmin });
  };

  return (
    <div className="h-screen flex justify-center flex-col mx-auto w-[90%] max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 opacity-60">Sign in to your account to continue</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div className="flex items-center">
          <input
            id="admin-login"
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            onChange={(e) => setIsAdmin(e.target.checked)} // Update isAdmin state based on checkbox value
          />
          <label htmlFor="admin-login" className="ml-2 block text-sm text-gray-700">
            Login as Administrator
          </label>
        </div>

        <Button type="submit" variant="primary" className="w-full flex justify-center items-center">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
