import { useState } from 'react';
import Header from '../components/Header';
import { Search, Trophy, Users, Calendar } from 'lucide-react';
import WinnerCard from '../components/winners/WinnerCard';
import GradientBackground from '../components/common/GradientBackground';

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
          <GradientBackground/>
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
            <WinnerCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}