export default function EventCard({ event, isRegistrationOpen }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          className="h-full w-full sm:h-360 sm:w-360 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {new Date(event.date).toLocaleDateString()}
        </div>
        {event.registrationFee && (
          <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {event.registrationFee}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">Hosted by {event.clubName}</p>
        <p className="text-sm text-gray-500 mt-1">Location: {event.location}</p>
        <p className="text-sm text-gray-500 mt-1">
          Start Time: {event.startTime}
        </p>

        {/* Register Now Button for Upcoming Events */}
        <button
          className={`mt-4 w-full py-2 rounded-lg transition duration-300 ${
            isRegistrationOpen
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!isRegistrationOpen}
        >
          {isRegistrationOpen ? "View Event" : "Registration Closed"}
        </button>
      </div>
    </div>
  );
}
