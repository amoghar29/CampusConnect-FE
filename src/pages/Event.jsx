import { useState,useEffect } from "react";
import { Search,} from "lucide-react";
import GradientBackground from "../components/common/GradientBackground";
import EventCard from "../components/event/EventCard";

export default function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tech Workshop",
      date: "Oct 02",
      image: "/api/placeholder/600/400",
      price: "₹20 Onwards",
      category: "Upcoming",
      clubName: "Tech Club",
    },
    {
      id: 2,
      title: "Photography Session",
      date: "Aug 09",
      image: "/api/placeholder/600/400",
      price: "₹10 Onwards",
      category: "Upcoming",
      clubName: "Photography Club",
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "Sep 15",
      image: "/api/placeholder/600/400",
      price: "Free",
      category: "Past",
      clubName: "Art Club",
    },
    {
      id: 4,
      title: "Coding Bootcamp",
      date: "Nov 05",
      image: "/api/placeholder/600/400",
      price: "₹50 Onwards",
      category: "Upcoming",
      clubName: "Coding Club",
    },
    {
      id: 5,
      title: "Music Fest",
      date: "Dec 12",
      image: "/api/placeholder/600/400",
      price: "₹30 Onwards",
      category: "Upcoming",
      clubName: "Music Club",
    },
    {
      id: 6,
      title: "Dance Workshop",
      date: "Jan 20",
      image: "/api/placeholder/600/400",
      price: "₹15 Onwards",
      category: "Past",
      clubName: "Dance Club",
    },
    {
      id: 7,
      title: "Science Fair",
      date: "Feb 10",
      image: "/api/placeholder/600/400",
      price: "Free",
      category: "Upcoming",
      clubName: "Science Club",
    },
    {
      id: 8,
      title: "Literature Meet",
      date: "Mar 18",
      image: "/api/placeholder/600/400",
      price: "₹25 Onwards",
      category: "Upcoming",
      clubName: "Literature Club",
    },
    {
      id: 9,
      title: "Robotics Challenge",
      date: "Apr 22",
      image: "/api/placeholder/600/400",
      price: "₹40 Onwards",
      category: "Upcoming",
      clubName: "Robotics Club",
    },
    {
      id: 10,
      title: "Cooking Class",
      date: "May 30",
      image: "/api/placeholder/600/400",
      price: "₹35 Onwards",
      category: "Upcoming",
      clubName: "Culinary Club",
    },
  ];

  const categories = ["Upcoming", "Past"];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-[10%] pt-14">
        <GradientBackground position="top" />
        <div className="mx-auto max-w-5xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Discover Campus Events
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Find and join exciting events happening across your campus
            </p>

            {/* Search Bar - Mobile */}
            <div className="mt-6 sm:hidden px-4">
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
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden sm:flex mt-10 items-center justify-center gap-4 px-4">
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
            </div>
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
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-1.5 rounded-full text-md font-medium bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <GradientBackground position="bottom"/>
    </div>
  );
}
