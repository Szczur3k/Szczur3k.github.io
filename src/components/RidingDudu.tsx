'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/DuduCharacter.module.css';

interface RidingDuduProps {
  onComplete: () => void;
}

export default function RidingDudu({ onComplete }: RidingDuduProps) {
  const controls = useAnimationControls();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const animateSequence = async () => {
      //   1. Z lewej z  u dołu do góry do lewej
      setIsFlipped(true);
      await controls.start({
        x: ['-80vw', '120vw'],
        y: ['70vh', '10vh'],
        transition: { duration: 5, ease: 'linear' }
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      // // 2. Z dołu z prawej w lewo
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '-100vw'],
        y: ['70vh', '-10vh'],
        transition: { duration: 5, ease: 'linear' }
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      // 3. Z dołu z lewej w prawo
      setIsFlipped(true);
      await controls.start({
        x: ['-60vw', '60vw'],
        y: ['80vh', '-60vh'],
        transition: { duration: 4, ease: 'linear' }
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      // 4. z prawej do lewej
      setIsFlipped(false);
      await controls.start({
        x: ['100vw', '-100vw'],
        y: ['30vh', '80vh'], 
        transition: { duration: 5, ease: 'linear' }
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      // Finalna animacja - wyjazd w prawo
      setIsFlipped(true);
      await controls.start({
        x: ['-100vw', '100vw'],
        y: ['40vh', '40vh'],
        transition: { duration: 3, ease: 'easeInOut' }
      });
      
      // Po zakończeniu wszystkich animacji
      await new Promise(resolve => setTimeout(resolve, 500));
      onComplete();
    };

    animateSequence();
  }, [controls, onComplete]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: '-100vw', y: '30vh' }}
      className={styles.duduContainer}
    >
      <img
        id="duduImage"
        src="/assets/ridingDudu.gif"
        alt="Dudu character"
        className={styles.duduImage}
        style={{
          transform: isFlipped ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease',
        }}
      />
    </motion.div>
  );
} 