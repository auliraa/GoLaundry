import React from 'react';
import { ArrowLeft, Star, MapPin, Clock, Truck, Phone, Shield, Zap } from 'lucide-react';
import { LaundryShop } from '../App';

type LaundryDetailProps = {
  shop: LaundryShop;
  onBookService: () => void;
  onBack: () => void;
};

const LaundryDetail: React.FC<LaundryDetailProps> = ({ shop, onBookService, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Kembali ke hasil pencarian
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80">
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{shop.name}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{shop.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold mr-2">{shop.rating}</span>
                  <span className="text-gray-500">({shop.reviews} ulasan)</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-600">{shop.distance}</span>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-0 text-right">
                <div className="text-3xl font-bold text-[#328E6E] mb-1">
                  Rp {shop.pricePerKg.toLocaleString()}/kg
                </div>
                <div className="flex items-center justify-end text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{shop.estimatedTime}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {shop.pickupAvailable && (
                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <Truck className="h-6 w-6 text-[#328E6E] mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Antar Jemput</div>
                    <div className="text-sm text-gray-600">Tersedia</div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                <Zap className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Express</div>
                  <div className="text-sm text-gray-600">1 hari selesai</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                <Shield className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Syariah</div>
                  <div className="text-sm text-gray-600">Compliant</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                <Phone className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Layanan Tersedia</h3>
              <div className="flex flex-wrap gap-3">
                {shop.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#328E6E]/10 text-[#328E6E] rounded-full font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Keunggulan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#328E6E] rounded-full mt-2"></div>
                  <span className="text-gray-700">Detergen khusus kulit sensitif</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#328E6E] rounded-full mt-2"></div>
                  <span className="text-gray-700">Pemisahan pakaian najis dan tidak najis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#328E6E] rounded-full mt-2"></div>
                  <span className="text-gray-700">Pilihan pewangi atau bebas pewangi</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#328E6E] rounded-full mt-2"></div>
                  <span className="text-gray-700">Pemisahan pakaian putih dan berwarna</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookService}
              className="w-full py-4 bg-[#328E6E] text-white font-semibold rounded-2xl hover:bg-[#2a7a5e] transition-colors text-lg"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryDetail;