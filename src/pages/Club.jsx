import { useState } from 'react';
import Header from '../components/Header';
import { Search, Users, Calendar, Mail,MapPin } from 'lucide-react';

export default function Club() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample clubs data
  const clubs = [
    {
      id: 1,
      name: 'Tech Club',
      logo: '/club-logos/tech.png', // Replace with actual logo paths
      description: 'Fostering innovation and technical excellence',
      category: 'Technical',
      memberCount: '120+',
      email: 'tech.club@college.edu',
      contact: '+91 98765 43210',
      location: 'Lab Complex, 2nd Floor',
      upcomingEvents: 3,
      achievements: ['Best Technical Club 2023', 'National Hackathon Winners'],
    },
    {
      id: 2,
      name: 'Photography Club',
      logo: '/club-logos/photo.png',
      description: 'Capturing moments, creating memories',
      category: 'Cultural',
      memberCount: '75+',
      email: 'photo.club@college.edu',
      contact: '+91 98765 43211',
      location: 'Arts Building, Room 105',
      upcomingEvents: 2,
      achievements: ['Best Cultural Club 2023', 'State Photography Contest Winners'],
    },
    // Add more clubs as needed
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl py-32 sm:py-40">
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
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="mx-auto max-w-7xl pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-purple-200 hover:scale-105"
              >
                {/* Club Header */}
                <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative flex items-center gap-4">
                    <img
                      src={club.logo}
                      alt={`${club.name} logo`}
                      className="h-16 w-16 rounded-lg bg-white object-cover p-2"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{club.name}</h3>
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white">
                        {club.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Club Info */}
                <div className="p-6">
                  <p className="text-gray-600">{club.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-5 w-5" />
                      <span>{club.memberCount} Members</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-5 w-5" />
                      <span>{club.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{club.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-5 w-5" />
                      <span>{club.upcomingEvents} Upcoming Events</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">Achievements</h4>
                    <ul className="mt-2 space-y-1">
                      {club.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button className="mt-6 w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
                    Join Club
                  </button>
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
    </div>
  );
}