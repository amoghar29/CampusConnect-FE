import GradientBackground from "../../components/common/GradientBackground";
import ClubCard from "../../components/club/ClubCard";
import useFetchData from "../../customHooks/fetchData";
import Loading from "../../components/common/Loading";
import { FailureCard } from "../../components/common/FailureCard";

export default function Club() {
  const { loading, data: clubs, error } = useFetchData("clubs");

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Campus Clubs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover and join vibrant communities that match your interests
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="mx-auto max-w-7xl pb-20 py-16">
          {loading ? (
            <div className="flex flex-col space-y-6">
              {/* Loading Skeleton */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="w-full">
                  <div className="group relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden animate-pulse">
                    <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gray-200" />
                    <div className="p-4">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                      <div className="h-10 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <FailureCard
                message="Failed to fetch clubs"
                buttonValue={"Home"}
                redirect={"/home"}
              />
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              {clubs.map((club) => (
                <div key={club._id} className="w-full">
                  <ClubCard club={club} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
