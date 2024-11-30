import { useState } from "react";
import Header from "../components/Header";
import GradientBackground from "../components/common/GradientBackground";
import SearchBar from "../components/common/SearchBar";
import EventCard from "../components/eventComponents/EventCard";

export default function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Sample events data
  const sampleEvents = [
    /* ... your events data ... */
  ];

  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-4 sm:px-[10%] pt-14">
        <GradientBackground position="top" />

        <div className="mx-auto max-w-5xl py-24 sm:py-32">
          <Header/>

          <div className="mt-10 flex justify-center">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="mx-auto max-w-7xl pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <GradientBackground position="bottom" />
      </div>
    </div>
  );
}
