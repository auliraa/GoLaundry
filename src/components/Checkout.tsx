import React, { useState } from 'react';
import { ArrowLeft, Calendar, Package, CreditCard } from 'lucide-react';
import { LaundryShop, Order } from '../App';

type CheckoutProps = {
  shop: LaundryShop;
  onOrderSubmit: (order: Order) => void;
  onBack: () => void;
};

const Checkout: React.FC<CheckoutProps> = ({ shop, onOrderSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    serviceType: 'normal' as 'superfast' | 'normal',
    weight: 3,
    pickupService: false,
    sensitiveDetergent: false,
    customFragrance: 'regular',
    separateColors: true,
    specialNotes: '',
    pickupTime: '',
    paymentMethod: 'ewallet'
  });

  const basePrice = shop.pricePerKg * formData.weight;
  const serviceMultiplier = formData.serviceType === 'superfast' ? 1.5 : 1;
  const pickupFee = formData.pickupService ? 5000 : 0;
  const total = Math.round(basePrice * serviceMultiplier) + pickupFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const order: Order = {
      id: Date.now().toString(),
      laundryShop: shop,
      serviceType: formData.serviceType,
      weight: formData.weight,
      pickupService: formData.pickupService,
      sensitiveDetergent: formData.sensitiveDetergent,
      customFragrance: formData.customFragrance,
      separateColors: formData.separateColors,
      specialNotes: formData.specialNotes,
      pickupTime: formData.pickupTime,
      status: 'picked_up',
      total
    };

    onOrderSubmit(order);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Kembali ke detail laundry
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detail Pesanan</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Jenis Layanan
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, serviceType: 'normal' }))}
                      className={`p-4 rounded-xl border-2 transition-colors ${
                        formData.serviceType === 'normal'
                          ? 'border-[#328E6E] bg-[#328E6E]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">🕒 Normal</div>
                      <div className="text-sm text-gray-600">2-3 hari</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, serviceType: 'superfast' }))}
                      className={`p-4 rounded-xl border-2 transition-colors ${
                        formData.serviceType === 'superfast'
                          ? 'border-[#328E6E] bg-[#328E6E]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">🔁 Superfast</div>
                      <div className="text-sm text-gray-600">1 hari (+50%)</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimasi Berat (kg)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: parseInt(e.target.value) || 1 }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Layanan Tambahan</h3>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.pickupService}
                      onChange={(e) => setFormData(prev => ({ ...prev, pickupService: e.target.checked }))}
                      className="w-5 h-5 text-[#328E6E] rounded focus:ring-[#328E6E]"
                    />
                    <span className="ml-3">Layanan antar jemput (+Rp 5.000)</span>
                  </label>

                  {formData.pickupService && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Waktu Penjemputan
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.pickupTime}
                        onChange={(e) => setFormData(prev => ({ ...prev, pickupTime: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none"
                        required={formData.pickupService}
                      />
                    </div>
                  )}

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.sensitiveDetergent}
                      onChange={(e) => setFormData(prev => ({ ...prev, sensitiveDetergent: e.target.checked }))}
                      className="w-5 h-5 text-[#328E6E] rounded focus:ring-[#328E6E]"
                    />
                    <span className="ml-3">Detergen khusus kulit sensitif</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.separateColors}
                      onChange={(e) => setFormData(prev => ({ ...prev, separateColors: e.target.checked }))}
                      className="w-5 h-5 text-[#328E6E] rounded focus:ring-[#328E6E]"
                    />
                    <span className="ml-3">Pisahkan pakaian putih dan berwarna</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pilihan Pewangi
                  </label>
                  <select
                    value={formData.customFragrance}
                    onChange={(e) => setFormData(prev => ({ ...prev, customFragrance: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none"
                  >
                    <option value="regular">Pewangi Regular</option>
                    <option value="lavender">Lavender</option>
                    <option value="fresh">Fresh</option>
                    <option value="none">Tanpa Pewangi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan Khusus (Syariah)
                  </label>
                  <textarea
                    value={formData.specialNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialNotes: e.target.value }))}
                    placeholder="Contoh: Pisahkan pakaian najis dan tidak najis, atau catatan khusus lainnya..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#328E6E] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Metode Pembayaran
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'ewallet', label: '💳 E-Wallet (GoPay, OVO, DANA)' },
                      { value: 'bank', label: '🏦 Transfer Bank' },
                      { value: 'qris', label: '📱 QRIS' }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={formData.paymentMethod === method.value}
                          onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                          className="w-5 h-5 text-[#328E6E] focus:ring-[#328E6E]"
                        />
                        <span className="ml-3">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Laundry:</span>
                  <span className="font-medium">{shop.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Berat:</span>
                  <span className="font-medium">{formData.weight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Layanan:</span>
                  <span className="font-medium">{formData.serviceType === 'superfast' ? 'Superfast' : 'Normal'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Harga per kg:</span>
                  <span className="font-medium">Rp {shop.pricePerKg.toLocaleString()}</span>
                </div>
                {formData.pickupService && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Antar jemput:</span>
                    <span className="font-medium">Rp 5.000</span>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-[#328E6E]">Rp {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-[#328E6E] text-white font-semibold rounded-xl hover:bg-[#2a7a5e] transition-colors flex items-center justify-center"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;