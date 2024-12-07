import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "../event/EventCard";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Tech Workshop",
      date: "2024-10-02",
      image: "/api/placeholder/600/400",
      price: "₹20",
      clubName: "Tech Club",
    },
    {
      id: 2,
      title: "Photography Session",
      date: "2024-08-09",
      image: "/api/placeholder/600/400",
      price: "₹10",
      clubName: "Photography Club",
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2024-09-15",
      image: "/api/placeholder/600/400",
      price: "Free",
      clubName: "Art Club",
    },
    {
      id: 4,
      title: "Coding Bootcamp",
      date: "2024-11-05",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Coding Club",
    },
    {
      id: 5,
      title: "Music Fest",
      date: "2024-12-12",
      image: "/api/placeholder/600/400",
      price: "₹30",
      clubName: "Music Club",
    },
    {
      id: 6,
      title: "Dance Workshop",
      date: "2025-01-20",
      image: "/api/placeholder/600/400",
      price: "₹15",
      clubName: "Dance Club",
    },
    {
      id: 7,
      title: "Science Fair",
      date: "2025-02-10",
      image: "/api/placeholder/600/400",
      price: "Free",
      clubName: "Science Club",
    },
    {
      id: 8,
      title: "Literature Meet",
      date: "2025-03-18",
      image: "/api/placeholder/600/400",
      price: "₹25",
      clubName: "Literature Club",
    },
    {
      id: 9,
      title: "Robotics Challenge",
      date: "2025-04-22",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Robotics Club",
    },
    {
      id: 10,
      title: "Cooking Class",
      date: "2025-05-30",
      image: "/api/placeholder/600/400",
      price: "₹35",
      clubName: "Culinary Club",
    },
    // New events (future)
    {
      id: 11,
      title: "AI & ML Seminar",
      date: "2025-01-10",
      image: "/api/placeholder/600/400",
      price: "₹60",
      clubName: "AI Club",
    },
    {
      id: 12,
      title: "Sculpture Workshop",
      date: "2025-02-03",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Sculpture Club",
    },
    {
      id: 13,
      title: "Cultural Fest",
      date: "2025-03-05",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Cultural Club",
    },
    {
      id: 14,
      title: "Astronomy Night",
      date: "2025-03-12",
      image: "/api/placeholder/600/400",
      price: "₹20",
      clubName: "Astronomy Club",
    },
    {
      id: 15,
      title: "Poetry Reading",
      date: "2025-02-17",
      image: "/api/placeholder/600/400",
      price: "₹15",
      clubName: "Poetry Club",
    },
    {
      id: 16,
      title: "Startup Pitching Event",
      date: "2025-01-25",
      image: "/api/placeholder/600/400",
      price: "₹100",
      clubName: "Entrepreneurship Club",
    },
    {
      id: 17,
      title: "Yoga Retreat",
      date: "2025-02-21",
      image: "/api/placeholder/600/400",
      price: "₹40",
      clubName: "Wellness Club",
    },
    {
      id: 18,
      title: "Hackathon Weekend",
      date: "2025-02-15",
      image: "/api/placeholder/600/400",
      price: "₹50",
      clubName: "Hackathon Club",
    },
    {
      id: 19,
      title: "Film Screening & Discussion",
      date: "2025-03-10",
      image: "/api/placeholder/600/400",
      price: "₹30",
      clubName: "Film Club",
    },
    {
      id: 20,
      title: "Cooking Masterclass",
      date: "2025-01-30",
      image: "/api/placeholder/600/400",
      price: "₹45",
      clubName: "Gourmet Club",
    },
    {
      id: 21,
      title: "Social Media Marketing Workshop",
      date: "2025-02-28",
      image: "/api/placeholder/600/400",
      price: "₹70",
      clubName: "Marketing Club",
    },
    {
      id: 22,
      title: "Graphic Design Session",
      date: "2025-03-03",
      image: "/api/placeholder/600/400",
      price: "₹25",
      clubName: "Design Club",
    },
  ];
  const currentDate = new Date();

  // Only show first 6 events
  const UpcomingEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= currentDate;
    })
    .slice(0, 3)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="py-16 px-4  bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>
            <p className="text-gray-600">
              Don't miss out on these exciting upcoming events
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
