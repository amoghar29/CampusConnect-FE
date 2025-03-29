import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import useFetchData from "../../customHooks/fetchData";
import axios from "axios";
import FormSelect from "../../components/form/FormSelect";

export default function ChatBot() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [name, setName] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubId, setClubId] = useState("");
  const [query, setQuery] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [event, setEvent] = useState("");
  const [success,setSuccess] = useState(false);

  const { data: clubs } = useFetchData("/clubs/allClubNames");
  const { data: events } = useFetchData("/events", clubName);

  console.log(clubs, events);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/chatbot`,
        {
          name,
          clubId,
          query,
          userEmail,
          phoneNumber,
          event,
        },
        { withCredentials: true }
      )
      .then((data) => {
        setSuccess(true);
        // Reset form after successful submission
        setName("");
        setClubName("");
        setQuery("");
        setUserEmail("");
        setPhoneNumber("");
        setEvent("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };
  if (success){
    return (
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-md mx-auto pl-8   ">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-sm sm:text-base">
              Club Support
            </h3>
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Thank you!</h2>
            <p>Your query has been submitted successfully.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md mx-auto pl-8 ">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors fixed bottom-4 right-4"
        >
          <Plus size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-sm sm:text-base">
              Club Support
            </h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="hover:text-gray-200 transition-colors"
            >
              <Minus size={16} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <FormSelect
                label="Select Club"
                name="clubName"
                value={clubName}
                onChange={(e) => {
                  setClubName(e.target.label);
                  setClubId(e.target.value);
                }}
                options={
                  clubs
                    ? clubs.map((club) => ({
                        value: club._id,
                        label: club.clubName,
                      }))
                    : []
                }
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Event
              </label>
              <input
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Event name or description"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Query
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows="3"
                className="w-full px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Describe your query or concern"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 text-xs sm:text-base rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
