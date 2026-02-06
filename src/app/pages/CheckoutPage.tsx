import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { format } from 'date-fns';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, deliveryDetails, discount } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gcash' | 'maya'>('card');

  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedSizePrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleConfirmPayment = () => {
    navigate('/confirmation');
  };

  if (!deliveryDetails) {
    navigate('/delivery');
    return null;
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 bg-white z-10">
        <Link to="/delivery" className="text-gray-600 hover:text-gray-900" aria-label="Go back to delivery options">
          <ArrowLeft className="size-6" />
        </Link>
        <h1 className="text-2xl">Check out</h1>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-6">
        {/* Delivery Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-gray-50 rounded-xl space-y-3"
        >
          <h2 className="text-lg">Delivery Details</h2>
          {deliveryDetails.address && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Delivery Address</p>
              <p className="text-sm">{deliveryDetails.address}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-gray-500 mb-1">Date & Time</p>
            <p className="text-sm">
              {format(new Date(deliveryDetails.date), 'EEEE, MMMM dd, yyyy')} at {deliveryDetails.time}
            </p>
          </div>
        </motion.section>

        {/* Payment Method */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-lg mb-3">Payment Method</h2>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                paymentMethod === 'card'
                  ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={paymentMethod === 'card'}
            >
              <CreditCard className="size-5" aria-hidden="true" />
              <span className="text-sm">Credit / Debit Card</span>
            </button>

            <button
              onClick={() => setPaymentMethod('gcash')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                paymentMethod === 'gcash'
                  ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={paymentMethod === 'gcash'}
            >
              <Smartphone className="size-5" aria-hidden="true" />
              <span className="text-sm">GCash</span>
            </button>

            <button
              onClick={() => setPaymentMethod('maya')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                paymentMethod === 'maya'
                  ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={paymentMethod === 'maya'}
            >
              <Wallet className="size-5" aria-hidden="true" />
              <span className="text-sm">Maya</span>
            </button>
          </div>
        </motion.section>

        {/* Order Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-gray-50 rounded-xl space-y-3"
        >
          <h2 className="text-lg mb-3">Order Summary</h2>
          {cart.map((item) => {
            const price = item.selectedSizePrice || item.price;
            return (
              <div key={item.cartItemId} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.quantity}x {item.name}
                  {item.selectedSize && ` (${item.selectedSize})`}
                </span>
                <span>£{(price * item.quantity).toFixed(2)}</span>
              </div>
            );
          })}
        </motion.section>
      </div>

      {/* Price Summary - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4 max-w-md mx-auto">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm text-red-500">
              <span>Discount ({discount}%)</span>
              <span>-£{discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span>Total</span>
            <span className="text-xl">£{total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleConfirmPayment}
          className="w-full bg-[#1a5c2e] text-white py-4 rounded-lg hover:bg-[#164925] transition-colors"
        >
          Confirm payment
        </button>
      </div>
    </div>
  );
}