import React, { useState } from 'react';
import { Search, ThermometerSun, Wifi, Coffee, MapPin } from 'lucide-react';
import CityCard from '../components/CityCard';
import { cities } from '../data/cities';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Find Your Perfect City
          </h1>
          <p className="text-xl text-center mb-8 text-purple-100">
            Discover the best cities for digital nomads based on cost of living, internet speed, weather, and more
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cities..."
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: 'Cities', value: '1,200+' },
            { icon: <Wifi className="w-6 h-6" />, label: 'Avg Internet', value: '50 Mbps' },
            { icon: <ThermometerSun className="w-6 h-6" />, label: 'Avg Temp', value: '22°C' },
            { icon: <Coffee className="w-6 h-6" />, label: 'Coworking', value: '3,500+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="flex justify-center mb-2 text-purple-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;