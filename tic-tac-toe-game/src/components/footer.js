import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 border-t pt-6">
      <div className="flex items-center justify-center gap-4 flex-wrap mb-2">
        <span>Built with</span>
        
        <div className="flex items-center gap-1">
          <Image 
            src="/react-logo.png"   // public path
            alt="React Logo"
            width={16}
            height={16}
            className="w-8 h-8"
          />
          <span>React</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Image 
            src="/nextjs-logo.png"   // public path
            alt="React Logo"
            width={16}
            height={16}
            className="w-8 h-8"
          />
          <span>Next.js</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Image 
            src="/tailwindcss-logo.png"   // public path
            alt="React Logo"
            width={16}
            height={16}
            className="w-8 h-8"
          />
          <span>Tailwind CSS</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Image 
            src="/shadcn-logo.png"   // public path
            alt="React Logo"
            width={16}
            height={16}
            className="w-8 h-8"
          />
          <span>Shadcn/UI</span>
        </div>
      </div>
      
      <p className="text-gray-500">© 2025 Kesha Torriana</p>
    </footer>
  );
}