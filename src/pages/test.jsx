import { useState } from "react";
import { Search, Calendar, Filter } from "lucide-react";
import Header from "../components/common/Header";

const EventsListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample events data
  const sampleEvents = [
    {
      id: 1,
      title: "Tech Workshop",
      date: "Oct 02",
      image: "/api/placeholder/600/400",
      price: "₹20 Onwards",
      category: "upcoming",
      clubName: "Tech Club",
    },
    {
      id: 1,
      title: "Tech Workshop",
      date: "Oct 02",
      image: "/api/placeholder/600/400",
      price: "₹20 Onwards",
      category: "upcoming",
      clubName: "Tech Club",
    },
    {
      id: 1,
      title: "Tech Workshop",
      date: "Oct 02",
      image: "/api/placeholder/600/400",
      price: "₹20 Onwards",
      category: "upcoming",
      clubName: "Tech Club",
    },
    {
      id: 1,
      title: "Tech Workshop",
      date: "Oct 02",
      image: "/api/placeholder/600/400",
      price: "₹20 Onwards",
      category: "upcoming",
      clubName: "Tech Club",
    },
    {
      id: 2,
      title: "Photography Session",
      date: "Aug 09",
      image: "/api/placeholder/600/400",
      price: "₹10 Onwards",
      category: "upcoming",
      clubName: "Photography Club",
    },
  ];

  const categories = ["Upcoming", "Ongoing", "This week"];

  return (
    <div class="relative left-[calc(50%-16rem)] aspect-[1155/678] w-[60.125rem] -translate-x-1/2 rotate-[0deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
      hi
    </div>
  );
};

export default EventsListing;
