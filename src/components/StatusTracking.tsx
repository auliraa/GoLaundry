import React from 'react';
import { CheckCircle, Clock, Truck, Package, Star, Home } from 'lucide-react';
import { Order, OrderStatus } from '../App';

type StatusTrackingProps = {
  order: Order;
  onBackToHome: () => void;
};

const statusSteps: { status: OrderStatus; label: string; icon: React.ElementType }[] = [
  { status: 'picked_up', label: 'Dijemput', icon: Truck },
  { status: 'processing', label: 'Diproses', icon: Clock },
  { status: 'washing', label: 'Dicuci', icon: Package },
  { status: 'drying', label: 'Dikeringkan', icon: Package },
  { status: 'ready', label: 'Siap', icon: CheckCircle },
  { status: 'delivered', label: 'Dikirim', icon: Truck }
];

const StatusTracking: React.FC<StatusTrackingProps> = ({ order, onBackToHome }) => {
  const currentStatusIndex = statusSteps.findIndex(step => step.status === order.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#328E6E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-[#328E6E]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pesanan Berhasil! 🎉
            </h2>
            <p className="text-gray-600">
              Terima kasih telah menggunakan GoLaundry. Pakaian Anda akan diproses dengan baik dan berkah.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Detail Pesanan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Order ID:</span>
                <span className="font-semibold ml-2">#{order.id}</span>
              </div>
              <div>
                <span className="text-gray-600">Laundry:</span>
                <span className="font-semibold ml-2">{order.laundryShop.name}</span>
              </div>
              <div>
                <span className="text-gray-600">Layanan:</span>
                <span className="font-semibold ml-2">
                  {order.serviceType === 'superfast' ? 'Superfast' : 'Normal'}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Berat:</span>
                <span className="font-semibold ml-2">{order.weight} kg</span>
              </div>
              <div>
                <span className="text-gray-600">Total:</span>
                <span className="font-semibold ml-2 text-[#328E6E]">
                  Rp {order.total.toLocaleString()}
                </span>
              </div>
              {order.pickupService && (
                <div>
                  <span className="text-gray-600">Penjemputan:</span>
                  <span className="font-semibold ml-2">{order.pickupTime}</span>
                </div>
              )}
            </div>
            
            {order.specialNotes && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-gray-600">Catatan Khusus:</span>
                <p className="text-gray-900 mt-1">{order.specialNotes}</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-6">Status Pesanan</h3>
            <div className="space-y-4">
              {statusSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isCompleted = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                
                return (
                  <div key={step.status} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-[#328E6E] text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className={`font-medium ${
                        isCompleted ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.label}
                      </p>
                      {isCurrent && (
                        <p className="text-sm text-[#328E6E]">Sedang diproses...</p>
                      )}
                    </div>
                    {index < statusSteps.length - 1 && (
                      <div className={`absolute left-5 mt-10 w-0.5 h-8 ${
                        isCompleted ? 'bg-[#328E6E]' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-3">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <h4 className="font-semibold text-gray-900">Hadits Hari Ini</h4>
            </div>
            <p className="text-gray-700 italic mb-2">
              "Barang siapa yang melepaskan satu kesusahan dunia dari seorang mukmin, 
              maka Allah akan melepaskan darinya satu kesusahan di hari kiamat."
            </p>
            <p className="text-sm text-gray-500">HR. Muslim</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBackToHome}
              className="flex-1 py-4 bg-[#328E6E] text-white font-semibold rounded-xl hover:bg-[#2a7a5e] transition-colors flex items-center justify-center"
            >
              <Home className="h-5 w-5 mr-2" />
              Kembali ke Beranda
            </button>
            
            <button className="flex-1 py-4 border-2 border-[#328E6E] text-[#328E6E] font-semibold rounded-xl hover:bg-[#328E6E]/5 transition-colors flex items-center justify-center">
              <Star className="h-5 w-5 mr-2" />
              Beri Rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTracking;