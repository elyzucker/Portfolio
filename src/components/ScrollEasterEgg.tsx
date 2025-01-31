import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollEasterEgg() {
  const [isNearBottom, setIsNearBottom] = useState(false);
  const { scrollY } = useScroll();
  
  // Smooth spring animation for the robot
  const y = useSpring(
    useTransform(
      scrollY,
      [document.documentElement.scrollHeight - window.innerHeight - 100, document.documentElement.scrollHeight],
      [100, -20]
    ),
    { stiffness: 50, damping: 15 }
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = scrollPosition > document.documentElement.scrollHeight - 200;
      setIsNearBottom(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isNearBottom) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={{ y }}
    >
      <div className="relative w-32 h-32">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
        >
          {/* Robot head */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {/* Face */}
            <circle cx="50" cy="50" r="40" fill="#fff" />
            <circle cx="50" cy="50" r="38" fill="#e2e8f0" />
            
            {/* Eyes */}
            <circle cx="35" cy="45" r="8" fill="#fff" />
            <circle cx="65" cy="45" r="8" fill="#fff" />
            <circle cx="35" cy="45" r="4" fill="#3b82f6" />
            <circle cx="65" cy="45" r="4" fill="#3b82f6" />
            
            {/* Smile */}
            <path
              d="M35 60 Q50 70 65 60"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Antenna */}
            <motion.path
              d="M50 10 L50 20"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ transformOrigin: '50% 20%' }}
            />
            <circle cx="50" cy="8" r="3" fill="#3b82f6" />
          </motion.g>
        </svg>
        
        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm text-blue-600 whitespace-nowrap border border-white/50 shadow-lg"
        >
          Hello there! 👋
        </motion.div>
      </div>
    </motion.div>
  );
}