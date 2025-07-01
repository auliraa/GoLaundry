import React from 'react';
import { MapPin, Clock, Shield, Truck, Star, Heart, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Berbasis Lokasi',
    description: 'Temukan laundry terdekat dengan teknologi GPS yang akurat',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Shield,
    title: 'Syariah Compliant',
    description: 'Pemisahan najis dan tidak najis sesuai ketentuan fikih Islam',
    color: 'bg-green-50 text-[#328E6E]'
  },
  {
    icon: Truck,
    title: 'Antar Jemput',
    description: 'Layanan praktis langsung ke rumah dengan jadwal fleksibel',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Zap,
    title: 'Express Service',
    description: 'Layanan superfast 1 hari selesai untuk kebutuhan mendesak',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: Star,
    title: 'Kualitas Terjamin',
    description: 'Mitra laundry terpilih dengan rating tinggi dan review positif',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Heart,
    title: 'Infaq Terintegrasi',
    description: 'Kemudahan bersedekah setelah transaksi untuk keberkahan',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Pantau status laundry Anda secara real-time dari pickup hingga delivery',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Tim support 24/7 siap membantu kebutuhan laundry Anda',
    color: 'bg-pink-50 text-pink-600'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#328E6E]/10 rounded-full text-[#328E6E] text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Keunggulan Platform
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mengapa Memilih <span className="text-[#328E6E]">GoLaundry</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menghadirkan solusi laundry modern yang memadukan teknologi terkini 
            dengan nilai-nilai syariah untuk pengalaman yang berkah dan memuaskan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#328E6E] mb-2">500+</div>
              <div className="text-gray-600">Mitra Laundry</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#328E6E] mb-2">50K+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#328E6E] mb-2">25</div>
              <div className="text-gray-600">Kota Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#328E6E] mb-2">4.9</div>
              <div className="text-gray-600">Rating App</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;