import React from 'react';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
  const { name, description, price, image, category } = product;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-teal-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          <Button variant="primary" size="small">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;