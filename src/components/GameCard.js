import { memo, useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from '../context/ThemeContext';

const GameCard = memo(({ id, name, image, rating, downloads }) => {
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext) || {};

  const handleGameClick = () => {
    router.push({
      pathname: `/game/${id}`,
      query: { 
        name: name,
        image: image
      }
    });
  };

  return (
    <div
      onClick={handleGameClick}
      className={`relative ${darkMode ? 'bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90' : 'bg-gradient-to-br from-gray-100/90 via-gray-50/80 to-gray-100/90'} p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full overflow-hidden group cursor-pointer`}
    >
      {/* Background Blur Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-20 h-20 bg-gray-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-gray-700 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Game Image */}
      <div className="relative aspect-[4/3] w-full">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain rounded-md transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* Rating & Downloads */}
        <div className="absolute top-2 right-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-gray-200 flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            {downloads}
          </div>
        </div>
      </div>

      {/* Game Name */}
      <h3 className={`text-lg font-semibold mt-2 text-center truncate ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'}`}>
        {name}
      </h3>

      {/* Game Info */}
      <div className={`mt-2 text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
        <div className="flex justify-between">
          <span className="font-medium">Min Withdraw:</span>
          <span className="text-green-500 font-semibold">₹100</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bonus Up to:</span>
          <span className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} font-semibold`}>₹10,000</span>
        </div>
      </div>

      {/* Download Button */}
      <button className="w-full mt-2 bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white font-semibold rounded-lg py-2 flex items-center justify-between text-xs transition-colors duration-300">
        <span className="flex-grow text-center">SignUp & Get ₹45</span>
        <svg className="w-5 h-5" fill="#ffffff" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
          <path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" />
        </svg>
      </button>
    </div>
  );
});

export default GameCard;
