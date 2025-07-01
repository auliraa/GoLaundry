import React, { useState } from 'react';
import { MapPin, Sparkles, Clock, Shield, Play, ArrowRight } from 'lucide-react';

type HeroProps = {
  onStartLaundry: () => void;
};

const Hero: React.FC<HeroProps> = ({ onStartLaundry }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#328E6E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#328E6E] rounded-full blur-3xl"></div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-xl shadow-2xl p-2 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold focus:outline-none"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Tutup Video"
            >
              &times;
            </button>
            <video
              src="https://res.cloudinary.com/duggueecb/video/upload/v1751378789/Video_Mahasiswa_Stres_Laundry_GoLaundry_epd10d.mp4"
              controls
              autoPlay
              className="rounded-lg w-full h-[320px] sm:h-[400px] bg-black"
            />
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-[#328E6E]/10 rounded-full text-[#328E6E] text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Platform Laundry Syariah #1 di Indonesia
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Laundry{' '}
              <span className="bg-gradient-to-r from-[#328E6E] to-green-600 bg-clip-text text-transparent">
                Bersih
              </span>
              <br />
              & Berkah
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
              Temukan layanan laundry terpercaya di sekitar Anda. 
              <br className="hidden sm:block" />
              <span className="font-semibold text-[#328E6E]">Bersih sesuai syariat</span>, 
              nyaman untuk keluarga, dan berkah untuk kehidupan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onStartLaundry}
                className="group inline-flex items-center px-8 py-4 bg-[#328E6E] text-white font-semibold rounded-2xl hover:bg-[#2a7a5e] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Cari Laundry Terdekat
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-[#328E6E] hover:text-[#328E6E] transition-all duration-200"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Lihat Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-[#328E6E] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <span>50K+ pengguna aktif</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Rating 4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/duggueecb/image/upload/v1751379773/Desain_tanpa_judul-removebg-preview_dc5csw.png"
              alt="Hero Illustration"
              className="w-full h-[400px] sm:h-[600px] lg:h-[750px] object-contain"
            />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
            <div className="w-16 h-16 bg-[#328E6E]/10 rounded-2xl flex items-center justify-center">
              <MapPin className="h-8 w-8 text-[#328E6E]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Berbasis Lokasi</h3>
              <p className="text-gray-600 text-sm">Temukan laundry terdekat dengan mudah menggunakan GPS</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
            <div className="w-16 h-16 bg-[#328E6E]/10 rounded-2xl flex items-center justify-center">
              <Clock className="h-8 w-8 text-[#328E6E]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Antar Jemput</h3>
              <p className="text-gray-600 text-sm">Layanan praktis langsung ke rumah dengan jadwal fleksibel</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
            <div className="w-16 h-16 bg-[#328E6E]/10 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-[#328E6E]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sesuai Syariat</h3>
              <p className="text-gray-600 text-sm">Pemisahan najis dan layanan berkah sesuai ajaran Islam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;