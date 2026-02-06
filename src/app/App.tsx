import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MobileLayout } from './components/MobileLayout';
import { SplashScreen } from './pages/SplashScreen';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ItemDetailPage } from './pages/ItemDetailPage';
import { BasketPage } from './pages/BasketPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { AccountPage } from './pages/AccountPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Toaster } from './components/ui/sonner';
import { useEffect, useState } from 'react';

function AppRoutes() {
  const location = useLocation();
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  useEffect(() => {
    // Check if user has already seen splash in this session
    const splashSeen = sessionStorage.getItem('splashSeen');
    if (splashSeen === 'true') {
      setHasSeenSplash(true);
    }
  }, []);

  // If on root path and haven't seen splash, redirect to splash
  if (location.pathname === '/' && !hasSeenSplash) {
    return <Navigate to="/splash" replace />;
  }

  return (
    <Routes>
      <Route path="/splash" element={<SplashScreen onComplete={() => {
        sessionStorage.setItem('splashSeen', 'true');
        setHasSeenSplash(true);
      }} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/menu/:category" element={<MenuPage />} />
      <Route path="/item/:id" element={<ItemDetailPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MobileLayout>
          <AppRoutes />
        </MobileLayout>
        <Toaster position="top-center" />
      </AppProvider>
    </BrowserRouter>
  );
}