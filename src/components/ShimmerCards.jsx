const ShimmerCards = () => {
  return (
    <div className="my-5 md:my-12 animate-pulse">
      <div className="w-[19rem] shadow-lg md:shadow-none rounded-lg p-3 space-y-2 cursor-pointer">
        {/* Image placeholder */}
        <div className="h-[10rem] w-full bg-gray-300 rounded-xl" />

        {/* Title placeholder */}
        <div className="h-5 bg-gray-300 rounded w-3/4" />

        {/* Cuisine line */}
        <div className="h-4 bg-gray-200 rounded w-2/3" />

        {/* Rating and delivery time */}
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-6" />
          </div>
          <div className="h-4 bg-gray-300 rounded w-12" />
        </div>

        {/* Title and locality */}
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
};

export default ShimmerCards;
