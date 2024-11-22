import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const RestockDashboard = () => {
  // Full product list
  const [stockData, setStockData] = useState([
    { name: "Bottled Water", stock: 48, icon: "🥤" },
    { name: "Sachet Water", stock: 80, icon: "💧" },
    { name: "Bread", stock: 117, icon: "🍞" },
    { name: "Rich Dad Poor Dad Book", stock: 58, icon: "📘" },
    { name: "Pepsi", stock: 24, icon: "🥤" },
    { name: "Apple Juice", stock: 90, icon: "🍎" },
    { name: "Rice", stock: 30, icon: "🍚" },
    { name: "Spaghetti", stock: 120, icon: "🍝" },
    { name: "Milk", stock: 15, icon: "🥛" },
    { name: "Eggs", stock: 60, icon: "🥚" },
    { name: "Cooking Oil", stock: 20, icon: "🛢️" },
    { name: "Notebooks", stock: 40, icon: "📒" },
    { name: "Pens", stock: 200, icon: "🖊️" },
  ]);

  const stockThreshold = 50;

  // Simulate stock updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prevData) =>
        prevData.map((item) => ({
          ...item,
          stock: Math.max(0, item.stock - Math.floor(Math.random() * 10)), // Decrement random stock
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Restock a single product
  const restockProduct = (productName) => {
    setStockData((prevData) =>
      prevData.map((item) =>
        item.name === productName ? { ...item, stock: item.stock + 50 } : item
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">📦 Restock Dashboard</h1>

      {/* Restock Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stockData.map((item) => (
          <div
            key={item.name}
            className={`p-4 rounded-lg shadow-lg ${
              item.stock < stockThreshold ? "bg-red-100 border border-red-300" : "bg-white border"
            }`}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="ml-3 text-xl font-semibold">{item.name}</h3>
            </div>
            <p className="text-sm text-gray-600">
              Stock: <span className="font-bold">{item.stock}</span>
            </p>
            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full mt-3">
              <div
                className={`h-3 rounded-full ${
                  item.stock < stockThreshold ? "bg-red-500" : "bg-green-500"
                }`}
                style={{ width: `${Math.min((item.stock / 120) * 100, 100)}%` }}
              ></div>
            </div>
            {/* Alert */}
            {item.stock < stockThreshold && (
              <p className="mt-4 text-sm text-red-600 font-medium">⚠️ Restock Needed!</p>
            )}
            {/* Restock Button */}
            <button
              onClick={() => restockProduct(item.name)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Restock
            </button>
          </div>
        ))}
      </div>

      {/* Stock Overview Chart */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-center mb-4">Stock Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
            <Bar dataKey="stock" radius={[5, 5, 0, 0]}>
              {stockData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.stock < stockThreshold ? "#EF4444" : "#22C55E"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RestockDashboard;
