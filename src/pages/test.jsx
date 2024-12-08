import { useState } from 'react';
import { Search, Calendar, Filter } from 'lucide-react';
import Header from '../components/common/Header';

const EventsListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample events data
  const sampleEvents = [
    {
      id: 1,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    }, {
      id: 1,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    }, {
      id: 1,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    }, {
      id: 1,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    },
    {
      id: 2,
      title: 'Photography Session',
      date: 'Aug 09',
      image: '/api/placeholder/600/400',
      price: '₹10 Onwards',
      category: 'upcoming',
      clubName: 'Photography Club'
    }
  ];

  const categories = ['Upcoming', 'Ongoing', 'This week'];

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-[10%] pt-14">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-5xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Discover Campus Events
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600 px-4">
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
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      className="w-full p-3 pl-10 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="p-3 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50"
                  >
                    <Filter className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                {/* Mobile Search Button */}
                <button 
                  className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => {
                    // Add your search logic here
                    console.log('Mobile search:', { searchQuery, selectedDate });
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
                  <div className="flex items-center px-4">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      className="p-4 focus:outline-none rounded-r-lg"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Popular Events</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filters (if needed) */}
        {showFilters && (
          <div className="sm:hidden mb-6 p-4 bg-gray-50 rounded-lg">
            {/* Add your filter options here */}
          </div>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sampleEvents.map((event) => (
            <div 
              key={event.id} 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {event.date}
                </div>
                <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {event.price}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">Hosted by {event.clubName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};

export default EventsListing;