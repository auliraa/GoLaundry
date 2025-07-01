import React from 'react';
import { Shirt, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#328E6E] rounded-xl">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GoLaundry</h3>
                <p className="text-sm text-gray-400">Bersih & Berkah</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Platform laundry syariah terpercaya yang mengutamakan kebersihan sesuai syariat Islam. 
              Melayani dengan hati, bersih dengan berkah.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#328E6E] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#328E6E] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#328E6E] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {[
                'Cuci Kering',
                'Cuci Setrika',
                'Dry Cleaning',
                'Antar Jemput',
                'Express Service',
                'Cuci Karpet'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#328E6E] transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {[
                'Tentang Kami',
                'Karir',
                'Mitra Laundry',
                'Blog',
                'Syarat & Ketentuan',
                'Kebijakan Privasi'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#328E6E] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#328E6E] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Jl. Syariah Raya No. 123<br />
                    Jakarta Selatan 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#328E6E]" />
                <p className="text-sm text-gray-300">0800-1234-5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#328E6E]" />
                <p className="text-sm text-gray-300">info@golaundry.id</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Download App</h5>
              <div className="space-y-2">
                <button className="w-full bg-black text-white px-3 py-2 rounded text-xs hover:bg-gray-800 transition-colors">
                  📱 App Store
                </button>
                <button className="w-full bg-[#328E6E] text-white px-3 py-2 rounded text-xs hover:bg-[#2a7a5e] transition-colors">
                  🤖 Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 GoLaundry. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Heart className="h-4 w-4 text-red-500 mr-1" />
              <p className="text-sm text-gray-400">
                Dibuat dengan cinta untuk umat
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;