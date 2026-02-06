import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
      navigate('/');
    }, 3000); // Extended to 3 seconds for better animation viewing

    return () => clearTimeout(timer);
  }, [navigate, onComplete]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#1a5c2e] via-[#1d6835] to-[#1a5c2e] flex items-center justify-center overflow-hidden">
      {/* Background coffee beans decoration */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Coffee className="w-96 h-96 text-white" aria-hidden="true" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center relative z-10"
      >
        {/* Coffee Icon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <motion.div
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
              y: [0, -5, 0, -3, 0]
            }}
            transition={{ 
              delay: 1,
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="bg-white/10 backdrop-blur-sm rounded-full p-6 border-2 border-white/30"
          >
            <Coffee className="w-16 h-16 text-white" strokeWidth={1.5} aria-hidden="true" />
          </motion.div>
        </motion.div>

        {/* App Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl font-bold text-white mb-2 tracking-tight"
        >
          Brew & Crumb
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-white/80 text-sm tracking-wider mb-6"
        >
          Mabuhay! ☕
        </motion.p>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
          className="h-1 bg-white/30 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              delay: 0.5,
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="h-full w-1/2 bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Floating coffee steam effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ 
          delay: 1,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.5
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-t from-transparent via-white/40 to-transparent rounded-full blur-sm" aria-hidden="true" />
      </motion.div>
    </div>
  );
}