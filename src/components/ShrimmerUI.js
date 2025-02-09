const ShimmerUI = () => {
    return (
      <div className="transform hover:scale-105 transition-transform duration-300 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex-shrink-0">
        <div className="relative bg-gradient-to-br from-gray-100/90 via-gray-50/80 to-gray-100/90 p-2 xs:p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full overflow-hidden backdrop-blur-sm">
          {/* Background decorative circles - matching GameCard */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 bg-gray-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 bg-gray-700 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
  
          {/* Image placeholder with aspect ratio matching GameCard */}
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
            {/* Users badge placeholder */}
            <div className="absolute top-1 xs:top-2 right-1 xs:right-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-1.5 xs:px-2 py-0.5 xs:py-1 w-14 h-4 xs:h-5">
              <div className="h-full bg-gray-200 animate-pulse rounded-full" />
            </div>
          </div>
  
          {/* Game title placeholder */}
          <div className="h-[1.25rem] xs:h-[1.5rem] sm:h-[1.75rem] bg-gray-200 animate-pulse rounded mt-1.5 xs:mt-2 w-4/5 mx-auto" />
  
          {/* Min Withdraw and Bonus sections */}
          <div className="mt-1.5 xs:mt-2 space-y-0.5 xs:space-y-1">
            <div className="flex justify-between">
              <div className="h-3 xs:h-4 bg-gray-200 animate-pulse rounded w-20" />
              <div className="h-3 xs:h-4 bg-gray-200 animate-pulse rounded w-12" />
            </div>
            <div className="flex justify-between">
              <div className="h-3 xs:h-4 bg-gray-200 animate-pulse rounded w-20" />
              <div className="h-3 xs:h-4 bg-gray-200 animate-pulse rounded w-16" />
            </div>
          </div>
  
          {/* Download button placeholder */}
          <div className="w-full h-[1.875rem] xs:h-[2.25rem] sm:h-[2.625rem] bg-gradient-to-b from-gray-300 to-gray-400 animate-pulse rounded-lg mt-1.5 xs:mt-2" />
        </div>
      </div>
    );
  };
  
  export default ShimmerUI;
  
  