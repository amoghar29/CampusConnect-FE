import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "../event/EventCard";
import useFetchData from "../../customHooks/fetchData";
export default function UpcomingEvents() {
  const { loading, data: events, error } = useFetchData("events");

  const currentDate = new Date();

  // Only show first 3 upcoming events if events is defined
  const UpcomingEvents = events
    ? events
        .filter((event) => event)
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort ascending (closest dates first)
        .slice(0, 3)
    : []; // Return an empty array if events is not defined

  return (
    <section className="py-8 px-4  bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Events
            </h2>
            <p className="text-gray-600">
              Don't miss out on these exciting  events
            </p>
          </div>
          <Link
            to="/explore-events"
            className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
          >
            View all events
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {UpcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} isRegistrationOpen={true} />
          ))}
        </div>
      </div>
      {/* View All Button inside the grey grid section */}
      <div className="mt-8 text-center">
        <Link
          to="/explore-events"
          className="rounded-md bg-indigo-600 px-16 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
