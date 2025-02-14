'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/LoveMe.module.css';

export default function LoveMePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          duration: 0.8,
        }}
        className={styles.imageContainer}
      >
        <Image
          src="/assets/kissBubu.gif"
          alt="Kiss Bubu"
          className={styles.bubuImage}
          fill
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5,
          duration: 0.8,
        }}
        className={styles.loveText}
      >
        Kocham Cię moja walentynko!
      </motion.h1>
    </div>
  );
}
