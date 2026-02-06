import { Link, useLocation } from 'react-router-dom';
import { Home, User, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';

export function BottomNav() {
  const location = useLocation();
  const { cart } = useApp();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-around items-center z-50 max-w-lg mx-auto shadow-[0_-4px_20px_rgba(0,0,0,0.08)]" role="navigation" aria-label="Main navigation">
      <Link
        to="/"
        className={`flex flex-col items-center gap-1 transition-all relative ${
          isActive('/') ? 'text-[#1a5c2e]' : 'text-gray-500'
        }`}
        aria-label="Home"
        aria-current={isActive('/') ? 'page' : undefined}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <Home className="size-6" />
        </motion.div>
        {isActive('/') && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1a5c2e] rounded-full"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </Link>

      <Link
        to="/account"
        className={`flex flex-col items-center gap-1 transition-all relative ${
          isActive('/account') ? 'text-[#1a5c2e]' : 'text-gray-500'
        }`}
        aria-label="Account"
        aria-current={isActive('/account') ? 'page' : undefined}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <User className="size-6" />
        </motion.div>
        {isActive('/account') && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1a5c2e] rounded-full"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </Link>

      <Link
        to="/basket"
        className={`relative flex flex-col items-center gap-1 transition-all ${
          isActive('/basket') ? 'text-[#1a5c2e]' : 'text-gray-500'
        }`}
        aria-label={`Shopping cart with ${totalItems} items`}
        aria-current={isActive('/basket') ? 'page' : undefined}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <ShoppingCart className="size-6" />
          <AnimatePresence mode="wait">
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute -top-2 -right-2 bg-[#1a5c2e] text-white text-xs rounded-full size-5 flex items-center justify-center font-semibold shadow-md"
                aria-label={`${totalItems} items in cart`}
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        {isActive('/basket') && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1a5c2e] rounded-full"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </nav>
  );
}