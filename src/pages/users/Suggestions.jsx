import { useState } from 'react';
import { Send, Calendar, Users, Clock } from 'lucide-react';

export default function Suggestions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clubName: '',
    eventTitle: '',
    eventDescription: '',
    expectedParticipants: '',
    preferredDuration: '',
    additionalNotes: '',
    branch: '',
    department: '',
    timeDuration: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const clubs = [
    { id: 1, name: 'Tech Club' },
    { id: 2, name: 'Cultural Club' },
    { id: 3, name: 'Sports Club' },
    { id: 4, name: 'Photography Club' },
    { id: 5, name: 'Literary Club' },
    { id: 6, name: 'Music Club' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        clubName: '',
        eventTitle: '',
        eventDescription: '',
        expectedParticipants: '',
        preferredDuration: '',
        additionalNotes: '',
        branch: '',
        department: '',
        timeDuration: '',
      });
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Background Gradient */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-3xl sm:py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Suggest an Event
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have an exciting event idea? Share it with us and let's make it
              happen together!
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative px-6 pb-24 lg:px-8">
        {submitted && (
          <div className="absolute top-0 left-0 right-0 bg-indigo-50 text-indigo-700 p-4 rounded-md mx-auto max-w-3xl mb-6">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <p className="text-sm font-medium">
                Your event suggestion has been submitted successfully!
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl space-y-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          {/* Personal Details */}
          <div className="border-b border-gray-200 pb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="clubName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Club
                </label>
                <select
                  name="clubName"
                  id="clubName"
                  required
                  value={formData.clubName}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select a club</option>
                  {clubs.map((club) => (
                    <option key={club.id} value={club.name}>
                      {club.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Event Details
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="eventTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Title
                </label>
                <input
                  type="text"
                  name="eventTitle"
                  id="eventTitle"
                  required
                  value={formData.eventTitle}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Description
                </label>
                <textarea
                  name="eventDescription"
                  id="eventDescription"
                  required
                  rows={4}
                  value={formData.eventDescription}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Please describe your event idea in detail..."
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="expectedParticipants"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expected Participants
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      name="expectedParticipants"
                      id="expectedParticipants"
                      value={formData.expectedParticipants}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="timeDuration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Duration (hours)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      name="timeDuration"
                      id="timeDuration"
                      required
                      value={formData.timeDuration}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  id="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Send className="h-5 w-5 mr-2" />
              <span className="text-base font-semibold">Submit Suggestion</span>
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}
