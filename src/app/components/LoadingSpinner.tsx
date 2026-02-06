import { Coffee } from 'lucide-react';
import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12" role="status" aria-label="Loading">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="size-12 text-[#1a5c2e]"
      >
        <Coffee className="size-full" />
      </motion.div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <LoadingSpinner />
    </div>
  );
}
