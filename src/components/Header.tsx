import React from 'react';
import { ArrowLeft, Shirt } from 'lucide-react';

type HeaderProps = {
  onBackToHome: () => void;
  currentView: string;
};

const Header: React.FC<HeaderProps> = ({ onBackToHome, currentView }) => {
  if (currentView === 'home') return null;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-16 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#328E6E] rounded-full">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GoLaundry</h1>
                <p className="text-xs text-gray-500">Bersih & Berkah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;