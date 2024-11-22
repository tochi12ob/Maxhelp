import React from 'react';
import { BarChart2, Package, Users, Settings, TrendingUp } from 'lucide-react';
import { Sparklines, SparklinesLine } from 'react-sparklines'; // For trend graph

const AdminCard = ({ title, value, icon: Icon, className, trendData }) => (
  <div className={`p-6 rounded-lg shadow hover:shadow-md transition ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <Icon size={24} />
    </div>
    <div className="text-3xl font-bold mb-2">{value}</div>
    {trendData && (
      <div>
        <Sparklines data={trendData} limit={5} width={80} height={20}>
          <SparklinesLine style={{ stroke: 'white', fill: 'none' }} />
        </Sparklines>
        <span className="text-sm text-gray-300 mt-1">+12% this month</span>
      </div>
    )}
  </div>
);

const Admin = () => {
  // Simulating trend data
  const salesTrend = [10, 15, 20, 18, 22];

  return (
    <div className="h-[200vh] bg-gray-50 p-6 rounded">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, <span className="font-semibold">Tochi</span>!
        </p>
        <p className="text-sm text-gray-500">Today is {new Date().toLocaleDateString()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AdminCard
          title="Total Sales"
          value="$12,426"
          icon={BarChart2}
          className="bg-teal-900 text-white"
          trendData={salesTrend} // Trend data for sparklines
        />
        <AdminCard
          title="Products"
          value="45"
          icon={Package}
          className="bg-white border border-gray-200"
        />
        <AdminCard
          title="Customers"
          value="1,240"
          icon={Users}
          className="bg-white border border-gray-200"
        />
        <AdminCard
          title="Categories"
          value="8"
          icon={Settings}
          className="bg-teal-900 text-white"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 bg-teal-600 text-white rounded-lg shadow hover:shadow-md transition">
            Add New Product
          </button>
          <button className="p-4 bg-teal-600 text-white rounded-lg shadow hover:shadow-md transition">
            Manage Orders
          </button>
          <button className="p-4 bg-teal-600 text-white rounded-lg shadow hover:shadow-md transition">
            View Sales Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
