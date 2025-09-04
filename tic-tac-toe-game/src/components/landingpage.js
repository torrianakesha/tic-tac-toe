// src/components/LandingPage.js
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GamepadIcon, Play } from 'lucide-react';
import Footer from './footer';

export default function LandingPage({ onStartGame }) {
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
            onClick={onStartGame}
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

        <Footer />
      </div>
    </div>
  );
}