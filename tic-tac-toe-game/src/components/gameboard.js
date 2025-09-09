// src/components/GameBoard.js
import { useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GamepadIcon } from 'lucide-react';
import { useGameLogic } from '../hooks/usegamelogic';
import ScoreBoard from './scoreboard';
import CardItem from './carditem';
import Footer from './footer';

export default function GameBoard({ onBackToHome }) {
  const {
    cards,
    flippedCards,
    board,
    currentPlayer,
    scores,
    gameWon,
    gameMessage,
    handleCardClick,
    resetGame,
    startNewGame,
    isCardVisible
  } = useGameLogic();

  // Initialize the game with shuffled cards when component mounts
  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-start mb-8">
          <Button 
            onClick={onBackToHome}
            variant="outline" 
            className="flex items-center gap-2"
          >
            <GamepadIcon className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Tic-Tac-Toe Pairs
          </h1>
          <p className="text-gray-600">Match pairs to claim squares and get three in a row!</p>
        </div>

        <ScoreBoard 
          scores={scores}
          currentPlayer={currentPlayer}
          gameWon={gameWon}
          gameMessage={gameMessage}
          onReset={resetGame}
        />

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
          {cards.map((emoji, index) => (
            <CardItem
              key={index}
              emoji={emoji}
              index={index}
              isFlipped={flippedCards.includes(index)}
              isVisible={isCardVisible(index)}
              owner={board[index]}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Game Rules - commented out for cleaner UI */}
        {/*<Card className="mb-8">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">How to Play:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Click cards to flip them and find matching pairs</li>
              <li>• When you find a matching pair, you claim both squares</li>
              <li>• Get three of your markers in a row to win!</li>
              <li>• Take turns - if you don't match, it's the other player's turn</li>
            </ul>
          </CardContent>
        </Card> */}

        <Footer />
      </div>
    </div>
  );
}