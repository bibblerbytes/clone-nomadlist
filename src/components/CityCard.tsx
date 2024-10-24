import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, ThermometerSun, DollarSign, Heart } from 'lucide-react';

interface CityCardProps {
  city: {
    id: number;
    name: string;
    country: string;
    image: string;
    internetSpeed: number;
    temperature: number;
    costIndex: number;
    nomadScore: number;
  };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Link to={`/city/${city.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              // Add favorite functionality here
            }}
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{city.name}</h3>
          <p className="text-gray-500 mb-4">{city.country}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600">{city.internetSpeed} Mbps</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThermometerSun className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600">{city.temperature}°C</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600">${city.costIndex}/mo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm font-semibold text-purple-600">
                {city.nomadScore}/10
              </div>
              <span className="text-gray-600">Nomad Score</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;