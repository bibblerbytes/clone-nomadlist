import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Wifi, ThermometerSun, DollarSign, Heart, Coffee, MapPin, Users, Sun, Cloud, Umbrella } from 'lucide-react';
import { cities } from '../data/cities';

const CityDetail = () => {
  const { id } = useParams();
  const city = cities.find(c => c.id === Number(id));

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const monthlyWeather = [
    { month: 'Jan', temp: city.temperature - 2, icon: <Sun /> },
    { month: 'Feb', temp: city.temperature - 1, icon: <Sun /> },
    { month: 'Mar', temp: city.temperature, icon: <Cloud /> },
    { month: 'Apr', temp: city.temperature + 1, icon: <Cloud /> },
    { month: 'May', temp: city.temperature + 2, icon: <Sun /> },
    { month: 'Jun', temp: city.temperature + 3, icon: <Sun /> },
    { month: 'Jul', temp: city.temperature + 3, icon: <Sun /> },
    { month: 'Aug', temp: city.temperature + 2, icon: <Sun /> },
    { month: 'Sep', temp: city.temperature + 1, icon: <Cloud /> },
    { month: 'Oct', temp: city.temperature, icon: <Cloud /> },
    { month: 'Nov', temp: city.temperature - 1, icon: <Umbrella /> },
    { month: 'Dec', temp: city.temperature - 2, icon: <Umbrella /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-2">{city.name}</h1>
              <p className="text-2xl text-gray-200">{city.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-bold">{city.internetSpeed} Mbps</div>
                    <div className="text-sm text-gray-500">Internet</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ThermometerSun className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-bold">{city.temperature}°C</div>
                    <div className="text-sm text-gray-500">Temperature</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-bold">${city.costIndex}</div>
                    <div className="text-sm text-gray-500">Monthly Cost</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-bold">{city.nomadScore}/10</div>
                    <div className="text-sm text-gray-500">Nomad Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Weather Throughout the Year</h2>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                {monthlyWeather.map((weather, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm text-gray-500">{weather.month}</div>
                    <div className="text-purple-600 my-2">
                      {weather.icon}
                    </div>
                    <div className="font-bold">{weather.temp}°C</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About {city.name}</h2>
              <p className="text-gray-600 leading-relaxed">
                {city.name} is a vibrant city that attracts digital nomads from all over the world. 
                With its perfect blend of culture, modern amenities, and affordable living costs, 
                it's an ideal destination for remote workers. The city offers excellent internet 
                connectivity, numerous coworking spaces, and a thriving expat community.
              </p>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Cost Breakdown */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Cost of Living</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">1 Bedroom Apartment</span>
                  <span className="font-bold">${Math.round(city.costIndex * 0.4)}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Coworking Space</span>
                  <span className="font-bold">${Math.round(city.costIndex * 0.1)}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Food & Drinks</span>
                  <span className="font-bold">${Math.round(city.costIndex * 0.3)}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transportation</span>
                  <span className="font-bold">${Math.round(city.costIndex * 0.1)}/mo</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg pt-4 border-t">
                  <span>Total</span>
                  <span>${city.costIndex}/mo</span>
                </div>
              </div>
            </div>

            {/* Best Areas */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Best Areas</h2>
              <div className="space-y-4">
                {[
                  { name: 'Digital Nomad Hub', description: 'Popular with remote workers' },
                  { name: 'Cultural District', description: 'Rich in local culture' },
                  { name: 'Modern Center', description: 'All amenities nearby' },
                ].map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <div className="font-bold">{area.name}</div>
                      <div className="text-sm text-gray-500">{area.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;