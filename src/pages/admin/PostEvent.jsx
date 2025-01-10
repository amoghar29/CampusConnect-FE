import { useState } from "react";
import axios from "axios";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  MapPin,
  FileText,
  Users,
  X,
  Building2,
  PenTool,
  Coins,
  Image as ImageIcon,
  ChevronRight,
  Calendar,
} from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";
import Loading from "../../components/common/Loading";
import useSubmitForm from "../../customHooks/submitForm";
const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    title: "",
    clubName: "",
    startDate: "",
    endTime: "",
    location: "",
    description: "",
    eligibility: "",
    registrationFee: "",
    teamSize: "",
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);

  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB");
        return;
      }
      setEventData((prev) => ({
        ...prev,
        banner: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setEventData((prev) => ({
        ...prev,
        banner: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setEventData((prev) => ({
      ...prev,
      banner: null,
    }));
  };

  const { submitForm, loading, error } = useSubmitForm();
  const handleEventSubmit = async (e) => {
    e.preventDefault();

    // Convert startDate to a Date object
    const formattedEventData = {
      ...eventData,
      startDate: new Date(eventData.startDate), // Convert to Date object
    };

    try {
      const response = await submitForm("admin/post-event", formattedEventData);
      if (response.status === 201) {
        setSubmittedSuccess(true);
      }
    } catch (err) {
      console.error("Event submission failed:", err);
      setSubmittedFailure(true);
    }
  };

  if (loading) {
    return <Loading message={"Submitting Form..."} loading={loading} />;
  }

  if (submittedSuccess) {
    return (
      <SuccessCard
        title={"Success"}
        message={`Event created successfully.`}
        buttonValue={"Events"}
        redirect={"/explore-events"}
      />
    );
  }
  if (submittedFailure) {
    return (
      <FailureCard
        title={"Failure"}
        message={"Failed to submit suggestion."}
        buttonValue={"Try Again"}
        redirect={"/admin/TechClub/post-event"}
      />
    );
  }

  return (
    <FormContainer
      title="Create New Event"
      subtitle="Fill in the details to create your event"
    >
      <GradientBackground position="top" />
      <form onSubmit={handleEventSubmit} className="space-y-6">
        {/* Event Info Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <FileText className="h-4 w-4 text-indigo-500" />
            <h3>Event Information</h3>
          </div>

          <FormInput
            label="Event Name"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Enter event name"
            icon={PenTool}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Hosting Club"
              name="clubName"
              value={eventData.clubName}
              onChange={handleChange}
              placeholder="Enter club name"
              icon={Building2}
            />

            <FormInput
              label="Date"
              type="date"
              name="startDate"
              value={eventData.startDate.split("T")[0] || ""}
              onChange={handleChange}
              icon={Calendar}
            />

            <FormInput
              label="Time"
              type="time"
              name="startTime"
              value={
                eventData.startTime ? eventData.startTime.split("T")[1] : ""
              }
              onChange={handleChange}
              icon={Calendar}
            />
          </div>

          <FormInput
            label="Event Location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Offline location or virtual link"
            icon={MapPin}
          />

          <FormTextArea
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Add event description"
          />
        </div>

        {/* Image Upload Section */}
        <div className="mb-8">
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 transition-all
              ${
                dragActive
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400"
              }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div className="text-center">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload event banner</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Event Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Users className="h-4 w-4 text-indigo-500" />
            <h3>Event Options</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="Eligibility"
              name="eligibility"
              value={eventData.eligibility}
              onChange={handleChange}
              placeholder="Specify eligibility"
              icon={Users}
            />

            <FormInput
              label="Registration Fee"
              name="registrationFee"
              value={eventData.registrationFee}
              onChange={handleChange}
              placeholder="Enter fee"
              icon={Coins}
            />

            <FormInput
              label="Team Size"
              name="teamSize"
              value={eventData.teamSize}
              onChange={handleChange}
              placeholder="Specify team size"
              icon={Users}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300"
          >
            Create Event
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default EventCreationForm;
