const SkeletonLoader = ({ type = "default" }) => {
  const defaultSkeleton = (
    <div className="space-y-8 animate-pulse">
      <div className="h-8 w-3/4 bg-gray-200 rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="space-y-4 bg-white p-6 rounded-lg border-2 border-gray-200"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-gray-200 rounded" />
              <div className="h-8 w-16 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const profileSkeleton = (
    <div className="space-y-8 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-8 w-1/4 bg-gray-200 rounded" />
        <div className="h-10 w-32 bg-gray-200 rounded-lg" />
      </div>
      <div className="space-y-6">
        <div className="flex gap-4 items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-lg" />
          <div className="h-10 w-40 bg-gray-200 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tableSkeleton = (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-1/4 bg-gray-200 rounded" />
      <div className="hidden md:block">
        <div className="bg-gray-100 h-12 rounded-t-lg" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b border-gray-200 h-20 bg-white" />
        ))}
      </div>
      <div className="md:hidden space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg border border-gray-200 space-y-3"
          >
            {[1, 2, 3].map((j) => (
              <div key={j} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const feedbackSkeleton = (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-1/4 bg-gray-200 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg border border-gray-200 space-y-4"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-16 bg-gray-200 rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  );

  const loaders = {
    default: defaultSkeleton,
    profile: profileSkeleton,
    table: tableSkeleton,
    feedback: feedbackSkeleton,
  };

  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-200">
      {loaders[type]}
    </div>
  );
};

export default SkeletonLoader;
