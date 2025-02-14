'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StoryTextProps {
  text: string;
  isVisible: boolean;
}

export default function StoryText({ text, isVisible }: StoryTextProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-4/5 md:w-2/3 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            {text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}