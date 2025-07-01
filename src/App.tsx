import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedLaundries from './components/FeaturedLaundries';
import IslamicQuotes from './components/IslamicQuotes';
import LaundrySearch from './components/LaundrySearch';
import LaundryList from './components/LaundryList';
import LaundryDetail from './components/LaundryDetail';
import Checkout from './components/Checkout';
import InfaqModal from './components/InfaqModal';
import StatusTracking from './components/StatusTracking';

export type LaundryShop = {
  id: string;
  name: string;
  rating: number;
  distance: string;
  pricePerKg: number;
  image: string;
  address: string;
  services: string[];
  pickupAvailable: boolean;
  estimatedTime: string;
  reviews: number;
};

export type OrderStatus = 'picked_up' | 'processing' | 'washing' | 'drying' | 'ready' | 'delivered';

export type Order = {
  id: string;
  laundryShop: LaundryShop;
  serviceType: 'superfast' | 'normal';
  weight: number;
  pickupService: boolean;
  sensitiveDetergent: boolean;
  customFragrance: string;
  separateColors: boolean;
  specialNotes: string;
  pickupTime?: string;
  status: OrderStatus;
  total: number;
};

type View = 'home' | 'search' | 'detail' | 'checkout' | 'status';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedShop, setSelectedShop] = useState<LaundryShop | null>(null);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [showInfaqModal, setShowInfaqModal] = useState(false);

  const handleStartLaundry = () => {
    setCurrentView('search');
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleShopSelect = (shop: LaundryShop) => {
    setSelectedShop(shop);
    setCurrentView('detail');
  };

  const handleBookService = () => {
    setCurrentView('checkout');
  };

  const handleOrderSubmit = (order: Order) => {
    setCurrentOrder(order);
    setShowInfaqModal(true);
  };

  const handleInfaqDecision = (donated: boolean) => {
    setShowInfaqModal(false);
    setCurrentView('status');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedShop(null);
    setCurrentOrder(null);
  };

  const handleBackToSearch = () => {
    setCurrentView('search');
    setSelectedShop(null);
  };

  const handleBackToDetail = () => {
    setCurrentView('detail');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onBackToHome={handleBackToHome} currentView={currentView} />
      
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero onStartLaundry={handleStartLaundry} />
            <Features />
            <FeaturedLaundries onShopSelect={handleShopSelect} />
            <IslamicQuotes />
          </>
        )}

        {currentView === 'search' && (
          <LaundrySearch 
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          >
            <LaundryList 
              location={selectedLocation}
              onShopSelect={handleShopSelect}
            />
          </LaundrySearch>
        )}

        {currentView === 'detail' && selectedShop && (
          <LaundryDetail 
            shop={selectedShop}
            onBookService={handleBookService}
            onBack={handleBackToSearch}
          />
        )}

        {currentView === 'checkout' && selectedShop && (
          <Checkout 
            shop={selectedShop}
            onOrderSubmit={handleOrderSubmit}
            onBack={handleBackToDetail}
          />
        )}

        {currentView === 'status' && currentOrder && (
          <StatusTracking 
            order={currentOrder}
            onBackToHome={handleBackToHome}
          />
        )}
      </main>

      {currentView === 'home' && <Footer />}

      {showInfaqModal && (
        <InfaqModal 
          onDecision={handleInfaqDecision}
        />
      )}
    </div>
  );
}

export default App;