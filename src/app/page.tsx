'use client';

import { useState } from 'react';
import StoryIntro from '@/components/StoryIntro';
import RidingDudu from '@/components/RidingDudu';
import WalkingDudu from '@/components/WalkingDudu';
import BeMyValentine from '@/components/BeMyValentine';
import walkingDuduGif from '@/public/assets/walkingDudu.gif';
import couldYouDuduGif from '@/public/assets/couldYouDudu.gif';
import bubuHeartsGif from '@/public/assets/bubuHearts.gif';
import kissBubuGif from '@/public/assets/kissBubu.gif';
import Image from 'next/image';

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<'story' | 'riding' | 'walking' | 'valentine'>('story');

  const handleStoryComplete = () => {
    setCurrentPhase('riding');
  };

  const handleRidingComplete = () => {
    setCurrentPhase('walking');
  };

  const handleWalkingComplete = () => {
    setCurrentPhase('valentine');
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {currentPhase === 'story' && (
        <StoryIntro onComplete={handleStoryComplete} />
      )}
      {currentPhase === 'riding' && (
        <RidingDudu onComplete={handleRidingComplete} />
      )}
      {currentPhase === 'walking' && (
        <WalkingDudu onComplete={handleWalkingComplete} />
      )}
      {currentPhase === 'valentine' && (
        <BeMyValentine />
      )}
      <Image
        src={walkingDuduGif}
        alt="Walking Dudu"
      />
    </main>
  );
}