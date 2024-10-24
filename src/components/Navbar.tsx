import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">NomadScope</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Cities</Link>
            <a href="#" className="text-gray-600 hover:text-purple-600">Rankings</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Community</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;