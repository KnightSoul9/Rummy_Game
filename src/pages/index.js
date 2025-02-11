import { useEffect, useState, useCallback, memo, useContext } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import FeaturedGame from "@/components/FeaturedGame";
import { ChevronRight, Rocket, Flame, Star, Tv2 } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

// Memoize components that don't need frequent re-renders
const MemoizedGameCard = memo(GameCard);
const MemoizedFeaturedGame = memo(FeaturedGame);

export default function Home() {
  const [games, setGames] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const context = useContext(ThemeContext);
  const darkMode = context?.darkMode;
  
  const categoryLogos = {
    "Recently Launched": Rocket,
    "Most Popular": Flame, 
    "Recommend": Star,
    "Live Casino": Tv2
  };
  const scrollRefs = {};

  // Fetch games data
  useEffect(() => {
    let isMounted = true;
    
    const fetchGames = async () => {
      try {
        const res = await fetch("/api/games");
        const data = await res.json();
        if (isMounted) {
          setGames(data);
        }
      } catch (err) {
        console.error("Error fetching games:", err);
      }
    };

    fetchGames();
    return () => { isMounted = false };
  }, []);

  // Auto slide featured games
  useEffect(() => {
    if (!games?.featuredGames?.length) return;
    
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % games.featuredGames.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [games?.featuredGames?.length]);

  // Memoize scroll handler
  const scrollRight = useCallback((category) => {
    if (scrollRefs[category]) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 300;
      scrollRefs[category].scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  // Loading shimmer UI
  const ShimmerCard = () => (
    <div className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex-shrink-0">
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

  // Early return for loading state
  if (!games) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-customBeige via-customBeige to-customBeige'}`}>
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className={`h-48 sm:h-64 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg mb-8`} />
          <div className={`h-12 w-3/4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg mb-8`} />
          
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center mb-4">
                <div className={`h-12 w-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg mr-4`} />
                <div className={`h-8 w-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg`} />
              </div>
              <div className="flex space-x-4 sm:space-x-6 overflow-x-hidden">
                {[...Array(5)].map((_, j) => (
                  <ShimmerCard key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-customBeige via-customBeige to-customBeige text-gray-800'} relative overflow-hidden`}>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentFeature * 100}%)` }}
          >
            {games.featuredGames.map((game, index) => (
              <div key={game.name} className="w-full flex-shrink-0">
                <MemoizedFeaturedGame 
                  image={game.image}
                  title={game.name}
                  description="Join millions of players and start winning real money today! Safe, secure and instant withdrawals."
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {games.featuredGames.map((_, index) => (
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

        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'}`}>
          Casino Games
        </h1>

        {Object.entries(games)
          .filter(([key]) => key !== 'featuredGames' && key !== 'categoryLogos' && key !== 'userReviews')
          .map(([category, gamesList]) => {
            // Ensure gamesList is an array
            const gamesArray = Array.isArray(gamesList) ? gamesList : [];
            const Icon = categoryLogos[category];
            
            return (
              <div key={category} className="mb-8 sm:mb-10 lg:mb-12">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 shadow-lg`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'}`}>
                      {category}
                    </h2>
                  </div>
                  <button
                    onClick={() => scrollRight(category)}
                    className={`${darkMode ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/50 hover:to-gray-600/50' : 'bg-gradient-to-r from-gray-200/50 to-gray-300/50 hover:from-gray-300/50 hover:to-gray-400/50'} backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg`}
                  >
                    <ChevronRight className={`${darkMode ? 'text-white' : 'text-gray-800'} h-5 w-5 sm:h-6 sm:w-6`} />
                  </button>
                </div>

                <div
                  ref={el => scrollRefs[category] = el}
                  className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide scroll-smooth pb-4"
                >
                  {gamesArray.map(game => (
                    <div key={game.name} className="transform hover:scale-105 transition-transform duration-300 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex-shrink-0">
                      <MemoizedGameCard id={game.id} name={game.name} image={game.image} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
