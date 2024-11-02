import { useState } from 'react';
import Header from '../components/Header';
import { Search, Trophy, Users, Calendar } from 'lucide-react';

export default function Winners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // Sample winners data
  const winners = [
    {
      id: 1,
      eventName: "Tech Week Hackathon 2024",
      date: "March 15, 2024",
      club: "Tech Club",
      category: "Technical",
      image: "/api/placeholder/400/300",
      winners: [
        { position: 1, team: "Code Warriors", members: ["John Doe", "Jane Smith"], prize: "₹20,000" },
        { position: 2, team: "Binary Builders", members: ["Alex Johnson", "Sam Wilson"], prize: "₹15,000" },
        { position: 3, team: "Tech Titans", members: ["Emma Davis", "Chris Brown"], prize: "₹10,000" }
      ]
    },
    {
      id: 2,
      eventName: "Photography Contest",
      date: "February 28, 2024",
      club: "Photography Club",
      category: "Cultural",
      image: "/api/placeholder/400/300",
      winners: [
        { position: 1, team: "Nature's Lens", members: ["Mike Ross"], prize: "₹10,000" },
        { position: 2, team: "Urban Captures", members: ["Rachel Green"], prize: "₹7,000" },
        { position: 3, team: "Light Chasers", members: ["Joey Tribbiani"], prize: "₹5,000" }
      ]
    }
  ];

  const years = ['2024', '2023', '2022'];
  const categories = ['All', 'Technical', 'Cultural', 'Sports'];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl py-32 sm:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hall of Fame
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Celebrating excellence and achievement across campus events
            </p>

            {/* Search and Filter Section */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events or winners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full sm:w-auto rounded-lg border border-gray-200 bg-white py-4 px-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                {years.map(year => (
                  <option key={year} value={year}>Year {year}</option>
                ))}
              </select>
            </div>

            {/* Category Filters */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-8">
          {winners.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Event Header */}
              <div className="relative h-48 sm:h-64">
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5" />
                    <span className="text-sm font-medium">{event.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{event.eventName}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.club}
                    </span>
                  </div>
                </div>
              </div>

              {/* Winners List */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.winners.map((winner) => (
                    <div 
                      key={winner.position} 
                      className="relative bg-gray-50 rounded-lg p-6 border border-gray-100"
                    >
                      {/* Position Badge */}
                      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        winner.position === 1 ? 'bg-yellow-500' :
                        winner.position === 2 ? 'bg-gray-400' :
                        'bg-orange-500'
                      }`}>
                        {winner.position === 1 ? '1st Place' :
                         winner.position === 2 ? '2nd Place' :
                         '3rd Place'}
                      </div>

                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-gray-900">{winner.team}</h4>
                        <div className="mt-2 space-y-1">
                          {winner.members.map((member, index) => (
                            <p key={index} className="text-sm text-gray-600">{member}</p>
                          ))}
                        </div>
                        <div className="mt-4 text-indigo-600 font-semibold">
                          Prize: {winner.prize}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}