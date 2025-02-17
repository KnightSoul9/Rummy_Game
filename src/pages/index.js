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
  const [activeCategory, setActiveCategory] = useState('All');
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

  // Split array into two halves
  const splitArrayInHalf = (array) => {
    const half = Math.ceil(array.length / 2);
    return [array.slice(0, half), array.slice(half)];
  };

  const handlePrevFeature = () => {
    setCurrentFeature((prev) => 
      prev === 0 ? gamesData.featuredGames.length - 1 : prev - 1
    );
  };

  const handleNextFeature = () => {
    setCurrentFeature((prev) => 
      prev === gamesData.featuredGames.length - 1 ? 0 : prev + 1
    );
  };

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
      handleNextFeature();
    }
    if (isRightSwipe) {
      handlePrevFeature();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto slide featured games
  useEffect(() => {
    if (!gamesData?.featuredGames?.length) return;
    
    const interval = setInterval(handleNextFeature, 5000);
    return () => clearInterval(interval);
  }, []);

  // Memoize scroll handler
  const scrollRight = useCallback((category, half) => {
    const refKey = `${category}-${half}`;
    if (scrollRefs[refKey]) {
      const container = scrollRefs[refKey];
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      const cardWidth = 160; // Fixed width for mobile
      
      if (container.scrollLeft >= maxScroll - cardWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-customBeige via-customBeige to-customBeige text-gray-800'} relative overflow-hidden`}>
      <Navbar />

      <div className="container mx-auto sm:px-6 lg:px-8 py-4 sm:py-6 relative">
        {/* Featured Games Slider */}
        <div className="relative overflow-hidden mb-6">
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
            onClick={handlePrevFeature}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={handleNextFeature}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Navigation Dots */}
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

        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="flex justify-start gap-2 my-6 px-2 w-full">
            {['All', 'Rummy', 'TeenPatti'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 px-2 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white'
                    : `${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h1 className={`text-2xl font-bold mb-6 px-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {activeCategory} Games
          </h1>

          {Object.entries(gamesData[activeCategory.toLowerCase()] || {}).map(([category, gamesList]) => {
            const Icon = categoryLogos[category];
            const [firstHalf, secondHalf] = splitArrayInHalf(gamesList);
            
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center justify-between px-2 mb-4">
                  <div className="flex items-center">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-2 rounded-lg mr-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold">{category}</h2>
                  </div>
                  <button
                    onClick={() => scrollRight(category, 'first')}
                    className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* First Half Scrollable Container */}
                <div className="mb-8">
                  <div
                    ref={el => scrollRefs[`${category}-first`] = el}
                    className="overflow-x-auto hide-scrollbar"
                  >
                    <div className="flex gap-4 px-2">
                      {firstHalf.map(game => (
                        <div key={game.name} className="flex-none w-[160px] transform hover:scale-105 transition-transform duration-300">
                          <MemoizedGameCard {...game} category={activeCategory} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Half Scrollable Container */}
                <div>
                  <div
                    ref={el => scrollRefs[`${category}-second`] = el}
                    className="overflow-x-auto hide-scrollbar"
                  >
                    <div className="flex gap-4 px-2">
                      {secondHalf.map(game => (
                        <div key={game.name} className="flex-none w-[160px] transform hover:scale-105 transition-transform duration-300">
                          <MemoizedGameCard {...game} category={activeCategory} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-between my-8">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {activeCategory} Games
            </h1>
            <div className="flex gap-4">
              {['All', 'Rummy', 'TeenPatti'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white'
                      : `${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Game Categories */}
          {Object.entries(gamesData[activeCategory.toLowerCase()]).map(([category, games]) => {
            const Icon = categoryLogos[category];
            
            return (
              <div key={category} className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-2 rounded-lg mr-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold">{category}</h2>
                  </div>
                  <button
                    onClick={() => scrollRight(category)}
                    className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div
                  ref={el => scrollRefs[category] = el}
                  className="overflow-x-auto custom-scrollbar"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: darkMode ? '#4B5563 #1F2937' : '#D1D5DB #F3F4F6'
                  }}
                >
                  <div className="flex gap-6 pb-4">
                    {games.map(game => (
                      <div 
                        key={game.name} 
                        className="flex-none w-[160px] sm:w-[180px] md:w-[200px] lg:w-[240px] transform hover:scale-105 transition-transform duration-300"
                      >
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
    </div>
  );
}
