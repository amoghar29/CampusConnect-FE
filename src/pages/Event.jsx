import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import GradientBackground from "../components/common/GradientBackground";
import EventCard from "../components/event/EventCard";

export default function Event() {
  const [view, setView] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const currentDate = new Date();

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tech Workshop",
      date: "2024-10-02",
      image: "/api/placeholder/600/400",
      price: "₹20",
      clubName: "Tech Club",
    },
    {
      id: 2,
      title: "Photography Session",
      date: "2024-08-09",
      image: "/api/placeholder/600/400",
      price: "₹10",
      clubName: "Photography Club",
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2024-09-15",
      image: "/api/placeholder/600/400",
      price: "Free",
      clubName: "Art Club",
    },
    {
      id: 4,
      title: "Coding Bootcamp",
      date: "2024-11-05",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Coding Club",
    },
    {
      id: 5,
      title: "Music Fest",
      date: "2024-12-12",
      image: "/api/placeholder/600/400",
      price: "₹30",
      clubName: "Music Club",
    },
    {
      id: 6,
      title: "Dance Workshop",
      date: "2025-01-20",
      image: "/api/placeholder/600/400",
      price: "₹15",
      clubName: "Dance Club",
    },
    {
      id: 7,
      title: "Science Fair",
      date: "2025-02-10",
      image: "/api/placeholder/600/400",
      price: "Free",
      clubName: "Science Club",
    },
    {
      id: 8,
      title: "Literature Meet",
      date: "2025-03-18",
      image: "/api/placeholder/600/400",
      price: "₹25",
      clubName: "Literature Club",
    },
    {
      id: 9,
      title: "Robotics Challenge",
      date: "2025-04-22",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Robotics Club",
    },
    {
      id: 10,
      title: "Cooking Class",
      date: "2025-05-30",
      image: "/api/placeholder/600/400",
      price: "₹35",
      clubName: "Culinary Club",
    },
    // New events (future)
    {
      id: 11,
      title: "AI & ML Seminar",
      date: "2025-01-10",
      image: "/api/placeholder/600/400",
      price: "₹60",
      clubName: "AI Club",
    },
    {
      id: 12,
      title: "Sculpture Workshop",
      date: "2025-02-03",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Sculpture Club",
    },
    {
      id: 13,
      title: "Cultural Fest",
      date: "2025-03-05",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Cultural Club",
    },
    {
      id: 14,
      title: "Astronomy Night",
      date: "2025-03-12",
      image: "/api/placeholder/600/400",
      price: "₹20",
      clubName: "Astronomy Club",
    },
    {
      id: 15,
      title: "Poetry Reading",
      date: "2025-02-17",
      image: "/api/placeholder/600/400",
      price: "₹15",
      clubName: "Poetry Club",
    },
    {
      id: 16,
      title: "Startup Pitching Event",
      date: "2025-01-25",
      image: "/api/placeholder/600/400",
      price: "₹100",
      clubName: "Entrepreneurship Club",
    },
    {
      id: 17,
      title: "Yoga Retreat",
      date: "2025-02-21",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Wellness Club",
    },
    {
      id: 18,
      title: "Hackathon Weekend",
      date: "2025-02-15",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Hackathon Club",
    },
    {
      id: 19,
      title: "Film Screening & Discussion",
      date: "2025-03-10",
      image: "/api/placeholder/600/400",
      price: "₹30",
      clubName: "Film Club",
    },
    {
      id: 20,
      title: "Cooking Masterclass",
      date: "2025-01-30",
      image: "/api/placeholder/600/400",
      price: "₹45",
      clubName: "Gourmet Club",
    },
    {
      id: 21,
      title: "Social Media Marketing Workshop",
      date: "2025-02-28",
      image: "/api/placeholder/600/400",
      price: "₹70",
      clubName: "Marketing Club",
    },
    {
      id: 22,
      title: "Graphic Design Session",
      date: "2025-03-03",
      image: "/api/placeholder/600/400",
      price: "₹25",
      clubName: "Design Club",
    },
  ];
  
  
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    if (view === "upcoming") return eventDate >= currentDate;
    if (view === "past") return eventDate < currentDate;
    return true;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

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
            <button
            className={`px-4 py-1.5 rounded-full text-md font-medium ${view === "all" ? "bg-indigo-50 text-indigo-600 " : "bg-gray-100 text-gray-600"} transition-colors duration-300`}
            onClick={() => setView("all")}
            >
              {"All"}
            </button>

            <button
            className={`px-4 py-1.5 rounded-full text-md font-medium ${view === "upcoming" ? "bg-indigo-50 text-indigo-600 " : "bg-gray-100 text-gray-600"} transition-colors duration-300`}
            onClick={() => setView("upcoming")}
            >
              {"Upcoming"}
            </button>
            <button
            className={`px-4 py-1.5 rounded-full text-md font-medium ${view === "past" ? "bg-indigo-50 text-indigo-600 " : "bg-gray-100 text-gray-600"} transition-colors duration-300`}
            onClick={() => setView("past")}
            >
              {"Past"}
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredEvents.map((event) => {
            const isRegistrationOpen = new Date(event.date) > currentDate; // Determine if registration is open
            return(
            <EventCard
              key={event.id}
              event={event}
              isRegistrationOpen={isRegistrationOpen}
            />);
          })}
        </div>
      </div>
    </div>
  );
}
