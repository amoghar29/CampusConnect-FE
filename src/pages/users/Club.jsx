import { useState } from "react";
import { Search } from "lucide-react";
import GradientBackground from "../../components/common/GradientBackground";
import ClubCard from "../../components/club/ClubCard";
import useFetchData from "../../customHooks/fetchData";
import Loading from "../../components/common/Loading";
export default function Club() {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, data: clubs, error } = useFetchData("club");

  // Add loading and error handling
  if (loading) return <Loading/>;
  if (error) return <div>Error fetching clubs: {error.message}</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl py-4 sm:py-">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Campus Clubs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover and join vibrant communities that match your interests
            </p>

            {/* Search Bar */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clubs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <button className="mx-6 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="mx-auto max-w-7xl pb-20 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
