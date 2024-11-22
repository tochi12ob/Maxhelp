import React from 'react'
import ProductGrid from '../components/products/ProductGrid';
import img1 from "../assets/image5.jpeg"
import img2 from "../assets/image6.jpeg"
import img3 from "../assets/image7.jpeg"
import img4 from "../assets/image8.jpeg"
import img5 from "../assets/image8.jpeg"

const WaterProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Table Water ',
      description: 'Maxh 75cl ',
      price: 899.99,
      image: img1,
      category: 'Equipment'
    },
    {
      id: 2,
      name: 'Alkaline Bottled water',
      description: 'Maxh 75cl 16 bottles',
      price: 50,
      image: img2,
      category: 'Distilled water'
    },
    {
      id: 3,
      name: 'Iron bottled water',
      description: 'Maxh 75cl ',
      price: 9.99,
      image: img3,
      category: 'Pure Water'
    },
    {
      id: 4,
      name: 'Sachet water',
      description: 'Maxh Pure water , 24 sachets ',
      price: 39.99,
      image: img4,
      category: 'clean water'
    },
    {
      id: 5,
      name: 'Waterbottle ',
      description: 'Maxh 2L water bottle',
      price: 29.99,
      image: img1,
      category: 'equipment'
    },
    {
      id: 6,
      name: 'Calcium Bottled water',
      description: 'Maxh 125cl  ',
      price: 19.99,
      image: img2,
      category: 'Distilled water'
    },
    {
      id: 7,
      name: 'Zinc Sachet water',
      description: '100cl sachet water',
      price: 19.99,
      image: img3,
      category: 'pure water'
    },
    {
      id: 8,
      name: 'Ice water retainer ',
      description: 'Maxh Water bottle for preserving temperature',
      price: 39.99,
      image: img4,
      category: 'equipment'
    }
    // Add more products...
  ];
  return (
    <div className='bg-white p-8 rounded'>
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">MaxHelp Botte water industry</h1>
      <p className="mt-2 text-gray-600">Quench your thirst with our purified water</p>
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
  )
}

export default WaterProducts