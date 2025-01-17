import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  MapPin,
  FileText,
  Users,
  X,  
  PenTool,
  Coins,
  Image as ImageIcon,
  ChevronRight,
  Calendar,
  Trophy,
} from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";
import Loading from "../../components/common/Loading";
import useSubmitForm from "../../customHooks/submitForm";
import useFetchData from "../../customHooks/fetchData";

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
  const [bannerPreview, setBannerPreview] = useState(null);
  const [eventImagePreview, setEventImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
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

      if (fetchedEventData.bannerUrl) {
        setBannerPreview(fetchedEventData.bannerUrl);
      }
      if (fetchedEventData.eventImageUrl) {
        setEventImagePreview(fetchedEventData.eventImageUrl);
      }
    }
  }, [fetchedEventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageType === "banner") {
          setBannerPreview(reader.result);
          setEventData((prev) => ({ ...prev, banner: file }));
        } else {
          setEventImagePreview(reader.result);
          setEventData((prev) => ({ ...prev, eventImage: file }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e, imageType) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageType === "banner") {
          setBannerPreview(reader.result);
          setEventData((prev) => ({ ...prev, banner: file }));
        } else {
          setEventImagePreview(reader.result);
          setEventData((prev) => ({ ...prev, eventImage: file }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (imageType) => {
    if (imageType === "banner") {
      setBannerPreview(null);
      setEventData((prev) => ({ ...prev, banner: null }));
    } else {
      setEventImagePreview(null);
      setEventData((prev) => ({ ...prev, eventImage: null }));
    }
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

      console.log("Response:", result);

      if (result && result.status === 200) {
        fetchEventData();
        setSubmittedSuccess(true);
      } else {
        setSubmittedFailure(true);
      }
    } catch (error) {
      console.error("Error updating event:", error);
      setSubmittedFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading || fetching || submitting) {
    return <Loading message={"Loading Event Data..."} loading={loading} />;
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

  const ImageUploadSection = ({ type, preview, handleDrop }) => (
    <div className="mb-8">
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-all
          ${
            dragActive
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300 hover:border-indigo-400"
          }`}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDrop={(e) => handleDrop(e, type)}
      >
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt={`${type} Preview`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeImage(type)}
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
                <span>
                  Upload {type === "banner" ? "event banner" : "event image"}
                </span>
                <input
                  type="file"
                  className="sr-only"
                  onChange={(e) => handleImageChange(e, type)}
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
  );

  return (
    <FormContainer title="Edit Event" subtitle="Update your event details">
      <GradientBackground position="top" />
      <form onSubmit={handleSubmit} className="space-y-6">
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

        {/* Prize Information */}
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

        {/* Image Upload Sections */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <ImageIcon className="h-4 w-4 text-indigo-500" />
            <h3>Event Banner</h3>
          </div>
          <ImageUploadSection
            type="banner"
            preview={bannerPreview}
            handleChange={handleImageChange}
            handleDrop={handleDrop}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <ImageIcon className="h-4 w-4 text-indigo-500" />
            <h3>Event Image</h3>
          </div>
          <ImageUploadSection
            type="eventImage"
            preview={eventImagePreview}
            handleChange={handleImageChange}
            handleDrop={handleDrop}
          />
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
