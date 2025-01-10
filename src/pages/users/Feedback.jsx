import axios from "axios";
import { useState } from "react";
import { Send, Smile, Frown, Meh } from "lucide-react";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import Loading from "../../components/common/Loading";
import FormContainer from "../../components/form/FormContainer";
import FormTextArea from "../../components/form/FormTextArea";
import FormSelect from "../../components/form/FormSelect";
import FormInput from "../../components/form/FormInput";
import GradientBackground from "../../components/common/GradientBackground";
import useSubmitForm from "../../customHooks/submitForm";

const BACKEND_URL = "https://campusconnect-be.onrender.com";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [submitFeedbackSuccess, setSubmitFeedbackSuccess] = useState(false);
  const [submitFeedbackError, setSubmitFeedbackError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [hostingClub, setHostingClub] = useState("");
  const {
    submitForm,
    loading: customLoading,
    response,
    error,
  } = useSubmitForm();

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
      const response = await submitForm("feedback", {
        rating,
        feedback,
        selectedCategory,
        eventTitle,
        hostingClub,
      });
      if (response) {
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
    <FormContainer
      title="We Value Your Feedback"
      subtitle="Help us improve your campus experience"
    >
      <GradientBackground position="top" />
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
        <FormSelect
          label="What would you like to give feedback about?"
          name="selectedCategory"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
        />

        {/* Event Title Input */}
        <FormInput
          label="Event Title"
          name="eventTitle"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Enter the event title..."
        />

        {/* Hosting Club Dropdown */}
        <FormSelect
          label="Select Hosting Club"
          name="hostingClub"
          value={hostingClub}
          onChange={(e) => setHostingClub(e.target.value)}
          options={hostingClubs.map((club) => ({ value: club, label: club }))}
        />

        {/* Feedback Text */}
        <FormTextArea
          label="Tell us more about your experience"
          name="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your thoughts with us..."
        />

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
    </FormContainer>
  );
}
