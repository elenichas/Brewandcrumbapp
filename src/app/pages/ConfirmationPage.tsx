import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function ConfirmationPage() {
  const navigate = useNavigate();
  const { clearCart } = useApp();

  useEffect(() => {
    // Clear the cart after order is placed
    const timer = setTimeout(() => {
      clearCart();
    }, 2000);

    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="size-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1a5c2e] to-[#1d6835] flex items-center justify-center shadow-xl"
        >
          <CheckCircle className="size-16 text-white" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl mb-2">Salamat! 🎉</h1>
          <p className="text-xl text-gray-700 mb-3">Your order is confirmed!</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-8 text-sm max-w-md"
        >
          Thank you for your order. We'll prepare it with care and have it ready for you soon. ☕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1a5c2e] to-[#1d6835] text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all font-semibold"
          >
            Continue Shopping →
          </motion.button>
          <p className="text-xs text-gray-500 mt-4">
            Maraming salamat! (Thank you very much!)
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}