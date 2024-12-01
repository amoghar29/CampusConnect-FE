import { Trophy, Users, Calendar } from 'lucide-react';

const WinnerCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
  );
};

export default WinnerCard;
