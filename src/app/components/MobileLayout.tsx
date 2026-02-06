import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function MobileLayout({ children, showNav = true }: MobileLayoutProps) {
  const location = useLocation();
  const isSplash = location.pathname === '/splash';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-lg min-h-screen bg-white relative shadow-2xl">
        <main className={showNav && !isSplash ? 'pb-20' : ''}>
          {children}
        </main>
        {showNav && !isSplash && <BottomNav />}
      </div>
    </div>
  );
}