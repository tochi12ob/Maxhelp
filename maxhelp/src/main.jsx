// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importing router tools
import './index.css';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import RestaurantProducts from './pages/RestaurantProducts.jsx';
import WaterProducts from './pages/WaterProducts.jsx';
import ProductPage from './pages/ProductPage.jsx';
import BookProducts from './pages/BookProducts.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Management from './components/admin/Management.jsx';
import Groceries from './pages/Groceries.jsx'

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home page component
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/products",
    element: <ProductPage/>,
    children: [
      {
        path: "/products/resturants",
        element: <RestaurantProducts/>
      },
      {
        path: "/products/water",
        element: <WaterProducts/>
      },
      {
        path: "/products/books",
        element: <BookProducts/>
      },
      {
        path: "/products/Groceries",
        element: <Groceries/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/admin",
        element: <Admin/>
      },
      {
        path: "/dashboard/management",
        element: <Management/>
      }
    ]
  }
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
