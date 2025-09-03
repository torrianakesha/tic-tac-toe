'use client';

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Trophy, RotateCcw, Crown, Sparkles, GamepadIcon, Play } from 'lucide-react';

export default function HomePage() {
  const [gameStarted, setGameStarted] = useState(false);
  
  const emojis = ['🎯', '🏐', '🏀', '🏸', '🏓'];
  
  const initializeGame = () => {
    // Create pairs for 9 squares (4 pairs + 1 single)
    const pairs = [];
    for (let i = 0; i < 4; i++) {
      pairs.push(emojis[i], emojis[i]);
    }
    pairs.push(emojis[4]); // Single card
    
    // Shuffle the array
    return pairs.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(initializeGame);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [gameWon, setGameWon] = useState(false);
  const [winner, setWinner] = useState(null);
  const [gameMessage, setGameMessage] = useState('');

  const checkWinner = (newBoard) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || 
        matchedPairs.includes(index) || board[index] || gameWon) {
      return;
    }

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      
      // Check if it's a pair
      if (cards[first] === cards[second]) {
        // Matching pair found!
        const newBoard = [...board];
        newBoard[first] = currentPlayer;
        newBoard[second] = currentPlayer;
        setBoard(newBoard);
        setMatchedPairs([...matchedPairs, first, second]);
        
        // Check for winner
        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
          setWinner(gameWinner);
          setGameWon(true);
          setScores(prev => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }));
          setGameMessage(`Player ${gameWinner} wins! 🎉`);
        } else if (newBoard.every(cell => cell !== null)) {
          setGameWon(true);
          setGameMessage("It's a tie! 🤝");
        } else {
          setGameMessage(`Great match! Player ${currentPlayer} claims 2 squares!`);
        }
        
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match - switch players
        setTimeout(() => {
          setFlippedCards([]);
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
          setGameMessage('');
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(initializeGame());
    setFlippedCards([]);
    setMatchedPairs([]);
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameWon(false);
    setWinner(null);
    setGameMessage('');
  };

  const startNewGame = () => {
    resetGame();
    setGameStarted(true);
  };

  const goBackHome = () => {
    setGameStarted(false);
    resetGame();
  };

  const isCardVisible = (index) => {
    return flippedCards.includes(index) || matchedPairs.includes(index);
  };

  // Landing Page View
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <GamepadIcon className="w-16 h-16 text-purple-600" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Tic-Tac-Toe Pairs
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A unique twist on the classic game! Match pairs to claim squares, 
              then get three in a row to win. Memory meets strategy!
            </p>
            
            <Button 
              onClick={startNewGame}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Game
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Memory Challenge</h3>
                <p className="text-gray-600">Remember card locations and find matching pairs to claim your squares.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">Plan your moves carefully to get three in a row before your opponent.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Two Player Fun</h3>
                <p className="text-gray-600">Challenge your friends in this exciting blend of classic games.</p>
              </CardContent>
            </Card>
          </div>

          {/* How to Play */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">How to Play</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">Game Rules</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                      Players take turns clicking cards to reveal emojis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                      Find matching pairs to claim both squares with your marker
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                      Get three of your markers in a row to win the game
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-600">Strategy Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Remember where you've seen cards for future turns
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Block your opponent from getting three in a row
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Plan your tic-tac-toe strategy while hunting for pairs
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-600 border-t pt-6">
            <div className="flex items-center justify-center gap-4 flex-wrap mb-2">
              <span>Built with</span>
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                <span>React</span>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
                <span>Next.js</span>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span>Tailwind CSS</span>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"></div>
                <span>Shadcn/UI</span>
              </div>
            </div>
            
            <p className="text-gray-500">© 2025 keshathedev</p>
          </footer>
        </div>
      </div>
    );
  }}