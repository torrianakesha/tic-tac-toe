import { Card, CardContent } from './ui/card';

export default function CardItem({ 
  emoji, 
  index, 
  isFlipped, 
  isVisible, 
  owner, 
  onClick 
}) {
  const getCardStyles = () => {
    let baseStyles = "aspect-square cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 ";
    
    if (isFlipped) {
      baseStyles += "ring-2 ring-purple-400 ";
    }
    
    if (owner === 'X') {
      baseStyles += "bg-blue-50 border-blue-200";
    } else if (owner === 'O') {
      baseStyles += "bg-red-50 border-red-200";
    } else {
      baseStyles += "bg-white hover:bg-gray-50";
    }
    
    return baseStyles;
  };

  return (
    <Card 
      className={getCardStyles()}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex items-center justify-center relative">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Hidden emoji (back of card) */}
          {!isVisible && (
            <div className="text-4xl">❓</div>
          )}
          
          {/* Revealed emoji */}
          {isVisible && !owner && (
            <div className="text-4xl animate-pulse">{emoji}</div>
          )}
          
          {/* Player marker for claimed squares */}
          {owner && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl opacity-30">{emoji}</div>
              <div className={`absolute text-4xl font-bold ${
                owner === 'X' ? 'text-blue-600' : 'text-red-600'
              }`}>
                {owner}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}