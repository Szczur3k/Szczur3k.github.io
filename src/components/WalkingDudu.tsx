'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/WalkingDudu.module.css';

interface WalkingDuduProps {
  onComplete: () => void;
}

export default function WalkingDudu({ onComplete }: WalkingDuduProps) {
  const controls = useAnimationControls();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Sprawdź czy jesteśmy na mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const animateSequence = async () => {
      // 1. Z góry na dół po przekątnej
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '-100vw'],
        y: ['-40vh', '40vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // 2. Od lewej do prawej górą
      setIsFlipped(true);
      await controls.start({
        x: ['-100vw', '100vw'],
        y: ['20vh', '20vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // 3. Z prawej na lewo dołem
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '-100vw'],
        y: ['60vh', '60vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // 4. Po przekątnej z dołu do góry
      setIsFlipped(true);
      await controls.start({
        x: ['-100vw', '100vw'],
        y: ['80vh', '-20vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // 5. Finalna animacja - do środka z uwzględnieniem rozmiaru ekranu
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', isMobile ? '20vw' : '40vw'], // Dostosowane pozycje dla mobile/desktop
        y: ['40vh', '40vh'],
        transition: { duration: 3, ease: 'easeInOut' }
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      onComplete();
    };

    animateSequence();
  }, [controls, onComplete, isMobile]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: '100vw', y: '-40vh' }}
      className={styles.duduContainer}
    >
      <img
        src="/assets/walkingDudu.gif"
        alt="Walking Dudu"
        className={styles.duduImage}
        style={{
          transform: isFlipped ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease',
        }}
      />
    </motion.div>
  );
} 