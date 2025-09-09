import { Button } from './ui/button';
import { Crown, RotateCcw, Trophy, Sparkles } from 'lucide-react';

export default function ScoreBoard({ 
  scores, 
  currentPlayer, 
  gameWon, 
  gameMessage, 
  onReset
}) {
  return (
    <>
      {/* Scores */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-6">
          <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all ${
            currentPlayer === 'X' ? 'bg-blue-100 border-2 border-blue-300 shadow-md' : 'bg-white border border-gray-200'
          }`}>
            <Crown className={`w-5 h-5 ${currentPlayer === 'X' ? 'text-blue-600' : 'text-gray-400'}`} />
            <span className="font-semibold text-gray-700">Player X</span>
            <span className="text-2xl font-bold text-blue-600">{scores.X}</span>
          </div>
          
          <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all ${
            currentPlayer === 'O' ? 'bg-red-100 border-2 border-red-300 shadow-md' : 'bg-white border border-gray-200'
          }`}>
            <Crown className={`w-5 h-5 ${currentPlayer === 'O' ? 'text-red-600' : 'text-gray-400'}`} />
            <span className="font-semibold text-gray-700">Player O</span>
            <span className="text-2xl font-bold text-red-600">{scores.O}</span>
          </div>
        </div>

        <Button
          onClick={onReset}
          variant="outline"
          className="flex items-center space-x-2 hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </Button>
      </div>

      {/* Game Status */}
      <div className="text-center mb-6">
        {gameWon ? (
          <div className="flex items-center justify-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-semibold text-gray-800">{gameMessage}</span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              Current Turn: <span className={`font-bold ${currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'}`}>
                Player {currentPlayer}
              </span>
            </p>
            {gameMessage && (
              <p className="text-green-600 font-medium">{gameMessage}</p>
            )}
            <p className="text-sm text-gray-500">
              Find matching pairs to claim squares!
            </p>
          </div>
        )}
      </div>
    </>
  );
}