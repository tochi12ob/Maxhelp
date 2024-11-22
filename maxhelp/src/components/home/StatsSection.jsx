import React from 'react';
import { ArrowRight, BarChart, Lock, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: "20K+",
      description: "Trusted users across global markets",
      subtext: "Operating in multiple regions to serve clients"
    },
    {
      number: "98%",
      description: "Customer satisfaction rate",
      subtext: "Delivering excellence in service"
    },
    {
      number: "85%",
      description: "Growth year over year",
      subtext: "Continuous improvement and expansion"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-5xl font-bold text-slate-800">{stat.number}</h2>
              <p className="mt-2 text-lg text-slate-600">{stat.description}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;