'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StoryIntroProps {
  onComplete: () => void;
}

export default function StoryIntro({ onComplete }: StoryIntroProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);

  const storyTexts = [
    "W pewien wieczór Dudu ścisnął w dłoni list, którego treść mogła wszystko zmienić",
    "Postanowił podjąć się odważnej próby. Wiedział, że wiele zależy od tego czy go dostarczy",
    "Wskoczył w swój wóz i postanowił zmienić swój los",
    "O to historia odważnego Dudu..."
  ];

  useEffect(() => {
    const showTexts = async () => {
      for (let i = 0; i < storyTexts.length; i++) {
        setCurrentTextIndex(i);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
      onComplete();
    };

    showTexts();
  }, [storyTexts.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <AnimatePresence>
        {currentTextIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="w-4/5 md:w-2/3 text-center absolute"
          >
            <p className="text-2xl md:text-3xl text-black font-bold">
              {storyTexts[currentTextIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 