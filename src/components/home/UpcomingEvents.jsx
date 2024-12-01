import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "../event/EventCard";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    },
    {
      id: 2,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    },
    {
      id: 3,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    },
    {
      id: 4,
      title: 'Tech Workshop',
      date: 'Oct 02',
      image: '/api/placeholder/600/400',
      price: '₹20 Onwards',
      category: 'upcoming',
      clubName: 'Tech Club'
    },
    {
      id: 5,
      title: 'Photography Session',
      date: 'Aug 09',
      image: '/api/placeholder/600/400',
      price: '₹10 Onwards',
      category: 'upcoming',
      clubName: 'Photography Club'
    }
  ];

  // Only show first 6 events
  const displayEvents = events.slice(0, 6);

  return (
    <section className="py-16 px-4  bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600">Don't miss out on these exciting upcoming events</p>
          </div>
          <Link to="/explore-events" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
            View all events 
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
} 