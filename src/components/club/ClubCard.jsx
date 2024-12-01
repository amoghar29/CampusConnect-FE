import {  Users, Calendar, Mail, MapPin } from "lucide-react";

const ClubCard = ({ club }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden">
      {/* Club Header */}
      <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-t-xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex items-center gap-4">
          <img
            src={club.logo}
            alt={`${club.name} logo`}
            className="h-16 w-16 rounded-lg bg-white object-cover p-2"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              {club.name}
            </h3>
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
          <h4 className="font-semibold text-gray-900">
            Achievements
          </h4>
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
  );
};

export default ClubCard;
