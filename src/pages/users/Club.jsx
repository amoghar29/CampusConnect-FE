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
            <div className="flex justify-center items-center min-h-[400px]">
              <Loading message="Loading..." />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <FailureCard message="Failed to fetch clubs" />
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
