import Skeleton from 'react-loading-skeleton';

const CountryDetailSkeleton = () => {
  return (
    <div className="px-7">
      <div className="p-7 rounded-xl bg-background">
        <h2 className="text-4xl font-bold mb-4 text-left text-primary">
          <Skeleton width={70} />
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <Skeleton height={350} />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              <Skeleton/>
            </h1>
            <Skeleton count={10} className="mb-4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailSkeleton;