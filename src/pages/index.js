import { useEffect, useState, useCallback, memo, useContext } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import FeaturedGame from "@/components/FeaturedGame"; 
import { ChevronRight, ChevronLeft, Rocket, Flame, Star, Tv2 } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { gamesData } from "../Utils/games";

// Memoize components that don't need frequent re-renders
const MemoizedGameCard = memo(GameCard);
const MemoizedFeaturedGame = memo(FeaturedGame);

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Rummy');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const context = useContext(ThemeContext);
  const darkMode = context?.darkMode;
  
  const categoryLogos = {
    "Recently Launched": Rocket,
    "Most Popular": Flame, 
    "Recommend": Star,
    "Live Casino": Tv2
  };
  const scrollRefs = {};

  // Handle swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentFeature((prev) => 
        prev === gamesData.featuredGames.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      setCurrentFeature((prev) => 
        prev === 0 ? gamesData.featuredGames.length - 1 : prev - 1
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto slide featured games
  useEffect(() => {
    if (!gamesData?.featuredGames?.length) return;
    
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % gamesData.featuredGames.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Memoize scroll handler
  const scrollRight = useCallback((category) => {
    if (scrollRefs[category]) {
      const container = scrollRefs[category];
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      // If already at the end, scroll back to start
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // On mobile, scroll by 1 card width since we show 2 cards at a time
        const cardWidth = window.innerWidth < 640 ? 180 : 300;
        const scrollAmount = window.innerWidth < 640 ? cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }, []);

  // Loading shimmer UI
  const ShimmerCard = () => (
    <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex-shrink-0">
      <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-800/90 via-gray-700/80 to-gray-800/90' : 'from-gray-100/90 via-gray-50/80 to-gray-100/90'} p-2 xs:p-3 sm:p-4 rounded-lg shadow-lg`}>
        <div className={`relative aspect-[4/3] w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-md`} />
        <div className={`h-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse mt-2 rounded-md`} />
        <div className="mt-2 space-y-2">
          <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-md`} />
          <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-md`} />
        </div>
        <div className={`h-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse mt-2 rounded-lg`} />
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-customBeige via-customBeige to-customBeige text-gray-800'} relative overflow-hidden`}>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentFeature * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {gamesData.featuredGames.map((game, index) => (
              <div key={game.name} className="w-full flex-shrink-0">
                <MemoizedFeaturedGame 
                  {...game}
                  description="Join millions of players and start winning real money today! Safe, secure and instant withdrawals."
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentFeature(prev => prev === 0 ? gamesData.featuredGames.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => setCurrentFeature(prev => (prev + 1) % gamesData.featuredGames.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {gamesData.featuredGames.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentFeature === index ? (darkMode ? 'bg-gray-200 w-4' : 'bg-white w-4') : (darkMode ? 'bg-gray-200/50' : 'bg-white/50')
                }`}
                onClick={() => setCurrentFeature(index)}
              />
            ))}
          </div>
        </div>

        {/* Category Buttons for Mobile View */}
        <div className="grid grid-cols-3 gap-4 mt-8 mb-6 sm:hidden px-2">
          {['Rummy', 'Patti', 'Circle'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full px-4 py-2 rounded-xl border ${
                activeCategory === cat 
                  ? 'bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white border-transparent'
                  : `${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-gray-800 border-gray-300'}`
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'}`}>
            {activeCategory} Games
          </h1>
          {/* Category Buttons for Desktop View */}
          <div className="hidden sm:flex gap-6">
            {['Rummy', 'Patti', 'Circle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white border-transparent'
                    : `${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-gray-800 border-gray-300'}`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(gamesData[activeCategory.toLowerCase()])
          .map(([category, games]) => {
            const Icon = categoryLogos[category];
            
            return (
              <div key={category} className="mb-8 sm:mb-10 lg:mb-12">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl mr-4 sm:mr-5 shadow-lg`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'}`}>
                      {category}
                    </h2>
                  </div>
                  <button
                    onClick={() => scrollRight(category)}
                    className={`${darkMode ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/50 hover:to-gray-600/50' : 'bg-gradient-to-r from-gray-200/50 to-gray-300/50 hover:from-gray-300/50 hover:to-gray-400/50'} backdrop-blur-sm p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-lg ml-6`}
                  >
                    <ChevronRight className={`${darkMode ? 'text-white' : 'text-gray-800'} h-5 w-5 sm:h-6 sm:w-6`} />
                  </button>
                </div>

                <div
                  ref={el => scrollRefs[category] = el}
                  className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                >
                  <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-6">
                    {games.map(game => (
                      <div key={game.name} className="transform hover:scale-105 transition-transform duration-400 w-[150px] sm:w-[220px] md:w-[220px] lg:w-[300px] sm:flex-shrink-0">
                        <MemoizedGameCard {...game} category={activeCategory} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
