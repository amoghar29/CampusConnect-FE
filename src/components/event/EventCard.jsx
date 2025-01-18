import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";
export default function EventCard({ event, isRegistrationOpen }) {
  function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  if (!event) {
    return (
      <div className="group relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden animate-pulse">
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gray-200" />
        <div className="p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          className="h-full w-full sm:h-360 sm:w-360 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {event.startDate ? formatDateToDDMMYYYY(event.startDate) : "Date"}
        </div>
        {event.registrationFee && (
          <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            <p className="text-md text-white flex items-baseline">
              <span className="flex items-center">
                <IndianRupee className="w-3 h-3" />
                {event.registrationFee}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          <span className="text-gray-700 font-medium">Hosted by :</span>{" "}
          {event.hostingClubName}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="text-gray-700 font-medium">Location:</span>{" "}
          {event.location}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="text-gray-700 font-medium">Start Time:</span>{" "}
          {event.startTime}
        </p>

        <Link
          to={event.formLink}
          className={`mt-4 block text-center py-2 px-4 rounded-lg transition duration-300 ${
            isRegistrationOpen
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!isRegistrationOpen}
        >
          {isRegistrationOpen ? "View Event" : "Registration Closed"}
        </Link>
      </div>
    </div>
  );
}
