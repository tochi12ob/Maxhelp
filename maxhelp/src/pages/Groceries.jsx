import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img8 from "../assets/img8.jpeg"

const Groceries = () => {
  const products = [
    {
      id: 1,
      name: 'Milk',
      description: 'Full cream Peak Milk',
      price: 9.99,
      image: img1,
      category: 'Laite'
    },
    {
      id: 2,
      name: 'Milo',
      description: 'Nestle dark chocolate',
      price: 7,
      image: img2,
      category: 'Coco'
    },
    {
      id: 3,
      name: 'Custard',
      description: 'Checkers 3 in 1 creamy custard',
      price: 9.99,
      image: img3,
      category: 'Snacks'
    },
    {
      id: 4,
      name: 'Sugar',
      description: 'Sugar cubes',
      price: 3.99,
      image: img4,
      category: 'Sucre'
    },
    {
      id: 5,
      name: 'Munch-it',
      description: 'Crispy munchit sticks',
      price: 0.99,
      image: img5,
      category: 'Quick Quick snack'
    },
    {
      id: 6,
      name: 'Biscuit',
      description: 'Nasco strawberry flavoured biscuits ',
      price: 1.99,
      image: img6,
      category: 'Dishes'
    },
    {
      id: 7,
      name: 'Corn Flakes',
      description: 'Crispy corn flakes',
      price: 2.99,
      image: img7,
      category: 'Snacks'
    },
    {
      id: 8,
      name: 'Butter',
      description: 'Glazing spread for all',
      price: 2.50,
      image: img8,
      category: 'Apetizerrd'
    }
    // Add more products...
  ];

  return (
    <div className='bg-white p-8 rounded'>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">MaxHelp SuperStores</h1>
        <p className="mt-2 text-gray-600">Keep your kitchen pumped and restocked </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Add filters/categories here */}
          </div>
          <div className="flex items-center space-x-4">
            {/* Add sort options here */}
          </div>
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
};

export default Groceries;