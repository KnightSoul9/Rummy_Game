import Link from "next/link";
import { Home, Megaphone, Shield, Info, Mail, Dice6, Wallet, Trophy, Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-b from-customBeige via-customBeige to-customBeige text-white py-1 sm:py-2 lg:py-3 px-2 sm:px-4 lg:px-6 shadow-2xl border-t border-gray-200/30 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-around">
        
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors duration-200 group">
          <div className="bg-gray-200/50 backdrop-blur-sm p-1 sm:p-1.5 lg:p-2 rounded-lg mb-0.5 border-2 border-gray-300/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-300/30 group-hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-lg"></div>
            <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm font-medium">Home</span>
        </Link>

        <Link href="/ads" className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors duration-200 group">
          <div className="bg-gray-200/50 backdrop-blur-sm p-1 sm:p-1.5 lg:p-2 rounded-lg mb-0.5 border-2 border-gray-300/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-300/30 group-hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-lg"></div>
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm font-medium">Ads</span>
        </Link>

        <Link href="/privacy" className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors duration-200 group">
          <div className="bg-gray-200/50 backdrop-blur-sm p-1 sm:p-1.5 lg:p-2 rounded-lg mb-0.5 border-2 border-gray-300/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-300/30 group-hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-lg"></div>
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm font-medium">Privacy</span>
        </Link>

        <Link href="/about" className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors duration-200 group">
          <div className="bg-gray-200/50 backdrop-blur-sm p-1 sm:p-1.5 lg:p-2 rounded-lg mb-0.5 border-2 border-gray-300/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-300/30 group-hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-lg"></div>
            <Info className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm font-medium">About</span>
        </Link>

        <Link href="/contact" className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors duration-200 group">
          <div className="bg-gray-200/50 backdrop-blur-sm p-1 sm:p-1.5 lg:p-2 rounded-lg mb-0.5 border-2 border-gray-300/50 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-300/30 group-hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-lg"></div>
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm font-medium">Contact</span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
