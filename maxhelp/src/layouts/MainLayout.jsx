import React from 'react';
import Navbar from "../components/common/Navbar.jsx"
import Footer from '../components/common/Footer.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;