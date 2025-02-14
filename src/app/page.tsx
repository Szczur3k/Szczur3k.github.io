'use client';

import { useState } from 'react';
import StoryIntro from '@/components/StoryIntro';
import RidingDudu from '@/components/RidingDudu';
import WalkingDudu from '@/components/WalkingDudu';
import BeMyValentine from '@/components/BeMyValentine';

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<'story' | 'riding' | 'walking'>('story');

  const handleStoryComplete = () => {
    setCurrentPhase('riding');
  };

  const handleRidingComplete = () => {
    setCurrentPhase('walking');
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {/* <RidingDudu /> */}
      {/* <WalkingDudu /> */}
      <BeMyValentine />
      {/* {currentPhase === 'story' && (
        <StoryIntro onComplete={handleStoryComplete} />
      )}
      {currentPhase === 'riding' && (
        <RidingDudu onComplete={handleRidingComplete} />
      )}
      {currentPhase === 'walking' && (
        <WalkingDudu />
      )} */}
    </main>
  );
}