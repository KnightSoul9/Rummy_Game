import { Star, User } from "lucide-react";

export default function FeaturedGame({ image, title, description }) {
  return (
    <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-3 xs:mb-4 sm:mb-6 lg:mb-8 rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src={image || "/images/game-banner.jpg"}
        alt="Featured Game"
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 lg:p-6">
          <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl font-bold mb-0.5 xs:mb-1 sm:mb-2 text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base mb-2 text-gray-200 max-w-2xl hidden sm:block">
            {description}
          </p>
          
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-1.5 xs:mb-2 sm:mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="currentColor" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <User className="text-yellow-400 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
              <span className="text-yellow-400 text-[10px] xs:text-xs sm:text-sm">700M+ Users</span>
            </div>
          </div>

          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-1.5 xs:mb-2 sm:mb-3">
            <div className="bg-gradient-to-r from-gray-800/70 to-gray-700/70 backdrop-blur-sm rounded px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5">
              <span className="text-[10px] xs:text-xs font-medium text-gray-300">Min Withdraw:</span>
              <span className="text-[10px] xs:text-xs font-bold text-green-400 ml-1">₹100</span>
            </div>
            <div className="bg-gradient-to-r from-gray-800/70 to-gray-700/70 backdrop-blur-sm rounded px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5">
              <span className="text-[10px] xs:text-xs font-medium text-gray-300">Bonus Up to:</span>
              <span className="text-[10px] xs:text-xs font-bold text-gray-200 ml-1">₹10,000</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-200 text-[10px] xs:text-xs sm:text-sm font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 mr-1 text-[#31eb6f]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Safe & Secure
            </span>
            <button className="bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white px-2 xs:px-3 sm:px-4 lg:px-6 py-1 xs:py-1.5 sm:py-2 rounded text-[10px] xs:text-xs sm:text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center">
              <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 relative mr-1">
                <img 
                  src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/homePage/android-img.png" 
                  alt="android"
                  className="w-full h-full object-contain"
                />
              </div>
              DOWNLOAD & GET ₹45
              <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-1 animate-bounce" fill="#ffffff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
                <path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" fillRule="nonzero"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
