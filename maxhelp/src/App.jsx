import React from 'react';
import Header from './landing-components/Header';
import ChartSection from './landing-components/ChartSection';
import TableSection from './landing-components/TableSection';
import Write from './landing-components/Write';
import RestockDashboard from './landing-components/RestockDashboard'; // Import the Restock component
import Footer from './landing-components/Footer'
import './App.css';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      
      {/* Dashboard Container */}
      <div className="dashboard-container">
        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <h3>User Signups</h3>
            <p>400k+</p>
          </div>
          <div className="card">
            <h3>Revenue by City</h3>
            <p>$4.32m</p>
          </div>
          <div className="card">
            <h3>Customer Spending</h3>
            <p>$201.53</p>
          </div>
        </div>

        {/* Existing Sections */}
        <Write />
        <ChartSection />
        <TableSection />
        
        {/* Restock Dashboard Section */}
        <RestockDashboard />
        <Footer/>
      </div>
    </div>
  );
};

export default App;

