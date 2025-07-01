import React, { useState } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';

type LaundrySearchProps = {
  onLocationSelect: (location: string) => void;
  selectedLocation: string;
  children: React.ReactNode;
};

const LaundrySearch: React.FC<LaundrySearchProps> = ({ 
  onLocationSelect, 
  selectedLocation, 
  children 
}) => {
  const [inputValue, setInputValue] = useState(selectedLocation);

  const handleSearch = () => {
    if (inputValue.trim()) {
      onLocationSelect(inputValue);
    }
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = "Lokasi saat ini";
          setInputValue(location);
          onLocationSelect(location);
        },
        (error) => {
          alert('Tidak dapat mengakses lokasi. Silakan masukkan lokasi manual.');
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Temukan Laundry di Sekitar Anda
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Masukkan lokasi Anda..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            
            <button
              onClick={handleDetectLocation}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <Navigation className="h-5 w-5 mr-2" />
              Auto Detect
            </button>
            
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-[#328E6E] text-white rounded-xl hover:bg-[#2a7a5e] transition-colors flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Cari
            </button>
          </div>
        </div>

        {selectedLocation && children}
      </div>
    </div>
  );
};

export default LaundrySearch;