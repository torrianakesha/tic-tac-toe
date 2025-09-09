import { useState } from 'react';

export const useGameLogic = () => {
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

  // Initialize with consistent pattern to avoid hydration issues
  const [cards, setCards] = useState([emojis[0], emojis[0], emojis[1], emojis[1], emojis[2], emojis[2], emojis[3], emojis[3], emojis[4]]);
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
          setGameMessage("<p>It&apos;s a tie! 🤝");
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
    // Only randomize when actually starting the game (client-side only)
    setCards(initializeGame());
  };

  const isCardVisible = (index) => {
    return flippedCards.includes(index) || matchedPairs.includes(index);
  };

  return {
    // State
    cards,
    flippedCards,
    matchedPairs,
    board,
    currentPlayer,
    scores,
    gameWon,
    winner,
    gameMessage,
    
    // Actions
    handleCardClick,
    resetGame,
    startNewGame,
    isCardVisible
  };
};