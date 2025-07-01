import React, { useState } from 'react';
import { Shirt, Menu, X, Phone, MapPin, User } from 'lucide-react';

type NavbarProps = {
  onBackToHome: () => void;
  currentView: string;
};

const Navbar: React.FC<NavbarProps> = ({ onBackToHome, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#', action: onBackToHome },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={onBackToHome}
          >
            <div className="p-2 bg-[#328E6E] rounded-xl">
              <Shirt className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GoLaundry</h1>
              {/* <p className="text-xs text-gray-500">Bersih & Berkah</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action || (() => {})}
                className="text-gray-700 hover:text-[#328E6E] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>0800-1234-5678</span>
            </div> */}
            <button className="flex items-center px-4 py-2 bg-[#328E6E] text-white rounded-lg hover:bg-[#2a7a5e] transition-colors">
              <User className="h-4 w-4 mr-2" />
              Masuk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.action) item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#328E6E] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0800-1234-5678</span>
                </div>
                <button className="w-full mt-2 flex items-center justify-center px-3 py-2 bg-[#328E6E] text-white rounded-lg hover:bg-[#2a7a5e] transition-colors">
                  <User className="h-4 w-4 mr-2" />
                  Masuk
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;