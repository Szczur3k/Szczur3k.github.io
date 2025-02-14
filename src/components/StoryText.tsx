'use client';

import { motion } from 'framer-motion';
import styles from '../styles/StoryText.module.css';

interface StoryTextProps {
  text: string;
}

export default function StoryText({ text }: StoryTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className={styles.storyText}
    >
      <p>{text}</p>
    </motion.div>
  );
}