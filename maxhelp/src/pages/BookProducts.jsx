import React from 'react'
import ProductGrid from '../components/products/ProductGrid';
import img1 from "../assets/Image11.jpeg"
import img2 from "../assets/image12.jpeg"
import img3 from "../assets/Image13.jpeg"
import img4 from "../assets/Image14.jpeg"
import img5 from "../assets/image15.jpeg"
import img6 from "../assets/image16.jpeg"
import img7 from "../assets/Image17.jpeg"
import img8 from "../assets/Image18.jpeg"

const BookProducts = () => {
    const products = [
        {
          id: 1,
          name: 'The Alchemist',
          description: 'Paulo Coelho',
          price: 9.99,
          image: img1,
          category: 'Fantasy'
        },
        {
          id: 2,
          name: 'Clean Code',
          description: 'Robert C. Martin',
          price: 5,
          image: img2,
          category: 'Technology '
        },
        {
          id: 3,
          name: 'The Pragmatic Programmer',
          description: 'David Thomas & Andrew Hunt',
          price: 6.99,
          image: img3,
          category: 'Technology'
        },
        {
          id: 4,
          name: 'The Psychology of Money',
          description: 'Morgan Housel',
          price: 19.99,
          image: img4,
          category: 'Finance'
        },
        {
          id: 5,
          name: 'The Hobbit',
          description: 'J.R.R',
          price: 2.99,
          image: img5,
          category: 'Children Fantasy'
        },
        {
          id: 6,
          name: 'Atomic Habits',
          description: 'James Clear  ',
          price: 12.99,
          image: img6,
          category: 'Mindset'
        },
        {
          id: 7,
          name: 'A confederacy of dunces',
          description: 'John Kennedy Toole',
          price: 1.99,
          image: img7,
          category: 'Comedy'
        },
        {
          id: 8,
          name: 'Good Omens',
          description: 'Neil Gaiman ',
          price: 3.99,
          image: img8,
          category: 'Comedy'
        }
        // Add more products...
      ];
    
  return (
    
    <div className='bg-white p-8 rounded'>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">MaxHelp Book Stores</h1>
        <p className="mt-2 text-gray-600">Educate your mind , because great success is hatched in there</p>
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

export default BookProducts