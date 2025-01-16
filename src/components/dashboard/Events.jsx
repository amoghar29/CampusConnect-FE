import { Edit2, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useFetchData from "../../customHooks/fetchData";
import Loading from "../common/Loading";
import { FailureCard } from "../common/FailureCard";
import { SuccessCard } from "../common/SuccessCard";
import axios from "axios";
import { useState } from "react";
const backendUrl = "http://localhost:4000";
const EventCard = ({ event, handleDelete }) => {
  const navigate = useNavigate();
  const handleEdit = (eventId) => {
    navigate(`/admin/events/${eventId}`);
  };
  function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  return (
    <div className="bg-white rounded-lg border border-indigo-500  p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Event Date:</span>{" "}
              {formatDateToDDMMYYYY(event.startDate)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleEdit(event._id)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          <Edit2 className="h-4 w-4" />
          Edit
        </button>
        <button
          onClick={() => handleDelete(event._id)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default function EventsSection() {
  const [deleteEventStatus, setDeleteEventStatus] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const {
    loading,
    data: events = [],
    error,
  } = useFetchData("admin/events", refreshTrigger);
  const currentdate = new Date();

  const upcomingEvents = events
    ? events.filter((event) => new Date(event.startDate) >= currentdate)
    : [];
  const pastEvents = Array.isArray(events)
    ? events.filter((event) => new Date(event.startDate) < currentdate)
    : [];

  const handleDelete = async (eventId) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/admin/events/${eventId}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setDeleteEventStatus(true);
      }
    } catch (error) {
      setDeleteEventStatus(false);
    }
  };
  const resetDeleteStatus = () => {
    setRefreshTrigger(!refreshTrigger);
    setDeleteEventStatus(null);
  };

  if (loading) return <Loading message="Fetching events..." />;
  if (deleteEventStatus === true)
    return (
      <SuccessCard
        message={"Event deleted successfully"}
        buttonValue={"events"}
        redirect={"/explore-events"}
      />
    );
  if (deleteEventStatus === false)
    return (
      <FailureCard
        message={"Failed to delete events"}
        buttonValue={"events"}
        handleTryAgain={resetDeleteStatus}
      />
    );
  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">List of all events</h2>
        <Link
          to="/admin/post-event"
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
              key={event._id}
              event={event}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h3 className="text-lg font-medium mb-4">Past Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <EventCard key={event._id} event={event} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
