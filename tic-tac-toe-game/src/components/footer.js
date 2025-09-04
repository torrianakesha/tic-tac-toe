// src/components/Footer.js
export default function Footer() {
  return (
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
  );
}