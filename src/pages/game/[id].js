import { useRouter } from 'next/router';
import { useContext, useEffect, useState, useCallback } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { gamesData } from '../../Utils/games';
import GameCard from '@/components/GameCard';

const GameDisplay = () => {
  const router = useRouter();
  const { id, name: queryName, image: queryImage } = router.query;
  const { darkMode } = useContext(ThemeContext) || {};
  
  const [gameData, setGameData] = useState({ name: '', image: '' });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const userReviews = gamesData.userReviews;
  const allGames = gamesData.all;

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true);
    
    const game = Object.entries(gamesData)
      .filter(([key]) => key !== 'featuredGames' && key !== 'categoryLogos' && key !== 'userReviews')
      .flatMap(([_, games]) => games)
      .find(g => g.id === id);
    
    setGameData({
      name: queryName || game?.name || `Game ${id}`,
      image: queryImage || game?.image || `/Games/game${id}.png`
    });
    
    setLoading(false);
  }, [router.isReady, id, queryName, queryImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % userReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [userReviews.length]);

  const averageRating = userReviews.length > 0 
    ? (userReviews.reduce((acc, review) => acc + review.rating, 0) / userReviews.length).toFixed(1)
    : 0;

  const reviewDistribution = [5, 4, 3, 2, 1].reduce((acc, stars) => {
    acc[stars] = userReviews.filter(r => Math.floor(r.rating) === stars).length;
    return acc;
  }, {});

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(5 - Math.ceil(rating))}
      </>
    );
  };

  const handleGameClick = (game) => {
    router.push(`/game/${game.id}?name=${game.name}&image=${game.image}`);
  };

  const scrollRight = useCallback((category) => {
    const container = document.getElementById(`container-${category}`);
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const cardWidth = 160;
      
      if (container.scrollLeft >= maxScroll - cardWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Game Display Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            {loading ? (
              <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg" />
            ) : (
              <img 
                src={gameData.image} 
                alt={`${gameData.name} Icon`} 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            )}
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{gameData.name}</h1>
            <p className="text-xl md:text-2xl mb-2">Win up to ₹5 Crore Daily</p>
            <p className="text-lg mb-6">Play on India's best gaming app</p>

            <button className="bg-gradient-to-b from-[#57cc03] to-[#004f1c] text-white rounded-lg py-3 px-6 mb-4 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <span>SignUp & Get ₹45</span>
            </button>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Min Withdraw:</span>
                <span className="text-green-600 font-semibold">₹100</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Bonus Up to:</span>
                <span className="font-semibold">₹10,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className={`md:w-1/2 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold">{averageRating}</div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">{renderStars(averageRating)}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {userReviews.length} reviews
                </div>
              </div>
            </div>

            {[5, 4, 3, 2, 1].map(stars => (
              <div key={stars} className="flex items-center gap-2 mb-1">
                <span className="w-3">{stars}</span>
                <span className="text-yellow-400">★</span>
                <div className={`flex-1 h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <div 
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${(reviewDistribution[stars] / userReviews.length * 100).toFixed(1)}%` }}
                  />
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} w-16`}>
                  {reviewDistribution[stars]}
                </span>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 relative h-[200px] overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentReviewIndex * 200}px)` }}
            >
              {userReviews.map((review, index) => (
                <div 
                  key={review.userId}
                  className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} absolute w-full h-[200px]`}
                  style={{ top: `${index * 200}px` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={review.userIcon} alt={review.userName} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-semibold">{review.userName}</div>
                      <div className="text-yellow-400 text-sm">{renderStars(review.rating)}</div>
                    </div>
                    <div className="ml-auto text-green-500 font-semibold">
                      Won {review.winAmount}
                    </div>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{review.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {Object.entries(allGames).map(([category, games]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{category}</h2>
              <button
                onClick={() => scrollRight(category)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
              >
                <span className="sr-only">Scroll Right</span>
                →
              </button>
            </div>
            <div 
              id={`container-${category}`}
              className="overflow-x-auto hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {games.map(game => (
                  <div 
                    key={game.id} 
                    className="flex-none w-[160px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleGameClick(game)}
                  >
                    <GameCard {...game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDisplay;
