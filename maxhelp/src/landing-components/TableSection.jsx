import React from 'react';
import '../TableSection.css';

const TableSection = () => {
  const customers = [
    { id: 1, name: 'Eduardo', total: '$1500.12', orders: 102 },
    { id: 2, name: 'Nick', total: '$1001.46', orders: 90 },
  ];

  return (
    <div className="table-container">
      <h3>Top Customers</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Spending</th>
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.total}</td>
              <td>{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
