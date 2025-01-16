import { Trophy, Users, Calendar } from 'lucide-react';

// Place component for showing winner positions
const PlaceCard = ({ place, winner }) => {
  const placeColors = {
    '1st': 'bg-yellow-500',
    '2nd': 'bg-gray-400',
    '3rd': 'bg-orange-500'
  };

  return (
    <div className="relative bg-gray-50 rounded-lg p-6 border border-gray-100">
      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-white text-sm font-semibold ${placeColors[place]}`}>
        {place} Place
      </div>
      <div className="mt-4">
        <h4 className="font-medium text-gray-900">{winner}</h4>
      </div>
    </div>
  );
};

const WinnerCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Event Header */}
      <div className="relative h-48 sm:h-64">
        <img
          src={event.eventImage}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="h-5 w-5" />
            <span className="text-sm font-medium">{event.category}</span>
          </div>
          <h3 className="text-2xl font-bold">{event.title}</h3>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {event.startDate}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {event.clubName}
            </span>
          </div>
        </div>
      </div>
      {/* Winners List */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {event.firstPlace && (
            <PlaceCard 
              place="1st"
              winner={event.firstPlace}
            />
          )}
          {event.secondPlace && (
            <PlaceCard 
              place="2nd"
              winner={event.secondPlace}
            />
          )}
          {event.thirdPlace && (
            <PlaceCard 
              place="3rd"
              winner={event.thirdPlace}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;