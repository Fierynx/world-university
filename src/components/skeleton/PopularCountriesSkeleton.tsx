import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PopularCountriesSkeleton = () => {
  return (
    <div className="p-10 bg-background">
      <h2 className="text-5xl font-bold mb-4 text-center text-primary">
        <Skeleton width={400} />
      </h2>
      <p className="text-lg mb-10 text-center text-textPrimary">
        <Skeleton width={500} />
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array(10).fill(0).map((_, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg flex flex-col">
            <Skeleton height={160} />
            <Skeleton count={1} className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCountriesSkeleton;