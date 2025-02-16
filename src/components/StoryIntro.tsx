'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StoryIntroProps {
  onComplete: () => void;
}

export default function StoryIntro({ onComplete }: StoryIntroProps) {
  const [visibleText, setVisibleText] = useState('');
  
  const storyTexts = [
    "W pewien wieczór Dudu ścisnął w dłoni list, którego treść mogła wszystko zmienić",
    "Postanowił podjąć się odważnej próby. Wiedział, że wiele zależy od tego czy go dostarczy",
    "Wskoczył w swój wóz i postanowił zmienić swój los",
    "O to historia odważnego Dudu..."
  ];

  useEffect(() => {
    const showTexts = async () => {
      for (let i = 0; i < storyTexts.length; i++) {
        setVisibleText(storyTexts[i]);
        await new Promise(resolve => setTimeout(resolve, 5000));
        setVisibleText('');
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      onComplete();
    };

    showTexts();
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {visibleText && (
          <motion.div
            key={visibleText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              type: "tween",
              duration: 1.3,
              ease: "easeInOut"
            }}
            className="w-4/5 md:w-2/3 text-center absolute"
          >
            <p className="text-2xl md:text-3xl text-black font-bold">
              {visibleText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 