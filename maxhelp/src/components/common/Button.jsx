import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-md font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-teal-900 text-white hover:bg-teal-800',
    secondary: 'border border-teal-900 text-teal-900 hover:bg-teal-50',
    text: 'text-teal-900 hover:text-teal-800'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;