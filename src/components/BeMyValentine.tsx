'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/BeMyValentine.module.css';
import Image from 'next/image';
import couldYouDuduGif from '@/public/assets/couldYouDudu.gif';
import bubuHeartsGif from '@/public/assets/bubuHearts.gif';

export default function BeMyValentine() {
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentImage, setCurrentImage] = useState(couldYouDuduGif);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonScale, setYesButtonScale] = useState(1);

  const storyTexts = [
    "Bo wiesz...",
    "Tak się zastanawiałem...",
    "Czy może ten...",
    "Mam taki list...",
    "A w nim jest coś takiego..."
  ];

  useEffect(() => {
    const showTexts = async () => {
      for (let i = 0; i < storyTexts.length; i++) {
        setCurrentTextIndex(i);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setCurrentTextIndex(-1);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setCurrentImage(bubuHeartsGif);
      setShowQuestion(true);
    };

    showTexts();
  }, [storyTexts.length]);

  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 100) - window.innerWidth/2;
    const newY = Math.random() * (window.innerHeight - 50) - window.innerHeight/2;
    setNoButtonPosition({ x: newX, y: newY });
    setYesButtonScale(prev => Math.min(prev + 0.15, 2));
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <AnimatePresence>
        {currentTextIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-4/5 md:w-2/3 text-center absolute top-1/4"
          >
            <p className="text-2xl md:text-3xl text-black font-bold">
              {storyTexts[currentTextIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className={styles.imageContainer}
        animate={{ scale: showQuestion ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={currentImage}
          alt="Dudu"
          className={styles.duduImage}
          fill
          style={{ objectFit: 'contain' }}
        />
      </motion.div>

      {showQuestion && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FF4B7D]">
            Czy zostaniesz moją walentynką?
          </h2>
          <div className="flex gap-4 justify-center mt-4 relative">
            <motion.button 
              className="valentine-btn yes-btn z-20"
              animate={{ scale: yesButtonScale }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/loveMe'}
              style={{ cursor: 'pointer' }}
            >
              Tak!
            </motion.button>
            <motion.button 
              className="valentine-btn no-btn z-10"
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
              transition={{ duration: 0.2, ease: "linear" }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{ cursor: 'pointer' }}
            >
              Nie
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}