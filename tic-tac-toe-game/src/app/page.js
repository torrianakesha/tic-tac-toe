// src/app/page.js
'use client';

import { useState } from 'react';
import LandingPage from '../components/landingpage.js';
import GameBoard from '../components/gameboard.js';

export default function HomePage() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleBackToHome = () => {
    setGameStarted(false);
  };

  return (
    <>
      {!gameStarted ? (
        <LandingPage onStartGame={handleStartGame} />
      ) : (
        <GameBoard onBackToHome={handleBackToHome} />
      )}
    </>
  );
}