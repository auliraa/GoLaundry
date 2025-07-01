import React, { useRef } from 'react';
import { Star, MapPin, Clock, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { LaundryShop } from '../App';

type FeaturedLaundriesProps = {
  onShopSelect: (shop: LaundryShop) => void;
};

const featuredLaundries: LaundryShop[] = [
  {
    id: '1',
    name: 'Al-Barakah Laundry',
    rating: 4.9,
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
    rating: 4.8,
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
  },
  {
    id: '4',
    name: 'Taqwa Laundry Express',
    rating: 4.7,
    distance: '1.5 km',
    pricePerKg: 8500,
    image: 'https://images.pexels.com/photos/5591684/pexels-photo-5591684.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'Jl. Dakwah Raya No. 88',
    services: ['24 Jam', 'Pewangi Alami', 'Cuci Sepatu'],
    pickupAvailable: true,
    estimatedTime: '1-3 hari',
    reviews: 412
  },
  {
    id: '5',
    name: 'Sunnah Wash',
    rating: 4.8,
    distance: '2.1 km',
    pricePerKg: 7000,
    image: 'https://images.pexels.com/photos/5591692/pexels-photo-5591692.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'Komplek Islamic Center',
    services: ['Eco Friendly', 'Detergen Organik', 'Setrika Premium'],
    pickupAvailable: true,
    estimatedTime: '2-3 hari',
    reviews: 298
  }
];

const FeaturedLaundries: React.FC<FeaturedLaundriesProps> = ({ onShopSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#328E6E]/10 rounded-full text-[#328E6E] text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Rekomendasi Terbaik
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Laundry <span className="text-[#328E6E]">Terpopuler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Pilihan terbaik dari mitra laundry syariah terpercaya di sekitar Anda
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredLaundries.map((laundry) => (
            <div
              key={laundry.id}
              onClick={() => onShopSelect(laundry)}
              className="flex-none w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={laundry.image}
                  alt={laundry.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{laundry.rating}</span>
                  </div>
                </div>
                {laundry.pickupAvailable && (
                  <div className="absolute top-4 left-4 bg-[#328E6E]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Truck className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium">Antar Jemput</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#328E6E] transition-colors">
                  {laundry.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{laundry.address}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {laundry.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#328E6E]/10 text-[#328E6E] text-xs rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-[#328E6E]">
                      Rp {laundry.pricePerKg.toLocaleString()}/kg
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{laundry.estimatedTime}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{laundry.distance}</div>
                    <div className="text-xs text-gray-400">({laundry.reviews} ulasan)</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {featuredLaundries.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLaundries;