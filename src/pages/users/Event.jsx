import { useState } from "react";
import GradientBackground from "../../components/common/GradientBackground";
import EventCard from "../../components/event/EventCard";
import FilterButton from "../../components/common/FilterButton";
import useFetchData from "../../customHooks/fetchData";

export default function Event() {
  const [view, setView] = useState("All");
  const currentDate = new Date();
  const { loading, data: events, error } = useFetchData("events");

  // Calculate filtered events even during loading to maintain layout
  const filteredEvents = loading
    ? [...Array(3)].map((_, index) => null) // Create array of 3 null items for skeleton loading
    : events && Array.isArray(events) // Check if events is not null and is an array
    ? events
        .filter((event) => {
          const eventDate = new Date(event.startDate);
          if (view === "Upcoming") return eventDate >= currentDate;
          if (view === "Past") return eventDate < currentDate;
          return true;
        })
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    : []; // Default to an empty array if events is null or not an array

  return (
    <div className="">
      <GradientBackground position="top" />
      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-[10%] pt-14">
        <div className="mx-auto max-w-5xl py-24 sm:py-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Discover Campus Events
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Find and join exciting events happening across your campus
            </p>

            {/* Search Bar - Mobile */}
            {/* <div className="mt-6 sm:hidden px-4">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events"
                    className="w-full p-3 pl-10 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => {
                    // Add your search logic here
                    console.log("Mobile search:", {
                      searchQuery,
                      selectedDate,
                    });
                  }}
                >
                  <Search className="h-5 w-5" />
                  <span>Search Events</span>
                </button>
              </div>
            </div> */}

            {/* Search Bar - Desktop */}
            {/* <div className="hidden sm:flex mt-10 items-center justify-center gap-4 px-4">
              <div className="relative flex-1 max-w-2xl">
                <div className="flex items-center bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="flex-1 flex items-center border-r border-gray-200">
                    <Search className="h-5 w-5 text-gray-400 ml-4" />
                    <input
                      type="text"
                      placeholder="Search events"
                      className="w-full p-4 focus:outline-none rounded-l-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Categories */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900">
            Events
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <FilterButton name="All" view={view} setView={setView} />
            <FilterButton name="Upcoming" view={view} setView={setView} />
            <FilterButton name="Past" view={view} setView={setView} />
          </div>
        </div>

        {/* Events Grid */}
        {error ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p>Error loading events: {error.message}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredEvents.length === 0 && !loading ? (
              <p>No events found</p>
            ) : (
              filteredEvents.map((event, index) => {
                const isRegistrationOpen = event
                  ? new Date(event.startDate) > currentDate
                  : false;
                return (
                  <EventCard
                    key={index}
                    event={event}
                    isRegistrationOpen={isRegistrationOpen}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
