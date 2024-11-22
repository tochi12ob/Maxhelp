import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="text-center mt-40">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Premium Quality Products<br />
        for Your Lifestyle
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
        Experience excellence in every product. From Good food  to highly purified water .
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="primary" size="medium" className="flex items-center">
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </Button>
        <Button variant="secondary" size="medium">
          Try Demo
        </Button>
      </div>
      <div className='h-[700px] bg-[#eee] mx-16 rounded mt-24'></div>
    </div>
  );
};

export default Hero;