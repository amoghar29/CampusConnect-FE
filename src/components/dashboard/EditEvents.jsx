import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  MapPin,
  FileText,
  Users,
  IndianRupee,
  PenTool,
  ChevronRight,
  Calendar,
  Trophy,
} from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";
import SkeletonLoader from "../../components/common/SkeletonLoader";
import useSubmitForm from "../../customHooks/submitForm";
import useFetchData from "../../customHooks/fetchData";
import ImageUploader from "../../components/form/ImageUpload";

const EditEventForm = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({
    title: "",
    clubName: "",
    startDate: "",
    startTime: "",
    location: "",
    description: "",
    eligibility: "",
    registrationFee: "",
    teamSize: "",
    banner: null,
    firstPlace: "",
    secondPlace: "",
    thirdPlace: "",
    eventImage: null,
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const { loading: submitting, submitForm } = useSubmitForm();
  const {
    loading: fetching,
    data: fetchedEventData,
    refetch: fetchEventData,
  } = useFetchData(`events/${eventId}`, submittedSuccess);

  useEffect(() => {
    if (fetchedEventData) {
      setEventData({
        ...fetchedEventData,
        startDate: fetchedEventData.startDate
          ? new Date(fetchedEventData.startDate).toISOString().split("T")[0]
          : "",
        startTime: fetchedEventData.startTime || "",
        banner: fetchedEventData.banner,
        eventImage: fetchedEventData.eventImage,
      });
    }
  }, [fetchedEventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(eventData).forEach((key) => {
        if ((key === "banner" || key === "eventImage") && eventData[key]) {
          formData.append(key, eventData[key]);
        } else if (eventData[key]) {
          formData.append(key, eventData[key]);
        }
      });

      const result = await submitForm(
        "put",
        `admin/events/update-event/${eventId}`,
        formData
      );

      if (result && result.status === 200) {
        fetchEventData();
        setSubmittedSuccess(true);
      } else {
        setSubmittedFailure(true);
      }
    } catch (error) {
      setSubmittedFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading || fetching || submitting) {
    return <SkeletonLoader type="table" />;
  }

  if (submittedSuccess) {
    return (
      <SuccessCard
        title={"Success"}
        message={"Event updated successfully."}
        buttonValue={"Events"}
        redirect={"/admin/dashboard/events"}
      />
    );
  }

  if (submittedFailure) {
    return (
      <FailureCard
        title={"Failure"}
        message={"Failed to update event."}
        buttonValue={"Try Again"}
        handleTryAgain={() => setSubmittedFailure(false)}
      />
    );
  }

  return (
    <FormContainer title="Edit Event" subtitle="Update your event details">
      <GradientBackground position="top" />
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Trophy className="h-4 w-4 text-indigo-500" />
            <h3>Prize Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="First Place"
              name="firstPlace"
              value={eventData.firstPlace}
              onChange={handleChange}
              placeholder="First place prize"
              icon={Trophy}
            />

            <FormInput
              label="Second Place"
              name="secondPlace"
              value={eventData.secondPlace}
              onChange={handleChange}
              placeholder="Second place prize"
              icon={Trophy}
            />

            <FormInput
              label="Third Place"
              name="thirdPlace"
              value={eventData.thirdPlace}
              onChange={handleChange}
              placeholder="Third place prize"
              icon={Trophy}
            />
          </div>
        </div>

        <div className="space-y-4">
          <ImageUploader
            title="Event Banner"
            value={fetchedEventData?.banner}
            onChange={(file) => {
              setEventData((prev) => ({
                ...prev,
                banner: file,
              }));
            }}
            maxSize={2 * 1024 * 1024}
          />
        </div>

        <div className="space-y-4">
          <ImageUploader
            title="Event Image"
            value={fetchedEventData?.eventImage}
            onChange={(file) => {
              setEventData((prev) => ({
                ...prev,
                eventImage: file,
              }));
            }}
            maxSize={2 * 1024 * 1024}
          />
        </div>

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
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300"
          >
            Update Event
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default EditEventForm;
