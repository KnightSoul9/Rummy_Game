import { memo } from 'react';

const GameCard = memo(({ name, image }) => {
  // Generate random number of users between 100K and 700M once on initial render
  const users = (() => {
    const min = 100000;
    const max = 700000000;
    const randomUsers = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomUsers >= 1000000 ? `${(randomUsers/1000000).toFixed(1)}M+` : `${(randomUsers/1000).toFixed(1)}K+`;
  })();

  return (
    <div className="relative bg-gradient-to-br from-gray-100/90 via-gray-50/80 to-gray-100/90 p-2 xs:p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full overflow-hidden group backdrop-blur-sm">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-gray-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 bg-gray-700 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={image} 
            alt={name}
            loading="lazy"
            width="200"
            height="150"
            className="max-w-full max-h-full object-contain rounded-md transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-1 xs:top-2 right-1 xs:right-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-1.5 xs:px-2 py-0.5 xs:py-1 flex items-center text-[10px] xs:text-xs text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 xs:h-3 w-2.5 xs:w-3 mr-0.5 xs:mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          {users}
        </div>
      </div>

      <h3 className="text-base xs:text-lg sm:text-xl font-semibold mt-1.5 xs:mt-2 text-center truncate bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{name}</h3>

      <div className="mt-1.5 xs:mt-2 text-[10px] xs:text-xs sm:text-sm text-gray-600 space-y-0.5 xs:space-y-1">
        <div className="flex justify-between">
          <span className="font-medium">Min Withdraw:</span>
          <span className="text-green-600 font-semibold">₹100</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bonus Up to:</span>
          <span className="text-gray-700 font-semibold">₹10,000</span>
        </div>
      </div>

      <button className="relative w-full mt-1.5 xs:mt-2 bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white font-semibold rounded-lg py-1.5 xs:py-2 sm:py-2.5 px-2 xs:px-3 sm:px-4 flex items-center justify-between text-[10px] xs:text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap">
        <span className="flex-grow text-center">DOWNLOAD & GET ₹45</span>
        <svg className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" fill="#ffffff" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
          <path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z"/>
        </svg>
      </button>
    </div>
  );
});

GameCard.displayName = 'GameCard';

export default GameCard;
