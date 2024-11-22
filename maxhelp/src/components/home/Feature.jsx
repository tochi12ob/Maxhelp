import React from 'react';
import { ArrowRight, BarChart, Lock, Users } from 'lucide-react';

const FeatureSection = () => {
    const features = [
      {
        icon: <BarChart className="w-6 h-6" />,
        title: "Advanced Analytics",
        description: "Get detailed insights into your business performance"
      },
      {
        icon: <Lock className="w-6 h-6" />,
        title: "Secure Platform",
        description: "Enterprise-grade security for your peace of mind"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Team Collaboration",
        description: "Work together seamlessly across departments"
      }
    ];
  
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-slate-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureSection;