import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../ChartSection.css';

const ChartSection = () => {
  const foodSalesChartRef = useRef(null);
  const waterSalesChartRef = useRef(null);
  const bookRevenueChartRef = useRef(null);

  useEffect(() => {
    const foodSalesCtx = document.getElementById('foodSalesChart').getContext('2d');
    const waterSalesCtx = document.getElementById('waterSalesChart').getContext('2d');
    const bookRevenueCtx = document.getElementById('bookRevenueChart').getContext('2d');

    // Food Sales (Bar Chart by Category)
    foodSalesChartRef.current = new Chart(foodSalesCtx, {
      type: 'bar',
      data: {
        labels: ['Snacks', 'Dishes', 'Quick Quick Snack', 'Apetizerrd'],
        datasets: [
          {
            label: 'Sales Revenue ($)',
            data: [15000, 30000, 12000, 8000], // Adjusted based on sample data
            backgroundColor: ['#ff6384', '#36a2eb', '#ff9f40', '#4bc0c0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });

    // Water Sales (Pie Chart by Category)
    waterSalesChartRef.current = new Chart(waterSalesCtx, {
      type: 'pie',
      data: {
        labels: ['Distilled Water', 'Pure Water', 'Equipment'],
        datasets: [
          {
            data: [5000, 8000, 3000], // Adjusted based on sample data
            backgroundColor: ['#4bc0c0', '#ffcd56', '#9966ff'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });

    // Book Revenue (Stacked Bar Chart by Product)
    bookRevenueChartRef.current = new Chart(bookRevenueCtx, {
      type: 'bar',
      data: {
        labels: ['Fiction', 'Non-Fiction', 'Textbooks', 'Children’s Books', 'Comics'],
        datasets: [
          {
            label: 'Revenue - Hardcover ($)',
            data: [3000, 2000, 7000, 1500, 1200],
            backgroundColor: '#36a2eb',
          },
          {
            label: 'Revenue - Softcover ($)',
            data: [5000, 4000, 5000, 2500, 1800],
            backgroundColor: '#ff6384',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true },
        },
      },
    });

    // Cleanup
    return () => {
      if (foodSalesChartRef.current) foodSalesChartRef.current.destroy();
      if (waterSalesChartRef.current) waterSalesChartRef.current.destroy();
      if (bookRevenueChartRef.current) bookRevenueChartRef.current.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="">
        <h3>Food Sales by Category</h3>
        <canvas id="foodSalesChart"></canvas>
      </div>
      <div className="">
        <h3>Water Product Sales</h3>
        <canvas id="waterSalesChart"></canvas>
      </div>
      <div className="">
        <h3>Book Revenue Breakdown</h3>
        <canvas id="bookRevenueChart"></canvas>
      </div>
    </div>
  );
};

export default ChartSection;


