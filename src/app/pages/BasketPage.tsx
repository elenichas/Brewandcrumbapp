import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { useState } from 'react';

export function BasketPage() {
  const { cart, updateQuantity, removeFromCart, discount, applyDiscount } = useApp();
  const navigate = useNavigate();
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedSizePrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleApplyDiscount = () => {
    // Simple discount code logic - in real app would validate against backend
    if (discountCode.toUpperCase() === 'SAVE5') {
      applyDiscount(5);
      setShowDiscountInput(false);
      setDiscountCode('');
    } else if (discountCode.toUpperCase() === 'SAVE10') {
      applyDiscount(10);
      setShowDiscountInput(false);
      setDiscountCode('');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="px-5 pt-6 pb-4 flex items-center gap-3 border-b border-gray-100 bg-white">
          <Link to="/" className="text-gray-600 hover:text-gray-900" aria-label="Go back to home">
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="text-2xl">Basket 🛒</h1>
        </div>

        <div className="flex flex-col items-center justify-center py-20 px-5 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="size-24 rounded-full bg-gray-100 flex items-center justify-center mb-4"
          >
            <svg className="size-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </motion.div>
          <h2 className="text-xl mb-2">Walang laman! (Empty basket)</h2>
          <p className="text-gray-500 mb-6 text-sm">Add some delicious items to get started!</p>
          <Link
            to="/"
            className="bg-[#1a5c2e] text-white px-8 py-3 rounded-xl hover:bg-[#164925] transition-colors shadow-md"
          >
            Browse Menu ☕
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-40">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 bg-white z-10 shadow-sm">
        <Link to="/" className="text-gray-600 hover:text-gray-900" aria-label="Go back to home">
          <ArrowLeft className="size-6" />
        </Link>
        <h1 className="text-2xl">Basket 🛒</h1>
      </div>

      {/* Discount Banner */}
      {discount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-4 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl flex items-center justify-between shadow-md"
        >
          <div className="flex items-center gap-2">
            <Tag className="size-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Salamat! {discount}% discount applied! 🎉</span>
          </div>
        </motion.div>
      )}

      {/* Cart Items */}
      <div className="px-5 py-6 space-y-4">
        {cart.map((item, index) => {
          const price = item.selectedSizePrice || item.price;
          return (
            <motion.div
              key={item.cartItemId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="flex gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="size-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm mb-1 line-clamp-1">{item.name}</h3>
                {item.selectedSize && (
                  <p className="text-xs text-gray-500 mb-1">Size: {item.selectedSize}</p>
                )}
                <p className="text-[#1a5c2e] text-sm">£{price.toFixed(2)}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    className="size-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-4" aria-hidden="true" />
                  </button>
                  <span className="text-sm w-6 text-center" aria-live="polite">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    className="size-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.cartItemId)}
                className="text-red-500 hover:text-red-600 p-2"
                aria-label={`Remove ${item.name} from basket`}
              >
                <Trash2 className="size-5" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Discount Section */}
      {!showDiscountInput && discount === 0 && (
        <div className="px-5 mb-4">
          <button
            onClick={() => setShowDiscountInput(true)}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-[#1a5c2e] hover:border-[#1a5c2e] transition-colors flex items-center justify-center gap-2"
          >
            <Tag className="size-5" aria-hidden="true" />
            <span className="text-sm">Apply discount code</span>
          </button>
        </div>
      )}

      {showDiscountInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-5 mb-4"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter code (try SAVE5 or SAVE10)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5c2e]"
              aria-label="Discount code"
            />
            <button
              onClick={handleApplyDiscount}
              className="px-6 py-3 bg-[#1a5c2e] text-white rounded-lg hover:bg-[#164925] transition-colors"
            >
              Apply
            </button>
          </div>
        </motion.div>
      )}

      {/* Price Summary - Fixed at Bottom */}
      <div className="fixed bottom-20 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-5 py-5 max-w-lg mx-auto shadow-xl z-40">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">£{subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-between text-sm text-red-500 font-semibold"
            >
              <span>Discount ({discount}%)</span>
              <span>-£{discountAmount.toFixed(2)}</span>
            </motion.div>
          )}
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold text-[#1a5c2e]">£{total.toFixed(2)}</span>
          </div>
        </div>

        <motion.button
          onClick={() => navigate('/delivery')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#1a5c2e] to-[#1d6835] text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold"
        >
          Checkout £{total.toFixed(2)} →
        </motion.button>
      </div>
    </div>
  );
}