import Link from 'next/link';
import { Button } from '../components/ui/button';
import { GamepadIcon } from 'lucide-react';

export const metadata = {
  title: 'Tic-Tac-Toe Pairs Game',
  description: 'A fun combination of tic-tac-toe and memory matching game',
};

export default function HomePage() {
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
            Tic-Tac-Toe Game
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A unique twist on the classic game! Match pairs to claim squares, 
            then get three in a row to win. Memory meets strategy!
          </p>
          
          <Link href="/game">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              Start Game
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 border-t pt-6 mt-16">
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
}