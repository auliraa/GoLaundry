import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

type InfaqModalProps = {
  onDecision: (donated: boolean) => void;
};

const InfaqModal: React.FC<InfaqModalProps> = ({ onDecision }) => {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [5000, 10000, 25000, 50000];

  const handleDonate = () => {
    onDecision(true);
  };

  const handleSkip = () => {
    onDecision(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-[#328E6E]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Mau sekalian bersedekah hari ini? 💚
          </h3>
          <p className="text-gray-600">
            "Dan perumpamaan orang-orang yang menafkahkan hartanya di jalan Allah adalah seperti sebutir benih yang menumbuhkan tujuh bulir..."
          </p>
          <p className="text-sm text-gray-500 mt-2">QS. Al-Baqarah: 261</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Pilih nominal infaq:
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`p-3 border-2 rounded-xl transition-colors ${
                    selectedAmount === amount
                      ? 'border-[#328E6E] bg-[#328E6E]/5 text-[#328E6E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Rp {amount.toLocaleString()}
                </button>
              ))}
            </div>
            
            <input
              type="number"
              placeholder="Atau masukkan nominal lain..."
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(parseInt(e.target.value) || 0);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={handleDonate}
              className="w-full py-4 bg-[#328E6E] text-white font-semibold rounded-xl hover:bg-[#2a7a5e] transition-colors flex items-center justify-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Infaq Rp {(customAmount ? parseInt(customAmount) : selectedAmount).toLocaleString()}
            </button>
            
            <button
              onClick={handleSkip}
              className="w-full py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Lain kali saja
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Infaq akan disalurkan melalui lembaga amil zakat terpercaya
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfaqModal;