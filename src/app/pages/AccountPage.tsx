import { Link } from 'react-router-dom';
import { ArrowLeft, User as UserIcon, Bell, CreditCard, Settings, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 border-b border-gray-100">
        <Link to="/" className="text-gray-600 hover:text-gray-900" aria-label="Go back to home">
          <ArrowLeft className="size-6" />
        </Link>
        <h1 className="text-2xl">User Account</h1>
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 py-8 flex flex-col items-center"
      >
        <div className="size-24 rounded-full bg-[#1a5c2e] flex items-center justify-center mb-4 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl mb-1">Juan Dela Cruz</h2>
        <p className="text-sm text-gray-500">juan.delacruz@email.com</p>
      </motion.div>

      {/* Menu Options */}
      <div className="px-5 pb-6 space-y-2">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
            <UserIcon className="size-5 text-gray-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm">Orders</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell className="size-5 text-gray-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm">Addresses</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell className="size-5 text-gray-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm">Notifications</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
            <CreditCard className="size-5 text-gray-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm">Payments</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Settings className="size-5 text-gray-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm">Settings</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="w-full p-4 bg-white border border-red-200 rounded-xl flex items-center gap-3 hover:bg-red-50 transition-colors mt-6"
        >
          <div className="size-10 rounded-full bg-red-100 flex items-center justify-center">
            <LogOut className="size-5 text-red-600" aria-hidden="true" />
          </div>
          <span className="flex-1 text-left text-sm text-red-600">Log out</span>
        </motion.button>
      </div>
    </div>
  );
}