import React from 'react';
import { Star, MapPin, Clock, Truck } from 'lucide-react';
import { LaundryShop } from '../App';

type LaundryListProps = {
  location: string;
  onShopSelect: (shop: LaundryShop) => void;
};

const mockLaundries: LaundryShop[] = [
  {
    id: '1',
    name: 'Al-Barakah Laundry',
    rating: 4.8,
    distance: '0.5 km',
    pricePerKg: 8000,
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'Jl. Masjid Raya No. 45',
    services: ['Cuci Kering', 'Setrika', 'Antar Jemput'],
    pickupAvailable: true,
    estimatedTime: '2-3 hari',
    reviews: 324
  },
  {
    id: '2',
    name: 'Berkah Clean Laundry',
    rating: 4.7,
    distance: '0.8 km',
    pricePerKg: 7500,
    image: 'https://images.pexels.com/photos/5591661/pexels-photo-5591661.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'Jl. Pondok Indah No. 12',
    services: ['Express', 'Detergen Halal', 'Dry Clean'],
    pickupAvailable: true,
    estimatedTime: '1-2 hari',
    reviews: 256
  },
  {
    id: '3',
    name: 'Masjid Laundry Center',
    rating: 4.9,
    distance: '1.2 km',
    pricePerKg: 9000,
    image: 'https://images.pexels.com/photos/5591677/pexels-photo-5591677.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'Komplek Masjid An-Nur',
    services: ['Syariah Compliant', 'Pemisahan Najis', 'Cuci Karpet'],
    pickupAvailable: false,
    estimatedTime: '2-4 hari',
    reviews: 189
  }
];

const LaundryList: React.FC<LaundryListProps> = ({ location, onShopSelect }) => {
  if (!location) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">
          Laundry di "{location}"
        </h3>
        <span className="text-gray-500">{mockLaundries.length} tempat ditemukan</span>
      </div>

      <div className="grid gap-6">
        {mockLaundries.map((laundry) => (
          <div
            key={laundry.id}
            onClick={() => onShopSelect(laundry)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-48 sm:h-auto">
                <img
                  src={laundry.image}
                  alt={laundry.name}
                  className="w-full h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                />
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {laundry.name}
                    </h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{laundry.address}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{laundry.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({laundry.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-600">{laundry.distance}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {laundry.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#328E6E]/10 text-[#328E6E] text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-[#328E6E]">
                      Rp {laundry.pricePerKg.toLocaleString()}/kg
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{laundry.estimatedTime}</span>
                    </div>
                  </div>
                  
                  {laundry.pickupAvailable && (
                    <div className="flex items-center text-[#328E6E]">
                      <Truck className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Antar Jemput</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaundryList;