import { useState } from "react";
import axios from "axios";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  MapPin,
  FileText,
  Users,
  PenTool,
  IndianRupee,
  ChevronRight,
  Calendar,
} from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";
import Loading from "../../components/common/Loading";
import ImageUploader from "../../components/form/ImageUpload";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    title: "",
    startDate: "",
    startTime: "",
    location: "",
    description: "",
    eligibility: "",
    registrationFee: "",
    teamSize: "",
    banner: null,
    formLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      
      Object.keys(eventData).forEach((key) => {
        if (key !== 'banner' && eventData[key]) {
          formData.append(key, eventData[key]);
        }
      });

      if (eventData.banner) {
        formData.append('banner', eventData.banner);
      }

      const response = await axios.post(
        `${BACKEND_URL}/admin/post-event`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmittedSuccess(true);
      } else {
        throw new Error("Failed to create event");
      }
    } catch (error) {
      setSubmittedFailure(true);
    } finally {
      setLoading(false);
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
        handleTryAgain={() => setSubmittedFailure(false)}
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
        {/* Event Information Section */}
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
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Date"
              type="date"
              name="startDate"
              value={eventData.startDate}
              onChange={handleChange}
              icon={Calendar}
              required
            />

            <FormInput
              label="Time"
              type="time"
              name="startTime"
              value={eventData.startTime}
              onChange={handleChange}
              icon={Calendar}
              required
            />
          </div>

          <FormInput
            label="Event Location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Offline location or virtual link"
            icon={MapPin}
            required
          />

          <FormTextArea
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Add event description"
            required
          />
        </div>

        {/* Image Upload Section */}
        <ImageUploader
          title="Event Banner"
          value={null}
          onChange={(file) => {
            setEventData((prev) => ({
              ...prev,
              banner: file  
            }));
          }}
          maxSize={2 * 1024 * 1024}
        />

        {/* Event Options Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Users className="h-4 w-4 text-indigo-500" />
            <h3>Event Options</h3>
          </div>

          <FormInput
            label="Registration Form Link"
            name="formLink"
            value={eventData.formLink}
            onChange={handleChange}
            placeholder="Enter registration form link"
            icon={ChevronRight}
          />

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
              icon={IndianRupee}
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