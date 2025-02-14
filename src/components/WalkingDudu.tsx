'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/WalkingDudu.module.css';
import Image from 'next/image';

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
        y: ['-20vh', isMobile ? '20vh' : '40vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 200));

      // // 2. Od lewej do prawej górą
      setIsFlipped(true);
      await controls.start({
        x: ['-100vw', '100vw'],
        y: [isMobile ? '10vh' : '20vh', isMobile ? '10vh' : '20vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 200));

      // // 3. Z prawej na lewo dołem
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '-100vw'],
        y: [isMobile ? '40vh' : '60vh', isMobile ? '40vh' : '60vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 200));

      // // 4. Po przekątnej z dołu do góry
      setIsFlipped(true);
      await controls.start({
        x: ['-100vw', '100vw'],
        y: [isMobile ? '60vh' : '80vh', isMobile ? '-10vh' : '-20vh'],
        transition: { duration: 5, ease: 'linear' }
      });
      await new Promise(resolve => setTimeout(resolve, 200));

      // 5. ostatnia animacja na środek
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '20vw'],
        y: ['40vh' , '40vh'],
        transition: { duration: 3, ease: 'easeOut' }
      });
      await new Promise(resolve => setTimeout(resolve, 200));
      
      onComplete();
    };

    animateSequence();
  }, [controls, onComplete, isMobile]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: '100vw', y: '-20vh' }}
      className={styles.duduContainer}
    >
      <Image
        src="/assets/walkingDudu.gif"
        alt="Walking Dudu"
        className={styles.duduImage}
        fill
        style={{ 
          objectFit: 'contain',
          transform: isFlipped ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease',
        }}
      />
    </motion.div>
  );
} 