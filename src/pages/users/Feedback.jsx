import axios from "axios";
import { useState, useEffect } from "react";
import { Send, Smile, Frown, Meh } from "lucide-react";
import GradientBackground from "../../components/common/GradientBackground";
const BACKEND_URL = "https://campusconnect-be.onrender.com";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import Loading from "../../components/common/Loading";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [submitFeedbackSuccess, setSubmitFeedbackSuccess] = useState(false);
  const [submitFeedbackError, setSubmitFeedbackError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [hostingClub, setHostingClub] = useState("");

  const categories = [
    "Event Organization",
    "Website Experience",
    "Club Management",
    "Technical Issues",
    "Other",
  ];

  const moods = [
    { icon: Frown, label: "Unsatisfied", value: 1 },
    { icon: Meh, label: "Neutral", value: 3 },
    { icon: Smile, label: "Satisfied", value: 5 },
  ];

  const hostingClubs = ["Club A", "Club B", "Club C"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/feedback`, {
        rating,
        feedback,
        selectedCategory,
        eventTitle,
        hostingClub: hostingClub,
      });

      if (response.status === 201) {
        setSubmitFeedbackSuccess(true);
      }
    } catch (error) {
      setSubmitFeedbackError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setRating("");
    setFeedback("");
    setSelectedCategory("");
    setSubmitFeedbackError(false);
    setSubmitFeedbackSuccess(false);
  };

  if (loading) {
    return (
      <Loading
        message={"Submitting your valuable feedback"}
        loading={loading}
      />
    );
  }

  if (submitFeedbackSuccess) {
    return (
      <SuccessCard
        title={"Success"}
        message={"Feedback submitted successfully"}
        buttonValue={"Home page"}
        redirect={"/home"}
      />
    );
  }

  if (submitFeedbackError) {
    return (
      <FailureCard
        title={"Failure"}
        message={"Failed to submit feedback."}
        buttonValue={"Try Again"}
        redirect={"/feedback"}
        handleTryAgain={handleTryAgain}
      />
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <GradientBackground position="top" />

        <div className="mx-auto max-w-2xl py-32 sm:py-2">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Value Your Feedback
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Help us improve your campus experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Mood Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  How was your experience?
                </label>
                <div className="flex justify-center gap-8 flex-wrap">
                  {moods.map(({ icon: Icon, label, value }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                        rating === value
                          ? "bg-indigo-50 text-indigo-600 ring-2 ring-indigo-600"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mb-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  What would you like to give feedback about?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Title Input */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Event Title
                </label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-400 focus:border-indigo-600 focus:ring focus:ring-indigo-300/30 px-4 py-2.5"
                  placeholder="Enter the event title..."
                />
              </div>

              {/* Hosting Club Dropdown */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Hosting Club
                </label>
                <select
                  value={hostingClub}
                  onChange={(e) => setHostingClub(e.target.value)}
                  className="w-full rounded-lg border border-gray-400 focus:border-indigo-600 focus:ring focus:ring-indigo-300/30 px-4 py-2.5"
                >
                  <option value="">Select a club</option>
                  {hostingClubs.map((club) => (
                    <option key={club} value={club}>
                      {club}
                    </option>
                  ))}
                </select>
              </div>

              {/* Feedback Text */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tell us more about your experience
                </label>
                <textarea
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                  placeholder="Share your thoughts with us..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
                >
                  Submit Feedback
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}