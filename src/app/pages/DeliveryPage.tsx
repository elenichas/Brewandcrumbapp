import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar as CalendarIcon, Clock, Home as HomeIcon, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { Calendar } from '../components/ui/calendar';
import { format, addDays } from 'date-fns';

export function DeliveryPage() {
  const navigate = useNavigate();
  const { cart, deliveryDetails, setDeliveryDetails } = useApp();
  const [deliveryMethod, setDeliveryMethod] = useState<'home' | 'pickup'>(
    deliveryDetails?.method || 'home'
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    deliveryDetails?.date ? new Date(deliveryDetails.date) : undefined
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    deliveryDetails?.time || ''
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = item.selectedSizePrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  const timeSlots = [
    '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      return;
    }

    setDeliveryDetails({
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedTime,
      method: deliveryMethod,
      address: deliveryMethod === 'home' ? 'Sarangani Road St, Brgy 13, 8th District' : undefined
    });

    navigate('/checkout');
  };

  const canContinue = selectedDate && selectedTime;

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 bg-white z-10">
        <Link to="/basket" className="text-gray-600 hover:text-gray-900" aria-label="Go back to basket">
          <ArrowLeft className="size-6" />
        </Link>
        <h1 className="text-2xl">Delivery Options</h1>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-6">
        {/* Delivery Method */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg mb-3">Delivery Method</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setDeliveryMethod('home')}
              className={`p-4 rounded-xl border-2 transition-all ${
                deliveryMethod === 'home'
                  ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={deliveryMethod === 'home'}
            >
              <HomeIcon className="size-6 mx-auto mb-2" aria-hidden="true" />
              <p className="text-sm">Home delivery</p>
            </button>

            <button
              onClick={() => setDeliveryMethod('pickup')}
              className={`p-4 rounded-xl border-2 transition-all ${
                deliveryMethod === 'pickup'
                  ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={deliveryMethod === 'pickup'}
            >
              <MapPin className="size-6 mx-auto mb-2" aria-hidden="true" />
              <p className="text-sm">Pick up from Store</p>
            </button>
          </div>
        </motion.section>

        {/* Address */}
        {deliveryMethod === 'home' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg mb-3">Delivery Address</h2>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">Sarangani Road St, Brgy 13, 8th District</p>
              <p className="text-sm text-gray-600 mt-1">General Santos City, 9500</p>
            </div>
          </motion.section>
        )}

        {/* Date Selection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg mb-3">Select Date</h2>
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center gap-3 hover:border-gray-300 transition-colors"
          >
            <CalendarIcon className="size-5 text-gray-600" aria-hidden="true" />
            <span className="flex-1 text-left text-sm">
              {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'Choose date'}
            </span>
          </button>

          {showCalendar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 border border-gray-200 rounded-xl p-4 bg-white"
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setShowCalendar(false);
                }}
                disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                className="mx-auto"
              />
            </motion.div>
          )}
        </motion.section>

        {/* Time Selection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg mb-3">Select Time</h2>
          <button
            onClick={() => setShowTimePicker(!showTimePicker)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center gap-3 hover:border-gray-300 transition-colors"
          >
            <Clock className="size-5 text-gray-600" aria-hidden="true" />
            <span className="flex-1 text-left text-sm">
              {selectedTime || 'Choose time'}
            </span>
          </button>

          {showTimePicker && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 border border-gray-200 rounded-xl p-4 bg-white max-h-64 overflow-y-auto"
            >
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setShowTimePicker(false);
                    }}
                    className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                      selectedTime === time
                        ? 'bg-[#1a5c2e] text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* Continue Button - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4 max-w-md mx-auto">
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          className={`w-full py-4 rounded-lg transition-colors ${
            canContinue
              ? 'bg-[#1a5c2e] text-white hover:bg-[#164925]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {canContinue ? 'Select time' : 'Please select date and time'}
        </button>
      </div>
    </div>
  );
}
