import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import img1 from "../assets/image1.jpg"
import img2 from "../assets/images.jpeg"
import img3 from "../assets/image3.jpg"
import img4 from "../assets/image4.jpg"
import i1 from "../assets/i1.jpeg"
import i3 from "../assets/i3.jpeg"
import i4 from "../assets/i4.jpeg"
import i5 from "../assets/i5.jpeg"
import i6 from "../assets/i6.jpeg"
import i7 from "../assets/i7.jpeg"

const RestaurantProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Professional Kitchen Mixer',
      description: 'High-performance commercial grade mixer for professional kitchens',
      price: 899.99,
      image: i1,
      category: 'Equipment'
    },
    {
      id: 2,
      name: 'Itallian made Steaks',
      description: 'Highly grilled lamb meat',
      price: 50,
      image: img1,
      category: 'Dishes'
    },
    {
      id: 3,
      name: 'Souflee pancakes',
      description: 'Fluffy duffly souflee pancakes',
      price: 9.99,
      image: img2,
      category: 'Snacks'
    },
    {
      id: 4,
      name: 'Jollof rice and Chicken',
      description: 'Smoked party Jollof',
      price: 39.99,
      image: i3,
      category: 'Dishes'
    },
    {
      id: 5,
      name: 'Amala and Ewedu',
      description: 'Iya bolanle amala , with lots of ogufe',
      price: 29.99,
      image: i4,
      category: 'Quick Quick snack'
    },
    {
      id: 6,
      name: 'Tuwo shinkafa',
      description: 'Alahajas touch ',
      price: 19.99,
      image: i5,
      category: 'Dishes'
    },
    {
      id: 7,
      name: 'African salad',
      description: 'Enugu style abacha , hot and spicy',
      price: 19.99,
      image: i6,
      category: 'Snacks'
    },
    {
      id: 8,
      name: 'Bole and Fish',
      description: 'PH style Bole , pepper sauce , and whole grilled fish',
      price: 39.99,
      image: i7,
      category: 'Apetizerrd'
    }
    // Add more products...
  ];

  return (
    <div className='bg-white p-8 rounded'>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">MaxHelp Delight Restaurant</h1>
        <p className="mt-2 text-gray-600">Feed the body , cause it works the money</p>
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

export default RestaurantProducts;