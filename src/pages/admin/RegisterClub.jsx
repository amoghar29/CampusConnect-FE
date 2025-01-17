import { useState } from "react";
import axios from "axios";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  Building2,
  Mail,
  Phone,
  Users,
  Trophy,
  Calendar,
  Image as ImageIcon,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
  X,
  DollarSign,
  } from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";

// import useSubmitForm from "../../customHooks/submitForm";

const RegisterClub = () => {
  const [clubData, setClubData] = useState({
    clubName: "",
    aboutUs: "",
    foundedYear: "",
    president: "",
    vicePresident: "",
    email: "",
    phoneNumber: "",
    socialMedia: {
      linkedIn: "",
      twitter: "",
      instagram: "",
    },
    membershipFee: "",
    achievements: [""],
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logoPreview, setLogoPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialMedia.")) {
      const social = name.split(".")[1];
      setClubData((prev) => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [social]: value,
        },
      }));
    } else {
      setClubData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAchievementChange = (index, value) => {
    setClubData((prev) => {
      const newAchievements = [...prev.achievements];
      newAchievements[index] = value;
      return { ...prev, achievements: newAchievements };
    });
  };

  const addAchievement = () => {
    setClubData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };

  const removeAchievement = (index) => {
    setClubData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }));
  };

  // Image handling functions similar to PostEvent.jsx
  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB");
        return;
      }
      setClubData((prev) => ({
        ...prev,
        logo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleLogoChange({ target: { files: [file] } });
  };

  const removeLogo = () => {
    setLogoPreview(null);
    setClubData((prev) => ({ ...prev, logo: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(clubData).forEach(([key, value]) => {
        if (key === "logo") {
          if (value) formData.append("logo", value);
        } else if (key === "socialMedia") {
          formData.append("socialMedia", JSON.stringify(value));
        } else if (key === "achievements") {
          formData.append(
            "achievements",
            JSON.stringify(value.filter((a) => a))
          );
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post(
        "http://localhost:4000/api/admin/register-club",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setSubmittedSuccess(true);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setSubmittedFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (submittedSuccess) {
    return (
      <SuccessCard
        title="Success"
        message="Club registered successfully"
        buttonValue="View Clubs"
        redirect="/clubs"
      />
    );
  }

  if (submittedFailure) {
    return (
      <FailureCard
        title="Failure"
        message="Failed to register club"
        buttonValue="Try Again"
        handleTryAgain={() => setSubmittedFailure(false)}
      />
    );
  }

  return (
    <FormContainer
      title="Register New Club"
      subtitle="Create a new club profile for your campus organization"
    >
      <GradientBackground position="top" />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Building2 className="h-4 w-4 text-indigo-500" />
            <h3>Basic Information</h3>
          </div>

          <FormInput
            label="Club Name"
            name="clubName"
            value={clubData.clubName}
            onChange={handleChange}
            placeholder="Enter club name"
            required
            icon={Building2}
          />

          <FormTextArea
            label="About Us"
            name="aboutUs"
            value={clubData.aboutUs}
            onChange={handleChange}
            placeholder="Describe your club"
            required
          />

          {/* Logo Upload Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Club Logo
            </label>
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
              {logoPreview ? (
                <div className="relative">
                  <img
                    src={logoPreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg mx-auto"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload logo</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleLogoChange}
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG up to 2MB
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>    

        {/* Leadership Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Users className="h-4 w-4 text-indigo-500" />
            <h3>Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="President"
              name="president"
              value={clubData.president}
              onChange={handleChange}
              placeholder="Club president name"
              icon={Users}
            />

            <FormInput
              label="Vice President"
              name="vicePresident"
              value={clubData.vicePresident}
              onChange={handleChange}
              placeholder="Club vice president name"
              icon={Users}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Mail className="h-4 w-4 text-indigo-500" />
            <h3>Contact Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={clubData.email}
              onChange={handleChange}
              placeholder="club@example.com"
              required
              icon={Mail}
            />

            <FormInput
              label="Phone Number"
              name="phoneNumber"
              value={clubData.phoneNumber}
              onChange={handleChange}
              placeholder="Contact number"
              icon={Phone}
            />
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="linkedIn"
              name="socialMedia.linkedIn"
              value={clubData.socialMedia.linkedIn}
              onChange={handleChange}
              placeholder="linkedIn URL"
              icon={Linkedin}
            />

            <FormInput
              label="Twitter"
              name="socialMedia.twitter"
              value={clubData.socialMedia.twitter}
              onChange={handleChange}
              placeholder="Twitter URL"
              icon={Twitter}
            />

            <FormInput
              label="Instagram"
              name="socialMedia.instagram"
              value={clubData.socialMedia.instagram}
              onChange={handleChange}
              placeholder="Instagram URL"
              icon={Instagram}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Trophy className="h-4 w-4 text-indigo-500" />
            <h3>Additional Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Founded Year"
              type="number"
              name="foundedYear"
              value={clubData.foundedYear}
              onChange={handleChange}
              placeholder="YYYY"
              icon={Calendar}
            />

            <FormInput
              label="Membership Fee"
              type="number"
              name="membershipFee"
              value={clubData.membershipFee}
              onChange={handleChange}
              placeholder="Enter amount"
              icon={DollarSign}
            />
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Achievements
            </label>
            {clubData.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) =>
                    handleAchievementChange(index, e.target.value)
                  }
                  placeholder="Enter achievement"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                />
                {clubData.achievements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAchievement(index)}
                    className="p-3 text-red-500 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addAchievement}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
            >
              + Add Achievement
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300"
          >
            {loading ? "Registering..." : "Register Club"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterClub;
