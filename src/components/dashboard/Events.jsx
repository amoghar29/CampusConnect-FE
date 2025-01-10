// EventCard.js
import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
function EventCard({ event, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{event.date}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(event)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          <Edit2 className="h-4 w-4" />
          Edit
        </button>
        <button
          onClick={() => onDelete(event.id)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  );
}

// EventsSection.js
export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Tech Symposium 2025",
      date: "2025-02-15",
      status: "active",
    },
    { id: 2, title: "Cultural Fest", date: "2025-03-01", status: "upcoming" },
    {
      id: 3,
      title: "Coding Competition",
      date: "2025-01-20",
      status: "completed",
    },
  ];
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "completed");

  const handleEdit = (event) => {
    // Handle edit logic
    console.log("Editing event:", event);
  };

  const handleDelete = (eventId) => {
    // Handle delete logic
    console.log("Deleting event:", eventId);
  };

  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">List of all events</h2>
        <Link
          to={"/admin/post-event"}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Create New Event
        </Link>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h3 className="text-lg font-medium mb-4">Past Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
