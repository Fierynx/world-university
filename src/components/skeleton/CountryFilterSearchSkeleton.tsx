import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CountryFilterSearchSkeleton = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-primary mb-4">
          <Skeleton width={200} />
        </h1>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-12 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
          <div className="w-full">
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Skeleton className="w-24 h-10 rounded-lg bg-gray-200" />
        </div>
      </div>

      <div className="text-gray-600 text-sm mb-6">
        <Skeleton width={200} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {Array(12).fill(0).map((_, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg flex flex-col">
            <Skeleton height={160} />
            <Skeleton count={1} className="mt-4" />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-10 h-10 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryFilterSearchSkeleton;
