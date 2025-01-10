import { useState } from "react";
import axios from "axios";
import { Send, Users, Clock } from "lucide-react";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import Loading from "../../components/common/Loading";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import FormSelect from "../../components/form/FormSelect";
import GradientBackground from "../../components/common/GradientBackground";
import useSubmitForm from "../../customHooks/submitForm";

const BACKEND_URL = "https://campusconnect-be.onrender.com";

export default function Suggestions() {
  const [formData, setFormData] = useState({
    userFullname: "",
    userEmail: "",
    userPhoneNumber: "",
    clubName: "",
    suggestedEventTitle: "",
    suggestedEventDescription: "",
    expectedHeadCount: "",
    expectedDuration: "",
    additionalNotes: "",
    branch: "",
    semester: "",
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);
  const { submitForm, loading } = useSubmitForm();
  const clubs = [
    { value: "Tech Club", label: "Tech Club" },
    { value: "Cultural Club", label: "Cultural Club" },
    { value: "Sports Club", label: "Sports Club" },
    { value: "Photography Club", label: "Photography Club" },
    { value: "Literary Club", label: "Literary Club" },
    { value: "Music Club", label: "Music Club" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly destructuring name
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Using name to update the correct field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitForm("suggestion", formData);
      if (response) {
        setSubmittedSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmittedFailure(true);
    }
  };

  const handleTryAgain = () => {
    setFormData({
      userFullname: "",
      userEmail: "",
      userPhoneNumber: "",
      clubName: "",
      suggestedEventTitle: "",
      suggestedEventDescription: "",
      expectedHeadCount: "",
      expectedDuration: "",
      additionalNotes: "",
      branch: "",
      semester: "",
    });
    setSubmittedFailure(false);
    setSubmittedSuccess(false);
  };

  if (loading)
    return (
      <Loading message="Submitting your suggestion ...." loading={loading} />
    );
  if (submittedSuccess)
    return (
      <SuccessCard
        title="Success"
        message="Suggestion submitted successfully"
        buttonValue="Home page"
        redirect="/home"
      />
    );
  if (submittedFailure)
    return (
      <FailureCard
        title="Failure"
        message="Failed to submit suggestion."
        buttonValue="Try Again"
        redirect="/suggestions"
        handleTryAgain={handleTryAgain}
      />
    );

  return (
    <FormContainer
      title="Suggest an Event"
      subtitle="Have an exciting event idea? Share it with us and let's make it happen together!"
    >
      <GradientBackground position="top" />

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Personal Details */}
        <div className="border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormInput
              label="Full Name"
              name="userFullname" // Ensure this matches the state
              value={formData.userFullname}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email Address"
              type="email"
              name="userEmail" // Ensure this matches the state
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Phone Number"
              type="tel"
              name="userPhoneNumber" // Ensure this matches the state
              value={formData.userPhoneNumber}
              onChange={handleChange}
            />
            <FormInput
              label="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Current Semester"
              type="number"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Event Details
          </h2>

          <FormSelect
            label="Select Club"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            options={clubs}
            required
          />

          <FormInput
            label="Event Title"
            name="suggestedEventTitle" // Ensure this matches the state
            value={formData.suggestedEventTitle}
            onChange={handleChange}
            required
          />

          <FormTextArea
            label="Event Description"
            name="suggestedEventDescription" // Ensure this matches the state
            value={formData.suggestedEventDescription}
            onChange={handleChange}
            required
            placeholder="Please describe your event idea in detail..."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormInput
              label="Expected Participants"
              type="number"
              name="expectedHeadCount" // Ensure this matches the state
              value={formData.expectedHeadCount}
              onChange={handleChange}
              icon={Users}
            />
            <FormInput
              label="Duration (hours)"
              type="number"
              name="expectedDuration" // Ensure this matches the state
              value={formData.expectedDuration}
              onChange={handleChange}
              required
              icon={Clock}
            />
          </div>

          <FormTextArea
            label="Additional Notes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any additional information you'd like to share..."
            rows={3}
          />
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
    </FormContainer>
  );
}
