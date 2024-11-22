import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const platformLinks = [
    { title: 'Analytics', href: '#' },
    { title: 'Planning', href: '#' },
    { title: 'Collaboration', href: '#' },
    { title: 'Data Management', href: '#' },
    { title: 'Integrations', href: '#' },
    { title: 'Security', href: '#' }
  ];

  const resourceLinks = [
    { title: 'Customers', href: '#' },
    { title: 'Strategic Finance', href: '#' },
    { title: 'Ebooks & Guides', href: '#' },
    { title: 'Webinars & Events', href: '#' },
    { title: 'Podcast & Video', href: '#' }
  ];

  const solutionLinks = [
    { title: 'Financial', href: '#' },
    { title: 'Investors & CEOs', href: '#' },
    { title: 'Revenue Operations', href: '#' },
    { title: 'Sales & Marketing', href: '#' },
    { title: 'Human Resources', href: '#' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">MaxHelp</h2>
            <div className="space-y-2 text-slate-600">
              <p>Palm Estate</p>
              <p>Ikoyi</p>
              <p>Lagos state</p>
              <div className="flex space-x-4 mt-4">
                <Instagram className="w-5 h-5 text-slate-600 hover:text-slate-800 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-slate-800 cursor-pointer" />
                <Twitter className="w-5 h-5 text-slate-600 hover:text-slate-800 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-800">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-800">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-800">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-800">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>SINCE 2023</p>
            <p>© 2024 MaxHelp. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slate-700">Terms</a>
              <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;