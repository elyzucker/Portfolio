import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Ultra-responsive spring config
  const springConfig = { 
    damping: 60,     // Balanced damping
    stiffness: 2000, // Very high stiffness for instant response
    mass: 0.05       // Very low mass for quick movement
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Direct cursor position update without RAF for instant response
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('group') ||
        target.closest('.group');
      
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Only render on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[999] hidden mix-blend-difference will-change-transform md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-white"
          animate={{
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{
            duration: 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[999] hidden mix-blend-difference will-change-transform md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="relative flex h-8 w-8 items-center justify-center rounded-full"
          animate={{
            scale: isHovered ? 1.5 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full border border-white opacity-25" />
          <div className="absolute inset-0 rounded-full border border-white" />
        </motion.div>
      </motion.div>
    </>
  );
}